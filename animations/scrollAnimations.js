
import ScrollMagic from '../vendor/ScrollMagic/ScrollMagic';
import bowser from 'bowser';
require('../vendor/ScrollMagic/plugins/animation.gsap');

const animateScroll = () => {
    
    //variable caching
    // ---------------------------------------------------------------------------------
    const scrollContainer = {
        scrollReference1: document.querySelector('.scroll-reference-1'),
        scrollReference2: document.querySelector('.scroll-reference-2'),
        scrollReference3: document.querySelector('.scroll-reference-3'),
        scrollReference4: document.querySelector('.scroll-reference-4'),
        scrollReference5: document.querySelector('.scroll-reference-5'),
        scrollReference6: document.querySelector('.scroll-reference-6'),
        scrollReference7: document.querySelector('.scroll-reference-7')
    };
    
    const sceneFactory = {
        controller : new ScrollMagic.Controller(),
        sceneCreator(reference, DOMElement, styleClass){
            let ourScene = new ScrollMagic.Scene({
                triggerElement: reference
            })
            .setClassToggle(DOMElement, styleClass)
            .addTo(this.controller)
        }            
    };
        
    const clockAnimation = (page) => {

        //variable caching
        // ---------------------------------------------------------------------------------
        const individualClockText1 = document.querySelector('.individual-clock-text-1');
        const individualClockText2 = document.querySelector('.individual-clock-text-2');
        const clockHoursWrapper = document.querySelector('.clock-hours-wrapper');
        const digitGroup1 = document.querySelectorAll('.digit-group-1');
        const digitGroup2 = document.querySelectorAll('.digit-group-2');
        const digitGroup3 = document.querySelectorAll('.digit-group-3');
        const digitGroup4 = document.querySelectorAll('.digit-group-4');
        const digitGroup5 = document.querySelectorAll('.digit-group-5');
        const dayTime1 = document.querySelector('.day-time-1');
        const dayTime2 = document.querySelector('.day-time-2');    
        
        //First hour change scene
        // -------------------------------------------------------------------
        sceneFactory.sceneCreator(scrollContainer.scrollReference1, individualClockText1, 'move-up-1');
        sceneFactory.sceneCreator(scrollContainer.scrollReference1, clockHoursWrapper, 'no-padding');
        // -------------------------------------------------------------------
        //Second hour change scene
        // -------------------------------------------------------------------
        sceneFactory.sceneCreator(scrollContainer.scrollReference2, digitGroup1, 'move-up-1');
        sceneFactory.sceneCreator(scrollContainer.scrollReference2, digitGroup2, 'move-up-2');
        // -------------------------------------------------------------------
        //Third hour change scene
        // -------------------------------------------------------------------
        if(bowser.name === 'Firefox'){
            sceneFactory.sceneCreator(scrollContainer.scrollReference3, digitGroup2, 'move-up-3');
            sceneFactory.sceneCreator(scrollContainer.scrollReference3, digitGroup3, 'move-up-4-firefox');           
        } else {
            sceneFactory.sceneCreator(scrollContainer.scrollReference3, digitGroup2, 'move-up-3');
            sceneFactory.sceneCreator(scrollContainer.scrollReference3, digitGroup3, 'move-up-4');
        }
        // -------------------------------------------------------------------
        //Fourth hour change scene
        // -------------------------------------------------------------------
        if(bowser.name === 'Firefox'){
            sceneFactory.sceneCreator(scrollContainer.scrollReference4, digitGroup4, 'move-up-6-firefox-edge-ie');   
            sceneFactory.sceneCreator(scrollContainer.scrollReference4, digitGroup3, 'move-up-5-firefox-edge-tablet');
            sceneFactory.sceneCreator(scrollContainer.scrollReference4, dayTime1, 'day-time-1-move-firefox-edge-tablet');
            sceneFactory.sceneCreator(scrollContainer.scrollReference4, dayTime2, 'move-up-6-firefox-edge-ie');
        }
        else {            
            
            if(bowser.name === 'Microsoft Edge' || bowser.tablet || bowser.name === 'Internet Explorer'){
                
                sceneFactory.sceneCreator(scrollContainer.scrollReference4, digitGroup3, 'move-up-5-firefox-edge-tablet');
                sceneFactory.sceneCreator(scrollContainer.scrollReference4, digitGroup4, 'move-up-6-firefox-edge-ie');
                sceneFactory.sceneCreator(scrollContainer.scrollReference4, dayTime1, 'day-time-1-move-firefox-edge-tablet');
                sceneFactory.sceneCreator(scrollContainer.scrollReference4, dayTime2, 'move-up-6-firefox-edge-ie');
            } else {
                sceneFactory.sceneCreator(scrollContainer.scrollReference4, digitGroup3, 'move-up-5');
                sceneFactory.sceneCreator(scrollContainer.scrollReference4, digitGroup4, 'move-up-6');
                sceneFactory.sceneCreator(scrollContainer.scrollReference4, dayTime1, 'day-time-1-move');
                sceneFactory.sceneCreator(scrollContainer.scrollReference4, dayTime2, 'move-up-6');
            }
        }
        // -------------------------------------------------------------------
        //Fifth hour change scene
        // -------------------------------------------------------------------
        if(bowser.name ==='Firefox' || bowser.name === 'Microsoft Edge' || bowser.tablet || bowser.name === 'Internet Explorer'){
            sceneFactory.sceneCreator(scrollContainer.scrollReference5, digitGroup5, 'move-up-8-ie');
        } else {
            sceneFactory.sceneCreator(scrollContainer.scrollReference5, digitGroup5, 'move-up-8');
        }
        sceneFactory.sceneCreator(scrollContainer.scrollReference5, digitGroup4, 'move-up-7');
        // -------------------------------------------------------------------       
        
    };

    const textAnimation = (page) => {

        //variable caching
        // ---------------------------------------------------------------------------------
        let middleTextArray, scrollReferenceArray;
        const firstMiddleText = document.querySelector('.first-middle-text');
        const middleTagWrapper = document.querySelector('.middle-tag-wrapper');
        const middleText1 = document.querySelector('.middle-text-1');
        const middleText2 = document.querySelector('.middle-text-2');
        const middleText3 = document.querySelector('.middle-text-3');
        const middleText4 = document.querySelector('.middle-text-4');
        const middleText5 = document.querySelector('.middle-text-5');
        const middleText6 = document.querySelector('.middle-text-6');
        let generalMarginClass = 'move-up-1';
        const allMiddleTexts = document.querySelectorAll('.middle-text');
        
        [].forEach.bind(allMiddleTexts, null);
               
        if(bowser.tablet){
            generalMarginClass = 'move-up-1-special';
        }

        middleTagWrapper.classList.add('pull-middle-tag');
        

        if(bowser.name ==='Internet Explorer'){
            firstMiddleText.classList.add('padding-first-IE');
            middleTagWrapper.style.marginTop = '-17px !important';
        }


        if(page === 'residencies'){
             middleTextArray = [middleText1, middleText2, middleText3, middleText4, middleText5];
             scrollReferenceArray = [
                 scrollContainer.scrollReference2, 
                 scrollContainer.scrollReference3, 
                 scrollContainer.scrollReference4, 
                 scrollContainer.scrollReference5, 
                 scrollContainer.scrollReference6
                ];    
        
        } else if (page === 'amenities'){
             middleTextArray = [middleText1, middleText2, middleText3, middleText4, middleText5, middleText6];
             scrollReferenceArray = [
                 scrollContainer.scrollReference2, 
                scrollContainer.scrollReference3, 
                scrollContainer.scrollReference4, 
                scrollContainer.scrollReference5, 
                scrollContainer.scrollReference6, 
                scrollContainer.scrollReference7
            ];
           
           
             switch(bowser.name){
                 case 'Firefox':
                    allMiddleTexts.forEach(element => element.classList.add('firefox-pull-up'));
                    middleTagWrapper.classList.add('pull-middle-tag-Firefox');
                 break;
                 case 'Internet Explorer':
                    middleTagWrapper.classList.add('pull-middle-tag-IE');
                 break;
                 case 'Microsoft Edge':
                    middleTagWrapper.classList.add('pull-middle-tag-Edge');
                 break;
             }

            if(bowser.tablet){
                allMiddleTexts.forEach(element => element.classList.add('tablet-push-down'));
            }
         
        }

        //First text change
        // -------------------------------------------------------------------
        sceneFactory.sceneCreator(scrollContainer.scrollReference1, firstMiddleText, generalMarginClass);
        // -------------------------------------------------------------------
        
        //Rest of the text changes
        // -------------------------------------------------------------------
        middleTextArray.forEach((element, index) => {
            sceneFactory.sceneCreator(scrollReferenceArray[index], element, generalMarginClass);
        });              
        // -------------------------------------------------------------------
    };

    return {
        clockAnimation: clockAnimation,
        textAnimation: textAnimation
    }
}
export default animateScroll;