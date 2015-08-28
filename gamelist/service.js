INFO.services = {
	qqacct_save : {
		type : "recharge",
		code : "qqacct_save",
		name : "Q币",
		price : 1,
		amountUnit : "Q币",
		amountStep : 1,
		minAmount : 1,
		maxAmount : 9999,
		appid : "1450000186"
	},
	qqpacket : {
		status : 1,
		type : "service",
		code : "qqpacket",
		name : "QQ钻皇",
		price : 50,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 15,
		appid : "1450000150"
	},
	xxzxgj : {
		status : 0,
		type : "upgrade",
		code : "xxzxgj",
		baseCode : "xxqgame",
		tabService : "xxqgame,xxzxgj,sxxqgame",
		targetCode : "xxzxgp",
		name : "蓝钻豪华版",
		price : 5,
		amountStep : 1,
		params : {
			service_code : "XXZXGP",
			open_detail : "XXQGAME_{0},XXZXGJ_{1}"
		},
		minAmount : 1,
		maxAmount : 999,
		order : 30,
		appid : "1450000170"
	},
	ltmclub : {
		status : 1,
		type : "service",
		code : "ltmclub",
		name : "QQ会员",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 40,
		appid : "1450000151"
	},
	cjclubt : {
		status : 0,
		type : "service",
		code : "cjclubt",
		name : "超级会员",
		price : 20,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 30,
		appid : "1450000152"
	},
	cjclub : {
		status : 1,
		type : "upgrade",
		code : "cjclub",
		baseCode : "ltmclub",
		targetCode : "cjclubt",
		name : "超级会员",
		price : 10,
		amountStep : 1,
		params : {
			service_code : "CJCLUBT",
			open_detail : "LTMCLUB_{0},CJCLUB_{1}"
		},
		minAmount : 1,
		maxAmount : 999,
		order : 10,
		appid : "1450000152"
	},
	xxjzgw : {
		status : 1,
		type : "service",
		code : "xxjzgw",
		name : "黄钻贵族",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 50,
		appid : "1450000153"
	},
	xxqgame : {
		status : 1,
		type : "service",
		code : "xxqgame",
		name : "蓝钻贵族",
		tabService : "xxqgame,xxzxgp,sxxqgame",
		targetCode : "xxqgame",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 60,
		appid : "1450000154"
	},
	lzhda : {
		status : 0,
		type : "service",
		code : "-lzhda",
		name : "蓝钻贵族",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 60,
		appid : "1450000154"
	},
	xxqqf : {
		status : 1,
		type : "service",
		code : "xxqqf",
		name : "红钻贵族",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 70,
		appid : "1450000155"
	},
	xxzxyy : {
		status : 1,
		type : "service",
		code : "xxzxyy",
		name : "绿钻贵族",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 80,
		appid : "1450000156"
	},
	dnfhz : {
		status : 1,
		type : "service",
		code : "dnfhz",
		name : "DNF黑钻",
		price : 20,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 190,
		appid : "1450000157"
	},
	qqfczz : {
		status : 1,
		type : "service",
		code : "qqfczz",
		name : "飞车紫钻",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 210,
		appid : "1450000158"
	},
	petvip : {
		status : 1,
		type : "service",
		code : "petvip",
		name : "粉钻贵族",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 200,
		appid : "1450000159"
	},
	qqxwzz : {
		status : 1,
		type : "service",
		code : "qqxwzz",
		name : "炫舞紫钻",
		price : 20,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 180,
		appid : "1450000160"
	},
	cfclub : {
		status : 1,
		type : "service",
		code : "cfclub",
		name : "CF会员",
		price : 30,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 170,
		appid : "1450000161"
	},
	qqr2by : {
		status : 1,
		type : "service",
		code : "qqr2by",
		name : "音速紫钻",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 230,
		appid : "1450000162"
	},
	xxqqt : {
		status : 1,
		type : "service",
		code : "xxqqt",
		name : "QQ堂紫钻",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 220,
		appid : "1450000163"
	},
	qqbookby : {
		status : 1,
		type : "service",
		code : "qqbookby",
		name : "读书VIP",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 240,
		appid : "1450000164"
	},
	xxsqqm : {
		status : 1,
		type : "service",
		code : "xxsqqm",
		name : "超级QQ",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 110,
		appid : "1450000165"
	},
	avavip : {
		status : 1,
		type : "service",
		code : "avavip",
		name : "AVA精英",
		price : 30,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 160,
		appid : "1450000166"
	},
	mzyff : {
		status : 1,
		type : "service",
		code : "mzyff",
		name : "魔钻",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 250,
		appid : "1450000167"
	},
	xyvip : {
		status : 1,
		type : "service",
		code : "xyvip",
		name : "西游VIP",
		price : 20,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 150,
		appid : "1450000168"
	},
	qsbyqz : {
		status : 0,
		type : "service",
		code : "qsbyqz",
		name : "读书VIP",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : -1,
		appid : "1450000164"
	},
	xxzxgp : {
		status : 1,
		type : "service",
		code : "xxzxgp",
		name : "蓝钻豪华版",
		tabService : "xxqgame,xxzxgp,sxxqgame",
		price : 15,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 30,
		appid : "1450000170"
	},
	lzhdb : {
		status : 0,
		type : "service",
		code : "-lzhdb",
		name : "蓝钻豪华版",
		price : 15,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 30,
		appid : "1450000170"
	},
	czjrby : {
		status : 1,
		type : "service",
		code : "czjrby",
		name : "NBA2KOL全明星",
		price : 20,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 120,
		appid : "1450000171"
	},
	lkwg : {
		status : 1,
		type : "service",
		code : "lkwg",
		name : "洛克王国VIP",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 130,
		appid : "1450000172"
	},
	txsp : {
		status : 1,
		type : "service",
		code : "txsp",
		name : "好莱坞会员",
		price : 20,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 90,
		appid : "1450000173",
		defaultDiscount : "MP20130816173631670_01",
		discounts : {
			MP20130816173631670_01 : {
				discountRule : function(opt, type){
					opt = opt || {}, type = ~~type;
					var c = {3 : 45, 12 : 150}, result;
					switch(type){
						case 1 :
							if (c[opt.buy_quantity]) {
								result = {
									discountid : 'MP20130816173631670_01'
								};
							}else{
								result = {
									discountid : ''
								};
							}
							break;
						case 2 :
							if (c[opt.buy_quantity]) {
								result = {
									total_price : c[opt.buy_quantity]
								};
							}
							break;
						case 3 :
							var amount = Math.floor(opt.total_price / opt.unit_price), total = opt.unit_price * amount, mpid = '';
							U.fn.each(c, function(m, a){
								if (opt.total_price >= m && a > amount) {
									amount = a;
									total = m;
									mpid = 'MP20130816173631670_01';
								}
							});
							result = {
								total_price : total,
								buy_quantity : amount,
								discountid : mpid
							};
							break;
					}
					return result || false;
				},
				tips : "<i class=\"icon-mark\">优惠</i>开通<span class=\"tx-em\">3</span>个月优惠价<span class=\"tx-em\">45</span>元，<span class=\"tx-em\">12</span>个月优惠价<span class=\"tx-em\">150</span>元"
			}
		}
	},
	dsyqby : {
		status : 0,
		type : "service",
		code : "dsyqby",
		name : "读书VIP-原创",
		price : 6,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : -1,
		appid : "1450000174"
	},
	xsby : {
		status : 0,
		type : "service",
		code : "xsby",
		name : "读书VIP-图书",
		price : 6,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : -1,
		appid : "1450000175"
	},
    xxjzsj : {
        status : 1,
        type : "upgrade",
        code : "xxjzsj",
        baseCode: 'xxjzgw',
        targetCode : "xxjzghh",
        name : "黄钻贵族豪华版",
        price : 5,
        amountStep : 1,
        minAmount : 1,
        maxAmount : 999,
        params: {
            service_code: 'XXJZGHH',
            open_detail: 'XXJZGW_{0},XXJZSJ_{1}'
        },
        order : 20,
        appid : "1450000176"
    },
	xxjzghh : {
		status : 0,
		type : "service",
		code : "xxjzghh",
		name : "黄钻贵族豪华版",
		price : 15,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 20,
		appid : "1450000176"
	},
	jjxf : {
		status : 1,
		type : "service",
		code : "jjxf",
		name : "机甲旋风VIP",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 260,
		appid : "1450000177"
	},
	bqscby : {
		status : 0,
		type : "service",
		code : "bqscby",
		name : "表情商城会员",
		price : 15,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 261,
		appid : "1450000178"
	},
	wbclub : {
		status : 1,
		type : "service",
		code : "wbclub",
		name : "微博会员",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 262,
		appid : "1450000179",
		discounts : {
			'MA20131022175450346' : {
				onInit : function(){
					this.service.price = 8;
				}
			}
		}
	},
    mhvip : {
        status : 1,
        type : "service",
        code : "mhvip",
        name : "漫画vip",
        price : 10,
        amountStep : 1,
        minAmount : 1,
        maxAmount : 999,
        order : 263,
        appid : "1450000179"
    },
	superhxp : {
		status : 0,
		type : "service",
		code : "superhxp",
		name : "QQ华夏超级蓝钻",
		tabService : "xxqgame,xxzxgp,sxxqgame",
		serviceList : "superhxp,superxlp,cjlztti",
		price : 50,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 30,
		appid : "1450000180"
	},
	superxlp : {
		status : 0,
		type : "service",
		code : "superxlp",
		name : "QQ仙灵超级蓝钻",
		tabService : "xxqgame,xxzxgp,sxxqgame",
		serviceList : "superhxp,superxlp,cjlztti",
		price : 50,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 30,
		appid : "1450000181"
	},
	cjlztti : {
		status : 0,
		type : "service",
		code : "cjlztti",
		name : "天堂II超级蓝钻",
		tabService : "xxqgame,xxzxgp,sxxqgame",
		serviceList : "superhxp,superxlp,cjlztti",
		price : 50,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 30,
		appid : "1450000182"
	},
	superhx : {
		type : "upgrade",
		code : "superhx",
		baseCode : ["xxqgame", "xxzxgj"],
		serviceList : "superhx,superxl,supertt",
		targetCode : "superhxp",
		name : "QQ华夏超级蓝钻",
		price : 35,
		amountStep : 1,
		params : {
			service_code : "SUPERHXP",
			open_detail : "XXQGAME_{0},XXZXGJ_{1},SUPERHX_{2}"
		},
		minAmount : 1,
		maxAmount : 999,
		order : 30,
		appid : "1450000180"
	},
	superxl : {
		type : "upgrade",
		code : "superxl",
		baseCode : ["xxqgame", "xxzxgj"],
		serviceList : "superhx,superxl,supertt",
		targetCode : "superxlp",
		name : "QQ仙灵超级蓝钻",
		price : 35,
		amountStep : 1,
		params : {
			service_code : "SUPERXLP",
			open_detail : "XXQGAME_{0},XXZXGJ_{1},SUPERXL_{2}"
		},
		minAmount : 1,
		maxAmount : 999,
		order : 30,
		appid : "1450000181"
	},
	supertt : {
		status : 0,
		dir : "service",
		type : "upgrade",
		code : "supertt",
		baseCode : ["xxqgame", "xxzxgj"],
		serviceList : "superhx,superxl,supertt",
		targetCode : "cjlztti",
		name : "天堂II超级蓝钻",
		price : 35,
		amountStep : 1,
		params : {
			service_code : "CJLZTTI",
			open_detail : "XXQGAME_{0},XXZXGJ_{1},SUPERTT_{2}"
		},
		minAmount : 1,
		maxAmount : 999,
		order : 30,
		appid : "1450000182"
	},
	sxxqgame : {
		type : "service",
		code : ["superhxp", "superxlp", "cjlztti"],
		name : "超级蓝钻"
	},
	lxslby : {
		status : 1,
		type : "service",
		code : "lxslby",
		name : "V乐行会员",
		price : 30,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 999,
		order : 300,
		appid : "1450000512"
	},
 /*   syvip : {
        status : 1,
        type : "service",
        code : "syvip",
        name : "手游VIP",
        price : 10,
        amountStep : 1,
        minAmount : 1,
        maxAmount : 999,
        order : 310,
        appid : "1450000921"
    },*/

	dnfdq : {
		type : "game",
		code : "-dnfdq",
		name : "DNF点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 100000,
		order : 20,
		amountUnit : "点券",
		appid : 1450000238,
		presetAmount : [3000, 5000, 10000],
		status : 1,
		key : "dnfdianquan",
        discounts : {
            MP20131202162637808_56: {
                onInit: function() {
                    this.checkQualify(function(res) {
                        var referenceNode = U.$('#tabService' + this.id), newNode;
                        if (res.ret == 0 && res.qualified == 1) {
                            newNode = document.createElement('a');
                            newNode.setAttribute('href', 'javascript:location=\'/h5/active/wechatdnf.shtml\'+location.search');
                            newNode.innerHTML = '<img onload="window.MPAY.resize()" src="//imgcache.gtimg.cn/bossweb/h5pay/images/active/201405056_dq/dq_20140506_2.jpg" style="width:100%;"/>';
                        } else {
                            newNode = document.createElement('div');
                            newNode.className = 'wechat-msg';
                            newNode.innerHTML = '<p>对不起，您是微信支付老用户，充值后不能获得点券赠送</p>';
                            this._discount = {};
                            this.actid = '';
                            this.mpid = '';
                        }
                        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
                        window.MPAY.resize();
                    });
                },
                mpResult: {
                    nofound: '微信支付新用户可获赠额外点券赠送（银行卡/手机/微信号/QQ号均需首次开通）',
                    error: '您是微信支付老用户，不能获得点券赠送（银行卡/手机/微信号/QQ号均需首次开通）',
                    failure: '您是微信支付新用户，获得1000DNF点券赠送！（24小时内到账）',
                    success: '您是微信支付新用户，获得1000DNF点券赠送！（24小时内到账）'
                }
            }
        }
	},
	qqsgpay : {
		type : "game",
		code : "-qqsgpay",
		name : "三国点券",
		price : 0.1,
		amountStep : 10,
		minAmount : 10,
		maxAmount : 100000,
		order : 120,
		amountUnit : "点券",
		presetAmount : [50, 100, 200],
		status : 0,
		appid : 1450000240,
		key : "sanguodianquan"
	},
	xxxy : {
		type : "game",
		code : "-xxxy",
		name : "寻仙仙玉",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000000,
		order : 80,
		amountUnit : "仙玉",
		presetAmount : [500, 1000, 3000],
		status : 1,
		appid : 1450000241,
		key : "xunxianxianyu"
	},
	xwdq : {
		type : "game",
		code : "-xwdq",
		name : "炫舞点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 500,
		maxAmount : 10000,
		order : 170,
		gameConf : {
			serverUrl : "http://x5.qq.com/comm-htdocs/js/game_area/utf8verson/x5_server_select_utf8.js",
			serverName : "X5ServerSelect",
			roleAction : "check"
		},
		amountUnit : "点券",
		presetAmount : [500, 1000, 5000],
		status : 1,
		appid : 1450000242,
		key : "xuanwudianquan"
	},
	avad : {
		type : "game",
		code : "-avad",
		name : "战地之王AVA点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 1000,
		maxAmount : 10000,
		order : 100,
		gameConf : {
			serverUrl : "http://ava.qq.com/comm-htdocs/js/game_area/utf8verson/ava_server_select_utf8.js",
			serverName : "AVAServerSelect",
			roleAction : "check"
		},
		amountUnit : "点券",
		presetAmount : [1000, 2000, 3000],
		status : 1,
		appid : 1450000243,
		key : "zhandizhiwangavadianquan"
	},
	fhzg : {
		type : "game",
		code : "-fhzg",
		name : "烽火战国点券",
		price : 0.1,
		amountStep : 10,
		minAmount : 10,
		maxAmount : 20000,
		order : 190,
		gameConf : {
			serverUrl : "http://zg.qq.com/comm-htdocs/js/game_area/utf8verson/zg_server_select_utf8.js",
			serverName : "ZGServerSelect",
			roleAction : "check"
		},
		amountUnit : "点券",
		presetAmount : [50, 100, 300],
		status : 1,
		appid : 1450000245,
		key : "fenghuozhanguodianquan"
	},
	ffowy : {
		type : "game",
		code : "-ffowy",
		name : "自由幻想彩玉点",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 200,
		gameConf : {
			serverUrl : "http://ffo.qq.com/comm-htdocs/js/game_area/utf8verson/ffo_server_select_utf8.js",
			serverName : "FFOServerSelect",
			roleAction : "select"
		},
		amountUnit : "彩玉点",
		presetAmount : [1000, 2000, 5000],
		status : 1,
		appid : 1450000247,
		key : "ziyouhuanxiangcaiyudian"
	},
	dmlq : {
		type : "game",
		code : "dmlq",
		name : "大明龙权点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 2000000,
		order : 150,
		gameConf : {
			serverUrl : "http://dm.qq.com/comm-htdocs/js/game_area/utf8verson/dm_server_select_utf8.js",
			serverName : "DMServerSelect",
			roleAction : "check"
		},
		amountUnit : "点券",
		presetAmount : [1000, 2000, 5000],
		status : 1,
		appid : 1450000249,
		key : "daminglongquandianquan"
	},
	cfdq : {
		type : "game",
		code : "-cfdq",
		name : "CF点",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 10,
		gameConf : {
			serverUrl : "http://cf.qq.com/comm-htdocs/js/game_area/utf8verson/cf_server_select_utf8.js",
			serverName : "CFServerSelect",
			roleAction : "check"
		},
		amountUnit : "CF点",
		presetAmount : [1000, 3000, 5000],
		status : 1,
		appid : 1450000251,
		key : "cfdianquan"
	},
	qqkdc : {
		type : "game",
		code : "qqkdc",
		name : "QQ飞车点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 70,
		gameConf : {
			serverUrl : "http://speed.qq.com/comm-htdocs/js/game_area/utf8verson/speed_server_select_utf8.js",
			serverName : "SPEEDServerSelect",
			roleAction : "check"
		},
		amountUnit : "点券",
		presetAmount : [1000, 2000, 3000],
		status : 1,
		appid : 1450000253,
		key : "qqfeichedianquan"
	},
	lszt : {
		type : "game",
		code : "-lszt",
		name : "绿色征途点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 110,
		amountUnit : "点券",
		presetAmount : [100, 200, 500],
		status : 1,
		appid : 1450000255,
		key : "lvsezhengtudianquan"
	},
	qxzb : {
		type : "game",
		code : "-qxzb",
		name : "七雄争霸元宝",
		price : 0.1,
		amountStep : 10,
		minAmount : 10,
		maxAmount : 100000,
		order : 50,
		gameConf : {
			serverUrl : "http://7.qq.com/comm-htdocs/js/game_area/utf8verson/7_main_server_select_utf8.js",
			serverName : "QXZBServerSelect",
			roleAction : "check"
		},
		amountUnit : "元宝",
		presetAmount : [100, 300, 500],
		status : 1,
		appid : 1450000260,
		key : "qixiongzhengbayuanbao"
	},
    jldq : {
        type : "game",
        code : "-jldq",
        name : "剑灵点券",
        price : 0.01,
        amountStep : 100,
        minAmount : 100,
        maxAmount : 1000000,
        order : 51,
        gameConf : {
            limitOnServerOff : true,
            serverUrl : "http://gameact.qq.com/comm-htdocs/js/game_area/utf8verson/bns_server_select_utf8.js",
            serverName : "BNSServerSelect",
            roleAction : "select"
        },
        amountUnit : "点券",
        presetAmount : [1000, 3000, 5000],
        status : 1,
        appid : 1450000292,
        key : "jianlingdianquan"
    },
	tmxy : {
		type : "game",
		code : "-tmxy",
		name : "QQ西游元宝",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 2000000,
		order : 90,
		gameConf : {
			serverUrl : "http://qqxy.qq.com/comm-htdocs/js/game_area/utf8verson/qqxy_server_select_utf8.js",
			serverName : "QQXYServerSelect",
			roleAction : "check"
		},
		amountUnit : "元宝",
		presetAmount : [1000, 2000, 3000],
		status : 1,
		appid : 1450000262,
		key : "qqxiyouyuanbao"
	},
	qqxxyb : {
		type : "game",
		code : "-qqxxyb",
		name : "QQ仙侠传元宝",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 60,
		amountUnit : "元宝",
		presetAmount : [1000, 2000, 3000],
		status : 1,
		appid : 1450000264,
		key : "qqxianxiazhuanyuanbao"
	},
	loldq : {
		type : "game",
		code : "-loldq",
		name : "英雄联盟点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 100000,
		order : 30,
		gameConf : {
			serverUrl : "http://lol.qq.com/comm-htdocs/js/game_area/utf8verson/lol_server_select_utf8.js",
			serverName : "LOLServerSelect",
			roleAction : "check"
		},
		amountUnit : "点券",
		presetAmount : [1000, 5000, 10000],
		status : 1,
		appid : 1450000267,
		key : "yingxionglianmengdianquanlol"
	},
	qcdd : {
		type : "game",
		code : "-qcdd",
		name : "Q宠大乐斗斗豆",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 140,
		amountUnit : "斗豆",
		presetAmount : [1000, 3000, 5000],
		status : 1,
		appid : 1450000269,
		key : "qchongdaledou"
	},
	cjdq : {
		type : "game",
		code : "-cjdq",
		name : "第九大陆点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 160,
		amountUnit : "点券",
		presetAmount : [500, 1000, 3000],
		status : 0,
		appid : 1450000272,
		key : "dijiudaludianquan"
	},
	ylzt : {
		type : "game",
		code : "-ylzt",
		name : "御龙在天金子",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 40,
		gameConf : {
			serverUrl : "http://yl.qq.com/comm-htdocs/js/game_area/utf8verson/yl_server_select_utf8.js",
			serverName : "YLServerSelect",
			roleAction : "check"
		},
		amountUnit : "金子",
		presetAmount : [1000, 3000, 5000],
		status : 1,
		appid : 1450000275,
		key : "yulongzaitianjinzi"
	},
	qqxjdj : {
		type : "game",
		code : "-qqxjdj",
		name : "QQ仙境点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 220,
		amountUnit : "点券",
		presetAmount : [500, 1000, 3000],
		status : 0,
		appid : 1450000277,
		key : "qqxianjingdianquan"
	},
	qqxy : {
		type : "game",
		code : "-qqxy",
		name : "轩辕传奇金币",
		price : 0.1,
		amountStep : 10,
		minAmount : 10,
		maxAmount : 10000000,
		order : 270,
		gameConf : {
			serverUrl : "http://xy.qq.com/comm-htdocs/js/game_area/utf8verson/xy_server_select_utf8.js",
			serverName : "XYServerSelect",
			roleAction : "select"
		},
		amountUnit : "金币",
		presetAmount : [100, 300, 1000],
		status : 1,
		appid : 1450000285,
		key : "xuanyuanchuanqijinbi"
	},
	wcbydq : {
		type : "game",
		code : "-wcbydq",
		name : "王朝霸域黄金",
		price : 0.1,
		amountStep : 10,
		minAmount : 10,
		maxAmount : 500000,
		order : 260,
		gameConf : {
			recommend : false,
			serverUrl : "http://wang.qq.com/comm-htdocs/js/game_area/utf8verson/wcby_server_select_utf8.js",
			serverName : "WCBYServerSelect",
			roleAction : "check"
		},
		amountUnit : "黄金",
		presetAmount : [50, 100, 300],
		status : 1,
		appid : 1450000287,
		key : "wangchaobayuhuangjin"
	},
	nbakdq : {
		type : "game",
		code : "-nbakdq",
		name : "NBA2KOL点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 280,
		gameConf : {
			serverUrl : "http://nba2k.qq.com/comm-htdocs/js/game_area/utf8verson/nba2k_server_select_utf8.js",
			serverName : "NBA2KServerSelect",
			roleAction : "check"
		},
		amountUnit : "点券",
		presetAmount : [1000, 2000, 5000],
		status : 1,
		appid : 1450000290,
		key : "nba2koldianquan"
	},
	tt2dq : {
		type : "game",
		code : "-tt2dq",
		name : "新天堂II点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 290,
		gameConf : {
			serverUrl : "http://tiantang2.qq.com/comm-htdocs/js/game_area/utf8verson/tiantang2_server_select_utf8.js",
			serverName : "TIANTANG2ServerSelect",
			roleAction : "select"
		},
		amountUnit : "点券",
		presetAmount : [1000, 2000, 5000],
		status : 1,
		appid : 1450000291,
		key : "xintiantang2dianquan"
	},
	zzqx : {
		type : "game",
		code : "-zzqx",
		name : "战争前线点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 1000,
		maxAmount : 1000000,
		order : 300,
		gameConf : {
			serverUrl : "http://wf.qq.com/comm-htdocs/js/game_area/utf8verson/wf_server_select_utf8.js",
			serverName : "WFServerSelect",
			roleAction : "select"
		},
		amountUnit : "点券",
		presetAmount : [1000, 2000, 5000],
		status : 1,
		appid : 1450000293,
		key : "zhanzhengqianxiandianquan"
	},
	qqjx : {
		type : "game",
		code : "-qqjx",
		name : "QQ九仙元宝",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 310,
		gameConf : {
			serverUrl : "http://9.qq.com/comm-htdocs/js/game_area/utf8verson/9_server_select_utf8.js",
			serverName : "_9ServerSelect",
			roleAction : "check"
		},
		amountUnit : "元宝",
		presetAmount : [1000, 3000, 5000],
		status : 1,
		appid : 1450000296,
		key : "qqjiuxianyuanbao"
	},
	qiqit : {
		type : "game",
		code : "-qiqit",
		name : "球球堂点券",
		price : 0.1,
		amountStep : 10,
		minAmount : 10,
		maxAmount : 20000,
		order : 320,
		gameConf : {
			serverUrl : "http://qqt.qq.com/comm-htdocs/js/game_area/utf8verson/qqt_server_select_utf8.js",
			serverName : "QQTServerSelect",
			roleAction : "check"
		},
		amountUnit : "点券",
		presetAmount : [1000, 3000, 5000],
		status : 0,
		appid : 1450000297,
		key : "qiuqiutangdianquan"
	},
	tzwydq : {
		type : "game",
		code : "-tzwydq",
		name : "糖之物语点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 99999,
		order : 330,
		gameConf : {
			serverUrl : "http://tang.qq.com/comm-htdocs/js/game_area/utf8verson/tg_server_select_utf8.js",
			serverName : "TGServerSelect",
			roleAction : "check"
		},
		amountUnit : "点券",
		presetAmount : [1000, 3000, 5000],
		status : 0,
		appid : 1450000298,
		key : "tangzhiwuyudianquan"
	},
	wozdq : {
		type : "game",
		code : "-wozdq",
		name : "WOZ点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 330,
		gameConf : {
			serverUrl : "http://gameact.qq.com/comm-htdocs/js/game_area/utf8verson/woz_server_select_utf8.js",
			serverName : "WOZServerSelect",
			roleAction : "check"
		},
		amountUnit : "点券",
		presetAmount : [1000, 3000, 5000],
		status : 1,
		appid : 1450000295,
		key : "wozdianquan"
	},
	lyxd : {
		type : "game",
		code : "-lyxd",
		name : "烈焰行动点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 330,
		gameConf : {
			serverUrl : "http://gameact.qq.com/comm-htdocs/js/game_area/utf8verson/btr_server_select_utf8.js",
			serverName : "BTRServerSelect",
			roleAction : "check"
		},
		amountUnit : "点券",
		presetAmount : [1000, 3000, 5000],
		status : 0,
		appid : 1450000294,
		key : "lieyanxingdongdianquan"
	},
	jhdq : {
		type : "game",
		code : "-jhdq",
		name : "将魂元宝",
		price : 0.1,
		amountStep : 10,
		minAmount : 10,
		maxAmount : 100000,
		order : 340,
		gameConf : {
			serverUrl : "http://gameact.qq.com/comm-htdocs/js/game_area/utf8verson/jh_server_select_utf8.js",
			serverName : "JHServerSelect",
			roleAction : "select"
		},
		amountUnit : "元宝",
		presetAmount : [100, 300, 500],
		status : 1,
		appid : 1450000289,
		key : "jianghunyuanbao"
	},
	qsji : {
		type : "game",
		code : "-qsji",
		name : "枪神纪点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 200,
		maxAmount : 10000,
		order : 350,
		gameConf : {
			serverUrl : "http://gameact.qq.com/comm-htdocs/js/game_area/utf8verson/tps_server_select_utf8.js",
			serverName : "TPSServerSelect",
			roleAction : "check"
		},
		amountUnit : "点券",
		presetAmount : [1000, 3000, 5000],
		status : 1,
		appid : 1450000288,
		key : "qiangshenjidianquan"
	},
	qqfsj : {
		type : "game",
		code : "-qqfsj",
		name : "QQ封神记元宝",
		price : 0.1,
		amountStep : 10,
		minAmount : 10,
		maxAmount : 100000,
		order : 360,
		gameConf : {
			serverUrl : "http://gameact.qq.com/comm-htdocs/js/game_area/utf8verson/fs_server_select_utf8.js",
			serverName : "FSServerSelect",
			roleAction : "check"
		},
		amountUnit : "元宝",
		presetAmount : [100, 200, 500],
		status : 1,
		appid : 1450000286,
		key : "qqfengshenjiyuanbao"
	},
	qqclqb : {
		type : "game",
		code : "-qqclqb",
		name : "QQ仙灵金子",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 370,
		gameConf : {
			serverUrl : "http://gameact.qq.com/comm-htdocs/js/game_area/utf8verson/h2_server_select_utf8.js",
			serverName : "H2ServerSelect",
			roleAction : "select"
		},
		amountUnit : "金子",
		presetAmount : [1000, 3000, 5000],
		status : 1,
		appid : 1450000284,
		key : "qqxianlingjinzi"
	},
	xzwydq : {
		type : "game",
		code : "-xzwydq",
		name : "星之物语星币",
		price : 0.1,
		amountStep : 10,
		minAmount : 10,
		maxAmount : 99999,
		order : 305,
		gameConf : {
			serverUrl : "http://ss.qq.com/comm-htdocs/js/game_area/utf8verson/ss_server_select_utf8.js",
			serverName : "SSServerSelect",
			roleAction : "select"
		},
		amountUnit : "星币",
		presetAmount : [10, 100, 1000],
		status : 0,
		appid : 1450000281,
		key : "xingzhiwuyujinbi"
	},
	hltjcz : {
		type : "game",
		code : "-hltjcz",
		name : "逆战点",
		price : 0.01,
		amountStep : 100,
		minAmount : 1000,
		maxAmount : 1000000,
		order : 306,
		gameConf : {
			serverUrl : "http://gameact.qq.com/comm-htdocs/js/game_area/utf8verson/nz_server_select_utf8.js",
			serverName : "NZServerSelect",
			roleAction : "check"
		},
		amountUnit : "逆战点",
		presetAmount : [1000, 3000, 5000],
		status : 1,
		appid : 1450000280,
		key : "nizhandian"
	},
	dzsdq : {
		type : "game",
		code : "-dzsdq",
		name : "斗战神金子",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 307,
		amountUnit : "金子",
		presetAmount : [1000, 2000, 3000],
		status : 1,
		appid : 1450000278,
		key : "douzhanshenjinzi"
	},
	jjxfdq : {
		type : "game",
		code : "-jjxfdq",
		name : "机甲旋风星券",
		price : 0.1,
		amountStep : 10,
		minAmount : 10,
		maxAmount : 20000,
		order : 308,
		amountUnit : "星券",
		presetAmount : [100, 300, 500],
		status : 1,
		appid : 1450000276,
		key : "jijiaxuanfengxingquan"
	},
	myqxzb : {
		type : "game",
		code : "-myqxzb",
		name : "漫游七雄争霸元宝",
		price : 0.1,
		amountStep : 10,
		minAmount : 10,
		maxAmount : 100000,
		order : 380,
		gameConf : {
			serverUrl : "http://7.qq.com/comm-htdocs/js/game_area/utf8verson/7_manyou_server_select_utf8.js",
			serverName : "QXZBServerSelect",
			roleAction : "check"
		},
		amountUnit : "元宝",
		presetAmount : [100, 300, 500],
		status : 0,
		appid : 1450000274,
		key : "manyouqixiongzhengbayuanbao"
	},
	wzwdq : {
		type : "game",
		code : "-wzwdq",
		name : "万王之王3点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 390,
		gameConf : {
			serverUrl : "http://3.qq.com/comm-htdocs/js/game_area/utf8verson/3_server_select_utf8.js",
			serverName : "_3ServerSelect",
			roleAction : "select"
		},
		amountUnit : "点券",
		presetAmount : [1000, 2000, 3000],
		status : 1,
		appid : 1450000273,
		key : "wanwangzhiwang3dianquan"
	},
	// pcqqc : {
		// type : "game",
		// code : "-pcqqc",
		// name : "摩登城市云币",
		// price : 0.1,
		// amountStep : 10,
		// minAmount : 10,
		// maxAmount : 1000,
		// order : 400,
		// amountUnit : "云币",
		// presetAmount : [100, 300, 500],
		// status : 1,
		// appid : 1450000271,
		// key : "modengchengshiyunbi"
	// },
	qqtgsn : {
		type : "game",
		code : "-qqtgsn",
		name : "QQ特工点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 410,
		amountUnit : "点券",
		presetAmount : [500, 1000, 3000],
		status : 1,
		appid : 1450000270,
		key : "qqtegongdianquan"
	},
	qqhxwy : {
		type : "game",
		code : "-qqhxwy",
		name : "QQ幻想彩玉",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 500000,
		order : 420,
		gameConf : {
			serverUrl : "http://fo.qq.com/comm-htdocs/js/game_area/utf8verson/fo_server_select_utf8.js",
			serverName : "FOServerSelect",
			roleAction : "select"
		},
		amountUnit : "彩玉",
		presetAmount : [1000, 2000, 5000],
		status : 1,
		appid : 1450000268,
		key : "qqhuanxiangcaiyu"
	},
	qqshdq : {
		type : "game",
		code : "-qqshdq",
		name : "QQ水浒银票",
		price : 0.1,
		amountStep : 10,
		minAmount : 10,
		maxAmount : 100000,
		order : 430,
		amountUnit : "银票",
		presetAmount : [100, 300, 500],
		status : 1,
		appid : 1450000266,
		key : "qqshuihuyinpiao"
	},
	qqxw2 : {
		type : "game",
		code : "-qqxw2",
		name : "炫舞时代金币",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 440,
		amountUnit : "金币",
		presetAmount : [1000, 5000, 10000],
		status : 1,
		appid : 1450000265,
		key : "xuanwushidaijinbi"
	},
	ydzwym : {
		type : "game",
		code : "-ydzwym",
		name : "夜店之王金币",
		price : 0.1,
		amountStep : 10,
		minAmount : 10,
		maxAmount : 600000,
		order : 450,
		amountUnit : "金币",
		presetAmount : [300, 500, 1000],
		status : 1,
		appid : 1450000263,
		key : "yedianzhiwangjinbi"
	},
	jykg : {
		type : "game",
		code : "-jykg",
		name : "就要K歌K币",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 460,
		gameConf : {
			serverUrl : "http://ktv.qq.com/comm-htdocs/js/game_area/utf8verson/ktv_server_select_utf8.js",
			serverName : "KTVServerSelect",
			roleAction : "check"
		},
		amountUnit : "K币",
		presetAmount : [1000, 3000, 5000],
		status : 1,
		appid : 1450000261,
		key : "jiuyaokgekbi"
	},
	dmyxpd : {
		type : "game",
		code : "-dmyxpd",
		name : "大明游戏专区点券",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 10000000,
		order : 470,
		gameConf : {
			serverUrl : "http://dm.qq.com/comm-htdocs/js/game_area/utf8verson/dmyxzq_server_select_utf8.js",
			serverName : "DMYXZQServerSelect",
			roleAction : "check"
		},
		amountUnit : "点券",
		presetAmount : [1000, 2000, 5000],
		status : 0,
		appid : 1450000259,
		key : "damingyouxizhuanqudianquan"
	},
	dj2dy : {
		type : "game",
		code : "-dj2dy",
		name : "刀剑2刀玉",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 1000000,
		order : 480,
		gameConf : {
			serverUrl : "http://d2.qq.com/comm-htdocs/js/game_area/utf8verson/dj2_server_select_utf8.js",
			serverName : "DJ2ServerSelect",
			roleAction : "check"
		},
		amountUnit : "刀玉",
		presetAmount : [1000, 3000, 5000],
		status : 1,
		appid : 1450000258,
		key : "daojian2daoyu"
	},
	hxfr : {
		type : "game",
		code : "-hxfr",
		name : "QQ华夏点券",
		serviceList : "hxfr,hxjyb,hxyyb,hxtyb",
		price : 0.01,
		amountStep : 100,
		minAmount : 100,
		maxAmount : 24000,
		order : 490,
		amountUnit : "点券",
		presetAmount : [500, 1000, 3000],
		status : 1,
		appid : 1450000256,
		key : "qqhuaxiadianquan"
	},
    qqhxsj : {
        type : "game",
        code : "-qqhxsj",
        name : "幻想世界金子",
        price : 0.01,
        amountStep : 100,
        minAmount : 100,
        maxAmount : 1000000,
        order : 491,
        gameConf : {
            serverUrl : "http://hxsj.qq.com/comm-htdocs/js/game_area/utf8verson/hxsj_server_select_utf8.js",
            serverName : "HXSJServerSelect",
            roleAction : "select"
        },
        amountUnit : "金子",
        presetAmount : [1000, 5000, 10000],
        status : 1,
        appid : 1450000257,
        key : "huanxiangshijiejinzi"
    },
    ttds : {
        type : "game",
        code : "-ttds",
        name : "天堂点券",
        price : 0.01,
        amountStep : 100,
        minAmount : 100,
        maxAmount : 1000000,
        order : 492,
        gameConf : {
            serverUrl : "http://tiantang.qq.com/comm-htdocs/js/game_area/utf8verson/tiantang_server_select_utf8.js",
            serverName : "TIANTANGServerSelect",
            roleAction : "select"
        },
        amountUnit : "点券",
        presetAmount : [500, 1000, 3000],
        status : 1,
        appid : 1450000279,
        key : "tiantangdianquan"
    },
	hxjyb : {
		type : "game",
		code : "-hxjyb",
		name : "QQ华夏金元宝",
		serviceList : "hxfr,hxjyb,hxyyb,hxtyb",
		price : 30,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 8,
		order : 500,
		amountUnit : "金元宝",
		presetAmount : [1, 3, 5],
		status : 0,
		appid : 1450000254,
		key : "qqhuaxiajinyuanbao"
	},
	hxyyb : {
		type : "game",
		code : "-hxyyb",
		name : "QQ华夏银元宝",
		serviceList : "hxfr,hxjyb,hxyyb,hxtyb",
		price : 10,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 24,
		order : 510,
		amountUnit : "银元宝",
		presetAmount : [1, 5, 20],
		status : 0,
		appid : 1450000252,
		key : "qqhuaxiayinyuanbao"
	},
	hxtyb : {
		type : "game",
		code : "-hxtyb",
		name : "QQ华夏铜元宝",
		price : 1,
		amountStep : 1,
		minAmount : 1,
		maxAmount : 240,
		order : 520,
		amountUnit : "铜元宝",
		presetAmount : [10, 100, 200],
		serviceList : "hxfr,hxjyb,hxyyb,hxtyb",
		status : 0,
		appid : 1450000250,
		key : "qqhuaxiatongyuanbao"
	},
	slyx : {
		type : "game",
		code : "-slyx",
		name : "丝路英雄丝路币",
		price : 0.1,
		amountStep : 10,
		minAmount : 10,
		maxAmount : 10000,
		order : 530,
		gameConf : {
			serverUrl : "http://sl.qq.com/comm-htdocs/js/game_area/utf8verson/sl_server_select_utf8.js",
			serverName : "SLServerSelect",
			roleAction : "check"
		},
		amountUnit : "丝路币",
		presetAmount : [100, 300, 500],
		status : 1,
		appid : 1450000248,
		key : "siluyinxiongsilubi"
	},
	yxdweb : {
		type : "game",
		code : "-yxdweb",
		name : "英雄岛点券",
		price : 0.01,
		amountStep : 10,
		minAmount : 500,
		maxAmount : 10000,
		order : 560,
		amountUnit : "点券",
		presetAmount : [1000, 3000, 5000],
		status : 1,
		appid : 1450000244,
		key : "yingxiongdaodianquan"
	},
	shubi : {
		type : "game",
		code : "-app23872",
		name : "书币",
		price : 0.01,
		amountStep : 10,
		minAmount : 200,
		maxAmount : 9999999,
		order : 540,
		amountUnit : "书币",
		zoneid : 1,
		presetAmount : [1000, 3000, 5000],
		status : 1,
		appid : 1450000219,
		pfversion:"android",
		key:"shubi"
	},
    qyji : {
        type : "game",
        code : "-qyji",
        name : "Q游记点券",
        price : 0.1,
        amountStep : 10,
        minAmount : 10,
        maxAmount : 10000,
        order : 570,
        gameConf: {
            serverUrl: 'http://17q.qq.com/comm-htdocs/js/game_area/utf8verson/qyj_server_select_utf8.js',
            serverName: 'QYJServerSelect',
            roleAction: 'check'
        },
        amountUnit : "点券",
        presetAmount : [100, 500, 1000],
        status : 1,
        appid : 1450000933
    },
    zyzq : {
        type : "game",
        code : "-zyzq",
        name : "自由足球自由币",
        price : 0.01,
        amountStep : 10,
        minAmount : 100,
        maxAmount : 100000,
        order : 580,
        gameConf: {
            serverUrl: 'http://fsf.qq.com/comm-htdocs/js/game_area/utf8verson/fsf_server_select_utf8.js',
            serverName: 'FSFServerSelect',
            roleAction: 'check'
        },
        amountUnit : "点券",
        presetAmount : [1000, 5000, 10000],
        status : 1,
        appid : 1450000934
    },
    tntdq :{
        type : "game",
        code : "-tntdq",
        name : "TNT点券",
        price : 0.01,
        amountStep : 10,
        minAmount : 100,
        maxAmount : 10000000,
        order : 590,
        amountUnit : "点券",
        presetAmount : [100, 1000, 10000],
        status : 1,
        appid : 1450000980
    },
    qqncdzt: {
        type : "game",
        code : "-qqncdzt",
        name : "疯狂联盟点券",
        price : 0.1,
        amountStep : 10,
        minAmount : 10,
        maxAmount : 1000000,
        order : 600,
        amountUnit : "点券",
        presetAmount : [100, 500, 1000],
        status : 0,
        appid : 1450001018
    }

};
