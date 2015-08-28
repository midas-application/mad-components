define(function(require, exports, module) {
	var messageDom = null;
	var msgTimer = null;
	var util = require('../util');
	module.exports = module = {
		show:function(message,opt){
			opt = opt||{};
			if (!messageDom) {
				messageDom = document.createElement('section');
				document.body.insertBefore(messageDom, document.body.firstChild);
				messageDom.className = 'warn-tips';
			}else{
				util.dom.show(messageDom);
			}
			messageDom.innerHTML = '<i class="icon-tipwarn"></i><p>'+ message +'</p>';
			var left = util.dom.getScrollLeft() + util.dom.getClientWidth() / 2 - util.dom.getScrollWidth(messageDom) / 2;
			//var top = util.dom.getScrollTop() + util.dom.getClientHeight() / 2 - util.dom.getScrollHeight(messageDom) / 2;
			messageDom.style.section = 'left:' + left + 'px;top:50%;position:absolute; z-index:300;';
			util.fn.delayRun("util.message",function(){util.dom.hide(messageDom);},~~opt.timeout||2000);
		}
	}
});