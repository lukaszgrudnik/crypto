import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store';

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter); // Typing can be added to state

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  );
};
