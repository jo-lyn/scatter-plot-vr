AFRAME.registerComponent('toggler', {
    schema: {
        isVisible: {default: [true, true, true, true, true, true, true, true]},
        toggled: {default: '-1'}
    },

    toggle: function(value) {
        var HIDDEN_POSITION = {'x': 10000, 'y': 10000, 'z': 10000};

        // update toggled value
        this.data.isVisible[value-1] = !this.data.isVisible[value-1];
        this.data.toggled = value;

        // update vertices
        for (i = 0; i < vertices.length; i++) {
            if (json[i].demog === value) {
                if (this.data.isVisible[value-1]) {
                    geometry.vertices[i] = vertices[i];
                } else {
                    geometry.vertices[i] = HIDDEN_POSITION;
                }
            }
        }
        geometry.verticesNeedUpdate = true;
    }
});
