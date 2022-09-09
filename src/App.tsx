import React, { useEffect, useState } from 'react';
import './App.css';
import BoardView from './component/Board';
import Game from './models/Game';

function App() {
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    const locGame = new Game(9, 9, 9);
    locGame.init();
    setGame((prev) => locGame);
  }, []);

  useEffect(() => {
    // console.log('game', game?.board);
  }, [game]);

  return (
    <div className="App">
      <BoardView />
    </div>
  );
}

export default App;
