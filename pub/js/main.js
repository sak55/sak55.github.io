$(document).ready(function () {

    $("#formBox").hide();

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