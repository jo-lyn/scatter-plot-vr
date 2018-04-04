AFRAME.registerComponent('toggler', {
    schema: {
        isVisible: {default: [true, true, true, true, true, true, true, true]}
    },

    init: function() {
        this.onKeydown = this.onKeydown.bind(this);
    },

    play: function() {
        window.addEventListener('keydown', this.onKeydown);
    },

    pause: function() {
        window.addEventListener('keydown', this.onKeydown);
    },

    onKeydown: function (evt) {
        switch (evt.keyCode) {
            case 49:
                this.toggle(1);
                break;
            case 50:
                this.toggle(2);
                break;
            case 51:
                this.toggle(3);
                break;
            case 52:
                this.toggle(4);
                break;
            case 53:
                this.toggle(5);
                break;
            case 54:
                this.toggle(6);
                break;
            case 55:
                this.toggle(7);
                break;
            case 56:
                this.toggle(8);
                break;
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
