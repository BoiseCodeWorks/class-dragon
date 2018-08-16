import GameService from "./gameService.js";

let gs = new GameService()

function drawDragons(dragons) {
    let template = ''
    for (let i = 0; i < dragons.length; i++) {
        let dragon = dragons[i];
        template += `
        <div onclick='app.controllers.gameController.setDragon(${dragon.id})' class="dragon">
            <h4>${dragon.name}</h4>
            <img src="${dragon.imgUrl}" alt="">
        </div>
        `
    }
    document.getElementById('dragons').innerHTML = template
}

function drawChampions(champs) {
    let template = ''
    for (let i = 0; i < champs.length; i++) {
        const champ = champs[i];
        template += `
        <div onclick='app.controllers.gameController.setChamp(${champ.id})' class="champ">
            <h4>${champ.name}</h4>
            <p>${champ.race} - ${champ.class}</p>
            <img src="${champ.imgUrl}" alt="">
        </div> 
    `
    }
    document.getElementById('champions').innerHTML = template
}

function drawStartButton() {
    document.getElementById('start-button').hidden = false;
}

function drawGame(game) {
    document.getElementById('pre-game').style.display = "none";
    let template = `
    <div class="game-champ col">
        <h2>${game.champion.name}</h2>
        <h4>${game.champion.race} - ${game.champion.class}</h4>
        <p>HP: ${game.champion.hp}</p>
        <img src="${game.champion.imgUrl}" alt="">
    </div>
    <div class="col attacks">
    `
    for (let attack in game.champion.attacks) {
        template += `
            <button>${attack}</button>
        `
    }
    template += `
        <div class="game-dragon col">
            <h2>${game.dragon.name}</h2>
            <p>HP: ${game.dragon.currentHP}</p>
            <img src="${game.dragon.imgUrl}" alt="">
        </div>
    `
    document.getElementById('game').innerHTML = template
}



export default class GameController {
    constructor() {
        gs.init(drawDragons, drawChampions)
    }
    setChamp(id) {
        if (gs.setChamp(id)) {
            drawStartButton()
        }
    }
    setDragon(id) {
        if (gs.setDragon(id)) {
            drawStartButton()
        }
    }
    start() {
        gs.start(drawGame)
    }
}