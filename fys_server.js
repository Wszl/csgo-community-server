var id_fys = "fys";
var url = "https://fyscs.com/KxnrlApp/";
var param = {"action": "dashboard", "token": "6t0nb5a33deub33r6261oerts4"};
$.post(url, param, function(data) {
    var dom_fys = $.parseHTML(data);
    let servers = $(dom_fys).find("#serverTable tr");
    servers.each(function(i, e) {
        if (i != 0) {
            var children =  $(e).children();
            var server = new Object();
            server.id = i;
            server.server_name = $(children).eq(2).text();
            server.map_name = $(children).eq(3).text();
            server.user = $(children).eq(5).text().split("/")[0];
            server.max_user = $(children).eq(5).text().split("/")[1];
            let address = $(children).eq(6).find("a").attr("href").split("%20")[1];
            server.ip = address.split(":")[0];
            server.port = address.split(":")[1];
            server.remarks = $(children).eq(4).text();
            appendServer($("#"+id_fys+ " tbody"), createServer(server));
        }
    })
});