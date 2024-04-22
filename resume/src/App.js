import './App.css';
import Navbar from "./Components/Navbar";
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/pages/home.js';
import Experience from './Components/pages/Experience.js';
import contact from './Components/pages/Contact.js';// Test
function App(){
    return(
      <Router>

        <Navbar/>
        <Routes>
          <Route path='/contact' Component={contact} />
          <Route path='/experience' Component={Experience} />
          <Route path='/' Component={Home} />
          <Route path='/IL_Web_Resume' Component={Home} />
          <Route path="*" Component={Home}/>







        </Routes>
      </Router>
    )
}
export default App;
