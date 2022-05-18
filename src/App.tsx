import React from 'react';
import { useDispatch, useSelector } from './stateManager';
import {
  decrementCounterAction,
  incrementCounterAction,
} from './stores/action';

function App() {
  const counter = useSelector((state) => state.counter.valueCounter);
  const dispatch = useDispatch();

  return (
    <div className=''>
      <h1>{counter}</h1>
      <button onClick={() => dispatch?.(incrementCounterAction())}>
        Increment
      </button>
      <button onClick={() => dispatch?.(decrementCounterAction())}>
        Decrement
      </button>
    </div>
  );
}

export default App;
