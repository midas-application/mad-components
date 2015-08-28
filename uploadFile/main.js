define(function(require, exports, module) {
	var UploadFile =  require("./uploadfile");
	var util = require("../../mod/util");
	var uploader =  new UploadFile(util.$("#uploadfilecon"));
	uploader.init();
	util.dom.on(util.$("#getUpload"),"click",function(){
		console.log(uploader.getFile());
	});
});