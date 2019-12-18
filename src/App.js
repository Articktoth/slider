import React from 'react';
import './App.css';


//Components
import VistaUno from './components/VistaUno';

function App() {

  

  return (
    <div className="container">
      <VistaUno value={0} color="red" />
    </div>
  );
}

export default App;
