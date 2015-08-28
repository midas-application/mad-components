/**
 * Created by timlv on 2014/12/1.
 */
define(function(require, exports, module) {
    var U = require("../util"),shader = require("./shader");
    var section  = null, interval = null;
    /**
     * 显示消息框
     * @param {String} opt.msg 提示文字
     * @param {Number} opt.timeout 隐藏时间
     */
    module.exports = exports = {
        show : function(opt) {
            var self = this;
            opt.timeout = ~~opt.timeout || 15;
            var timeout = opt.timeout;
            shader.show();
            if (!section) {
                section = document.createElement('section');
                document.body.insertBefore(section, document.body.firstChild);
            } else {
                U.dom.show(section);
            }
            section.className = 'warn-tips holding';
            section.innerHTML = '<p id="_waitTip"></p><p class="holding-font" id="_waitTime"></p>';
            U.$('#_waitTip').innerHTML = opt.msg;
            U.$('#_waitTime').innerHTML = timeout;
            var left = U.dom.getScrollLeft() + U.dom.getClientWidth() / 2 - U.dom.getScrollWidth(section) / 2;
            var top = U.dom.getScrollTop() + U.dom.getClientHeight() / 2 - U.dom.getScrollHeight(section) / 2;
            section.style.cssText = 'left:' + left + 'px; top:' + top + 'px; position:absolute; z-index:5000;';
            interval && clearInterval(interval);
            interval = setInterval(function () {
                timeout--;
                if (timeout <= 0) {
                    U.dom.hide(section);
                    shader.hide();
                    clearInterval(interval);
                    opt.cb && opt.cb();
                } else {
                    U.$('#_waitTime').innerHTML = timeout;
                }
            }, 1000);
            U.dom.on(section, 'touchmove', function (e) {
                e.preventDefault();
            });
        }
    };
});