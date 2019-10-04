$(function(){
    menu = $('nav ul');
    
    $('#toggle-btn').on('click', function(e) {
        console.log('clicked nav li');
        
        menu.slideToggle();
    });

    $(window).resize(function(){
        
        var w = $(this).width();
        if(w > 1000 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
    $('nav li').on('click',function(e) {
        var w = $(window).width();
        if (w < 1000) {
            menu.slideToggle();
        }
    });
    $('.open-menu').height($(window).height());
    

});

$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {

    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            console.log(target);
            console.log(target.length);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus(); 
                    };
                });
            }
        }
    });
    var input = document.getElementById("myInput");
    input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});