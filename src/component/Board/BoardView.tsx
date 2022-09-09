import { FC, useCallback, useEffect, useState } from 'react';
import Cell from '../../models/Cell';
import Game from '../../models/Game';
import CellView from '../Cell/CellView';

import './boardView.css';

interface IBoard {
  propGame: Game;
}

const BoardView:FC<IBoard> = ({propGame}) => {
  const [game, setGame] = useState<Game>(propGame);
  const [cells, setCells] = useState<Cell[]>();

  // useEffect(() => {
  //   const locGame = new Game(9, 9, 10);
  //   locGame.init();
  //   setGame(locGame);
  // }, []);

  useEffect(() => {
    setCells(game.cells);
  }, [propGame]);

  const cellClick = useCallback(
    (cell: Cell) => {
      setCells([...(game?.clearCell(cell.x, cell.y) || [])]);
    },
    [propGame]
  );

  const changeState = useCallback(
    (cell: Cell) => {
      setCells([...(game?.changeStateCell(cell.x, cell.y) || [])]);
    },
    [propGame]
  );

  return (
    <div className="board board9">
      {cells?.map((item, index) => {
        return (
          <CellView key={index} pCell={item} clickCell={cellClick} changeState={changeState} />
        );
      })}
    </div>
  );
};

export default BoardView;
