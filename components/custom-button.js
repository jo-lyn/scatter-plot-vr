/* global AFRAME, THREE */

/**
 * Handles events coming from the hand-controls.
 * Determines if the entity is grabbed or released.
 * Updates its position to move along the controller.
 */
AFRAME.registerComponent('custom-button', {
    init: function () {
        this.SPIN_STATE = 'SPIN';
        this.onButtondown = this.onButtondown.bind(this);
        this.onButtonup = this.onButtonup.bind(this);
    },

    play: function () {
        this.el.addEventListener('hover-start', this.onButtondown);
        this.el.addEventListener('hover-end', this.onButtonup);
    },

    pause: function () {
        this.el.addEventListener('hover-start', this.onButtondown);
        this.el.addEventListener('hover-end', this.onButtonup);
    },

    onButtondown: function (evt) {
        this.el.setAttribute('material', "color: #EF2D5E; transparent: true; opacity: 0.8");
        this.el.addState(this.SPIN_STATE);
    },

    onButtonup: function (evt) {
        this.el.setAttribute('material', "color: #EF2D5E; transparent: true; opacity: 1");
        this.el.removeState(this.SPIN_STATE);
    },

    tick: function () {
        var el = document.querySelector('#plot');
        var rotation = el.getAttribute('rotation');
        if (this.el.is(this.SPIN_STATE)) {
            el.setAttribute('rotation', new THREE.Vector3(rotation.x, rotation.y - 1, rotation.z));
        }
    }
});