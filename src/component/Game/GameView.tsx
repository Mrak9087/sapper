import { useEffect, useState } from 'react';
import Game from '../../models/Game';
import BoardView from '../Board';
import Modal from '../Modal';
import './gameView.css';

const GameView = () => {
  const [game, setGame] = useState<Game>();
  const [isWin, setIsWin] = useState<boolean>(false);
  const [isLose, setIsLose] = useState<boolean>(false);

  useEffect(() => {
    newGame();
  }, []);

  const newGame = () => {
    const locGame = new Game(9, 9, 10);
    locGame.init();
    setGame(locGame);
  };

  const handleWin = () => {
    setIsWin(true);
  };

  const handleLose = () => {
    setIsLose(true);
  }

  const closeModal = () => {
    newGame();
    setIsLose(false);
    setIsWin(false);
  };

  const getTextModal = ():string => {
    if (isWin) {
      return 'Congratulation!!!';
    }
    if (isLose) {
      return 'Lose!!!';
    }
    return '';
  };

  return (
    <div className="gameView">
      {game ? <BoardView propGame={game} handleWin={handleWin} handleLose={handleLose}/> : <></>}
      <Modal isShow={isWin || isLose} close={closeModal} text={getTextModal()} />
    </div>
  );
};

export default GameView;
