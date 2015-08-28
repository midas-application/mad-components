define(function (require, exports, module) {
    var util = require("../../mod/util");
    var Search = require("../input/search");
    window.service = null;
    var ORDER_LIST = {};
    window.INFO = {};
    var privateMethod = {
        formatServiceInfo:function(s){
            var ns = {};
            util.fn.each(s, function (o, sid) {
                if (o.status === 1 && o.type === 'game') {
                    o.key = o.key || o.code.replace(/^-/, '');
                    o.sid = sid;
                    ns[sid] = o;
                    var firstChar = o.key.substring(0, 1);
                    if (!ORDER_LIST[firstChar]) {
                        ORDER_LIST[firstChar] = [];
                    }
                    ORDER_LIST[firstChar].push(sid);
                }
            });
            util.fn.each(ORDER_LIST, function (l, i) {
                ORDER_LIST[i] = l.sort(function (a, b) {
                    return ns[a].order - ns[b].order;
                });
            });
            return ns;
        },
        genDom:function(gMap){
            return String.format('<div class="tencent-payment-gamelist"><article id="gameListPage-{id}" class="game">'+
                        '<div id="keyList-{id}" class="key" style="display: none;">'+
                            '<a href="javascript:void(0);">A</a><a href="javascript:void(0);">B</a><a href="javascript:void(0);">C</a>'+
                            '<a href="javascript:void(0);">D</a><a href="javascript:void(0);">E</a><a href="javascript:void(0);">F</a>'+
                            '<a href="javascript:void(0);">G</a><a href="javascript:void(0);">H</a><a href="javascript:void(0);">I</a>'+
                            '<a href="javascript:void(0);">J</a><a href="javascript:void(0);">K</a><a href="javascript:void(0);">L</a>'+
                            '<a href="javascript:void(0);">M</a><a href="javascript:void(0);">N</a><a href="javascript:void(0);">O</a>'+
                            '<a href="javascript:void(0);">P</a><a href="javascript:void(0);">Q</a><a href="javascript:void(0);">R</a>'+
                            '<a href="javascript:void(0);">S</a><a href="javascript:void(0);">T</a><a href="javascript:void(0);">U</a>'+
                            '<a href="javascript:void(0);">V</a><a href="javascript:void(0);">W</a><a href="javascript:void(0);">X</a>'+
                            '<a href="javascript:void(0);">Y</a><a href="javascript:void(0);">Z</a>'+
                        '</div>'+
                        '<div id="search-input-{id}">'+
                        '</div>'+
                        '<section id="searchGameList-{id}" class="mod-list game-list" style="display: none;"></section>'+
                        '<section id="allGameList-{id}" class="mod-list game-list"></section>'+
                    '</article></div>',gMap);
        }
    };
    var GameList = function (container,options,callbacks) {
        this.container = container||util.$("body");
        this.options = {
            services:"./service",
            showFrequencyList:true,
            frequencyCount:3,
            frequencyListName:"热门游戏",
            frequencyListData:[]
        };
        this.id = +new Date();
        util.fn.extend(this.options,options);
        this.callbacks = {};
        util.fn.extend(this.callbacks,callbacks);
    };
    GameList.prototype={
        init:function () {
            var self = this;
            if (window.service) {
                this._render();
                this._bindEvent();
            } else {
                require.async(this.options.services, function () {
                    var s = window.INFO.services;
                    window.service = privateMethod.formatServiceInfo(s);
                    window.INFO = window.INFO.services = null;
                    self._render();
                    self._bindEvent();
                });
            }
        },
        _render:function(){
            this.container.innerHTML = privateMethod.genDom({id:this.id,name:this.options.frequencyListName});
            this.gamelist =  util.$(String.format('#allGameList-{0}',this.id));
            this.searchlist = util.$(String.format('#searchGameList-{0}',this.id));
            this._buildList();
            if(util.lang.isFunction(this.callbacks.onLoad)){
                this.callbacks.onLoad();
            }
        },
        _bindEvent:function(){
            var self = this;
            var searchCtl = new Search(util.$(String.format('#search-input-{0}',this.id)),{},{
                onChange: function(value,triggerTarget) {
                    if(util.lang.isFunction(self.callbacks.onSearch)){
                        self.callbacks.onSearch(value,triggerTarget);
                    }
                    self.search(value);
                },
                onClick:function(target){
                    if(util.lang.isFunction(self.callbacks.onSearchClick)){
                        self.callbacks.onSearchClick(target);
                    }
                }
            });
            searchCtl.init();
            util.dom.on(String.format('#gameListPage-{0}',this.id), 'click', function() {
                var sid = this.getAttribute('data-sid');
                if(util.lang.isFunction(self.callbacks.onClick)){
                    self.callbacks.onClick(window.service[sid]);
                }
            }, null, 'li[data-action="buy"]');
        },
        destory:function(){
            for(var k in this){
                if(k!="destory"){
                    this[k] = null;
                }
            }
        },
        search:function(key){
            key = key.replace(/[\\\/\[\]\(\)\*\+\=\$\^\.\?\|\|\(\s)]+/, '').toLowerCase();
            if (key == '') {
                this.searchlist.innerHTML = '';
                util.dom.show(this.gamelist);
                util.dom.hide(this.searchlist);
                return;
            }
            key = (key.split('').join('.*')) + '.*';
            var liList = [];
            util.fn.each(window.service, function (s) {
                if (s.name.toLowerCase().match(key) || s.key.match(key) || s.code.match(key)) {
                    liList.push(String.format(String.format('<li class="cf" data-action="buy" data-sid="{0}">'+
                            '<div class="detail-logo"><img src="//imgcache.gtimg.cn/bossweb/h5pay/images/game/game-{0}.png" alt="{1}" width="100%" /></div>'+
                            '<div class="detail-group cf"><div class="detail-title"><h3>{1}</h3></div></div></li>',s.sid,s.name)));
                }
            });
            this.searchlist.innerHTML = liList.length > 0 ? '<ul>' + liList.join('') + '</ul>' : '';
            util.dom.hide(this.gamelist);
            util.dom.show(this.searchlist);
        },
        _buildList:function(){
            var b = 'a'.charCodeAt(0),
            e = 'z'.charCodeAt(0),
            list,
            html = [];
            if(this.options.showFrequencyList&&this.options.frequencyListData&&this.options.frequencyListData.length>0){
                var liList = [],s,self = this;
                util.fn.each(this.options.frequencyListData,function(game,index){
                    if(index == self.options.frequencyCount) return false;
                    s = window.service[game];
                    liList.push(String.format(String.format('<li class="cf" data-action="buy" data-sid="{0}">'+
                            '<div class="detail-logo"><img src="//imgcache.gtimg.cn/bossweb/h5pay/images/game/game-{0}.png" alt="{1}" width="100%" /></div>'+
                            '<div class="detail-group cf"><div class="detail-title"><h3>{1}</h3></div></div></li>',s.sid,s.name)));
                });
                html.push(liList.length > 0 ? String.format('<ul><h2>{0}</h2>{1}</ul>',this.options.frequencyListName,liList.join('')) : '');
            }
            for (var i = b; i <= e; i++) {
                var idx = String.fromCharCode(i);
                if (list = ORDER_LIST[idx]) {
                    html.push('<h2>' + idx.toUpperCase() + '</h2><ul>');
                    for (var j = 0, len = list.length; j < len; j++) {
                        var info = window.service[list[j]];
                        html.push(String.format('<li class="cf" data-action="buy" data-sid="{0}">'+
                            '<div class="detail-logo"><img src="//imgcache.gtimg.cn/bossweb/h5pay/images/game/game-{0}.png" alt="{1}" width="100%" /></div>'+
                            '<div class="detail-group cf"><div class="detail-title"><h3>{1}</h3></div></div></li>',info.sid,info.name));
                    }
                    html.push('</ul>');
                }
            }
            this.gamelist.innerHTML = html.join('');
        }
    };
    module.exports = exports = GameList;
});