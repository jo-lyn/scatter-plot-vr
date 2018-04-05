AFRAME.registerComponent("point-hover", {
    init: function() {
        var el = this.el;
        el.addEventListener("point-hover", function(ev) {
            // Just an example
            var elDebug = document.getElementById("debug-only");
            var detail = ev.detail;

            if (detail === null) { // Nothing is hovered
                elDebug.innerHTML = "";
            } else {
                var abs = detail.absPosition;
                var rel = detail.relPosition;
                var val = detail.value;
                elDebug.innerHTML = "Absolute position: " + "(" + abs.x.toFixed(4) + ", " + abs.y.toFixed(4) + ", " + abs.z.toFixed(4) + ")<br>";
                elDebug.innerHTML += "Relative position: " + "(" + rel.x.toFixed(4) + ", " + rel.y.toFixed(4) + ", " + rel.z.toFixed(4) + ")<br>";
                elDebug.innerHTML += "Value: " + "(" + val.x.toFixed(4) + ", " + val.y.toFixed(4) + ", " + val.z.toFixed(4) + ", " + val.val.toFixed(4) + ")";




                var tagEl = document.querySelector('#tag');
                tagEl.setAttribute('position', abs);
                var screenEl = document.querySelector('#screen');
                screenEl.setAttribute('text', "value: (" + val.x.toFixed(2) + "," + val.y.toFixed(2) + "," + val.z.toFixed(2) + "," + val.val.toFixed(2) + ")");
            }
        });
    }
});