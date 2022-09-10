import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { BOMB, Mask } from '../../helpers/constants';
import Cell from '../../models/Cell';
import Game from '../../models/Game';
import CellView from '../Cell/CellView';

import './boardView.css';

interface IBoard {
  propGame: Game;
  handleWin: () => void;
  handleLose: () => void;
}

const BoardView: FC<IBoard> = ({ propGame, handleWin, handleLose }) => {
  const [game, setGame] = useState<Game>(propGame);
  const [cells, setCells] = useState<Cell[]>(propGame.cells);

  // useEffect(() => {
  //   const locGame = new Game(9, 9, 10);
  //   locGame.init();
  //   setGame(locGame);
  // }, []);

  const win = useMemo(() => {
    const rightFlags = cells?.filter((item) => item.value === BOMB && item.stateCell === Mask.FLAG);
    const isRightFlag = rightFlags?.length === game.board.countBomb;
    const countOpen =
      cells?.reduce((count, item) => {
        if (item.stateCell === Mask.OPEN) {
          count++;
        }
        return count;
      }, 0) || 0;
    const isOpened = countOpen + game.board.countBomb === cells?.length;
    return isRightFlag && isOpened;
  }, [cells]);

  useEffect(() => { 
    setGame(propGame);
    setCells(propGame.cells);
  }, [propGame]);

  useEffect(() => {
    if (win) {
      handleWin();
    }
  }, [win]);

  const cellClick = useCallback(
    (cell: Cell) => {
      setCells([...(game?.clearCell(cell.x, cell.y) || [])]);
      if (cell.value === BOMB) {
        handleLose();
      }
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
