import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Game from '../../models/Game';
import { RootStore } from '../../store/store';
import BoardView from '../Board';
import Modal from '../Modal';
import './gameView.css';

const GameView = () => {
  const store = useSelector((state:RootStore) => state);
  const [game, setGame] = useState<Game>();
  const [isWin, setIsWin] = useState<boolean>(false);
  const [isLose, setIsLose] = useState<boolean>(false);

  useEffect(() => {
    newGame();
  }, [store.countBomb]);

  const newGame = () => {
    const locGame = new Game(store.lengthX, store.lengthY, store.countBomb);
    locGame.init();
    setGame(locGame);
  };

  const handleWin = () => {
    setIsWin(true);
  };

  const handleLose = () => {
    setIsLose(true);
  };

  const closeModal = () => {
    setIsLose(false);
    setIsWin(false);
    newGame();
  };

  const getTextModal = (): string => {
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
      {game ? <BoardView boardWidth={store.widthBoard} propGame={game} handleWin={handleWin} handleLose={handleLose} /> : <></>}
      <Modal isShow={isWin || isLose} close={closeModal} text={getTextModal()} />
    </div>
  );
};

export default GameView;
