var id_fys = "fys";
var url = "https://fyscs.com/KxnrlApp/";
var token_fys = $.cookie("token_fys")
if (token_fys == null || token_fys == undefined) {
    $.get("https://fyscs.com/", function (data, status, xhr) {
        var cookie = xhr.getResponseHeader("set-cookie");
        let cookie_arr = cookie.split(";");
        token_fys = $.trim(cookie_arr[0].split(":")[1]);
        let age = $.trim(cookie_arr[2].split(":")[1]);
        $.cookie("token_fys", token_fys, {"age": age, "path": "/"})
    });
}
var param = {"action": "dashboard", "token": token_fys};
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