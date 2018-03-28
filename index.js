var FILE_PATH = 'datasets/sample.json';
var plot;
var json, geometry;
var vertices = [];

$(document).ready(function () {
    init();
});

function init() {
    plot = document.querySelector('a-scatterplot');

    try {
        geometry = plot.object3D.children[0].geometry;

        for (i = 0; i < geometry.vertices.length; i++) {
            vertices[i] = geometry.vertices[i];
        }

        $.getJSON(FILE_PATH, function(result) {
            json = result;
        });

        if (geometry == "" || json == "") {
            throw "data attributes undefined";
        }
    }
    catch (err) {
        // failed to load data from plot, retry after 1s
        setTimeout(function () {
            init();
        }, 1000);
    }
} 

function toggle(value) {
    var toggler = plot.components.toggler;
    toggler.toggle(value);
}
