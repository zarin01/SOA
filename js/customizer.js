/**
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

(function($){

	// Site title and description
	wp.customize('blogname',function(value){
		value.bind(function(to){
			$('.site-title').text(to);
		});
	});


	wp.customize('blogdescription',function(value){
		value.bind(function(to){
			$('.site-description').text(to);
		});
	});


	// Accent background colors
	wp.customize('genesis_block_theme_button_color',function(value) {
		value.bind( function( to ) {
			$('button:not(.preview-toggle), input[type="button"], input[type="reset"], input[type="submit"], .button, .comment-navigation a, .drawer .tax-widget a, .su-button, h3.comments-title, .page-numbers.current, .page-numbers:hover, .page-numbers a:hover, #page .more-link:hover').css('background-color',to);
		} );
	} );

	// Accent text colors
	wp.customize('genesis_block_theme_button_color',function(value) {
		value.bind( function( to ) {
			$('.entry-content p a, .entry-content p a:hover, .post-navigation a:hover .post-title, .entry-header .entry-title a:hover, #page .more-link:hover, .site-footer a, .main-navigation a:hover, .main-navigation ul li.current-menu-item a, .main-navigation ul li.current-page-item a').css('color',to);
		} );
	} );

})(jQuery);



(function ($) {
    function initSlider() {
        let slideIndex = 1;
        showSlides(slideIndex);
		console.log('test');
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let slides = $('.soa-qoutes');
            let dots = $('.dot');
            if (n > slides.length) { slideIndex = 1; }
            if (n < 1) { slideIndex = slides.length; }
            slides.hide();
            dots.removeClass('active');
            $(slides[slideIndex - 1]).fadeIn();
            $(dots[slideIndex - 1]).addClass('active');
        }

        $('.prev').click(function () {
            plusSlides(-1);
        });

        $('.next').click(function () {
            plusSlides(1);
        });

        $('.dot').click(function () {
            let index = $(this).index();
            currentSlide(index + 1);
        });
    }

    $(document).ready(function () {
        initSlider();
    });
})(jQuery);