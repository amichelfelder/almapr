
$('.item-1').click( function() {

    $("#exitos-1").addClass("display");

    $("#exitos-2").removeClass("display");

    $("#exitos-3").removeClass("display");

    $("#exitos-4").removeClass("display");

    $("#exitos-5").removeClass("display");

    $("#exitos-6").removeClass("display");

    $("#exitos-7").removeClass("display");

} );
$('.item-2').click( function() {

    $("#exitos-1").removeClass("display");

    $("#exitos-2").addClass("display");

    $("#exitos-3").removeClass("display");

    $("#exitos-4").removeClass("display");

    $("#exitos-5").removeClass("display");

    $("#exitos-6").removeClass("display");

    $("#exitos-7").removeClass("display");

} );
$('.item-3').click( function() {

    $("#exitos-1").removeClass("display");

    $("#exitos-2").removeClass("display");

    $("#exitos-3").addClass("display");

    $("#exitos-4").removeClass("display");

    $("#exitos-5").removeClass("display");

    $("#exitos-6").removeClass("display");

    $("#exitos-7").removeClass("display");

} );
$('.item-4').click( function() {

    $("#exitos-1").removeClass("display");

    $("#exitos-2").removeClass("display");

    $("#exitos-3").removeClass("display");

    $("#exitos-4").addClass("display");

    $("#exitos-5").removeClass("display");

    $("#exitos-6").removeClass("display");

    $("#exitos-7").removeClass("display");

} );
$('.item-5').click( function() {

    $("#exitos-1").removeClass("display");

    $("#exitos-2").removeClass("display");

    $("#exitos-3").removeClass("display");

    $("#exitos-4").removeClass("display");

    $("#exitos-5").addClass("display");

    $("#exitos-6").removeClass("display");

    $("#exitos-7").removeClass("display");

} );
$('.item-6').click( function() {

    $("#exitos-1").removeClass("display");

    $("#exitos-2").removeClass("display");

    $("#exitos-3").removeClass("display");

    $("#exitos-4").removeClass("display");

    $("#exitos-5").removeClass("display");

    $("#exitos-6").addClass("display");

    $("#exitos-7").removeClass("display");

} );
$('.item-7').click( function() {

    $("#exitos-1").removeClass("display");

    $("#exitos-2").removeClass("display");

    $("#exitos-3").removeClass("display");

    $("#exitos-4").removeClass("display");

    $("#exitos-5").removeClass("display");

    $("#exitos-6").removeClass("display");

    $("#exitos-7").addClass("display");

} );


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

$('.hamburguer-menu').click( function() {


    $(".responsive-items").removeClass("hide");
    $(".responsive-items").addClass("show");

} );
$('.close-menu').click( function() {

    $(".responsive-items").removeClass("show");
    $(".responsive-items").addClass("hide");

} );

$('.responsive-link').click( function() {

    $(".responsive-items").removeClass("show");
    $(".responsive-items").addClass("hide");

} );


    
var toggleExitos = function(){
    var menu = document.getElementById('nuestros-exitos')
    menu.classList.toggle('show-exitos');
    var menu = document.getElementById('add')
    menu.classList.toggle('show-exitos');
    
}

    
var toggleBanda1 = function(){
    var menu = document.getElementById('banda1')
    menu.classList.toggle('show-hover')
    
}
    
var toggleBanda2 = function(){
    var menu = document.getElementById('banda2')
    menu.classList.toggle('show-hover')
    
}
    
var toggleBanda4 = function(){
    var menu = document.getElementById('banda4')
    menu.classList.toggle('show-hover')
    
}