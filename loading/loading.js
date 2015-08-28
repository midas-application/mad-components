define(function(require, exports, module) {
	var util = require('../util');
	var loadDom = null;
	var setText = function(text){
		util.$(".loading p").innerText = text;
	};
	module.exports = module = {
		show:function(text){
			if(!loadDom){
				util.$("body").appendChild(util.dom.toDom('<section class="warn-tips loading"><i class="icon-load"></i><p>'+(text||'加载中，请稍候...')+'</p></section>'));
				loadDom = util.$(".loading");
			}else if(text){
				setText(text);
			}
			util.dom.show(loadDom);
			var left = util.dom.getScrollLeft() + util.dom.getClientWidth() / 2 - util.dom.getScrollWidth(loadDom) / 2;
			var top = util.dom.getScrollTop() + util.dom.getClientHeight() / 2 - util.dom.getScrollHeight(loadDom) / 2;
			loadDom.style.cssText = 'left:' + left + 'px; top:' + top + 'px; position:absolute; z-index:200; visibility:visible;';

		},
		hide:function(){
			loadDom&&util.dom.hide(loadDom);
		}
	}
});