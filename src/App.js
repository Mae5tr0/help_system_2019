import React from 'react';
import './App.css';
import Navigation from './components/common/navigation'
import Routes from "./routes";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navigation /> 

        <Routes />
      </div>
    </Router>
  );
}

export default App;
