import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {

  const counterValue = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.counter.showToggle);

  function toggleCounterHandler(){
    dispatch(counterActions.toggle());
  };

  function incrementHandler(){
    dispatch(counterActions.increment());
  }

  function decrementHandler(){
    dispatch(counterActions.decrement());
  }

  function increseHandler(){
    dispatch(counterActions.increse(5,6));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counterValue}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHandler}>Increse</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
