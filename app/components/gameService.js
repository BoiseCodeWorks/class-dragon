import Dragon from '../models/dragon.js'
import Champion from '../models/champion.js'
import Game from '../models/game.js';


const ddApi = axios.create({
    baseURL: 'https://dragon-duel.herokuapp.com/api/',
    timeout: 3000
})

let newGame = {}
let activeGameId = ''

export default class GameService {
    init(drawDragons, drawChamps) {
        ddApi.get('dragons')
            .then(res => {
                let dragons = res.data.map(rD => new Dragon(rD))
                drawDragons(dragons)
            })
        ddApi.get('champions')
            .then(res => {
                let champs = res.data.map(rC => new Champion(rC))
                drawChamps(champs)
            })
    }

    setDragon(id) {
        newGame.dragonId = id
        return newGame.hasOwnProperty('championId')
    }

    setChamp(id) {
        newGame.championId = id
        return newGame.hasOwnProperty('dragonId')
    }

    start(drawGame) {
        ddApi.post('games', newGame)
            .then(res => {
                let game = new Game(res.data.game)
                activeGameId = game._id
                drawGame(game)
            })
    }
}

