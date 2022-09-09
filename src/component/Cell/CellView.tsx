import React, { FC, MouseEvent, useEffect, useState } from 'react';
import { Mask } from '../../helpers/constants';
import Cell from '../../models/Cell';

import './cellView.css';

interface ICell {
  pCell: Cell;
  clickCell: (cell: Cell) => void;
  changeState: (cell: Cell) => void;
}

const CellView: FC<ICell> = ({ pCell, clickCell, changeState }) => {
  const [cell, setCell] = useState<Cell>(pCell);

  let cl = 'close';

  useEffect(() => {
    setCell(pCell);
  }, [pCell]);

  const handleClick = () => {
    if (cell.stateCell === Mask.FLAG) return;
    clickCell(cell);
  };

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    changeState(cell);
  };

  if (cell.stateCell === Mask.OPEN) {
    cl = 'open';
  }
  if (cell.stateCell === Mask.FLAG) {
    cl = 'flag';
  }
  if (cell.stateCell === Mask.QUEST) {
    cl = 'quest';
  }
  if (cell.stateCell === Mask.CLOSE) {
    cl = 'close';
  }

  return (
    <div className={`cell ${cl}`} onClick={() => handleClick()} onContextMenu={(e)=>handleContextMenu(e)}>
      <span>{cell.stateCell === Mask.OPEN ? cell.value : ''}</span>
      <div></div>
    </div>
  );
};

export default CellView;
