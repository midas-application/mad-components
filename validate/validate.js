define(function(require, exports, module) {
	var util = require("../util");
	var Promise = require("../promise");
	var _ctlIndex = 0;
	var STATUS = {
		"UNCHECK":"1",
		"FAILED":"2",
		"SUCESSED":"3",
		"CHECKING":"4"
	};
	var VALIDATOR = {
		required:function(){
			var value = _validator.getValue(this).trim();
			return value.length>0;
		},
		minLen:function(){
			var value = _validator.getValue(this);
			return value.length>=this.minLen;
		},
		maxLen:function(){
			var value = _validator.getValue(this);
			return value.length<=this.maxLen;
		},
		onlyNumber:function(){//can null 
			var value = _validator.getValue(this);
			var match = value.match(/[0-9]*/ig);
			this.ctl.value = match?match.join(""):"";
			return value.length==0||this.ctl.value.length==value.length;
		},
		onlyMaxLen:function(){
			var value = _validator.getValue(this);
			var temp = value.slice(0,this.maxLen);
			this.ctl.value = temp;
			return value.length==0||temp.length==value.length;
		},
		number:function(){
			return /^[0-9]*$/ig.test(this.ctl.value);
		},
		mail:function(){
			var value = _validator.getValue(this);
			return value.length==0||/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/ig.test(value);
		}
	};
	var ctlClass =  function(){
		this.ctl = null;
		this.id = _ctlIndex++;
		this.hint = false;
		this.invalidMsg = null;
		this.focusCls = null;
		this.callbacks = {};
		this.focusBigCls = null;
		this.oldValue = null;
		this.clearable = null;
		this.validators = [];
		this.delay = false;//realtime
		this.invalidCls = "validator-hint";//验证不通过后的样式
		this.category = "defalut";
		this.clsCtl = null;
		this.msgCtl = null;
		this.status = STATUS.UNCHECK;
		this.promise = null;
		var self = this;
		this.done = function(result){//{valid:true,msg:""}
			if(self.status==STATUS.UNCHECK) return;
			if(result&&!result.valid){
				self.promise.reject();
				if(self.hint){//提示用户
					util.dom.addClass(self.ctl,self.invalidCls);
					if(self.msgCtl&&(result.msg||self.invalidMsg)){
						self.msgCtl.innerHTML = String.format((result.msg||self.invalidMsg),self.ctl.value);
						util.dom.show(self.msgCtl);
					}
				}
			}else{
				self.promise.resolve();
				_validator.hint(self,true);
			}
		};
	};
	ctlClass.prototype = {
		set:function(attr,value){
			this[attr] = value;
		},
		sets:function(attrs){
			util.fn.extend(this,attrs);
		},
		initStatus:function(){
			var self = this;
			if(this.status!=STATUS.CHECKING) {
				this.status = STATUS.UNCHECK;
				this.promise.reset();
				this.promise.then(function () {
					self.status = STATUS.SUCESSED;
				}, function () {
					self.status = STATUS.FAILED;
				}, function () {
					self.status = STATUS.CHECKING;
				});
			}
		}
	};
	var ctlList = [],status=false;
	var _validator = {
		convertToCTL:function(ctlObj){
			var ctlIns = new ctlClass();
			var list = [];
			if(util.lang.isString(ctlObj.target)){
				list = ctlObj.target.split(".");
			}
			var ctl =list.length>0?util.$(list[0]):util.$(ctlObj.target);
			ctlIns.sets({
				ctl:ctl,
				type:ctlObj.type||"input",
				hint:ctlObj.hint,
				invalidMsg:ctlObj.invalidMsg,
				invalidCls:ctlObj.invalidCls||"invalid",
				focusCls:ctlObj.focusCls,
				minLen:ctlObj.minLen,
				maxLen:ctlObj.maxLen,
				focusBigCls:ctlObj.focusBigCls,
				validators:ctlObj.validators,
				delay:ctlObj.delay,
				clearable:ctlObj.clearable,
				category:list.length>1?list[1]:(ctlObj.category||"default"),
				msgCtl:util.$(ctlObj.msgCtl),
				clsCtl:util.$(ctlObj.clsCtl),
				callbacks:ctlObj.callbacks||{},
				promise:new Promise()
			});
			return ctlIns;
		},
		hint:function(insCtl,success){
			if(!success){
				if(insCtl.hint){//提示用户
					util.dom.addClass(insCtl.ctl,insCtl.invalidCls);
					if(insCtl.invalidMsg&&insCtl.msgCtl){
						insCtl.msgCtl.innerHTML = String.format(insCtl.invalidMsg,_validator.getValue(insCtl));
						util.dom.show(insCtl.msgCtl);
					}
					if(util.lang.isFunction(insCtl.callbacks.onInvalid)){
						insCtl.callbacks.onInvalid.apply(insCtl);
					}
				}
			}else{
				if(insCtl.msgCtl){
					util.dom.hide(insCtl.msgCtl);
					util.dom.removeClass(insCtl.ctl,insCtl.invalidCls);
				}
			}
		},
		matchCtl:function(tarCtl){
			var flag = null,matchList = [];
			util.fn.each(ctlList,function(ctlIns,index){
				if(ctlIns.ctl==tarCtl){
					matchList.push(ctlIns);
				}
			});
			return matchList;
		},
		process:function(){
			if(!status){
				status = true;
				this.bindEvent();
			}
		},
		check:function(t,showClear){
			t.initStatus();
			var statusItem = STATUS.UNCHECK;
			var rule = null;
			for(var i= 0,l= t.validators.length;i<l;i++){
				rule = t.validators[i];
				if(util.lang.isString(rule)){
					if(VALIDATOR[rule]){//default rule
						statusItem = VALIDATOR[rule].call(t);
						if(!statusItem){
							_validator.hint(t,false);
							statusItem = STATUS.FAILED;
						}else{
							statusItem = STATUS.SUCESSED;
							_validator.hint(t,true);
						}
					}
				}else if(util.lang.isObject(rule)&&util.lang.isFunction(rule.onCheck)){
					statusItem = STATUS.CHECKING;
					t.promise.updateProgress();
					if (util.lang.isFunction(rule.onBeforeCheck)) {
						rule.onBeforeCheck.call(t);
					}
					util.fn.delayRun(String.format("validate.customize{0}", t.id), function () {
						rule.onCheck.call(t);
					}, (t.delay ? 0 : 1000));
				}
				if(statusItem != STATUS.SUCESSED){
					break;
				}
			}
			if(statusItem == STATUS.SUCESSED){
				t.promise.resolve();
			}else if(statusItem == STATUS.FAILED){
				t.promise.reject();
			}
			if(t.clearable==="true"&&showClear){
				util.dom[t.ctl.value ? 'show' : 'hide'](util.dom.getNext(t.ctl));
			}
		},
		bindEvent:function(){
			util.dom.on(document.body, 'focus', function(e){
				var t, matchlist = _validator.matchCtl(e.target);
				util.fn.each(matchlist,function(t){
					if (t.focusCls) {
						util.dom.addClass(t.clsCtl||t.ctl, t.focusCls);
					}
					if (t.focusBigCls) {
						util.dom.addClass(t.clsCtl||t.ctl, t.focusBigCls);
					}
					if (t.clearable==="true") {
						util.dom[t.ctl.value ? 'show' : 'hide'](util.dom.getNext(t.ctl));
					}
					if(!t.oldValue) {
						t.oldValue = _validator.getValue(t);
					}
					//e.preventDefault();
				});
			}, [], null,true);
			util.dom.on(document.body, 'blur', function(e){
				var t, matchlist = _validator.matchCtl(e.target);
				util.fn.each(matchlist,function(t){
					if (t.focusCls) {
						util.dom.removeClass(t.clsCtl||t.ctl, t.focusCls);
					}
					if (t.focusBigCls) {
						util.dom.removeClass(t.clsCtl||t.ctl, t.focusBigCls);
					}
					if (t.clearable==="true") {
						util.fn.delayRun(String.format("validate.blur.{0}",t.id),function(){//it will influence the click, so delay it.
							util.dom.hide(util.dom.getNext(t.ctl));
						},500);
					}
				});
			}, [], null,true);
			util.dom.on(document.body, 'input', function(e){
				var t, matchlist = _validator.matchCtl(e.target);
				var value = e.target.value;
				//如果是textarea并且输入为换行或全部是换行
				if(e.target.rows&&(value.indexOf("\n")==value.length-1||(value.length>1&&e.target.rows&&e.target.rows==value.length))) return;
				util.fn.each(matchlist,function(t){
					if(!t.delay) _validator.check(t,true);
					var newValue = _validator.getValue(t);
					if(newValue!=t.oldValue){
						t.oldValue = newValue;
						if(util.lang.isFunction(t.callbacks.onClick)){
							t.callbacks.onClick(newValue);
						}
					}
				});
			});
			//取消按钮
			util.dom.on(document.body, 'click', function(e){
				util.dom.hide(this);
				var t = this.getAttribute('cancelCtl');
				util.$(t).value = '';
				util.$(t).focus();
				var ctl;
				if(ctl = _validator.matchCtl(util.dom.getPre(this))){
					if(!ctl[0].delay) _validator.check(ctl[0],true);
				}
				e.preventDefault();
				e.stopPropagation();
			}, [], 'button[cancelCtl]');
		},
		getValue:function(insCtl){
			return insCtl.ctl.value;
		}
	};
	module.exports = exports = {
		register:function(ctllist){
			util.fn.each(ctllist,function(ctl){
				ctlList.push(_validator.convertToCTL(ctl));
			});
			_validator.process();
		},
		unregister:function(category){
			var category = category||"default";
			for(var i=ctlList.length-1;i>=0;i--){
				if(ctlList[i].category==category){
					ctlList.splice(i,1);
				}
			}
		},
		reset:function(cate){
			var category = cate;
			if(util.lang.isFunction(category)) {
				category = "default";
			}
			util.fn.each(ctlList,function(ctlIns,index) {
				if (ctlIns.category == category) {
					ctlIns.initStatus();
				}
			});
		},
		check:function(cate,cb){
			var category = cate;
			var callback = cb;
			if(util.lang.isFunction(category)){
				category = "default";
				callback = cate;
			}
			var tempInsCtlList = [],flag = false,uncheckList=[],checkingList=[],ctlIns = null,failed=false;
			for(var i= 0,l=ctlList.length;i<l;i++){
				ctlIns = ctlList[i];failed=false;
				if(ctlIns.category==category){
					if(ctlIns.delay){//each check
						_validator.check(ctlIns);
					}
					if(ctlIns.status==STATUS.FAILED){
						failed = true;//失败了
					}else if(ctlIns.status==STATUS.UNCHECK){
						uncheckList.push(ctlIns);
					}else if(ctlIns.status==STATUS.CHECKING){
						checkingList.push(ctlIns);
					}
				}
				if(failed){
					break;
				}
			}
			if(failed){
				util.lang.isFunction(callback)&&callback(false);
			}else{
				if(uncheckList.length>0) {
					util.fn.each(uncheckList, function (ctlIns) {
						_validator.check(ctlIns);
					});
					var self = this;
					util.fn.delayRun("validate.check",function(){
						self.check(category,callback);
					},400);
				}else if(checkingList.length>0){
					var promises = [],self=this;
					util.fn.each(checkingList,function(ctlIns){
						promises.push(ctlIns.promise);
					});
					Promise.all(promises).then(function(){
						util.lang.isFunction(callback)&&callback(true);
					},function(){
						util.lang.isFunction(callback)&&callback(false);
					});
				}else{
					util.lang.isFunction(callback)&&callback(true);
				}
			}
		}
	};
});