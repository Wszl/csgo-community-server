var url = "https://servers.93x.net/server/";
let id_x = "x";
$.get(url, function(data){
    var dom = $.parseHTML(data);
    let servers = $(dom).find("#serversList tr");
    servers.each(function(i, e) {
        if (i != 0) {
            var children =  $(e).children();
            var server = new Object();
            server.id = i;
            server.server_name = $(children).eq(0).text();
            server.map_name = $(children).eq(1).text();
            server.user = $(children).eq(2).text().split("/")[0];
            server.max_user = $(children).eq(2).text().split("/")[1];
            server.ip = $(children).eq(3).text().split(":")[0];
            server.port = $(children).eq(3).text().split(":")[1];
            server.remarks = $(children).eq(6).text();
            appendServer($("#"+id_x+ " tbody"), createServer(server));
        }
    })
});
