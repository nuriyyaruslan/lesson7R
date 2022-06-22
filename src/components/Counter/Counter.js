import React,{ useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../features/Counter/counterSlice';
import './Counter.scss';

function Counter() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [ inputVal, setInputVal ] = useState('');

  return (
    <div className='counter-cover'>
        <button onClick={() => dispatch(decrement())} className="counter-btn">Decrement</button>
        <strong>{count}</strong>
        <button onClick={() => dispatch(increment())} className="counter-btn">Increment</button>
        <br />
        <input type="text" className='custom-input' value={inputVal} onInput={ e => setInputVal(e.target.value)} />
        <br />
        <button onClick={() => dispatch(incrementByAmount(Number(inputVal)))} className="counter-btn">IncrementByInputAmount</button>
        <br />
        <button onClick={() => dispatch(incrementByAmount(10))} className="counter-btn">IncrementByAmount</button>
    </div>
  )
}

export default Counter