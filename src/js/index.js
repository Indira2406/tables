$(document).ready(function(){
    /* сабтаблицы */
    $('#content-tbody .content-row .content-plus').on('click', f_acc);


function f_acc(){
$('index.html, page1.html, page3.html #content-tbody .content__inner-table').not($(this).parent().next('tr')).slideUp();
    $(this).parent().next('tr').slideToggle();
    $(this).toggleClass('content-plus_active');
}

    /* попап */
  $('.content__inner-table__details').on('click', function() {
    $('.overlay, .popup').fadeIn('slow');
  
}); 


/* закрытие попап по клику на крестик*/
  $('.popup__close').on('click', function() {
    $('.overlay, .popup').fadeOut('slow');
});      
/* закрытие попап по клику на esc*/
$(document).keydown(function(e) {
    if (e.keyCode === 27) {
        e.stopPropagation();
        $('.overlay').fadeOut();
    }
});
/* закрытие попап по клику на подложку*/
$('.overlay').click(function(e) {
    if ($(e.target).closest('.popup').length == 0) {
        $(this).fadeOut();					
    }
});	


$(".content__inner-table__details").click(function(){
    $('body').css('overflow', 'hidden');
}); 

$(".popup .popup__close").click(function(){
    $('body').css('overflow', 'auto');
}); 



}); 