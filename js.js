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


$(function(){
  $(window).on('load scroll', function() {
     var winScroll = $(window).scrollTop();
     var winHeight = $(window).height();
     var scrollPos = winScroll + (winHeight * 0.8);

     $(".show").each(function() {
        if($(this).offset().top < scrollPos) {
           $(this).css({opacity: 1, transform: 'translate(0, 0)'});
        }
     });
  });
});

 // ページが読み込まれた時の処理
 window.addEventListener('load', function() {
  var loader = document.querySelector('.loader');
  
  // クッキーを取得し、初回のロードかどうかを判定
  var isFirstLoad = document.cookie.indexOf('isFirstLoad') === -1;

  if (isFirstLoad) {
    // 初回のロード時にローディングメッセージを表示
    loader.style.display = 'block';
    
    // クッキーを設定して状態を管理
    document.cookie = 'isFirstLoad=true';
  } else {
    // 初回のロードではない場合はローディングメッセージを非表示
    loader.style.display = 'none';
  }
});
