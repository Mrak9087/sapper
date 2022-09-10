import { BOMB, Mask } from '../helpers/constants';
import Board from './Board';
import Cell from './Cell';

class Game {
  board: Board;
  cells: Cell[] = [];
  private clearCells: Cell[] = [];

  constructor(lengthX: number, lengthY: number, countBomb: number) {
    this.board = new Board(countBomb, lengthX, lengthY);
  }

  init() {
    this.board.init();
    this.cells = [];
    for (let y = 0; y < this.board.lengthY; y++) {
      for (let x = 0; x < this.board.lengthX; x++) {
        this.cells.push(new Cell(x, y, this.board.board[y][x]));
      }
    }
  }

  clearCell(x: number, y: number): Cell[] {
    this.clearCells = [];
    this.clearing(x, y);
    while (this.clearCells.length) {
      let locCell = this.clearCells.pop()!!;
      if (locCell) {
        if (locCell.stateCell === Mask.OPEN) continue;
        locCell.stateCell = Mask.OPEN;
        if (locCell.value === BOMB) {
          this.cells.forEach((item) => {
            item.stateCell = Mask.OPEN;
          })
          break;
        }
        if (locCell.value !== 0) continue;
      }

      this.clearing(locCell.x, locCell.y);
    }
    return this.cells;
  }

  changeStateCell(x: number, y: number): Cell[] {
    let locCell = this.cells.find((item) => {
      if (item.x === x && item.y === y) {
        return item;
      }
    });

    locCell?.changeState();

    return this.cells;
  }

  private clearing(x: number, y: number) {
    let targetCell = this.cells.find((item) => {
      if (item.x === x && item.y === y) {
        return item;
      }
    });
    if (targetCell?.value === 0) {
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (
            y + i >= 0 &&
            x + j >= 0 &&
            y + i < this.board.lengthY &&
            x + j < this.board.lengthX
          ) {
            let locCell = this.cells.find((item) => {
              if (item.x === x + j && item.y === y + i) {
                return item;
              }
            });
            if (locCell?.x === targetCell.x && locCell?.y === targetCell.y) continue;
            if (!locCell || locCell.stateCell === Mask.OPEN) continue;
            this.clearCells.push(locCell);
          }
        }
      }
    }
    if (targetCell) this.clearCells.push(targetCell);
  }
}

export default Game;
