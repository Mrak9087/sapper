import { useEffect, useState } from 'react';
import Game from '../../models/Game';
import BoardView from '../Board';
import './gameView.css';

const GameView = () => {
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    const locGame = new Game(9, 9, 10);
    locGame.init();
    setGame(locGame);
  }, []);

  return <div className="gameView">{game ? <BoardView propGame={game} /> : <></>}</div>;
};

export default GameView;
