$(document).ready(function(){

    $(".filter-menu").on('click', function(){
        var value = $(this).attr('data-filter');
        
        if (value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });

    $(window).scroll(function () {
        var st = $(this).scrollTop() + 10;

        $('section').each(function() {
            var id = $(this).attr('id');
            if (st > $(this).offset().top && st <= $(this).offset().top + $(this).height() ) {                    
                $('.navigation a[href="#' + id + '"]').addClass('link-active');
            } else {
                $('.navigation a[href="#' + id + '"]').removeClass('link-active');   
            }   
        });
    });

});
