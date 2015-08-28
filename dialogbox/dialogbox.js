define(function(require, exports, module) {
	var util = require("../util");
	var Message = require("./message");
	var boxView = null;
	var boxConent = null;
	var closeBtn = null;
	var cacheData = {};
	var switchTheStatus = function(selected){
		if(selected){
			util.dom.removeClass(closeBtn,"nocheck");
		}else{
			util.dom.addClass(closeBtn,"nocheck");
		}
	};
	var dialogview = {
		show:function(html,options){
			options = util.fn.extend({
				css:{
					height:500,
					width:"100%"
				}
			},options);
			cacheData = options.data||{};
			cacheData.selected = true;
			if(!boxView){
				var body = util.$("body");
				body.appendChild(util.dom.toDom('<article class="dialogview"><span class="dialogview-tool"><a href="javascript:void(0);" class="close img-check"><i class="icon-status"></i></a></span><section class="dialogview-content"></section></article>'));
				boxView = util.$(".dialogview");
				boxConent = util.$(".dialogview .dialogview-content");
				closeBtn = util.$(".dialogview .close");
				util.dom.on(closeBtn,"click",function(e){
					cacheData.selected = !cacheData.selected;
					switchTheStatus(cacheData.selected);
					if(options.onClose) options.onClose.call(this,cacheData);
				});
				util.dom.on(boxConent,"click",function(e){
					dialogview.hide();
					if(options.onExit) options.onExit.call(this,cacheData);
				});
			}else{
				switchTheStatus(cacheData.selected);
				boxConent.innerHTML = "";
			}
			
			if(typeof html === "string"){
				boxConent.appendChild(util.dom.toDom(html));
			}else{
				boxConent.appendChild(html);
			}
			util.dom.setStyle(boxView,options.css);
			util.dom.show(boxView);
		},
		hide:function(){
			if(boxConent){
				boxConent.innerHTML = "";
				util.dom.hide(boxView);
			}			
		}
	};
	module.exports = module = dialogview;
});