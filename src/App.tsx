import React from 'react';
import './App.css';
import { AdviceComponent } from './components/AdviceComponent';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div className="container w-50">
        <AdviceComponent />
      </div>
    </div>
  );
}

export default App;
