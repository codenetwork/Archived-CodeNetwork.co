var fadenav;
fadenav = function() {
    $(window).scroll(function () {
        // set distance user needs to scroll before we fadeIn navbar
        if ($(this).scrollTop() > 50) {
            $('#navbar').fadeIn();
        } else {
            $('#navbar').fadeOut();
        }
    });
};

var hidenav;
hidenav = function() {
    $("#navbar").hide();
    fadenav();
};

var typedwords;
typedwords = function() {
    var changeword = $('#changeword');
    changeword.typed({
        strings: [" whatever ", " robots ", " open source ", " beasts ", " software ", " AdamBot ", " Jubb ", " startups" ],
        typeSpeed: 40,
        startDelay: 150,
        backSpeed: 20,
        loop: true,
        showCursor: true,
        cursorChar: " "
    });
};