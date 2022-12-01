import {createReducer} from "@reduxjs/toolkit";
import {type} from "@testing-library/user-event/dist/type";

export const initialState = {
  todos: [],

}

export const todoReducer = createReducer(initialState,(builder)=>{
    builder
        .addCase('add',(state, action)=> {
          state.todos.push({text: action.payload, completed: false})
        })
       .addCase('delete', (state,action)=> {
        state.todos = state.todos.filter((el,ind)=> {
          if(ind===action.payload) {
            return false
          }
          return true
        })
      })
      .addCase('favor', (state, action)=> {
        state.todos.map((el,index)=> {
          if(index===index) {
            el.complited=!el.complited
          }
          return true
        })
      })

})