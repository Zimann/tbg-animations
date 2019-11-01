import slick from 'slick-carousel';
import $ from 'jquery';
import animateTheHeroText from './animateHeroText';

class SliderAnimation {

    constructor(sliderSpeed, heroSlider = $('.hero-slider')){
        this.sliderSpeed = sliderSpeed;
        this.heroSlider = heroSlider;
    }

    initiateSlider(){
        this.heroSlider.slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: this.sliderSpeed,
            pauseOnHover: false,
            pauseOnFocus: false
        });

        animateTheHeroText.firstPhase();
        animateTheHeroText.secondPhase();
        animateTheHeroText.secondPhaseTl.stop();

        this.heroSlider.on('afterChange', (event, slick, currentSlide) => {

            switch(currentSlide){
                case 0:
                    animateTheHeroText.firstPhaseTl.reverse();                  
                    setTimeout(function () {
                        animateTheHeroText.firstPhaseTl.restart();
                    }, 2000);
                    break;
                case 1:
                    animateTheHeroText.firstPhaseTl.stop();
                    animateTheHeroText.secondPhaseTl.restart();
                    break;
                case 2:
                    animateTheHeroText.thirdPhase();
                    break;
                case 3:
                    animateTheHeroText.firstPhaseTl.restart();
                    break;
            }
        });

        this.prepareSlider();

    }

    prepareSlider(){
        $('.hero-slider .slick-dots button').text('');
        $('.hero-slider .slick-next').insertAfter('.slick-dots li:last-of-type');
        $('.hero-slider .slick-prev').insertBefore('.slick-dots li:first-of-type');
        $('.hero-slider .slick-next').text('');
        $('.hero-slider .slick-prev').text('');
        $('.hero-slider .slick-dots li button').prop('disabled', true);
        $('.hero-slider .hero').css('display','inline-block');
    }
}

export default SliderAnimation;

