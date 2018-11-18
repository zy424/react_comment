import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

import './commentItem.css'

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
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.handleClick}>delete</a>
        </div>
        <p className="user"><span>{comment.username}</span><span> said:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}