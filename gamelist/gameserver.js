define(function (require, exports, module) {
    var util = require("../../mod/util");
    var privateMethod = {
        genDOM:function(obj){
            var html = String.format('<div class="tencent-payment-gameserver"><div id="listPane-{ID}">'+
                            '<header><a href="javascript:void(0);" class="turn-l">{backName}</a><div class="title"><h1><span>{title}</span></h1></div></header>'+
                            '<article class="game-place"><ul data-type="list" class="mod-list">',obj);
            util.fn.each(obj.data,function(item,index){
                html +=String.format('<li data-txt="{txt}" data-val="{val}"><div class="detail-group"><span>{txt}</span></div></li>',item)
            });
            html +='</ul></article></div></div>';
            return html;
        }
    };
    var GameServer = function (container,options,callbacks) {
        this.container = container||util.$("body");
        this.options = {};
        this.id = +new Date();
        util.fn.extend(this.options,options);
        this.callbacks = {};
        util.fn.extend(this.callbacks,callbacks);
    };
    GameServer.prototype={
        init:function () {
            this.container.innerHTML = privateMethod.genDOM({
                backName:"取消",
                ID:this.id,
                title:this.options.title,
                data:this.options.data
            });
            this._bindEvent();
        },
        rebind:function(options){
            util.fn.extend(this.options,options);
            this.container.innerHTML = privateMethod.genDOM({
                backName:"取消",
                ID:this.id,
                title:this.options.title,
                data:this.options.data
            });
        },
        _bindEvent:function(){
            var self = this;
            util.dom.on(this.container,"click",function(e){
                self.hide();
            },null,String.format("#listPane-{0} a",this.id));
            util.dom.on(this.container,"click",function(e){
                var txt = this.getAttribute("data-txt"),val = this.getAttribute("data-val");
                if(util.lang.isFunction(self.callbacks.onSelect)){
                    self.callbacks.onSelect({
                        txt:txt,
                        val:val
                    },function(valid){
                        if(valid){
                            self.hide();
                        }
                    });
                }
            },null,"li");
        },
        show:function(){
            util.dom.show(this.container);
        },
        hide:function(){
            util.dom.hide(this.container);
        }
    };
    module.exports = exports = GameServer;
});