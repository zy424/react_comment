import React, {Component} from 'react'
import PubSub from 'pubsub-js'

import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'


export default class App extends Component{
  //给组件对象指定state属性
  state = {
    comments:[
      {username:'Lily', content:'React is a good framework.'},
      {username:'Ben', content:'React is easy to learn.'}
    ]
  }
  componentDidMount() {
    //订阅消息（deleteComment)
    PubSub.subscribe('deleteComment', (msg, index) => {
      this.deleteComment(index)
    })
  }
  addComment = (comment) => {
    const {comments} = this.state
    comments.unshift(comment)
    this.setState({comments})
  }
  deleteComment =(index) =>{
    const {comments} = this.state
    comments.splice(index,1)
    this.setState({comments})
  }
  render(){
    const {comments} = this.state
    return(
      <div>
          <header className="site-header jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1>请发表对React的评论</h1>
                </div>
              </div>
            </div>
          </header>
          <div className="container">
            <CommentAdd addComment = {this.addComment}/>
            <CommentList comments = {comments}/>
          </div>
        </div>
    )
  }
}