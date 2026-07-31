// Minimal, dependency-free lightbox for the photography grid.
(function () {
  var grid = document.querySelector(".photo-grid");
  if (!grid) return;

  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxCaption = document.getElementById("lightbox-caption");
  var closeBtn = document.getElementById("lightbox-close");

  function openLightbox(link) {
    var img = link.querySelector("img");
    lightboxImg.src = link.getAttribute("href");
    lightboxImg.alt = img ? img.alt : "";
    lightboxCaption.textContent = link.getAttribute("data-caption") || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  grid.addEventListener("click", function (event) {
    var link = event.target.closest(".photo-grid-item");
    if (!link) return;
    event.preventDefault();
    openLightbox(link);
  });

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
})();
