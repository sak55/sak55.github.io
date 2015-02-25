$(document).ready(function () {

    $("#formBox").hide();
    $(".container").hide();

    $("#login").click(function () {
        if ($(".container").is(":hidden")) {
            $(".container").slideDown("slow");
            $("#loginBox").hide();
        }
    });

    $('#contact').click(function () {
        if ($("#formBox").is(":hidden")) {
            $("#formBox").slideDown("slow");
        } else {
            $("#formBox").hide();
        }
    });

    $("button").click(function () {

    });



});