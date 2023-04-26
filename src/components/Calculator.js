import './Calculator.css';

const Calculator = () => (
  <section className="Calc-container">
    <div className="inputDiv">
      <input type="Number" className="input" value="0" />
    </div>
    <div className="row">
      <input type="button" value="AC" />
      <input type="button" value="+/-" />
      <input type="button" value="%" />
      <input type="button" className="colourButton" value="/" />
    </div>
    <div className="row">
      <input type="button" value="7" />
      <input type="button" value="8" />
      <input type="button" value="9" />
      <input type="button" className="colourButton" value="*" />
    </div>
    <div className="row">
      <input type="button" value="4" />
      <input type="button" value="5" />
      <input type="button" value="6" />
      <input type="button" className="colourButton" value="-" />
    </div>
    <div className="row">
      <input type="button" value="1" />
      <input type="button" value="2" />
      <input type="button" value="3" />
      <input type="button" className="colourButton" value="+" />
    </div>
    <div className="row row-bottom">
      <input type="button" className="button-0" value="0" />
      <input type="button" value="." />
      <input type="button" className="colourButton" value="=" />
    </div>
  </section>
);
export default Calculator;
