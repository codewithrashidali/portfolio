
$(document).ready(function(){
       
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){

       $('#menu').removeClass('fa-times');
       $('header').removeClass('toggle');

    });

     $('a{href="#"}').click(function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,

        },
          500,
          'linear'
        );

     });

});

/*var typed = new Typed(".typing",{
    strings:["","Full stack developer",],
    typespeed:2000,
    backspeed:5000,
    loop:true
}) */