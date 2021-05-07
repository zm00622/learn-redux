import React from 'react';
import{ useSelector, useDispatch } from 'react-redux'; // imports the use of these hooks
import {increment} from './actions'; // imports increment function
import {decrement} from './actions'; // imports decrement function

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  // useSelector allows you to extract data from the Redux store state, using a
  // selector function.
  const dispatch = useDispatch(); // This hook returns a reference to the dispatch function
  // from the Redux store. You may use it to dispatch actions as needed. 
  // FYI, the actions are merely functions.

  return (
    <div className="App">
      <h1>Counter {counter}</h1> 
      {/* Displays the state of the counter (which is pulled
        from the store by the useSelector(state => state.counter) syntax above)) */} 
      <button onClick={() => dispatch(increment())}>+</button> {/*increments on click using increment function*/}
      <button onClick={() => dispatch(decrement())}>-</button> {/*decrements on click using decrement function*/}
      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}
    </div>
  );
}

export default App;
