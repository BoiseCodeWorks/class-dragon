import GameController from "./components/gameController.js";

class App {
    constructor() {
        this.controllers = {
            gameController: new GameController()
        }
    }
}

window.app = new App()