import React from 'react';
import { Link } from 'react-router-dom';

export default function navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <ul className="navbar">
          <div>
            <h1 className="Math-Mag">Math Magicions</h1>
          </div>
          <div className="li">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/calculatorPage">CalculatorPage</Link></li>
            <li><Link to="/jokes">Jokes</Link></li>
          </div>
        </ul>
      </div>
    </nav>
  );
}
