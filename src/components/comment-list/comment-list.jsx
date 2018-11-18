import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentItem from '../comment-item/comment-item'
import './commentList.css'

export default class CommentList extends Component{
  //加上static给组件类添加，否则给组件对象添加

  render(){
    const {comments,deleteComment} = this.props
    const display = comments.length === 0 ? 'block' : 'none'
    return(
      <div className="col-md-8">
        <h3 className="reply">Reply comment：</h3>
        <h2 style={{display}}>There is no comment available, please click the left side to add！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment, index) => <CommentItem comment={comment} key={index}/>)
          }
        </ul>
      </div>
    )
  }
}
// CommentList.propTypes = {
//   comments:PropTypes.array.isRequired
// }