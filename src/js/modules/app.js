$('.countdown').downCount({
    date: '29 september 2017 00:00:00',
    offset: +3,
    regional:"ru",
    format:"on"
});


$('.countdown2').downCount({
    date: '22 september 2017 00:00:00',
    offset: +3,
    regional:"ru",
    format:"on"
});


$(window).scroll(function() {
    if($(this).scrollTop() > 500) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});
$('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
});


// $(window).on('load', function(){
//   var top = $(window.location.hash).offset().top;
//   $('.test').stop().animate({
//     scrollTop: top
//   }, 1000);
// });