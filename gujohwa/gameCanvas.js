/**@type {HTMLCanvasElement} */
import HealthBar from "../item/healthbar.js";
import Character from "./character.js";

export default
class gameCanvas{
    obj
    ctx
    selectedCharacter

    constructor(){
    this.obj = document.createElement('game1')
    document.body.append(this.#obj)
    this.#obj.tabIndex = 0
    this.#obj.focus()
    this.#obj.width = 1024
    this.#obj.height = 576
    this.#ctx = this.#obj.getContext('2d')

    let selectedCharacter = null;


    }
}

