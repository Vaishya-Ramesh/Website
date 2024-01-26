import React from 'react'
import { useReducer } from 'react'
import "../css/Reducer.css"
const CounterReducer =(state,action)=>{
    switch(action.type){
        case 'Increament':
            return {count:state.count+1};
        case 'Decreament':
            return {count:state.count-1};
        case 'Reset':
            return {count:0};
        default:
            return state;
    }
}
export default function Reducer() {
    const [state,dispatch]=useReducer( CounterReducer, {count:0});
  return (
    <div>
        <div className="ReducerContainer">
            <p>Count : {state.count}</p>
            <button onClick={()=>dispatch({type: 'Increament'})}>Add</button>
            <button onClick={()=>dispatch({type: 'Decreament'})}>Sub</button>
            <button onClick={()=>dispatch({type: 'Reset'})}>Reset</button>
        </div>
        
    </div>
  )
}
