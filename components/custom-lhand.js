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
        if (this.el.is(this.PTR_STATE)) {
            this.el.removeState(this.PTR_STATE);
            el.parentNode.removeChild(el);
            this.createHandControl();
        } else {
            this.el.addState(this.PTR_STATE);
            el.parentNode.removeChild(el);
            this.createPointerControl();
        }
    },

    createPointerControl: function () {
        var pcEl = document.createElement('a-entity');
        pcEl.setAttribute('progressive-controls', "objects: .cube; maxLevel: point");
        pcEl.setAttribute('id', "p-control");
        var lhEl = document.createElement('a-entity');
        lhEl.setAttribute('id', "lhand");
        lhEl.setAttribute('oculus-touch-controls', "hand: left");
        lhEl.setAttribute('class', "left-controller");
        lhEl.setAttribute('custom-lhand',"");
        pcEl.appendChild(lhEl);
        var rhEl = document.createElement('a-entity');
        rhEl.setAttribute('id', "rhand");
        rhEl.setAttribute('oculus-touch-controls', "hand: right");
        rhEl.setAttribute('class', "right-controller");
        pcEl.appendChild(rhEl);
        var camEL = document.createElement('a-camera');
        pcEl.appendChild(camEL);
        var sceneEl = document.querySelector('a-scene');
        sceneEl.appendChild(pcEl);
    },

    createHandControl: function () {
        var pcEl = document.createElement('a-entity');
        pcEl.setAttribute('progressive-controls', "objects: .cube, .button; maxLevel: touch; controllerModel: false");
        pcEl.setAttribute('id', "p-control");
        var lhEl = document.createElement('a-entity');
        lhEl.setAttribute('hand-controls', "left");
        lhEl.setAttribute('oculus-touch-controls', "hand: left");
        lhEl.setAttribute('mixin', "controller");
        lhEl.setAttribute('custom-lhand',"");
        var watchEl = document.querySelector('#watch');
        var clone = watchEl.cloneNode(true);
        clone.setAttribute('visible', true);
        lhEl.appendChild(clone);
        pcEl.appendChild(lhEl);
        var rhEl = document.createElement('a-entity');
        rhEl.setAttribute('hand-controls', "right");
        rhEl.setAttribute('oculus-touch-controls', "hand: right");
        rhEl.setAttribute('mixin', "controller");
        pcEl.appendChild(rhEl);
        var camEL = document.createElement('a-camera');
        pcEl.appendChild(camEL);
        var sceneEl = document.querySelector('a-scene');
        sceneEl.appendChild(pcEl);
    }
});