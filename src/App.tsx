import React from 'react';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header>
        <h1>2048</h1>
      </header>
      <Game width={4} height={4} nRandomCells={2} randomCellValue={2} />
    </div>
  );
}

export default App;
