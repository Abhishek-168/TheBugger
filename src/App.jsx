import { useState } from 'react';
import './App.css';
import Home from './Home'
import Login from './Login';
import Signup from './Signup';
import NavBar from './NavBar';
import Solve from './Solve';
import AddProb from './AddProb';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return ( <>
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/solve" element={<Solve />} />
        <Route path="/admin/addProb" element={<AddProb />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
