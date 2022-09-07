class Cell {
    readonly x:number;
    readonly y:number;
    readonly value:number;

    constructor(x:number, y:number, value: number) {
        this.x = x;
        this.y = y;
        this.value = value;
    }
}

export default Cell;