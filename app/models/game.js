import Dragon from "./dragon.js";
import Champion from "./champion.js";

export default class Game {
    constructor(data) {
        this._id = data._id
        this.dragon = new Dragon(data._dragon)
        this.champion = new Champion(data._champion)
        this.history = data.history
    }
}