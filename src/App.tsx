import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './models/Board';

function App() {
  const [game, setGame] = useState<Board>();

  useEffect(() => {
    const locGame = new Board(9, 9, 9)
    locGame.init();
    setGame(prev => locGame);
    
  },[])

  useEffect(() => {
    console.log('game',game?.board);
  },[game])

  return (
    <div className="App">
     Sapper
    </div>
  );
}

export default App;
