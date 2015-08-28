define(function (require, exports, module) {
    var util = require("../util");
    var SearchInput = function (container,options,callbacks) {
        this.container = container||util.$("body");
        this.options = {
            "placeHolder":"输入游戏名称搜索",
            "buttonName":"取消"
        };
        this.id = +new Date();
        util.fn.extend(this.options,options);
        this.oldValue="";
        this.callbacks = {};
        util.fn.extend(this.callbacks,callbacks);
    };
    SearchInput.prototype = {
        init: function () {
            var html = String.format('<div class="tencent-payment-searchinput"><div id="searchPane-{0}" class="search-bar search-before"><div class="search-input"><i class="icon-search"></i>'+
                '<input id="searchInput-{0}" class="input" type="text" value="">'+
                '<div style="display:none;" class="search"><i class="icon-del"></i></div><span>{1}</span></div>'+
                '<button id="searchCancelButton-{0}">{2}</button></div></div>',this.id,this.options.placeHolder,this.options.buttonName);
            this.container.innerHTML = html;
            this.button = util.$(String.format("#searchPane-{0} .search",this.id));
            this.cancel = util.$(String.format("#searchCancelButton-{0}",this.id));
            this.input = util.$(String.format("#searchInput-{0}",this.id));
            this.options.adjust && this._adjustButton();
            this._bindEvent();
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
            util.dom.on(this.button, 'click', function () {
                self.reset();
                self._hideDel();
                self.input.focus();
            });
            util.dom.on(this.cancel,'click',function(e){
                util.dom.addClass(String.format("#searchPane-{0}",self.id), "search-before");
                self.reset();
                self.trigger("click","cancelButton");
            });
            util.dom.on(this.input, 'focus', function (e) {
                e.stopPropagation();
                util.dom.removeClass(String.format("#searchPane-{0}",self.id), "search-before");
                self.trigger("click","focusInput");
                if (this.value === '') {
                    self._hideDel();
                } else {
                    self._showDel();
                }
            });
            util.dom.on(this.input, 'blur', function () {
                self.trigger("change");
                util.fn.delayRun("searchInput",function(){
                    self._hideDel();
                },150);
            });
            util.dom.on(this.input, 'input', function () {
                self.trigger("change");
                if (this.value === '') {
                    self._hideDel();
                } else {
                    self._showDel();
                }
            });
        },
        trigger:function(type,source){
            switch(type){
                case "change":
                    if(this.oldValue!=this.input.value) {
                        if (util.lang.isFunction(this.callbacks.onChange)) {
                            this.callbacks.onChange(this.input.value);
                            this.oldValue = this.input.value;
                        }
                    }
                    break;
                case "click":
                    if (util.lang.isFunction(this.callbacks.onClick)) {
                        this.callbacks.onClick(source);
                    }
                    break;
                default:
                    break;
            }
        },
        reset: function () {
            this.input.value = '';
            this.trigger("change");
        },
        _hideDel: function () {
            util.dom.hide(this.button);
        },
        _showDel: function () {
            util.dom.show(this.button);
        }
    };
    module.exports = exports = SearchInput;
});