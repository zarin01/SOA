/**
 * Footer Slider JS
 *
 */

(function ($) {
    
    function initSlider() {
        let slideIndex = 1;
        showSlides(slideIndex);
		
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