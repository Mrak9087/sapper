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
  let txt = ''

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
    if (cell.value === 9) {
      cl = 'open bomb'
    }
  }
  if (cell.stateCell === Mask.FLAG) {
    cl = 'close flag';
  }
  if (cell.stateCell === Mask.QUEST) {
    cl = 'close quest';
  }
  if (cell.stateCell === Mask.CLOSE) {
    cl = 'close';
  }

  if (cell.value === 0 || cell.value === 9) {
    txt = ''
  } else {
    txt = cell.value.toString();
  }

  return (
    <div className={`cell ${cl}`} onClick={() => handleClick()} onContextMenu={(e)=>handleContextMenu(e)}>
      <span>{cell.stateCell === Mask.OPEN ? txt : ''}</span>
      <div></div>
    </div>
  );
};

export default CellView;
