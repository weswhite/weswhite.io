/**
 * Created by Wesley_T_White on 9/20/2015.
 */
$(function() {
    var controller = new ScrollMagic.Controller()
});

var scene = new ScrollMagic.Scene({
    triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
    duration: 400 // pin the element for a total of 400px
})
    .setPin('#fifth-panel'); // the element we want to pin
    .addTo(controller);