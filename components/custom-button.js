/* global AFRAME, THREE */

/**
 * Handles events coming from the hand-controls.
 * Determines if the entity is grabbed or released.
 * Updates its position to move along the controller.
 */
AFRAME.registerComponent('custom-button', {
    schema: {
        isVisible: {default: [true, true, true, true, true, true, true, true]}
    },

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
                this.toggle(1);
                document.querySelector("#msg").setAttribute("value", ".> Male Malays");
                break;
            case "lgd2":
                this.toggle(2);
                document.querySelector("#msg").setAttribute("value", ".> Female Malays");
                break;
            case "lgd3":
                this.toggle(3);
                document.querySelector("#msg").setAttribute("value", ".> Male Chinese");
                break;
            case "lgd4":
                this.toggle(4);
                document.querySelector("#msg").setAttribute("value", ".> Female Chinese");
                break;
            case "lgd5":
                this.toggle(5);
                document.querySelector("#msg").setAttribute("value", ".> Male Indians");
                break;
            case "lgd6":
                this.toggle(6);
                document.querySelector("#msg").setAttribute("value", ".> Female Indians");
                break;
            case "lgd7":
                this.toggle(7);
                document.querySelector("#msg").setAttribute("value", ".> Male Others");
                break;
            case "lgd8":
                this.toggle(8);
                document.querySelector("#msg").setAttribute("value", ".> Female Others");
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
    },

    /**
     * Toggles visibility of points with the given demographic value.
     * @param {number} value - demographic value of the range [1,8].
     */
    toggle: function(value) {
        var HIDDEN_POSITION = {'x': 10000, 'y': 10000, 'z': 10000};

        // update visibility
        this.data.isVisible[value - 1] = !this.data.isVisible[value - 1];

        // update vertices
        for (i = 0; i < vertices.length; i++) {
            if (json[i].demog === value) {
                if (this.data.isVisible[value - 1]) {
                    geometry.vertices[i] = vertices[i];
                } else {
                    geometry.vertices[i] = HIDDEN_POSITION;
                }
            }
        }
        geometry.verticesNeedUpdate = true;
    }
});