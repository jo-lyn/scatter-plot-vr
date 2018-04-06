(function() {
    AFRAME.registerComponent("point-controller", {
        init: function() {
            this.showValueOnHover = true;
            this.el.addEventListener("abuttondown", this.onClickA);
            this.el.addEventListener("bbuttondown", this.onClickB);
        },

        onClickA: function() {
            var el = getPlot();

            if (el !== undefined) {
                el.dispatchEvent(new CustomEvent("toggle-point"));
            }
        },

        onClickB: function() {
            var el = getPlot();

            this.showValueOnHover = !this.showValueOnHover;
            if (el !== undefined) {
                el.setAttribute("showvalueonhover", this.showValueOnHover);
            }
        }
    });

    function getPlot() {
        var els = document.querySelectorAll("a-scatterplot");
        if (els !== undefined && els.length > 0) {
            return els[0];
        } else {
            return;
        }
    }
})();