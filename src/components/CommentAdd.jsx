import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {TextField, Button, Typography,} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import CreateIcon from '@material-ui/icons/Create'


class CommentAdd extends Component{
  static propTypes = {
    addComment: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
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
      <paper>
      <Typography variant="h6" component = 'h6'><CreateIcon color='secondary'/>&nbsp;Add Comment</Typography>
      <form>
        <TextField
            id="filled-name"
            label="User Name"
            value={username}
            onChange={this.handleNameChange}
            margin="normal"
            fullWidth
          />
        <TextField
            id="filled-full-width"
            label="Leave a comment"
            value={content}
            onChange={this.handleContentChange}
            placeholder="Leave your comment here..."
            fullWidth
            multiline
            rows="6"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        <div className='submitButton'>
        <Button aria-label="Submit"
          variant="contained"
          onClick={this.handleSubmit}
          color='secondary'
          size="medium"
        >
          <SendIcon />
            &nbsp;Submit
        </Button>
        </div>
      </form>
      </paper>
    )
  }
}



export default CommentAdd