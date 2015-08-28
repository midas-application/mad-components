/**
 * Created by timlv on 2015/4/9.
 */
define(function(require,exports, module){
    var Util = require("../../mod/util");
    var Audio = function(container,options,cb){
        this.opts = {
            auto:true,
            audio:"",
            effect:"easeIn",
            mutedClass:"audio_muted"
        };
        this.container = container;
        this.touchTimes = 0;
        this.time = new Date().getTime();
        Util.fn.extend(this.opts,options);
        this.callbacks = {};
        Util.fn.extend(this.callbacks,cb);
        this.init();
    };
    Audio.prototype = {
        init:function(){
            this.container.innerHTML = '<span class="audio"></span>'+
                                        '<audio preload="auto" loop>'+
                                        '<source src="'+this.opts.audio+'" type="audio/mpeg"/>您的浏览器不支持 audio 标签</audio>';
            this.audioDom = Util.$("audio",this.container);
            this.audioBtnDom = Util.$(".audio",this.container);
            this.bindEvent();
        },
        volumeEffect:function(){
            var effectFunc = function(){};
            switch(this.opts.effect){
                case "easeIn":
                    effectFunc = function() {
                        var audioInterval = setInterval(function () {
                            var volume = self.audioDom.volume;
                            if (!volume) {
                                return;
                            }

                            if (volume >= 0.08) {
                                return;
                            }

                            if (volume) {
                                self.audioDom.volume += 0.02;
                            }
                        }, 1000);
                    };
                    break;
                default:
                    break;
            }
            return effectFunc;
        },
        bindEvent:function(){
            var self = this;
            this.audioBtnDom.addEventListener('canplaythrough', function() {
                this.volume = 0.02;
                self.volumeEffect()();
            }, false);
            Util.dom.on(this.audioBtnDom,"click",function(event) {
                if (self.touchTimes === 0 && self.audioDom.paused) {
                    self.audioDom.play();
                    Util.dom.removeClass(self.audioBtnDom,self.opts.mutedClass);
                    self.touchTimes = 1;
                }else {
                    var timeGap = new Date().getTime() - self.time;
                    if (timeGap > 400) {
                        if (self.audioDom.paused) {
                            Util.dom.removeClass(self.audioBtnDom, self.opts.mutedClass);
                            self.audioDom.play();
                        } else {
                            Util.dom.addClass(self.audioBtnDom, self.opts.mutedClass);
                            self.audioDom.pause();
                        }
                        self.time = new Date().getTime();
                    }
                }
            });
            if(this.opts.auto){
                setTimeout(function(){
                    self.audioDom.play();
                }, 2000);
            }
        }
    };
    module.exports = exports = Audio;
});