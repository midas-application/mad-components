/**
 * Created by timlv on 2014/11/26.
 */
define(function(require, exports, module) {
    var U = require('../util'), section,
        shader = require("./shader");
    module.exports = exports = {
        hide:function(){
            if(section) {
                U.dom.hide(section);
                shader.hide();
            }
        },
        show: function (opt) {
            var self = this;
            //<section class="float-tips">
            // 	<h3>温馨提示</h3>
            // 	<p class="center">QQ卡余额为13.0元，是否全部用于开通黄钻贵族？</p>
            // 	<div class="btn-wrap two-btn cf">
            // 		<button class=" btn">立即开通</button>
            // 		<button class=" btn">立即开通</button>
            // 	</div>
            // </section>
            opt = U.fn.extend({
                showBtn: true,
                showTitle: true,
                showCancel: true,
                width: 270,
                className:"",
                contextAlign: "center",
                cancelMsg: "取消",
                confirmMsg: "确定"
            }, opt);
            shader.show();
            if (!section) {
                section = document.createElement('section');
                document.body.insertBefore(section, document.body.firstChild);
            } else {
                U.dom.show(section);
            }
            section.className = 'float-tips ' + opt.className;
            var contexClass = opt.contextAlign != "center" ? "float-content " : "float-content content-pattern";
            var btnClass = !opt.showCancel ? "btn-wrap" : "btn-wrap two-btn cf";
            section.innerHTML = (opt.showTitle ? ('<h3>' + (opt.title || '') + '</h3>') : '') + '<div class="' + contexClass + '">' + opt.msg + '</div>' +
            (opt.showBtn ? ('<div class="' + btnClass + '">' + (opt.showCancel ? '<button id="ios-alertcancel" class="btn">' + opt.cancelMsg + '</button>' : '') + '<button id="ios-alertconfirm" class="btn">' + opt.confirmMsg + '</button></div>') : '');

            var width = opt.width || U.dom.getSectionWidth();
            var left = U.dom.getScrollLeft() + U.dom.getClientWidth() / 2 - width / 2;
            var top = U.dom.getScrollTop() + U.dom.getClientHeight() / 2 - U.dom.getScrollHeight(section) / 2;
            section.style.cssText = 'left:' + left + 'px; top:' + top + 'px; position:absolute; z-index:5000;';
            U.dom.on(section, 'touchmove', function (e) {
                e.preventDefault();
            });
            U.dom.on(U.$('#ios-alertconfirm'), 'click', function () {
                opt.onConfirm && opt.onConfirm();
                U.dom.hide(section);
                shader.hide();
            });
            U.dom.on(U.$('#ios-alertcancel'), 'click', function () {
                opt.onCancel && opt.onCancel();
                U.dom.hide(section);
                shader.hide();
            });
        }
    }
});