// Renders MusicXML files into visual sheet music using OpenSheetMusicDisplay.
// Each .score-render div's data-score-src attribute points to a .xml/.musicxml file.
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    if (typeof opensheetmusicdisplay === "undefined") {
      console.error("OpenSheetMusicDisplay failed to load.");
      return;
    }

    var containers = document.querySelectorAll(".score-render");
    containers.forEach(function (container, index) {
      var src = container.getAttribute("data-score-src");
      if (!src) return;

      // Give each render target a unique id (OSMD needs a real element id)
      var id = "osmd-score-" + index;
      container.id = id;

      var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay(id, {
        autoResize: true,
        backend: "svg",
        drawTitle: false,
      });

      osmd.load(src)
        .then(function () {
          osmd.render();
        })
        .catch(function (err) {
          container.innerHTML =
            '<p><em>Could not render this score. <a href="' + src + '">Download the MusicXML file</a> instead.</em></p>';
          console.error("OSMD render error for", src, err);
        });
    });
  });
})();
