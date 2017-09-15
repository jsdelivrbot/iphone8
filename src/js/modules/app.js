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



$('.item1').click(function(e){
    e.preventDefault();
    // $('.form-option__one').attr('selected', true);
    // $('.form-option__two').attr('selected', false);
    // $('.form-option__three').attr('selected', false);
    $(this).addClass("goodsActive");
    $(".goods--8").attr("src","https://fast.ulmart.ru/ns/verstka/preorder_iphone8/img/6.png");
    $('.item2').removeClass("goodsActive");
    $('.item3').removeClass("goodsActive");
    $('.item4').removeClass("goodsActive");
    $('.item5').removeClass("goodsActive");
    $('.item6').removeClass("goodsActive")
});
$('.item2').click(function(e){
    e.preventDefault();
    // $('.form-option__one').attr('selected', false);
    // $('.form-option__two').attr('selected', true);
    // $('.form-option__three').attr('selected', false);
    $(this).addClass("goodsActive");
    $(".goods--8").attr("src","https://fast.ulmart.ru/ns/verstka/preorder_iphone8/img/6-black.png");
    $('.item1').removeClass("goodsActive");
    $('.item3').removeClass("goodsActive");
    $('.item4').removeClass("goodsActive");
    $('.item5').removeClass("goodsActive");
    $('.item6').removeClass("goodsActive")
});

$('.item3').click(function(e){
    e.preventDefault();
    // $('.form-option__one').attr('selected', false);
    // $('.form-option__two').attr('selected', false);
    // $('.form-option__three').attr('selected', true);
    // $('.form-option__three').attr('selected', 'selected');
    $(this).addClass("goodsActive");
    $(".goods--8").attr("src","https://fast.ulmart.ru/ns/verstka/preorder_iphone8/img/6-gold.png");
    $('.item2').removeClass("goodsActive");
    $('.item1').removeClass("goodsActive");
    $('.item4').removeClass("goodsActive");
    $('.item5').removeClass("goodsActive");
    $('.item6').removeClass("goodsActive")
});

$('.item4').click(function(e){
    e.preventDefault();
    // $('.form-option__one').attr('selected', false);
    // $('.form-option__two').attr('selected', false);
    // $('.form-option__three').attr('selected', true);
    // $('.form-option__three').attr('selected', 'selected');
    $(this).addClass("goodsActive");
    $(".goods--8plus").attr("src","https://fast.ulmart.ru/ns/verstka/preorder_iphone8/img/6.png");
    $('.item2').removeClass("goodsActive");
    $('.item3').removeClass("goodsActive");
    $('.item1').removeClass("goodsActive");
    $('.item5').removeClass("goodsActive");
    $('.item6').removeClass("goodsActive")
});

$('.item5').click(function(e){
    e.preventDefault();
    // $('.form-option__one').attr('selected', false);
    // $('.form-option__two').attr('selected', false);
    // $('.form-option__three').attr('selected', true);
    // $('.form-option__three').attr('selected', 'selected');
    $(this).addClass("goodsActive");
    $(".goods--8plus").attr("src","https://fast.ulmart.ru/ns/verstka/preorder_iphone8/img/6-black.png");
    $('.item2').removeClass("goodsActive");
    $('.item3').removeClass("goodsActive");
    $('.item4').removeClass("goodsActive");
    $('.item1').removeClass("goodsActive");
    $('.item6').removeClass("goodsActive")
});

$('.item6').click(function(e){
    e.preventDefault();
    // $('.form-option__one').attr('selected', false);
    // $('.form-option__two').attr('selected', false);
    // $('.form-option__three').attr('selected', true);
    // $('.form-option__three').attr('selected', 'selected');
    $(this).addClass("goodsActive");
    $(".goods--8plus").attr("src","https://fast.ulmart.ru/ns/verstka/preorder_iphone8/img/6-gold.png");
    $('.item2').removeClass("goodsActive");
    $('.item3').removeClass("goodsActive");
    $('.item4').removeClass("goodsActive");
    $('.item5').removeClass("goodsActive");
    $('.item1').removeClass("goodsActive")
});
