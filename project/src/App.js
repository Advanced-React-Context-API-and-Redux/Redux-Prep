import React from 'react';

import PlayerForm from "./components/PlayerForm.js";
import PlayerList from "./components/PlayerList.js";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="image"></div>
      <PlayerForm />
      <PlayerList />
    </div>
  );
}

export default App;
