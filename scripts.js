
$(function(){

    $("#inboxBtn").click(function() {
        $(".load").hide();
        $(".load").css({"visibility":"visible"});
        $("#inbox").show();
    });

    $("#carnetBtn").click(function() {
        $(".load").hide();
        $(".load").css({"visibility":"visible"});
        $("#carnet").show();
    });

    $("#aboutBtn").click(function() {
        $(".load").hide();
        $(".load").css({"visibility":"visible"});
        $("#about").show();
    });


});