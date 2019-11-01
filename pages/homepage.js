import $ from 'jquery';
import '../global';
import animateTheHeroText from '../animations/animateHeroText';
import animateScroll from '../animations/scrollAnimations';
import SliderAnimation from '../animations/sliderAnimation';
import 'slick-carousel/slick/slick';
import bowser from 'bowser/bowser';


$(document).ready( function() {
    scrollToContent();
    
    animateScroll().clockAnimation();
    const homepageSliderAnimation = new SliderAnimation(4000).initiateSlider();

    if(bowser.osname == 'iOS') {
        $('.hero-slider .slick-dots li').css('margin-left','0');
        $('.image-slider .slick-dots li').css('margin-left','0');
        $('.hero-slider .slick-dots .slick-next').css('margin-left','0');
    }
    $('.image-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    $('.image-slider .slick-dots button').text('');
    $('.image-slider .slick-next').insertAfter('.slick-dots li:last-of-type');
    $('.image-slider .slick-prev').insertBefore('.slick-dots li:first-of-type');
    $('.image-slider .slick-next').text('');
    $('.image-slider .slick-prev').text('');
    $('.image-slider .slick-dots li button').prop('disabled', true);
});




