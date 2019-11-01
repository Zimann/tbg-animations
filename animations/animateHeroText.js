import {TimelineMax} from 'gsap';
import bowser from 'bowser';

class AnimateMainHeroText {

    constructor() {
        this.firstPhaseTl = new TimelineMax({ease: Power1.easeInOut, onReverseComplete:() =>this.firstPhaseHelper});
        this.secondPhaseTl = new TimelineMax({ease: Power1.easeInOut});
        this.thirdPhaseTl = new TimelineMax({ease: Power1.easeInOut});
        this.pathGroups = document.querySelectorAll('.svg-path-groups');
        this.lastBar = document.getElementById('Bara-9');
        this.bars = document.querySelectorAll('.bar');
        this.mainSVGLayer = document.getElementById('main_layer');
        this.entireTextSvg = document.getElementsByClassName('brooklyn-svg');
        this.letters = {
            firstR:document.getElementById('r-1'),
            firstO: document.getElementById('o-1'),
            secondO: document.getElementById('o-2'),
            firstK: document.getElementById('k-1')
        };
        this.generalDelay = 0.3;
    }

        firstPhase() {
            this.firstPhaseTl
                .to(this.bars, 1.26, {y: -282}, this.generalDelay)
                .to(this.lastBar, 0.4, {x: 50}, this.generalDelay)
                .to(this.pathGroups[0], 1.2, {x:-105}, this.generalDelay)
                .to(this.pathGroups[1], 1.21, {y: -25}, this.generalDelay)
                .to(this.pathGroups[2], 1.22, {x: 50, y: -144}, this.generalDelay)
                .to(this.pathGroups[3], 1.23, {x: -50, y: -210}, this.generalDelay)
                .to(this.pathGroups[4], 1.24, {y: -285}, this.generalDelay)

                this.checkBrowsersAndDevices(this.firstPhaseTl);
        }

        secondPhase(){
            if(window.innerWidth > 768){
                this.secondPhaseTl
                .to(this.entireTextSvg, 1, {y: 116}, this.generalDelay + 0.5)
            }
            this.secondPhaseTl
            .to(this.bars, 1.25, { y: -220}, this.generalDelay)
            .to(this.pathGroups[0], 1.2, {x:0}, this.generalDelay)
            .to(this.lastBar, 0.4, {x: 0}, this.generalDelay)
            .to(this.lastBar, 0.2, {opacity: 0}, this.generalDelay)
            .to(this.letters.firstR, 0.5, {opacity:0}, this.generalDelay)
            .to(this.letters.firstO, 0.5, {opacity:0}, this.generalDelay)
            .to(this.letters.secondO, 0.5, {opacity:0}, this.generalDelay)
            .to(this.letters.firstK, 1.25, {x: -150}, this.generalDelay)
            .to(this.pathGroups[1], 1.25, {y: 35}, this.generalDelay)
            .to(this.pathGroups[2], 1.26, {x: -100, y: -85}, this.generalDelay)
            .to(this.pathGroups[3], 1.23, {x: 50, y: -145}, this.generalDelay)
            .to(this.pathGroups[4], 1.24, {x:100, y: -220}, this.generalDelay);

            this.checkBrowsersAndDevices(this.secondPhaseTl);
        }

        thirdPhase(){
            this.secondPhaseTl.reverse();
            setTimeout(()=>{
                this.firstPhaseTl.reverse();
            }, this.generalDelay + 1200)

        }

        firstPhaseHelper () {
            this.firstPhaseTl.restart();
        }

        checkBrowsersAndDevices (tl) {
            if(bowser.mobile === true) {
                tl
                .to(this.entireTextSvg, 1.27, {y:52}, this.generalDelay + 0.5)
            } else {
                this.firstPhaseTl
                .to(this.entireTextSvg, 1.27, {y:152}, this.generalDelay + 0.5)
            }

            //IE repositioning
            if(bowser.name === 'Internet Explorer'){
                tl
                .to(this.entireTextSvg, 1.27, {y: 145}, this.generalDelay + 0.5)
            }
        }
    }

    const animateTheHeroText = new AnimateMainHeroText();

export default animateTheHeroText;