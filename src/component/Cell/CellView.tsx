import { FC, useEffect, useState } from 'react';
import { Mask } from '../../helpers/constants';
import Cell from '../../models/Cell';

import './cellView.css';

interface ICell {
  pCell: Cell;
  clickCell: (cell: Cell) => void;
}

const CellView: FC<ICell> = ({ pCell, clickCell }) => {
  const [cell, setCell] = useState<Cell>(pCell);

  let cl = 'close';

  useEffect(() => {
    setCell(pCell);
  }, [pCell]);

  const handleClick = () => {
    clickCell(cell);
  };

  if (cell.stateCell === Mask.OPEN) {
    cl = 'open';
  }

  return (
    <div className={`cell ${cl}`} onClick={() => handleClick()}>
      {cell.stateCell === Mask.OPEN ? cell.value : ''}
    </div>
  );
};

export default CellView;
