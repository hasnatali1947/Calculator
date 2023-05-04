import React from 'react';
import renderer, { create } from 'react-test-renderer';
import App from './App';
import Home from './Pages/Home';
import Jokes from './Pages/Jokes';
import CalculatorPage from './Pages/calculatorPage';
import operate from './logic/operate';
import calculate from './logic/calculate';

describe('Operate Tests', () => {
  test('1 + 2 = 3', () => {
    const result = operate(1, 2, '+');
    expect(result).toBe('3');
  });

  test('0 + 100 = 100', () => {
    const result = operate(0, 100, '+');
    expect(result).toBe('100');
  });

  test('1 - 2 = -1', () => {
    const result = operate(1, 2, '-');
    expect(result).toBe('-1');
  });

  test('10 - 10 = 0', () => {
    const result = operate(10, 10, '-');
    expect(result).toBe('0');
  });

  test('2 x 3 = 6', () => {
    const result = operate(2, 3, 'x');
    expect(result).toBe('6');
  });

  test('0 x 3 = 0', () => {
    const result = operate(0, 3, 'x');
    expect(result).toBe('0');
  });

  test('5 % 5 = 0', () => {
    const result = operate(5, 5, '%');
    expect(result).toBe('0');
  });

  test('3 % 2 = 1', () => {
    const result = operate(3, 2, '%');
    expect(result).toBe('1');
  });

  test('4 ÷ 5 = 0.8', () => {
    const result = operate(4, 5, '÷');
    expect(result).toBe('0.8');
  });

  test('0 ÷ 5 = 0', () => {
    const result = operate(0, 5, '÷');
    expect(result).toBe('0');
  });
});

describe('Calculate Test', () => {
  test('5 + 5 equal 10', () => {
    const object = {
      total: '5',
      next: '5',
      operation: '+',
    };
    const newObj = calculate(object, '');
    expect(newObj.total).toBe('10');
  });

  test('10 - 8 = 0', () => {
    const object = {
      total: '10',
      next: '8',
      operation: '-',
    };
    const newObj = calculate(object, '');
    expect(newObj.total).toBe('2');
  });

  test('3 x 9 = 27', () => {
    const object = {
      total: '3',
      next: '9',
      operation: 'x',
    };
    const newObj = calculate(object, '');
    expect(newObj.total).toBe('27');
  });

  test('12 ÷ 10 = 1.2', () => {
    const object = {
      total: '12',
      next: '10',
      operation: '÷',
    };
    const newObj = calculate(object, '');
    expect(newObj.total).toBe('1.2');
  });

  test('2 % 2 = 0', () => {
    const object = {
      total: '2',
      next: '2',
      operation: '%',
    };
    const newObj = calculate(object, '');
    expect(newObj.total).toBe('0');
  });

  test('equal function', () => {
    const object = {
      total: '2',
      next: '2',
      operation: '+',
    };
    const newObj = calculate(object, '=');
    expect(newObj.total).toBe('4');
  });

  test('AC function', () => {
    const object = {
      total: '2',
      next: '2',
      operation: '+',
    };
    const newObj = calculate(object, 'AC');
    expect(newObj.total).toBe(null);
  });

  it('+/- Function', () => {
    const object = {
      total: '6',
      next: '6',
      operation: '+',
    };
    const newObj = calculate(object, '+/-');
    expect(newObj.next).toBe('-6');
  });
});

describe('Components render Correctly', () => {
  test('App render Correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('App render Correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('jokes render Correctly', () => {
    const tree = renderer.create(<Jokes />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('calculatorPage render Correctly', () => {
    const tree = renderer;
    create(<CalculatorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
