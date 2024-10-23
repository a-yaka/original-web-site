//ローディング
window.onload = function() {
    // ローディングが終了したらローダーを非表示にしてメインコンテンツを表示
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
};


//↓写真スライドショー
document.addEventListener("DOMContentLoaded", function(){
    const slides = document.querySelectorAll(".slideshow-zoom li");
    let activeIndex = 0;
    //フェードアウト処理
    slides[activeIndex].style.display = "block";
    slides[activeIndex].style.opacity = 1; // 初期状態は不透明

    setInterval(function(){   
        slides[activeIndex].style.transition = "opacity 1.5s";
        slides[activeIndex].style.opacity = 0;

        const nextIndex = (activeIndex + 1) % slides.length;

        setTimeout(function(){
            slides[activeIndex].style.display = "none"; //現在のスライド非表示
            slides[activeIndex].style.opacity = 1; //不透明度１
            slides[nextIndex].style.display = "block"; //次のスライド
            slides[nextIndex].style.transition = "opacity 1.5s";
            slides[nextIndex].style.opacity = 0; // 不透明度０:初期状態


            // フェードイン処理
            setTimeout(function() {
                slides[nextIndex].style.opacity = 1; 
            }, 0); // 次のスライド即表示

            activeIndex = nextIndex;
        }, 1500);
    }, 5000); //スライド表示時間(フェードイン1.5s＋アウト1.5s＋表示2s)
});

//header


//section6
const scrollContainer = document.querySelector(".scroll_movies");

  scrollContainer.addEventListener('wheel', (event) => {
        event.preventDefault();
        scrollContainer.scrollleft += event.deltaY; // スクロール位置を調整
  });

//left
const bird = document.querySelector(".bird");
bird.animate(
    [{transform:"translateX(0)"},
     {transform:"translateX(500px)"}
    ],
    //タイミングの設定
    {fill: "backwards", //再生前後の状態
     duration: 3500, //再生時間
     iterations: Infinity, //アニメーションの繰り返し回数(ずっと)
    },
);


//↓斜めに動かす方法
// bird.addEventListener("mouseover",function(){
// bird.animate(
//     [{transform:"translate(0px)"},
//      {transform:"translate(-300px,300px)"}
//     ],
//     //タイミングの設定
//     {fill: "backwards", //再生前後の状態
//      duration: 3000, //再生時間
//     },);
// });


//right
const frog = document.querySelector(".frog");
frog.addEventListener("mouseover",function(){
    frog.animate( 
        [{transform:"translate(0,0)"},
        {transform:"translateY(-120px)"},  //画像を左から右に120px動かす
       {transform:"tranlate(0,0)"}],
        {fill: "backwards", duration: 1000},
        );
});