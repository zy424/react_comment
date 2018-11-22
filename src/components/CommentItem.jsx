import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import avatar from '../assets/avatar.jpg'
import {ListItem,List,IconButton,ListItemText,ListItemSecondaryAction, Avatar} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import {deleteComment} from '../actions/Actions'


class CommentItem extends Component{
  handleClick = ()=>{
    const {comment,deleteComment,index} = this.props
    if(window.confirm(`Are you sure to delete ${comment.username}'s comment?`)) {
      deleteComment(index)
    }
  }
  render(){
    const {comment} = this.props
    return(
      <List>
        <ListItem >
          <Avatar alt="photo" src={avatar} />
          <ListItemText primary={`${comment.username} said:`}/>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={this.handleClick}>
              <DeleteIcon color='secondary'/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{comment.content}</p>
        </ListItem>
      </List>
    )
  }}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
  index:PropTypes.number.isRequired
}
export default connect(
  null,
  {deleteComment}
)(CommentItem)