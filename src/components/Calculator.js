import { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [val, setval] = useState({
    total: null,
    next: null,
    operation: null,
  });
  function handleclick(e) {
    const Newvalue = e.target.value;
    const showvalue = calculate(val, Newvalue);
    setval(showvalue);
  }
  const { total, next, operation } = val;

  return (
    <section className="Calc-container">
      <div className="inputDiv">
        <h2 className="input">{!total && !next && !operation ? 0 : [total, operation, next]}</h2>
      </div>
      <div className="row">
        <input type="button" onClick={handleclick} value="AC" />
        <input type="button" onClick={handleclick} value="+/-" />
        <input type="button" onClick={handleclick} value="%" />
        <input type="button" onClick={handleclick} className="colourButton" value="÷" />
      </div>
      <div className="row">
        <input type="button" name="7" onClick={handleclick} value="7" />
        <input type="button" name="8" onClick={handleclick} value="8" />
        <input type="button" name="9" onClick={handleclick} value="9" />
        <input type="button" onClick={handleclick} className="colourButton" value="x" />
      </div>
      <div className="row">
        <input type="button" name="4" onClick={handleclick} value="4" />
        <input type="button" name="5" onClick={handleclick} value="5" />
        <input type="button" name="6" onClick={handleclick} value="6" />
        <input type="button" name="-" onClick={handleclick} className="colourButton" value="-" />
      </div>
      <div className="row">
        <input type="button" name="1" onClick={handleclick} value="1" />
        <input type="button" name="2" onClick={handleclick} value="2" />
        <input type="button" name="3" onClick={handleclick} value="3" />
        <input type="button" onClick={handleclick} className="colourButton" value="+" />
      </div>
      <div className="row row-bottom">
        <input
          type="button"
          name="0"
          onClick={handleclick}
          className="button-0"
          value="0"
        />
        <input type="button" name="." onClick={handleclick} value="." />
        <input type="button" onClick={handleclick} className="colourButton" value="=" />
      </div>
    </section>
  );
};
export default Calculator;
