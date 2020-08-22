  
    $(document).ready(function(){
        $('.sidebar__item').click(function(e){
            $('.sidebar__item').removeClass('sidebar__item_active');
            $('.content-item').removeClass('content-item_active');
            $(this).addClass('sidebar__item_active');
             $($(this).attr('href')).addClass('content-item_active');
          });

        $('.sidebar__item:nth-child(2)').click();

          $('#content-tbody .content-row .content-plus').on('click', f_acc);
       
      function f_acc(){
        $('#content-tbody .content__inner-table').not($(this).parent().next('tr')).slideUp(500);
          $(this).parent().next('tr').slideToggle(500);
          $(this).toggleClass('content-plus_active');
      }


      $('.content__inner-table__details').on('click', function() {
        $('.overlay, #popup').fadeIn('slow');
        });

      $('.popup__close').on('click', function() {
        $('.overlay, #popup').fadeOut('slow');
    });      
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.overlay').fadeOut();
		}
	});
	
	$('.overlay').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	





    }); 