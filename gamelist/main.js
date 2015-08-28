define(function(require, exports, module) {
	var GameList =  require("./gamelist");
	var util = require("../../mod/util");
	var Session =  require("../../mod/sid");
	var userInfo = {
		uin: "2689897702",
        skey: "ARX94m-Enyw70E8Br9kgHI0o",
        vkey: "ARX94m-Enyw70E8Br9kgHI0o",
        sid: "ARX94m-Enyw70E8Br9kgHI0o"
	};
	var session = new Session({
        uin: userInfo.uin,
        sid: userInfo.sid
    });
    var gamezone = null;
	var gameList =  new GameList(util.$("#game-container"),{},{
			onClick:function(game){
				console.log(game);
	            require.async('module/gamelist/gamezone', function(GameZone) {
	            	if(gamezone){
	            		gamezone.rebind({game:game});
	            	}else{
		                gamezone =  new GameZone(util.$("#gamezone-container"),{
		                	game:game,
		                	app:{
		                		sandbox:true,
		                		session:session
		                	}
		                },{
						});
						gamezone.init();
					}
	            });
			},
			onSearch:function(value){
				console.log(value);
			}
		}
	);
	gameList.init();
});