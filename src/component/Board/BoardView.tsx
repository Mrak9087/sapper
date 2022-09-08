import { useCallback, useEffect, useState } from 'react';
import Cell from '../../models/Cell';
import Game from '../../models/Game';
import CellView from '../Cell/CellView';

import './boardView.css';

const BoardView = () => {
  const [game, setGame] = useState<Game>();
  const [cells, setCells] = useState<Cell[]>();

  useEffect(() => {
    const locGame = new Game(9, 9, 9);
    locGame.init();
    setGame(locGame);
  }, []);

  useEffect(() => {
    setCells(game?.cells);
  }, [game]);

  const cellClick = useCallback(
    (cell: Cell) => {
      setCells((prev) => [...(game?.clearCell(cell.x, cell.y) || [])]);
    },
    [game]
  );

  return (
    <div className="board9">
      {cells?.map((item, index) => {
        return <CellView key={index} pCell={item} clickCell={cellClick} />;
      })}
    </div>
  );
};

export default BoardView;
