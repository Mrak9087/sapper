import { Mask } from "../helpers/constants";

class Cell {
  readonly x: number;
  readonly y: number;
  readonly value: number;
  stateCell:Mask = Mask.CLOSE;

  constructor(x: number, y: number, value: number) {
    this.x = x;
    this.y = y;
    this.value = value;
  }

  changeState(){
    if (this.stateCell === Mask.CLOSE) {
      this.stateCell = Mask.FLAG;
    } else if (this.stateCell === Mask.FLAG) {
      this.stateCell = Mask.QUEST;
    } else if (this.stateCell === Mask.QUEST) {
      this.stateCell = Mask.CLOSE;
    }
  }
}

export default Cell;
