/* global AFRAME, THREE */

/**
 * Handles events coming from the hand-controls.
 * Determines if the entity is grabbed or released.
 * Updates its position to move along the controller.
 */
AFRAME.registerComponent('custom-button', {
    init: function () {
        this.ACTIVE_STATE = 'active';
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
        this.el.addState(this.ACTIVE_STATE);
        // discrete action handler
        switch (this.el.getAttribute('id')) {
            case "lgd1":
                // do something for lgd1
                break;
            case "lgd2":
                // do something for lgd2
                break;
            case "lgd3":
                // do something for lgd3
                break;
            case "lgd4":
                // do something for lgd4
                break;
            case "lgd5":
                // do something for lgd5
                break;
            case "lgd6":
                // do something for lgd6
                break;
            case "lgd7":
                // do something for lgd7
                break;
            case "lgd8":
                // do something for lgd8
                break;
        }
    },

    onButtonup: function (evt) {
        this.el.setAttribute('material', "color: #EF2D5E; transparent: true; opacity: 1");
        this.el.removeState(this.ACTIVE_STATE);
    },

    tick: function () {
        if (this.el.is(this.ACTIVE_STATE)) {
            switch (this.el.getAttribute('id')) {
                case "lgd1":
                    // do something for lgd1
                    break;
                case "lgd2":
                    // do something for lgd2
                    break;
                case "lgd3":
                    // do something for lgd3
                    break;
                case "lgd4":
                    // do something for lgd4
                    break;
                case "lgd5":
                    // do something for lgd5
                    break;
                case "lgd6":
                    // do something for lgd6
                    break;
                case "lgd7":
                    // do something for lgd7
                    break;
                case "lgd8":
                    // do something for lgd8
                    break;
            }
        }
    }
});