// function toggleVisibility(id){
//     const options = ["player_options", "time_options", "level_options"];
//     options.forEach(option => {
//         const element = document.getElementById(option);
//         if(option === id) {
//             if(element.classList.contains("show")){
//                 element.classList.remove("show");
//                 element.classList.add("hidden");
//             } else {
//                 element.classList.add("show");
//                 element.classList.remove("hiden");
//             }
//         } else {
//             element.classList.remove("show");
//             element.classList.add("hidden"); 
//         }
//     })
// }


const games = [
    {
        name:"宝石の煌めき:Splendor",
        players:[2,3,4],
        timeCategory:"中量級(30～60分)",
        level:"ふつう★★☆",
        image:"",
    },
    {
        name:"カタン",
        players:[3,4],
        timeCategory:"重量級(60分～)",
        level:"ふつう★★☆",
        image:"",
    },
    {
        name:"おばけキャッチ",
        players:[2,3,4,5,6,7],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"",
    },
    {
        name:"ドメモ",
        players:[2,3,4,5],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"",
    },
    {
        name:"プロジェクトL",
        players:[1,2,3,4],
        timeCategory:"中量級(30～60分)",
        level:"ふつう★★☆",
        image:"",
    },
    {
        name:"ニムト",
        players:[2,3,4,5,6,7,8,9,10],
        timeCategory:"中量級(30～60分)",
        level:"かんたん★☆☆",
        image:"", 
    },
    {
        name:"クアドロカラー",
        players:[2,3,4,5],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"",   
    },
    {
        name:"ブロックス",
        players:[2,3,4],
        timeCategory:"中量級(30～60分)",
        level:"かんたん★☆☆",
        image:"", 
    },
    {
        name:"ごきぶりポーカー",
        players:[2,3,4,5,6],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"", 
    },
    {
        name:"はぁって言うゲーム",
        players:[3,4,5,6,7,8],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"", 
    },
    {
        name:"カタカナーシ",
        players:[3,4,5,6,7,8],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"", 
    },
    {
        name:"イチゴリラ",
        players:[2,3,4,5,6],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"", 
    },
    {
        name:"ノイ",
        players:[2,3,4,5,6,7],
        timeCategory:"軽量級(～30分)",
        level:"かんたん★☆☆",
        image:"", 
    },
    {
        name:"ウイングスパン",
        players:[1,2,3,4,5],
        timeCategory:"重量級(60分～)",
        level:"むずかしい★★★",
        image:"", 
    },
    {
        name:"キャンバス",
        players:[1,2,3,4,5],
        timeCategory:"中量級(30～60分)",
        level:"ふつう★★☆",
        image:"", 
    }
];

//各ボタンを押してラジオボタン表示
const showOptions = (criteria) => {
    const options = document.getElementById("options");
    options.innerHTML = ""; //既存の選択肢をクリア

    let html = '<div class="form-group">';
    if(criteria === 'player'){
        html += `
        <input type ="radio" name="players" value="1" onclick="filterGames(1)">1人用<br>
        <input type ="radio" name="players" value="2" onclick="filterGames(2)">2人用<br>
        <input type ="radio" name="players" value="3" onclick="filterGames(3)">3人用<br>
        <input type ="radio" name="players" value="4" onclick="filterGames(4)">4人用<br>
        <input type ="radio" name="players" value="5" onclick="filterGames(5)">5人用<br>
        <input type ="radio" name="players" value="all" onclick="filterGames('all')">全て表示<br>
        `;
    } else if(criteria === 'time'){
        html += `
        <input type ="radio" name="time" value="light" onclick="filterGamesByTime('軽量級(～30分)')">軽量級(～30分)<br>
        <input type ="radio" name="time" value="medium" onclick="filterGamesByTime('中量級(30～60分)')">中量級(30～60分)<br>
        <input type ="radio" name="time" value="heavy" onclick="filterGamesByTime('重量級(60分～)')">重量級(60分～)<br>
        <input type ="radio" name="time" value="all" onclick="filterGamesByTime('all')">全て表示<br>
        `;
    } else if(criteria === 'level'){
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
        playerCount === 'all' ? true:
        game.players.includes(playerCount)
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
        card.classList.add("col-md-4","mb-4");
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






// const gameCards = document.getElementById("gameCards");

// const renderGames = (filterdGames) => {
//     gameCards.innerHTML = ""; //既存のカードをクリア
//     filterdGames.forEach((game) => {
//         const card = document.createElement("div");
//         card.classList.add("col-md-4","mb-4"); //Bootstrapのカラムとマージンを追加
//         card.innerHTML = `
//         <div class="card">
//             <h5 class="card-title">${game.name}</h5>
//             <img src="${game.image}" class="card-img" alt="${game.name}"/>
//             <div class="card-body">
//                 <p class="card-text">人数:${game.players}人用<br>
//                  所要時間:${game.time}<br>難易度:${game.level}</p>
//             </div>
//         </div>
//         `;
//         gameCards.appendChild(card);
//     });
// };



// // const filterGames = (playerCount) => {
// //     const filterdGames = games.filter((game) => {
// //         if(playerCount === "all")return true;//全て表示
// //         return game.players === playerCount;
// //     });
// //     renderGames(filterdGames);
// // };

// // //ボタンのイベントリスナー設定
// // const filterButtons = document.querySelectorAll(".btn");
// // filterButtons.forEach((button) => {
// //     button.addEventListener("click",() => {
// //     const players = button.getAttribute("data-players");
// //     filterGames(players === "all" ? "all":parseInt(players));
// //     });
// // });

// //初期表示
// renderGames(games);