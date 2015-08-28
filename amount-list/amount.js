define(function(require, exports, module) {
	var util = require("../util");
    var privateMethod = {
    	_genItem:function(data,opts,id){
    		var options = {
    			unit:"",
    			maxLen:7
    		};
    		util.fn.extend(options,opts);
    		var html = '<div class="tencent-payment-amount"><div id="presetAmount-'+id+'" class="controls-option cf">',flag=false,tag=false;
    		util.fn.each(data,function(item,index){
    			flag = item.amount*options.forex == options.price;
    			if(flag){
    				tag = flag;
    			}
    			html+=String.format('<a data-action="setAmount" class="{0}" data-value="{1}" href="javascript:void(0);">{1}{2}</a>',(flag?"current":""),item.amount,(options.unit||""));
    		});
			html+=String.format('<a href="javascript:void(0);" class="{0}"><input id="amount-'+id+'" pattern="[0-9]*" maxlength="{1}" value="{2}"><i>其它数额</i></a>',(!tag?"current":"input-before"),options.maxLen,(!tag?options.price/options.forex:""));
			return html+String.format('</div><div class="checkout"><label>支付金额：</label><em id="price-{0}">{1}</em> 元</div></div>',id,options.price.toFixed(2));
    	},
    	_isOther:function(data,options){
    		var flag = false;
    		util.fn.each(data,function(item,index){
    			if(!flag){
    				flag = item.amount*options.forex == options.price;
    			}
    			if(flag) return false;
    		});
    		return !flag;
    	}   
    };
    var Amount = function(container,options,callbacks){
    	this.container = container||util.$("body");
    	this.options = {
    		forex:0.01,
  			price:5,
  			data:[]
    	};
    	this.id = +new Date();
    	util.fn.extend(this.options,options);
    	this.callbacks = {};
    	util.fn.extend(this.callbacks,callbacks);
    };
    Amount.prototype = {
    	init:function(){
    		var html = privateMethod._genItem(this.options.data,this.options,this.id);
    		this.container.innerHTML = html;
    		this.amountDOM = util.$(String.format('#price-{0}',this.id));
    		this.otherDOM = util.$(String.format('#amount-{0}',this.id));
    		this.bindEvent();
    		if(privateMethod._isOther(this.options.data,this.options,this.id)){
    			this.otherDOM.focus();
    		}
    	},
    	setAmount:function (amount) {
	        var amount = parseInt(amount, 10);
	        this.options.amount = isNaN(amount) ? 0 : amount;
	    },
	    calculatePrice:function () {
	        var fee = this.options.forex * this.options.amount;
	        this.options.price = fee;
	        return fee.toFixed(2);
	    },
	    getPrice:function(){
	    	return {
	    		price:this.options.price,
	    		amount:this.options.amount
	    	};
	    },
	    _updatePrice:function(){
	    	this.amountDOM.innerHTML = this.calculatePrice();
    	},
    	bindEvent:function(){
    		var self = this;
	        var presetAmount = util.$(String.format('#presetAmount-{0}',this.id));
	        var amountNode = this.otherDOM;
	        util.dom.on(presetAmount, 'click', function () {
	            var allNode = util.fn.$a('a', this.parentNode);
	            util.fn.each(allNode, function (node) {
	                util.dom.removeClass(node, 'current');
	            });
	            util.dom.addClass(this, 'current');
	            var input = util.$('input', this);
	            if (input) {
	                input.focus();
	            } else {
	                amountNode.value = '';
	                amountNode.parentNode.className = 'input-before';
	            }
	        }, null, 'a');

	        util.dom.on(presetAmount, 'click', function () {
	            var amount = this.getAttribute('data-value');
	            self.setAmount(amount);
	            self._updatePrice();
	            if(util.lang.isFunction(self.callbacks.onChange)){
	            	self.callbacks.onChange(self.getPrice());
	            }
	        }, null, 'a[data-action="setAmount"]');
	        util.dom.on(amountNode, 'focus', function () {
	            util.dom.removeClass(this, 'input-before');
	            var value = util.fn.numberInputFix(this);
	            self.setAmount(value);
	            self._updatePrice();
	        });

	        util.dom.on(amountNode, 'blur', function () {
	            var value = util.fn.numberInputFix(this);
	            if (value == '') {
	                this.parentNode.className = 'input-before';
	            }
	            var oldPrice = self.getPrice();
	            self.setAmount(value);
	            self._updatePrice();
	            if(oldPrice!=self.getPrice()&&util.lang.isFunction(self.callbacks.onChange)){
	            	self.callbacks.onChange(self.getPrice());
	            }
	        });
	        util.dom.on(amountNode, 'keyup', function () {
	            var value = util.fn.numberInputFix(this);
	            if(value.length>self.options.maxLen){
	            	value = value.slice(0,self.options.maxLen);
	            }
	            self.setAmount(value);
	            self._updatePrice();
	        });
    	}
    };
    module.exports = exports = Amount;
});