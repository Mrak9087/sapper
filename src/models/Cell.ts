import { Mask } from "../helpers/constants";

class Cell {
  readonly x: number;
  readonly y: number;
  readonly value: number;
  stateCell:Mask = Mask.CLOSE

  constructor(x: number, y: number, value: number) {
    this.x = x;
    this.y = y;
    this.value = value;
  }
}

export default Cell;
