
/*
  include all action creators
 */
import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENTS} from './ActionTypes'

export const addComment = (comment) => (
  {
    type: ADD_COMMENT,
    data: comment
  }
)

export const deleteComment = (index) => (
  {
    type: DELETE_COMMENT,
    data: index
  }
)

export const receiveComments = (comments) => (
  {
    type: RECEIVE_COMMENTS,
    data: comments
  }
)
//async get data from backend
export const getComments = ()=>{
  return dispatch => {
    //simulate send ajax request
    setTimeout(()=>{
      const comments = [
        {username:'Lily', content:'React is a good framework.'},
        {username:'Ben', content:'React is easy to learn.'}
      ]
      //dispatch a sync action
      dispatch(receiveComments(comments))
    },1000)

  }
}