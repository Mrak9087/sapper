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
      setCells([...(game?.clearCell(cell.x, cell.y) || [])]);
    },
    [game]
  );

  const changeState = useCallback(
    (cell: Cell) => {
      setCells([...(game?.changeStateCell(cell.x, cell.y) || [])]);
    },
    [game]
  );

  return (
    <div className="board9">
      {cells?.map((item, index) => {
        return (
          <CellView key={index} pCell={item} clickCell={cellClick} changeState={changeState} />
        );
      })}
    </div>
  );
};

export default BoardView;
