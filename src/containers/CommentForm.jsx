import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import CommentAdd from '../components/CommentAdd'
import CommentList from '../components/CommentList'
import {addComment, deleteComment} from '../actions/Actions'


class CommentForm extends Component{
  static propTypes = {
    comments:PropTypes.array.isRequired,
    addComment:PropTypes.func.isRequired,
    deleteComment:PropTypes.func.isRequired,
  }
  render(){
    const {comments, addComment, deleteComment} = this.props
    return(
      <Grid container spacing={32}>
            <Grid item xs={12} md={5}>
              <CommentAdd addComment = {addComment}/>
            </Grid>
            <Grid item xs={12} md={7}>
              <CommentList
                comments = {comments}
                deleteComment = {deleteComment}
              />
            </Grid>
          </Grid>
    )
  }
}

export default connect(
  state => ({comments:state.comments}),
  {addComment,deleteComment}
)(CommentForm)