import './App.css';
import Navbar from "./Components/Navbar";
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/pages/home.js';

function App(){
    return(
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
        </Routes>
      </Router>
    )
}
export default App;
