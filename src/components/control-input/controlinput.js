/**
 * Created by timlv on 2014/11/28.
 */
define(function (require, exports, module) {
    var Util = require('../../util/util');
    var uiComponent = function (container, options, callbacks) {
        this.container = container;
        this.options = {
            label: "数量",
            defaultValue: 1,
            maxAmount: 10,
            minAmount: 1,
            realCheck: false,
            disableClass: "dis",
            addClass: "add",
            showHandelChar: true
        };
        Util.fn.extend(this.options, options);
        if (!this.isValid(this.options.defaultValue)) {
            this.options.defaultValue = this.options.minAmount;
        }
        this.html = '<div class="mad-ui-controlinput">' +
        (this.options.label ? '<label class="control-label">{label}</label>' : '') +
        '<div class="controls">' +
        '<div class="duration">' +
        '<a href="javascript:void(0);" class="icon-reduce {reduceClass}">' + (this.options.showHandelChar ? '-' : '') + '</a>' +
        '<div class="dur-ipt focus">' +
        '<input type="text" pattern="[0-9]*" type="tel" value="{defaultValue}" maxlength="' + String(this.options.maxAmount).length + '">' +
        '</div>' +
        '<a href="javascript:void(0);" class="icon-increase" {addClass}>' + (this.options.showHandelChar ? '+' : '') + '</a>' +
        '</div>' +
        '</div>' +
        '</div>';
        this.callbacks = {};
        Util.fn.extend(this.callbacks, callbacks);
        this._init();
        this._bindEvent();
    };
    uiComponent.prototype = {
        _init: function () {
            var html = Util.string.format(this.html, {
                defaultValue: this.options.defaultValue,
                label: this.options.label,
                reduceClass: this.options.defaultValue <= this.options.minAmount ? this.options.disableClass : "",
                addClass: this.options.defaultValue >= this.options.maxAmount ? this.options.disableClass : ""
            });
            var newNode = Util.dom.toDom(html);
            this.container.appendChild(newNode);
            this.inputDom = Util.$("input", newNode);
            this.addDom = Util.$(".icon-increase", newNode);
            this.reduceDom = Util.$(".icon-reduce", newNode);
            this.callbacks.onSelect && this.callbacks.onSelect(this.options.defaultValue);
        },
        getValue: function () {
            return parseFloat(this.inputDom.value);
        },
        setValue: function (val) {
            if (this.isValid(val)) {
                this.inputDom.value = val;
                if (val != this.options.defaultValue) {
                    this.options.defaultValue = val;
                    this.callbacks.onSelect && this.callbacks.onSelect(this.options.defaultValue);
                }
                if (val <= this.options.minAmount) {
                    Util.dom.removeClass(this.addDom, this.options.disableClass);
                    Util.dom.addClass(this.reduceDom, this.options.disableClass);
                } else if (val >= this.options.maxAmount) {
                    Util.dom.removeClass(this.reduceDom, this.options.disableClass);
                    Util.dom.addClass(this.addDom, this.options.disableClass);
                } else {
                    Util.dom.removeClass(this.reduceDom, this.options.disableClass);
                    Util.dom.removeClass(this.addDom, this.options.disableClass);
                }
            } else {
                if (val < this.options.minAmount) {
                    this.setValue(this.options.minAmount);

                } else if (val > this.options.maxAmount) {
                    this.setValue(this.options.maxAmount);
                }
            }
        },
        isValid: function (val) {
            val = typeof val != "undefined" ? val : this.getValue();
            return val && val >= this.options.minAmount && val <= this.options.maxAmount;
        },
        _bindEvent: function () {
            var self = this;
            var setValue = function (isAdd) {
                var val = self.getValue(), newVal = isAdd ? (val + 1) : (val - 1);
                self.setValue(newVal);
            };
            if (!this.options.supportTouch) {
                Util.event.on(this.addDom, 'click', function () {
                    setValue(true);
                });
                Util.event.on(this.reduceDom, 'click', function () {
                    setValue();
                });
            } else {
                var hasTouch = 'ontouchstart' in window,
                    startEvt = hasTouch ? "touchstart" : "mousedown",
                    moveEvt = hasTouch ? "touchmove" : "mousemove",
                    cancelEvt = hasTouch ? "touchcancel" : "mouseout",
                    endEvt = hasTouch ? "touchend" : "mouseup";
                var roll = function (isAdd) {
                    setValue(isAdd);
                    Util.fn.delayRun("inputControl", function () {
                        roll(isAdd);
                    }, 200);
                };
                var delRoll = function () {
                    Util.fn.delayRun("inputControl", function () {
                    }, 0);
                };
                Util.event.on(this.addDom, startEvt, function (e) {
                    e.preventDefault();
                    roll(true);
                });
                Util.event.on(this.reduceDom, startEvt, function (e) {
                    e.preventDefault();
                    roll();
                });
                Util.event.on(this.addDom, endEvt, function () {
                    delRoll();
                });
                Util.event.on(this.reduceDom, endEvt, function () {
                    delRoll();
                });
            }
            var mouseEv = Util.ua.iOS ? "input" : "keyup";
            Util.event.on(this.inputDom, mouseEv, function () {
                if (this.value.length > 0) {
                    var value = Util.number.convertToNumber(this.value);
                    if (self.options.realCheck) {//不允许输入非法内容
                        self.setValue(value);
                    } else {
                        self.value = value;
                    }
                }
            });
            Util.event.on(this.inputDom, 'blur', function () {
                var value = Util.number.convertToNumber(this.value);
                self.setValue(value);
            });
            Util.event.on(this.inputDom, 'focus', function () {
                self.callbacks.onFocus && self.callbacks.onFocus(this);
            });
        }
    };
    module.exports = exports = uiComponent;
});

