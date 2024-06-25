import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './store/counterSlice';

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncrementByAmount = amount => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <input type="number" onChange={(e) => handleIncrementByAmount(parseInt(e.target.value))} />
      </div>
      <div>
        <p>Count: {count}</p>
      </div>
    </div>
  );
};

export default App;
