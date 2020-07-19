
var ServerArray = new Array();

ServerArray.push("cs2.zombieden.cn:27050");		//csgo ze1
ServerArray.push("cs4.zombieden.cn:27050");		//csgo ze2
ServerArray.push("cs2.zombieden.cn:27051");		//csgo ze3
ServerArray.push("cs5.zombieden.cn:27050");		//csgo ze4
ServerArray.push("cs5.zombieden.cn:27051");		//csgo ze5
ServerArray.push("cs4.zombieden.cn:27051");		//csgo ze6
ServerArray.push("cs5.zombieden.cn:27052");		//csgo ze7
ServerArray.push("cs2.zombieden.cn:27052");		//csgo ze8
ServerArray.push("cs4.zombieden.cn:27052");		//csgo ze9
ServerArray.push("cs7.zombieden.cn:27050");		//csgo zm1
ServerArray.push("cs7.zombieden.cn:27051");		//csgo zm2
ServerArray.push("cs2.zombieden.cn:27053");	//csgo draw
ServerArray.push("cs6.zombieden.cn:27055");	//csgo ttt 1#
ServerArray.push("cs6.zombieden.cn:27056");	//csgo ttt 2#
ServerArray.push("cs3.zombieden.cn:27050");	//csgo bhop 1
ServerArray.push("cs3.zombieden.cn:27051");	//csgo bhop 2
ServerArray.push("cs3.zombieden.cn:27052");	//csgo bhop 3
ServerArray.push("cs6.zombieden.cn:27101");	//csgo kz1
ServerArray.push("cs6.zombieden.cn:27102");	//csgo kz2
ServerArray.push("cs6.zombieden.cn:27103");	//csgo kz3
ServerArray.push("cs3.zombieden.cn:27053");	//csgo mg course 1
ServerArray.push("cs3.zombieden.cn:27054");	//csgo mg course 2
ServerArray.push("cs6.zombieden.cn:27050");	//csgo mg pvp 1
ServerArray.push("cs6.zombieden.cn:27051");	//csgo mg pvp 2
ServerArray.push("cs7.zombieden.cn:27053");	//csgo mg pvp 3
ServerArray.push("cs6.zombieden.cn:27201");	//csgo surf 1
ServerArray.push("cs6.zombieden.cn:27202");	//csgo surf 2
ServerArray.push("cs6.zombieden.cn:27203");	//csgo surf 3
ServerArray.push("cs4.zombieden.cn:27053");	//csgo dr
ServerArray.push("cs6.zombieden.cn:27105");	//csgo match10
ServerArray.push("cssze.cn:27015");			//css ze
ServerArray.push("cs1.zombieden.cn:27017");	//css mg
ServerArray.push("cs1.zombieden.cn:27026");	//css surf
ServerArray.push("cs1.zombieden.cn:27020");	//css attack on titian
ServerArray.push("cs1.zombieden.cn:27018");	//css bhop
ServerArray.push("cs1.zombieden.cn:27025");	//css dr
ServerArray.push("cs1.zombieden.cn:27019");	//css trikz
ServerArray.push("cs1.zombieden.cn:27023");	//css dayz

var site = "https://zombieden.cn/getserverinfo.php?address=";
let id_zed = "zed";

$.each(ServerArray, function(i, e){
    $.getJSON(site + e, function(data) {
        if (data.AppID == 730) {
            var server = new Object();
            server.id = i;
            server.server_name = data.HostName;
            server.ip = data.ip.replace(":"+data.GamePort, "");
            server.port = data.GamePort;
            server.user = data.Players;
            server.max_user = data.MaxPlayers;
            server.map_name = data.Map;
            server.remarks = data.MapChi;
            appendServer($("#"+id_zed+ " tbody"), createServer(server));
        }
    })
});
