/**
 * Created by timlv on 2014/11/28.
 */
define(function (require, exports, module) {
    var U = require('../util');

    var richInput = module.exports = function (input, opt) {
        this.input = input;
        this.options = {
            showDel:true
        };
        U.fn.extend(this.options,opt);
        if(this.options.defaultValue){this.input.value = this.options.defaultValue;}
        if (typeof this.options.onChange !== 'function') {
            this.options.onChange = function () {
            };
        }
        this._init();
        this._bindEvent();
    };
    richInput.prototype = {
        _init: function () {
            var inputNode = this.input;
            if(this.options.showDel) {
                var newNode = this.button = document.createElement('div');
                newNode.className = this.options.style || 'turn-right';
                newNode.style.display = 'none';
                newNode.innerHTML = ' <i class="icon-del"></i>';
                if (inputNode.parentNode) {
                    if (inputNode.nextSibling) {
                        inputNode.parentNode.insertBefore(newNode, inputNode.nextSibling);
                    } else {
                        inputNode.parentNode.appendChild(newNode);
                    }
                    this.options.adjust && this._adjustButton();
                }
            }
        },
        _adjustButton: function () {
            var inputNode = this.input;
            var parentNode = inputNode.parentNode;
            var parentNodeSize = parentNode.getBoundingClientRect();
            var parentNodeMarginRight = parseInt(getComputedStyle(parentNode)['margin-right'] || 0, 10);
            inputNode.style.width = parentNodeSize.width + parentNodeMarginRight - 32 + 'px';
        },
        _bindEvent: function () {
            var self = this;
            if(this.button) {
                U.dom.on(this.button, 'click', function () {
                    self.reset();
                    self.restore();
                    self.input.focus();
                    self.options.onChange.call(self.input, "delete");
                });
            }
            U.dom.on(this.input, 'focus', function (e) {
                e.stopPropagation();
                self.options.onChange.call(this,"focus");
                if (this.value === '') {
                    self.restore();
                } else {
                    self.activate();
                }
            });

            U.dom.on(this.input, 'blur', function () {
                self.options.onChange.call(this,"blur");
                setTimeout(function () {
                    self.restore();
                }, 150);
            });

            U.dom.on(this.input, 'input', function () {
                self.options.onChange.call(this,"input");
                if (this.value === '') {
                    self.restore();
                } else {
                    self.activate();
                }
            });
        },
        reset: function () {
            this.input.value = '';
            typeof this.options.onReset === 'function' && this.options.onReset(this.input);
        },
        restore: function () {
            if(this.button) U.dom.hide(this.button);
            typeof this.options.onRestore === 'function' && this.options.onRestore(this.input);
        },
        activate: function () {
            if(this.button) U.dom.show(this.button);
            typeof this.options.onActivate === 'function' && this.options.onActivate(this.input);
        }
    };
});
