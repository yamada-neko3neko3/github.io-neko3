// 画像拡大
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
});

// タッチ対応
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".enlargement").forEach(function (element) {
      element.addEventListener("touchend", function () {
          window.history.back();
      }, {passive: true});
  });
});
