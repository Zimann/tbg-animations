import $ from 'jquery';
import '../global';
import animateScroll from '../animations/scrollAnimations';

$(document).ready(()=>{
    animateScroll().textAnimation('amenities');
});
