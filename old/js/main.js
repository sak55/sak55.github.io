$(document).ready(function () {

    $("#formBox").hide();
    $(".container").hide();

    $("#loginBtn").click(function () {
        if ($(".container").is(":hidden")) {
            $("#loginBox").slideUp("slow");
            $(".container").slideDown("slow");
        }
    });

    $('#contact').click(function () {
        if ($("#formBox").is(":hidden")) {
            $("#formBox").slideDown("slow");
        } else {
            $("#formBox").slideUp();
        }
    });

//    $("#loginBox").mousemove(function (e) {
            //        $('#jaws').css({
            //            'top': e.clientY - 110,
            //            'left': e.clientX - 100
            //        });
            //    });


    $("...").click(function () {

    });



});