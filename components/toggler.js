AFRAME.registerComponent('toggler', {
    schema: {
        isVisible: {default: [true, true, true, true, true, true, true, true]},
        toToggle: {default: '1'}
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
        if (evt.keyCode == 69) { // traverse values
            var toToggle = this.data.toToggle % 8 + 1;

            this.data.toToggle = toToggle;
            console.log(toToggle);
        }
        if (evt.keyCode == 81) { // toggle on or off
            this.toggle(this.data.toToggle);
        }
    },

    /**
     * Toggles visibility of points with the given demographic value.
     * @param {number} value - demographic value of the range [1,8].
     */
    toggle: function(value) {
        var HIDDEN_POSITION = {'x': 10000, 'y': 10000, 'z': 10000};

        // update toggled value
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
