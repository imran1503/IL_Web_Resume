import './App.css';
import Navbar from "./Components/Navbar";
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/pages/home.js';
import Experience from './Components/pages/Experience.js';
import OngoingProjects from './Components/pages/OngoingProjects.js';

function App(){
    return(
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/ongoing_projects' Component={OngoingProjects}/>
          <Route path='/experience' Component={Experience}/>
        </Routes>
      </Router>
    )
}
export default App;
