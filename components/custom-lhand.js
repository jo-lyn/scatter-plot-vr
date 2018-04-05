/* global AFRAME, THREE */

/**
 * Handles events coming from the hand-controls.
 * Determines if the entity is grabbed or released.
 * Updates its position to move along the controller.
 */
AFRAME.registerComponent('custom-lhand', {
    init: function () {
        this.PTR_STATE = 'PTR';
        this.onToggle = this.onToggle.bind(this);
    },

    play: function () {
        this.el.addEventListener('xbuttondown', this.onToggle);
    },

    pause: function () {
        this.el.addEventListener('xbuttondown', this.onToggle);
    },

    onToggle: function () {
        var el = document.querySelector('#p-control');
        el.parentNode.removeChild(el);
        this.createPointerControl();
        // console.log(el.getAttribute('progressive-controls'));
        // if (this.el.is(this.PTR_STATE)) {
        //     this.el.removeState(this.PTR_STATE);
        //     el.setAttribute('progressive-controls', "objects: .cube; maxLevel: touch");
        // } else {
        //     this.el.addState(this.PTR_STATE);
        //     el.setAttribute('progressive-controls', "objects: .cube; maxLevel: point");
        // }
    },

    createPointerControl: function () {
        var pcEl = document.createElement('a-entity');
        pcEl.setAttribute('progressive-controls', "objects: .cube, a-link; maxLevel: point; controllerModel: false");
        var lhEl = document.createElement('a-entity');
        lhEl.setAttribute('hand-controls', "left");
        lhEl.setAttribute('oculus-touch-controls', "hand: left");
        lhEl.setAttribute('mixin', "controller");
        lhEl.setAttribute('custom-lhand',"");
        pcEl.appendChild(lhEl);
        var rhEl = document.createElement('a-entity');
        rhEl.setAttribute('hand-controls', "right");
        rhEl.setAttribute('oculus-touch-controls', "hand: right");
        rhEl.setAttribute('mixin', "controller");
        pcEl.appendChild(rhEl);
        var sceneEl = document.querySelector('a-scene');
        sceneEl.appendChild(pcEl);
    }
});