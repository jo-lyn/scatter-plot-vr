var FILE_PATH = 'datasets/sample.json';
var plot;
var json, geometry;
var vertices = [];

$(document).ready(function () {
    init();
});

function init() {
    plot = document.querySelector('a-scatterplot');
    geometry = plot.object3D.children[0].geometry;

    for (i = 0; i < geometry.vertices.length; i++) {
        vertices[i] = geometry.vertices[i];
    }

    $.getJSON(FILE_PATH, function(result) {
        json = result;
    });
}

function toggle(value) {
    var toggler = plot.components.toggler;
    toggler.toggle(value);
}
