import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Typography} from '@material-ui/core'
import CommentIcon from '@material-ui/icons/Comment'

import CommentItem from './CommentItem'


export default class CommentList extends Component{
  //加上static给组件类添加，否则给组件对象添加

  render(){
    const {comments,deleteComment} = this.props
    const display = comments.length === 0 ? 'block' : 'none'
    return(
      <div >
        <Typography variant="h6" component = 'h6'><CommentIcon color='secondary'/>&nbsp;Comment List</Typography>
        <h2 style={{display}}>There is no comment available, please click the below comment section to add！！！</h2>

          {
            comments.map((comment, index) => <CommentItem comment={comment} key={index}/>)
          }
      </div>
    )
  }
}
// CommentList.propTypes = {
//   comments:PropTypes.array.isRequired
// }