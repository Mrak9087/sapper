import { BOMB } from '../helpers/constants';

class Board {
  board: number[][] = [];
  countBomb: number = 0;
  lengthX: number = 0;
  lengthY: number = 0;

  constructor(countBomb: number, lengthX: number, lengthY: number) {
    this.countBomb = countBomb;
    this.lengthX = lengthX;
    this.lengthY = lengthY;
  }

  private clearBoard() {
    this.board = [];
    for (let y = 0; y < this.lengthY; y++) {
      this.board[y] = new Array(this.lengthX).fill(0);
    }
  }

  private incCountBomb(x: number, y: number) {
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (y + i >= 0 && x + j >= 0 && y + i < this.lengthY && x + j < this.lengthX) {
          if (this.board[y + i][x + j] !== BOMB) this.board[y + i][x + j]++;
        }
      }
    }
  }

  private setBombs() {
    let locCountBomb = 0;
    while (locCountBomb < this.countBomb) {
      let x = Math.floor(Math.random() * this.lengthX);
      let y = Math.floor(Math.random() * this.lengthY);
      if (x || y) {
        if (this.board[y][x] !== BOMB) {
          this.board[y][x] = BOMB;
          this.incCountBomb(x, y);
          locCountBomb++;
        }
      }
      
    }
  }

  init() {
    this.clearBoard();
    this.setBombs();
  }
}

export default Board;
