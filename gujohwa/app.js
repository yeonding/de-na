/** @type {HTMLCanvasElement} */

import GameCanvas from './gameCanvas.js'


let gameCanvas = new GameCanvas()
gameCanvas.run()


const startButton = document.getElementById('start-button');
startButton.style.display = 'none'; // 시작 버튼은 처음에 보이지 않음

const end = document.getElementById('endScreenDefeat');
end.style.display = 'none';

const victory = document.getElementById('victory');
victory.style.display = 'none';

const chance = document.getElementById('chance');
chance.style.display = 'none';

const restartButton = document.getElementById('restart-button');

