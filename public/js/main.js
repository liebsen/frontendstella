
$(document).ready(function(){
	"use strict";
    window_resize()
     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     
    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.active-bottle-carousel').owlCarousel({
        items:1,
        loop:true,
        nav: false,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    $('.play-btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    $('#mc_embed_signup').find('form').ajaxChimp();

    setTimeout(() => {
        $('.spinner-outer').fadeOut('fast',() => {
            $('.loading').fadeTo('slow',1) 
        })        
    },2000)
});

$(window).on('resize', function(){
    window_resize()
});

$(document).on('click','.menu-burger, .menu-items',function() {
  $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
  $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');      
});
    
window_resize = () => {
    var window_width     = $(window).width(),
    window_height        = window.innerHeight,
    header_height        = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen            = window_height - header_height;

    console.log(window_height)
    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);
}
