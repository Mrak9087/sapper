export const BOMB = 9;

export enum Mask {
  OPEN = 'open',
  CLOSE = 'close',
  QUEST = 'quest',
  FLAG = 'flag',
}

export const levels = [
  {
    text: 'Easy',
    level: { lengthX: 9, lengthY: 9, countBomb: 10, widthBoard: 500 },
  },
];
