import React, { useReducer } from 'react';

const Counting = () => {
  const initalState = {count: 0};
  const reducer = (state, action)=>{
    switch(action.type){
      case 'INC':
        return {count: state.count + 1};
      case 'DEC':
        return {count: state.count - 1};
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <div>
    	<h1>Redux</h1>
      <p>Count: {state.count}</p>
      <button onClick={()=> dispatch({type: 'INC'})}>Increment</button>
      <button onClick={()=> dispatch({type: 'DEC'})}>Decrement</button>
    </div>
  );
};

export default Counting;