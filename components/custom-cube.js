/* global AFRAME, THREE */

/**
 * Handles events coming from the hand-controls.
 * Determines if the entity is grabbed or released.
 * Updates its position to move along the controller.
 */
AFRAME.registerComponent('custom-cube', {
    init: function () {
        var el = this.el;
        el.addEventListener('grab-start', function() {
            el.setAttribute('material', "color: #EF2D5E; transparent: true; opacity: 0.2");
        });
        el.addEventListener('grab-end', function() {
            el.setAttribute('material', "color: #EF2D5E; transparent: true; opacity: 0");
        });
    }
});