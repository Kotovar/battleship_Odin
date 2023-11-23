import '../dist/css/style.css';
// import {Ship} from './ship';
import {Gameboard} from './gameboard';

const board = new Gameboard('player1');

board.placeShip(3, 5, 5, 'x');
board.placeShip(3, 0, 0, 'y');
board.placeShip(3, 3, 1, 'x');
board.placeShip(3, 0, 0, 'x');
board.placeShip(3, 0, 2, 'y');
console.log(board.map);
console.log(board.getlistOfShips());
