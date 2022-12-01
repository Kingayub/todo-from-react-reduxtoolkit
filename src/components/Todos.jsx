import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
  const state = useSelector((initialState)=> initialState)
  const dispatch = useDispatch()
  const deleteTodo = (index)=> {
    dispatch({type:"delete", payload:index})
  }
  const changeFavorite = (index)=> {
    dispatch({type:"favor", payload:index})
  }

  return (
    <div className="todos">
      {state.todos.map((el,index)=> {
        return (
          <div className={el.complited? 'todo favorite':'todo'}
               key={index}
          >
          <span className="btn_favorite" role="button" onClick={()=> {changeFavorite(index)}}>&#x2605;</span>
            {el.text}
          <span className="btn_delete" role="button" onClick={()=> {deleteTodo(index)}}>&#x2718;</span>

          </div>)
      })}
    </div>
  );
};

export default Todos;