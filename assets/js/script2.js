//ローディング
document.addEventListener("DOMContentLoaded", function() {
    // 3秒間ローディング画面表示
    setTimeout(function() {
      document.querySelector('#page-loading').style.display = 'none';
      document.querySelector('.main-content').style.display = 'block';
    }, 3000);
});

//header
//nav bar
$(document).ready(function() {
    let currentItem = $("#list");
    $("#"+ currentItem.attr("id")).css("color", "white"); //初期設定 現在の項目:LIST 文字色:白
    
    //メニュー項目にホバーしたときの処理
    $("#nav li").hover(
        function() { 
            const itemId = $(this).attr("id");//現在ホバーしている項目のID取得

            //ホバーしてる項目が現在の項目じゃない場合
            if (itemId !== currentItem.attr("id")) { 
                $(this).find("a").css("color", "white"); //ホバーしている項目の文字色:白
                $("#"+currentItem.attr("id")).css("color", "black"); //HOMEの文字色:黒
            } else {
                $(this).find("a").css("color", "white"); // HOMEにホバー時は白色
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
        //背景色をHOMEの位置に戻す
        $("#slide_color").css({
            "width": currentItem.width(),
            "left": currentItem.position().left
        });
    });
});

//main
const games = [
    {
        name:"宝石の煌めき:Splendor",
        players:[2,3,4],
        timeCategory:"中量級(30～60分)",
        level:"ふつう★★☆",
        image:"../assets/img/宝石の煌めき.jpg",
    },
    {
        name:"カタン",
        players:[3,4],
        timeCategory:"重量級(60分～)",
        level:"ふつう★★☆",
        image:"../assets/img/カタン.jpg",
    },
    {
        name:"おばけキャッチ",
        players:[2,3,4,5,6,7],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/おばけキャッチ.jpg",
    },
    {
        name:"プロジェクトL",
        players:[1,2,3,4],
        timeCategory:"中量級(30～60分)",
        level:"ふつう★★☆",
        image:"../assets/img/プロジェクトL.jpg",
    },
    {
        name:"クアドロカラー",
        players:[2,3,4,5],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/クアドロカラー.jpg",   
    },
    {
        name:"はぁって言うゲーム",
        players:[3,4,5,6,7,8],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/はぁって言うゲーム.jpg", 
    },
    {
        name:"カタカナーシ2",
        players:[3,4,5,6,7,8],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/カタカナーシ2.jpg", 
    },
    {
        name:"ノイ(neu)",
        players:[2,3,4,5,6,7],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/ノイ.jpg", 
    },
    {
        name:"ウイングスパン",
        players:[1,2,3,4,5],
        timeCategory:"重量級(60分～)",
        level:"むずかしい★★★",
        image:"../assets/img/ウイングスパン.jpg", 
    },
    {
        name:"キャンバス",
        players:[1,2,3,4,5],
        timeCategory:"中量級(30～60分)",
        level:"ふつう★★☆",
        image:"../assets/img/キャンバス.jpg", 
    },
    {
        name:"音速飯店",
        players:[2,3,4,5,6],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/音速飯店.jpg",
    },
    {
        name:"エバーデール",
        players:[1,2,3,4],
        timeCategory:"中量級(30~60分)",
        level:"ふつう★★☆",
        image:"../assets/img/エバーデール.jpg",
    },
    {
        name:"スティックスタック",
        players:[2,3,4,5,6,7,8],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/スティックスタック.jpg", 
    },
    {
        name:"バトルライン",
        players:[2],
        timeCategory:"中量級(30～60分)",
        level:"ふつう★★☆",
        image:"../assets/img/バトルライン.jpg", 
    },
    {
        name:"コードネーム",
        players:[2,3,4,5,6,7,8],
        timeCategory:"中量級(30～60分)",
        level:"かんたん★☆☆",
        image:"../assets/img/コードネーム.jpg", 
    },
    {
        name:"クラッシュアイスゲーム",
        players:[1,2,3,4],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/クラッシュアイスゲーム.jpg", 
    },
    {
        name:"ジャングルスピード",
        players:[2,3,4,5,6,7,8,9,10,11],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/ジャングルスピード.jpg", 
    },
    {
        name:"ニゴイチ",
        players:[3,4,5,6],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/ニゴイチ.jpg", 
    },
    {
        name:"ピガサス",
        players:[2,3,4,5,6,7,8],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/ピガサス.jpg", 
    },
    {
        name:"ファストラック",
        players:[2],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/ファストラック.jpg", 
    },
    {
        name:"Otrio(オートリオ)",
        players:[2,3,4],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/オートリオ.jpg", 
    },
    {
        name:"スピードカップス",
        players:[2,3,4],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/スピードカップス.jpg", 
    },
    {
        name:"アウトブレイク",
        players:[2],
        timeCategory:"軽量級(～30分)",
        level:"ふつう★★☆",
        image:"../assets/img/アウトブレイク.jpg", 
    },
    {
        name:"おばけキャッチ名人技",
        players:[2,3,4,5,6,7,8],
        timeCategory:"中量級(30～60分)",
        level:"ふつう★★☆",
        image:"../assets/img/名人技.jpg", 
    },
    {
        name:"アルナックの失われし遺跡",
        players:[1,2,3,4],
        timeCategory:"重量級(60分～)",
        level:"ふつう★★☆",
        image:"../assets/img/アルナック.jpg", 
    },
    {
        name:"ナインタイル",
        players:[2,3,4],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/ナインタイル.jpg", 
    },
    {
        name:"ナンジャモンジャ・ミドリ",
        players:[2,3,4,5,6],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"../assets/img/ナンジャモンジャミドリ.jpg", 
    }
];

//初期表示 全てのボドゲ表示
window.onload = () => {
    renderGames(games);
}

//各ボタンを押してラジオボタン表示
const showOptions = (criteria) => {
    const options = document.getElementById("options");
    options.innerHTML = ""; //既存の選択肢をクリア

    let html = '<div class="form-group">';
    if(criteria === 'player'){  //"人数で"のボタンを押した際に表示する選択肢
        html += `
        <input type ="radio" name="players" value="1" onclick="filterGames(1)">1人用<br>
        <input type ="radio" name="players" value="2" onclick="filterGames(2)">2人用<br>
        <input type ="radio" name="players" value="3" onclick="filterGames(3)">3人用<br>
        <input type ="radio" name="players" value="4" onclick="filterGames(4)">4人用<br>
        <input type ="radio" name="players" value="5" onclick="filterGames(5)">5人用<br>
        <input type ="radio" name="players" value="all" onclick="filterGames('all')">全て表示<br>
        `;
    } else if(criteria === 'time'){  // "プレイ時間で"のボタンを押した際に表示する選択肢
        html += `
        <input type ="radio" name="time" value="light" onclick="filterGamesByTime('軽量級(～30分)')">軽量級(～30分)<br>
        <input type ="radio" name="time" value="medium" onclick="filterGamesByTime('中量級(30～60分)')">中量級(30～60分)<br>
        <input type ="radio" name="time" value="heavy" onclick="filterGamesByTime('重量級(60分～)')">重量級(60分～)<br>
        <input type ="radio" name="time" value="all" onclick="filterGamesByTime('all')">全て表示<br>
        `;
    } else if(criteria === 'level'){  //"難易度で"のボタンを押した際に表示する選択肢
        html += `
        <input type ="radio" name="level" value="easy" onclick="filterGamesByLevel('かんたん★☆☆')">かんたん★☆☆<br>
        <input type ="radio" name="level" value="normal" onclick="filterGamesByLevel('ふつう★★☆')">ふつう★★☆<br>
        <input type ="radio" name="level" value="difficult" onclick="filterGamesByLevel('むずかしい★★★')">むずかしい★★★<br>
        <input type ="radio" name="level" value="all" onclick="filterGamesByLevel('all')">全て表示<br></br>
    `;}
    html += "</div>";
    options.innerHTML = html;
 };



//人数で検索
 const filterGames = (playerCount) => {
    const filteredGames = games.filter(game =>
        playerCount === 'all' ? true: game.players.includes(playerCount)
    );
    renderGames(filteredGames);
 };

//プレイ時間で検索
const filterGamesByTime = (category) => {
    const filterdGames = games.filter(game =>
        category === 'all' ? true : game.timeCategory === category
    );
    renderGames(filterdGames);
};
 
//難易度で検索
const filterGamesByLevel = (level) => {
    const filterdGames = games.filter(game =>
        level === 'all'? true : game.level === level
    );
    renderGames(filterdGames);
};

const renderGames = (filterdGames) => {
    const gameCards = document.getElementById("gameCards");
    gameCards.innerHTML = ""; //既存のカードをクリア
    filterdGames.forEach((game) => {
        const card = document.createElement("div");
        card.classList.add("col-md-4","mb-4"); //↓検索に当てはまるカード表示
        card.innerHTML = `
        <div class="card">
          <h5 class="card-title">${game.name}</h5>
          <img src="${game.image}" class="card-img" alt="${game.name}"/>
          <div class="card-body">
            <p class="card-text">人数: ${game.players.join(',')}人<br>
            プレイ時間: ${game.timeCategory}<br>
            難易度: ${game.level}</p>
          </div>
        </div>
        `;
        gameCards.appendChild(card);
    });
};



//left
const cat = document.querySelector(".cat");
cat.addEventListener("mouseover",function(){
    cat.animate( 
        [{transform:"translateY(0)"},
        {transform:"translateY(-120px)"},  //画像を左から右に120px動かす
       {transform:"translate(0)"}],
        {fill: "backwards", duration: 350} //backwardsで最初の位置に戻る、forwardsで最後の位置
        ).onfinish = function(){
            cat.animate(
                [{transform:"translate(0)"},
                {transform:"translate(-300px)"}],
                {fill:"forwards", duration:500}
    ).onfinish = function() { //終わったあとに動きを追加
        setTimeout(() => {
            cat.animate(
                [{transform:"translate(220px,0px)"},  //transform:translate(X軸の距離,Y軸の距離)
                 {transform:"translateX(0)"}],
                 {fill:"forwards", duration:4000}
            );
        }, 5000); //3000遅らせてアニメーションスタート
    };
};
});


const star = document.querySelector('.star'); 
star.addEventListener("mouseover",function(){
star.animate(
    [{transform:"translate(0px)"},
     {transform:"translate(-400px,300px)"}
    ],
    //タイミングの設定
    {fill: "forwards", //再生前後の状態
     duration: 2000, //再生時間
    },);
});


//right
const ghost = document.querySelector(".ghost");
function animateRight() {
    ghost.animate(
        [{ transform: "translateX(0) scaleX(1)" },  // 画像を元に戻す
         { transform: "translateX(-230px) scaleX(1)" }
        ],{ fill: "forwards", duration: 6000}
    ).onfinish = animateLeft;
}
function animateLeft() {
    ghost.animate(
        [{ transform: "translateX(-230px) scaleX(-1)" }, // 画像を反転
         { transform: "translateX(0) scaleX(-1)" }
        ],{ fill: "forwards", duration: 6000}
    ).onfinish = animateRight;
}

animateRight();