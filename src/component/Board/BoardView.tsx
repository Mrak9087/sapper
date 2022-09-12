import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { BOMB, Mask } from '../../helpers/constants';
import Cell from '../../models/Cell';
import Game from '../../models/Game';
import CellView from '../Cell/CellView';

import './boardView.css';

interface IBoard {
  propGame: Game;
  boardWidth: number;
  handleWin: () => void;
  handleLose: () => void;
}

const BoardView: FC<IBoard> = ({ propGame, boardWidth, handleWin, handleLose }) => {
  const [game, setGame] = useState<Game>(propGame);
  const [cells, setCells] = useState<Cell[]>([]);

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

  const countFlag: number = useMemo(() => {
    const cFlag = cells.reduce((count, item) => {
      if (item.stateCell === Mask.FLAG) {
        count++;
      }
      return count;
    }, 0);
    return game.board.countBomb - cFlag;
  }, [cells]);

  useEffect(() => {
    propGame.init();
    setGame(propGame);
  }, [propGame]);

  useEffect(() => {
    setCells([]);
    setCells(game.cells);
  }, [game]);

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
    [propGame,game]
  );

  const changeState = useCallback(
    (cell: Cell) => {
      setCells([...(game?.changeStateCell(cell.x, cell.y) || [])]);
    },
    [propGame,game]
  );

  return (
    <>
      {game ? (
        <>
          <div className="counter">{countFlag}</div>
          <div
            className="board board9"
            style={
              {
                '--w': boardWidth,
                '--lx': game.board.lengthX,
                '--ly': game.board.lengthY,
              } as React.CSSProperties
            }
          >
            {cells?.map((item, index) => {
              return (
                <CellView
                  key={index}
                  pCell={item}
                  clickCell={cellClick}
                  changeState={changeState}
                />
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default BoardView;
