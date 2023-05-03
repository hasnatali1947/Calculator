import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './Pages/calculatorPage';
import Home from './Pages/Home';
import Jokes from './Pages/Jokes';
import Navbar from './components/navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/CalculatorPage" element={<Calculator />} />
      <Route exact path="/jokes" element={<Jokes />} />
    </Routes>
  </Router>
);

export default App;
