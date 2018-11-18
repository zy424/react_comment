import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentAdd extends Component{
  static propTypes = {
    addComment: PropTypes.func.isRequired
  }
  state = {
    username: '',
    content: ''
  }
  handleSubmit = () => {
    //收集数据并封装成comment对象
    const comment = this.state
    //更新状态
    this.props.addComment(comment)
    //清楚输入数据
    this.setState({
      username:'',
      content:''
    })
  }
  handleNameChange = (event) => {
    const username = event.target.value
    this.setState({username})
  }
  handleContentChange = (event) => {
    const content = event.target.value
    this.setState({content})
  }
  render(){
    const {username, content} = this.state
    return(
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>User name</label>
            <input type="text" className="form-control" placeholder="user name"
                   value={username} onChange={this.handleNameChange} />
          </div>
          <div className="form-group">
            <label>Comment content</label>
            <textarea className="form-control" rows="6" placeholder="comment content"
                      value={content} onChange={this.handleContentChange}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}