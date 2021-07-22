import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Tests for different fibonacci solutions', () => {
  test('Fibonacci(n=10)', () => {
    const { getByTestId } = render(<App />);
    const btnEl = getByTestId("button");
    const inputEl = getByTestId("input");
    const resEl = getByTestId("result");
  
    fireEvent.change(inputEl, {
      target: {
        value:"10"
      }
    })
    fireEvent.click(btnEl);
    
    expect(resEl.textContent.trim()).toBe("55")
  
  
  });
  test('Fibonacci(n=1000000)', () => {
    const { getByTestId } = render(<App />);
    const btnEl = getByTestId("button");
    const inputEl = getByTestId("input");
    const resEl = getByTestId("result");
    fireEvent.change(inputEl, {
      target: {
        value:"1000000"
      }
    })
    fireEvent.click(btnEl);
    
    expect(resEl.textContent.trim()).toBe("NaN")
  
  
  });
  test('Fibonacci(empty string)', () => {
    const { getByTestId } = render(<App />);
    const btnEl = getByTestId("button");
    const inputEl = getByTestId("input");
    const resEl = getByTestId("result");
    fireEvent.change(inputEl, {
      target: {
        value:""
      }
    })
    fireEvent.click(btnEl);
    
    expect(resEl.textContent.trim()).toBe("")
  
  
  });
  test('Fibonacci(-1)', () => {
    const { getByTestId } = render(<App />);
    const btnEl = getByTestId("button");
    const inputEl = getByTestId("input");
    const resEl = getByTestId("result");
    fireEvent.change(inputEl, {
      target: {
        value:"-1"
      }
    })
    fireEvent.click(btnEl);
    
    expect(resEl.textContent.trim()).toBe("")
  
  });





})

