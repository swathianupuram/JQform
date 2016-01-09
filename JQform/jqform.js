$(document).ready(function() {

    $('input')[0].oninput = function() {
        sUp = /^[A-Za-z]+$/;
        sUser = $('#userName').val();
        if (sUser.match(sUp)) {
            $('#ok').css("display", "block");
            $('#notok').css("display", "none");
            $('#uname').addClass("has-success");
            $('#uname').removeClass("has-error");

        } else {
            $('#notok').css("display", "block");
            $('#ok').css("display", "none");
            $('#uname').addClass("has-error");
        }
    };


    $('input')[1].oninput = function() {
        nAmt = $('#Amount').val();
        if (nAmt > 0) {
            $('#ok1').css("display", "block");
            $('#amt').addClass("has-success");
            $('#notok1').css("display", "none");
            $('#amt').removeClass("has-error");

        } else {
            $('#notok1').css("display", "block");
            $('#amt').addClass("has-error");
            $('#ok1').css("display", "none");
        }

    };


    $('input')[2].oninput = function() {
        sPp = /^.+$/;
        sPwd = $('#Password').val();
        if (sPwd.match(sPp) && sPwd.length < 10) {
            $('#ok2').css("display", "block");
            $('#pwd').addClass("has-success");
            $('#notok2').css("display", "none");
            $('#pwd').removeClass("has-error");

        } else {
            $('#ok2').css("display", "none");
            $('#notok2').css("display", "block");
            $('#pwd').addClass("has-error");
        }

    };


    $('#buttn').click(function() {
        $('#heading').css("display", "block");;
        $('#details').text('Username:   ' + sUser);
        $('#amtdetails').text('Amount:   ' + 'Rs ' + nAmt);
    });

});
