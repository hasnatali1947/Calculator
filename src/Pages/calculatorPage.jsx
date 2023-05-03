import React from 'react';
import CalculatorContainer from '../components/Calculator';

export default function CalculatorPage() {
  return (
    <section className="calculatorPage">
      <div className="calculator-h2">
        <h2>Let&apos;s do some math!</h2>
      </div>
      <div>
        <CalculatorContainer />
      </div>
    </section>
  );
}
