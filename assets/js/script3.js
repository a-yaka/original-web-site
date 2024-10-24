 
//ローディング
window.onload = function() {
    // ローディングが終了したらローダーを非表示にしてメインコンテンツを表示
    document.querySelector('#page-loading').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
};
//header
//nav bar
$(document).ready(function() {
  let currentItem = $("#cafe");
  $("#"+currentItem.attr("id")).css("color", "white"); //初期設定 現在の項目:CAFE 文字色:白

  //メニュー項目にホバーしたときの処理
  $("#nav li").hover(
      function() { 
          const itemId = $(this).attr("id");//現在ホバーしている項目のID取得

          //ホバーしてる項目が現在の項目じゃない場合
          if (itemId !== currentItem.attr("id")) { 
              $(this).find("a").css("color", "white"); //ホバーしている項目の文字色:白
              $("#"+currentItem.attr("id")).css("color", "black"); //CAFEの文字色:黒
          } else {
              $(this).find("a").css("color", "white"); // CAFEにホバー時は白色
          }
          $("#slide_color").css({
              "width": $(this).width(),
              "left": $(this).position().left
          });
      },
      function() {
          const itemId = $(this).attr("id");
          //ホバーが外れたら文字色を戻す
          if (itemId !== currentItem.attr("id")) {
              $(this).find("a").css("color", "black");
          }
      }
  );

  // マウスがnavから離れたとき
  $("#nav").mouseleave(function() {
      $("#"+currentItem.attr("id")).css("color", "white");
      //背景色をCAFEの位置に戻す
      $("#slide_color").css({
          "width": currentItem.width(),
          "left": currentItem.position().left
      });
  });
});