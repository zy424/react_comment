
/*
  include all action creators
 */
import {ADD_COMMENT,DELETE_COMMENT} from './ActionTypes'

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