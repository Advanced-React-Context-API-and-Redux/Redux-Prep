import React from 'react';

import PlayerForm from "./components/PlayerForm.js";
import PlayerList from "./components/PlayerList.js";

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Soccer Players</h1>
      <div>Welcome to the app</div>
      <div>Start inside of the `src/index.js` file</div>
      <div>Have fun!</div>
      <PlayerForm />
      <PlayerList />
    </div>
  );
}

export default App;
