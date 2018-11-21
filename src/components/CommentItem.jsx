import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import avatar from '../assets/avatar.jpg'

import {ListItem,List,IconButton,ListItemText,ListItemSecondaryAction, Avatar} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'


export default class CommentItem extends Component{
  static propTypes = {
    comment: PropTypes.object.isRequired,
    index:PropTypes.number.isRequired
  }
  handleClick = ()=>{
    const {comment,index} = this.props
    if(window.confirm(`Are you sure to delete ${comment.username}'s comment?`)) {
      PubSub.publish('deleteComment',index)
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
  }
}