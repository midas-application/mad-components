define(function(require, exports, module) {
	//uploadService: window.top.window['callback'](data);
	var util = require("../../mod/util");
	var compresser = require("./compress");
	var JPEGEncoder = require("./jpegEncoder");
	var MegaPixImage = require("./megapiximage");
	var message = require("../util/message");
	var Mask = require("../util/mask");
	var dialogView= require("../util/dialogbox");
	var Loading = require("../util/loading");
	var FileInfo = function(name,type,data,size,file){
		this.name = name;
		this.data = data;
		this.file = file;
		this.type = type;
		this.size = size;
	};
	var UploadFile = function(container,opt,callback){
		this.opt = {
			formatError:"请选择正确图片格式({0})文件。",
			sizeError:"选择的文件超过单个文件最大限制，请重新选择。",
			uploadError:"无法上传内容，设备不支持。",
			bigImageError:"预览原图失败，请重试。",
			loadMsg:"图片加载中，请稍候...",
			reviewImageWith:50,
			reviewImageHeight:50,
			debug:false,
			maxCount:3,
			maxSize:100*1024//100K
		};
		this.supportedFormat = ["jpg",".jpeg","gif"];
		util.fn.extend(this.opt,opt);
		this.data = {};
		this.currentView = null;
		this.container = util.$(container)||util.$("body");
		this.supported = typeof FileReader!="undefined";
		this.id = +new Date();
	};
	UploadFile.prototype = {
		_log:function(msg){
			if(this.opt.debug){
				alert(msg);
			}
		},
		_genDom:function(){
			this.formID ="uploadfile-"+this.id;
			var html="";
			if(this.supported){
				html = '<div id="'+this.formID+'" class="tencent-payment-upload clearfix">'+
					'<div class="title"><span class="tx-thin">最多可上传'+this.opt.maxCount+'张</span></div>'+
					'<div class="imageview"><div class="operator"><a href="javascript:void(0);" class="icon-add"></a><input type="file" name="upload"/></div></div>'+
					'</div>';
			}else{
				html = '<div id="'+this.formID+'" class="tencent-payment-upload clearfix"><div class="title"><span class="tx-thin">尊敬的用户，此设备暂不支持上传。</span></div></div>';
			}
			this.container.innerHTML = html;
			if(this.supported){
				this.viewContainer =  util.$("#"+this.formID+" .imageview");
				this.operator = util.$("#"+this.formID+" .operator");
				this.fileInput = util.$('#'+this.formID+" input");
			}
		},
		_genFileInfo:function(name,type,data,size,file){
			return new FileInfo(name,type,data,size,file);
		},
		removeFile:function(imageid){
			this._log("remove");
			if(imageid&&this.data[imageid]){
				delete this.data[imageid];
				this.fileInput.value="";
				util.$('#'+this.formID+"  .imageview").removeChild(util.$('#'+this.formID+"  .imageview span[imageid='"+imageid+"']"));
				if(this.getFileTotal()<this.opt.maxCount){
					util.dom.show(this.operator);
				}
			}
		},
		empty:function(){
			for(var id in this.data){
				this.removeFile(id);
			}
		},
		_showBigImage:function(imageid){
			if(!imageid) return;
			var file = this.data[imageid].file;
			this._log(file);
			if(!file){ message.show(this.opt.bigImageError); return;}
			var mpImg = new MegaPixImage(file);
			var image = document.createElement('img');
			// defautl config
			var param = {
				type: "image/jpeg",
				maxWidth: util.dom.getClientWidth(),
				maxHeight:  util.dom.getClientHeight(),
				quality: .7
			};
			this.currentView = imageid;
			var self = this;
			Mask.show();
			Loading.show(this.opt.loadMsg);
			compresser.getImageMeta(file, function (err, meta) {
				if (meta && meta.tiff && meta.tiff.Orientation) {
					param = util.fn.extend(param, {orientation: meta.tiff.Orientation.value});
				}
				mpImg.onrender = function () {
					var cb = function(){
						Loading.hide();
						if(image.naturalHeight==0||image.naturalWidth==0){
							Mask.hide();
							self._log("onrender error");
							message.show(self.opt.bigImageError);return;
						}
						self._log("show big image");
						var imageHeight = Math.min(image.naturalHeight,(param.maxHeight-30));
						image.style.width =Math.min(image.naturalWidth,param.maxWidth)+"px";
						image.style.height =imageHeight+"px";
						var dom = util.dom.toDom('<div class="image-context"><div class="image-title"><span>'+file.name+'</span></div></div>');
						dom.insertBefore(image,dom.firstChild);
						dialogView.show(dom,{
							data:{id:imageid},
							css:{
								//height:param.maxHeight+"px",
								width:param.maxWidth+"px",
								"padding-top":Math.max(0,((param.maxHeight-imageHeight)/2-20))+"px"
							},
							onExit:function(data){
								if(!data.selected){
									self.removeFile(data.id);
								}
								self.hideView();
							}
						});
					};
					if(image.naturalHeight==0||image.naturalWidth==0){
						util.fn.delayRun("upload.showBigImage",function(){cb();},5000,self);
					}else{
						cb();
					}
				};
				mpImg.render(image, param);
			});
		},
		_viewImage:function(id,file,picParam){
			Loading.show(this.opt.loadMsg);
			var mpImg = new MegaPixImage(file);
			var image = document.createElement('img');
			// defautl config
			var param = util.fn.extend(picParam||{},{
				type: "image/jpeg",
				maxHeight: 50,
				maxWidth:  50,
				quality: .5
			});
			image.style.width = param.maxWidth+"px";
			image.style.height = param.maxHeight+"px";
			image.className = "preimage";
			var self = this;
			var html = '<span imageid="'+id+'" class="viewsnapimage"></span>';
			compresser.getImageMeta(file, function (err, meta) {
				if (meta && meta.tiff && meta.tiff.Orientation) {
					param = util.fn.extend(param, {orientation: meta.tiff.Orientation.value});
				}
				mpImg.onrender = function () {
					self.viewContainer.insertBefore(util.dom.toDom(html), self.operator);
					util.$("[imageid='"+id+"']").appendChild(image);
					if(self.getFileTotal()>=self.opt.maxCount){
						util.dom.hide(self.operator);
					}
					Loading.hide();
				};
				mpImg.render(image, param);
			});
		},
		_preUpload:function(){
			var file = this.fileInput.files[0];
			this.fileInput.value="";
			if (file) {
				var self = this;
				var ext = file.name.match(/\.(\w+)$/);
				if(ext&&this.supportedFormat.indexOf(ext[1])==-1) {//google nexus can't get the file name
					message.show(String.format(self.opt.formatError,this.supportedFormat.join(","))); 
					return;
				}
				
				Loading.show(this.opt.loadMsg);
				compresser.compress(file,{
					maxWidth : 320,
					maxHeight : 480,
					quality : .5,
					type : 'image/jpeg'
				}, function(dataUrl,err) {
					self._log("load");
					Loading.hide();
					if(err){
						if(err.message=="type"){
							message.show(String.format(self.opt.formatError,self.supportedFormat.join(","))); 
							return;
						}else{
							//message.show("解析图片异常，错误："+err.message); 
						}
					}
					var tempFile = self._genFileInfo(file.name,file.type,dataUrl[1],file.size,file);
					dataUrl = dataUrl.split(',');
					var type = /image\/([^;]+);/.exec(dataUrl[0])[1];
					var size  = dataUrl[1].length;
					if(size>self.opt.maxSize){ 
						message.show(self.opt.sizeError); 
						return;
					}
					var tempFile = self._genFileInfo(file.name,file.type,dataUrl[1],size,file);
					var id = +new Date();
					self.data[String(id)]=tempFile;
					self._viewImage(id,file,{maxHeight:self.opt.reviewImageHeight,maxWidth:self.opt.reviewImageWith});
				});
			}else{
				message.show(this.opt.uploadError); 
			}
		},
		_bindEvent:function(){
			var self = this;
			/*
			util.dom.on(util.$('#'+this.formID+" .icon-add"), 'click', function() {
				if(self.getFileTotal()<self.opt.maxCount){
					self.fileInput.click();
				}
			});*/
			util.dom.on(this.fileInput,"change",function(){
				self._preUpload();
			});
			/*
			var mousemove = "mousemove";
			if ('ontouchstart' in window){
				mousemove = "touchstart";
			}
			util.dom.on(document.body, mousemove, function(e){
				util.dom.setStyle(self.viewOperator,{
					top:10,//util.dom.getScrollTop(this),
					left:10//util.dom.getScrollLeft(this)
				});
				self.hoveImage = this.getAttribute("name");
				util.fn.delayRun("viewimage.touch",function(){
					self.hoveImage = null;
					util.dom.hide(self.viewOperator);
				},1000);
				util.dom.show(self.viewOperator);
			},[],".imageview span");
			*/
			//click the image view the big image
			util.dom.on('#'+this.formID+" .imageview",'click',function(e){
				//delay can improve the rate of sucess
				var id = e.target.parentNode.getAttribute("imageid");
				util.fn.delayRun("upload.showBigImage",function(){self._showBigImage(id);},500,self);
			},[],'img');
			util.dom.on(window, 'onorientationchange' in window ? 'orientationchange' : 'resize', function(){
				dialogView.hide();
				util.fn.delayRun("upload.showBigImage",function(){self._showBigImage(self.currentView);},(util.ua.iOS ? 0 : 300),self);
			});
		},
		getFileTotal:function(){
			var i = 0;
			util.fn.each(this.data,function(value,key){
				i++;
			});
			return i;
		},
		hideView:function(){
			Mask.hide();
			dialogView.hide();
			this.currentView = null;
		},
		getFile:function(){
			var returnValue = [];
			util.fn.each(this.data,function(value,key){
				returnValue.push({
					name:value.name,
					data:value.data
				});
			});
			return returnValue;
		},
		init:function(){
			this._genDom();
			if(this.supported){
				this._bindEvent();
			}
		}
	};
	module.exports = exports = UploadFile;
});	