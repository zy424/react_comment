/*
include all reducer functions, use old state and action create new state
 */
import {ADD_COMMENT,DELETE_COMMENT, RECEIVE_COMMENTS} from '../actions/ActionTypes'

const initComments = []
export function comments(state = initComments, action) {
  switch(action.type){
    case ADD_COMMENT:
      return [action.data, ...state]
    case DELETE_COMMENT:
      return state.filter((comment,index)=>index !== action.data)
    case RECEIVE_COMMENTS:
      return action.data
    default:
      return state
  }
}