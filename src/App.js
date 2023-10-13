import React from 'react';
import './css/bootstrap.css';
import Home from './components/Home.js';
import Second from './components/Second.js';
import Forms from'./components/Form.js'
import Sides from './components/Sides.js'

import './App.css'; 
function App() {
  return (
    <div className="App">
      <Home/>
      <Second/>
      <Sides/>
      <Forms/>
    </div>
    
  );
}

export default App;