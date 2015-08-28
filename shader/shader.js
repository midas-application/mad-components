define(function(require, exports, module) {
	var U = require("../util");
	var section = null,clickHandler;
	module.exports = module = {
		show : function(opt){
			opt = U.fn.extend({
				className: "",
				innerHTML:"",
				zIndex:null,
				onClick:null
			}, opt);
			var height = U.dom.getScrollHeight(document.body);
			if (!section) {
				section = document.createElement('div');
				section.style.zIndex = opt.zIndex || '4000';
				section.style.height = height + 'px';
				document.body.insertBefore(section, document.body.firstChild);
			}else{
				U.dom.show(section);
			}
			section.className = 'shadebg '+ opt.className;
			section.innerHTML = opt.innerHTML;
			if (clickHandler) {
				U.dom.unon(section, 'click', clickHandler);
				clickHandler = null;
			}
			if (opt.onClick) {
				clickHandler = U.dom.on(section, 'click', opt.onClick);
			}
			U.dom.on(section, 'touchmove', function(e){
				e.preventDefault();
			});
		},
		hide : function(){
			if (!section) {
				return;
			}
			U.dom.hide(section);
			if (clickHandler) {
				U.dom.unon(section, 'click', clickHandler);
				clickHandler = null;
			}
		}
	}
});