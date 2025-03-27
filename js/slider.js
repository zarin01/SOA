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
            let slides = $('.soa-quotes');
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


/**
 * Home Slider JS (Updated for YouTube Videos)
 *
 */
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.home-slider');
    const sliderWrapper = slider.querySelector('.slider-wrapper');
    const sliderItems = slider.querySelectorAll('.slider-item');
    const prevButton = slider.querySelector('.prev');
    const nextButton = slider.querySelector('.next');
    const dots = slider.querySelectorAll('.slider-dots .dot');
    let currentIndex = 0;
    let autoSlideInterval;

    function updateSlides() {
        sliderItems.forEach((item, index) => {
            item.classList.remove('active', 'left', 'right', 'hidden');
            if (index === currentIndex) {
                item.classList.add('active');
            } else if (index === (currentIndex - 1 + sliderItems.length) % sliderItems.length) {
                item.classList.add('left');
            } else if (index === (currentIndex + 1) % sliderItems.length) {
                item.classList.add('right');
            } else {
                item.classList.add('hidden');
            }
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        updateSlides();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        updateSlides();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    prevButton.addEventListener('click', function () {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    nextButton.addEventListener('click', function () {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            stopAutoSlide();
            currentIndex = index;
            updateSlides();
            startAutoSlide();
        });
    });

    updateSlides();
    startAutoSlide();
});



document.getElementById("show-more-button").addEventListener("click", function() {
    const elements = document.querySelectorAll(".show-more");
    elements.forEach(el => {
        if (el.classList.contains("not-active") || !el.classList.contains("active")) {
            el.classList.add("active");
            el.classList.remove("not-active");
        } else {
            el.classList.add("not-active");
            el.classList.remove("active");
        }
    });
});
