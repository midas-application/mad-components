/**
 * Created by timlv on 2015/4/9.
 */
define(function(require,exports, module){
    var Util = require("../../mod/util"),opts = {
        endDate:"",
        currentDate:""
    },notify = Util.fn.noop;
    var start = function(){
        var diff = function(from,to){
            var msCount;
            from  = Date.convertToDate(from);
            to = Date.convertToDate(to);
            var diff = to.getTime() - from.getTime();
            return {
                diffD: Math.floor(diff / (24 * 60 * 60 * 1000)),
                diffH: Math.floor(diff / (60 * 60 * 1000)),
                diffM: Math.floor(diff / (60 * 1000)),
                diffS: Math.floor(diff / 1000)
            };
        };
        /*
         * 这里以秒为单位计算，一天=86400秒（60*60*24），
         * 一天的秒数减去已过的小时（小时*60*60）再减去分钟（分数*60）再减去秒数
         * 等于一天中剩下的秒数
         */
        var diffTime = diff(opts.currentDate,opts.endDate);
        var diffs = diffTime.diffS % 60,diffm = diffTime.diffM % 60,diffh = diffTime.diffH % 24;
        function timeCounter() {
            var s = diffs < 10 ? ('0' + diffs) : diffs;
            var h = diffm < 10 ? ('0' + diffh) : diffh;
            var m = diffm < 10 ? ('0' + diffm) : diffm;
            if (diffs <= 0) {
                diffs--;
                total = 86400;
            }
            notify(diff.diffD,diffTime.diffH%24,diffTime.diffM%60,diffTime.diffS%60);
        }
        //每隔一秒钟行动一次timeCounter()函数,这里1000是毫秒,1000毫秒=1秒
        var timerObj = window.setInterval(function () {
            timeCounter();
        }, 1000);
    };
    module.exports = exports = {
        setDate:function(opts,cb){
            Util.fn.extend(opts,opts);
            if(cb) {
                notify = cb;
            }
            start();
        }
    };
});