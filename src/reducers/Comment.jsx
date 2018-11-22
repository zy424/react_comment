/*
include all reducer functions, use old state and action create new state
 */
import {ADD_COMMENT,DELETE_COMMENT} from '../actions/ActionTypes'

const initComments = [
  {username:'Lily', content:'React is a good framework.'},
  {username:'Ben', content:'React is easy to learn.'}
]

export function comments(state = initComments, action) {
  switch(action.type){
    case ADD_COMMENT:
      return [action.data, ...state]
    case DELETE_COMMENT:
      return state.filter((comment,index)=>index !== action.data)
    default:
      return state
  }
}