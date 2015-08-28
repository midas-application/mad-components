define(function (require, exports, module) {
    var util = require("../../mod/util");
    var cgi = require("../../mod/cgi");
    var Loading = require("../util/loading");
    var Mask = require("../util/mask");
    var Message = require("../util/message");
    var GameServer = require("./gameserver");
    var Enum = {
    	"SERVER":1,
    	"ZONE":0
    };
    var GAME_DATA = {};//game data cache
	var privateMethod = {
		genDom:function(obj){
			var html = String.format('<div class="tencent-payment-gamezone"><div id="fieldGroup-{ID}" class="form-horizontal field-group">'+
							'<div class="control-group"><label class="control-label">{txt}</label>'+
								'<div class="controls"><div id="targetUin-{ID}" class="detail-title">{val}</div></div>'+
							'</div></div>'+
						'</div>',obj);
			return html;
		},
		genSubDOM:function(obj){
			var html = String.format('<div class="control-group" data-action="show" data-level="{index}"><label class="control-label">{txt}</label>'+
								'<div class="controls"><div class="detail-title">{val}</div></div>'+
								'<div class="turn-right"><i class="icon-arrowr"></i></div></div>',obj);
			return html;
		},
		formatGameData:function(data){
            var result = [];
            var tmp = data[0];
            var hasServer = tmp && tmp['opt_data_array'] && tmp['opt_data_array'].length > 0;
            result.push({
            	txt:"所在大区",
            	data:[],
            	title:"选择大区",
            	status:true
            },{
            	txt:"服务器",
            	title:"选择服务器",
        		data:{},
        		status:hasServer
        	});
            util.fn.each(data, function(zone) {
                result[Enum.ZONE].data.push({
                    val: zone.v,
                    txt: zone.t,
                    status: zone.status
                });
                if (hasServer) {
                    result[Enum.SERVER].data[zone.v] = [];
                    util.fn.each(zone['opt_data_array'], function(server) {
                        result[Enum.SERVER].data[zone.v].push({
                            val: server.v,
                            txt: server.t,
                            status: server.status
                        });
                    });
                }
            });
            return result;
		}
	};
	var GameZone = function(container,options,callbacks){
		this.container = container||util.$("body");
        this.options = {
        	title:"QQ帐号",
        	gamezoneContainer:null
        };
        this.id = +new Date();
        this.zone = null;
        this.server = null;
        this.role = null;
        util.fn.extend(this.options,options);
        this.callbacks = {};
        util.fn.extend(this.callbacks,callbacks);
	};
	GameZone.prototype = {
		init:function(){
			this.service = new cgi({
	            appid: this.options.game.appid,
	            sessionObj: this.options.app.session,
	            sandbox: this.options.app.sandbox,
	            pf: 'vip_m-' + this.options.app.pf + '-html5',
	            pfkey: 'pfkey'
	        });
			this.container.innerHTML = privateMethod.genDom({
				ID:this.id,
				val:this.options.app.session.uin,
				txt:this.options.title
			});
			this._loadGameData()
			this._bindEvent();
		},
		rebind:function(options){
			util.fn.extend(this.options,options);
			this.container.innerHTML = privateMethod.genDom({
				ID:this.id,
				val:this.options.app.session.uin,
				txt:this.options.title
			});
			this._loadGameData();
		},
		_checkRole:function(zoneid, handler) {
            this.service.getGameRoleList({
                zoneid : zoneid
            }, function(res){
                if (res && res.ret == 0) {
                    var roles = [];
                    if (res.rolelist) {
                        var tmp = res.rolelist.split(/\|/g);
                        var tmp2 = res.roleidlist.split(/\|/g);
                        util.fn.each(tmp, function (name, id) {
                            if (name && tmp2[id]) {
                                roles.push({
                                    text: util.string.escHTML(name),
                                    value: tmp2[id]
                                });
                            }
                        });
                    }
                    handler(true, roles);
                } else if (res && res.ret == 1217){
                   	Message.show('您在此区无游戏角色！');
                    handler(false, null);
                } else{
                    Message.show('传输角色信息失败<br />请稍候');
                    handler(false, null);
                }
            },{
                domainq : true
            });
        },
		_bindEvent:function(){
			var self = this;
	        util.dom.on(this.container,"click",function(){
	        	var action = this.getAttribute("data-action");
	        	var index = parseInt(this.getAttribute("data-level"),10);
	        	self[action].call(self,index);
	        },null,"[data-action]");
		},
		genDOM:function(data,level){
			if(data.length>0&&data[level].status){
				util.$(String.format("#fieldGroup-{0}",this.id)).appendChild(util.dom.toDom(privateMethod.genSubDOM({
					txt:data[level].txt,
					index:level,
					val:String.format("请选择{0}",data[level].txt)
				})));
			}
		},
		setValue:function(level,value){
			var dom = util.$("[data-level='"+level+"'] .detail-title");
			if(dom) dom.innerHTML = value;
		},
		getValue:function(){
			return {
				zone:this.zone,
				server:this.server,
				role:this.role
			};
		},
		show:function(level){
			this.currentLevel = level;
			var sid = this.options.game.sid,data = GAME_DATA[sid],options={}
			options.title = data[level].title;
			if(level==Enum.SERVER){
				options.data = data[level].data[this.zone.val];
				options.selected = this.server;
			}else{
				options.data = data[level].data;
				options.selected = this.zone;
			}
			if(this.gameServer){
				this.gameServer.rebind(options);
			}else{
				var self = this;
				this.gameServer = new GameServer((this.options.gamezoneContainer||util.$(".tencent-payment-gamezonectl")),options,{
					onSelect:function(data,done){
						if(self.currentLevel==Enum.SERVER){//server
							self._checkRole(data.val,function(valid,role){
								if(valid){
									self.server =  data;
									self.setValue(Enum.SERVER,data.txt);
									done(true);
									self.role = role;
								}
							});
						}else{//zone
							self.zone = data;
							self.setValue(Enum.ZONE,data.txt);
							self.genDOM(self.gameData,Enum.SERVER);
							done(true);
						}
					}
				});
				this.gameServer.init();
			}
			this.gameServer.show();
		},
		_loadGameData:function(){
	        var self = this;
	        var gameConf = this.options.game.gameConf,sid = this.options.game.sid;
	        if (gameConf&&!GAME_DATA[sid]) {
	        	Loading.show();
	        	Mask.show();
	        	GAME_DATA[sid] = {};
	            util.req.loadScript(gameConf.serverUrl, function () {
	                GAME_DATA[sid] =privateMethod.formatGameData(window[gameConf.serverName]['STD_DATA']);
	                Loading.hide();
	                self.gameData =  GAME_DATA[sid];
	                self.genDOM(GAME_DATA[sid],Enum.ZONE);
	                Mask.hide();
	            });
	        } else {
	        	this.gameData =  GAME_DATA[sid];
	            this.genDOM(GAME_DATA[sid]||[],Enum.ZONE);
	        }
		}
	};
    module.exports = exports = GameZone;
});