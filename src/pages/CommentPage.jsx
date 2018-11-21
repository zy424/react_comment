import React, {Component} from 'react'
import PubSub from 'pubsub-js'
import PropTypes from 'prop-types'
import {Card,  withStyles, CardHeader, CardContent, Avatar, Grid, IconButton} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import CommentAdd from '../components/CommentAdd'
import CommentList from '../components/CommentList'

const styles= theme =>({
  avatar: {
    backgroundColor: "#c73461",
  },
  header: {
    backgroundColor:"#DBD5D5",
  },
  background: {
    backgroundColor:"#F5f5f5",
  }
})
class CommentPage extends Component{
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
    const { classes } = this.props
    return(
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              C
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Welcome to the Comment Community"
          subheader="Share your thoughts here"
          className={classes.header}
        />

        <CardContent className={classes.background}>
          <Grid container spacing={32}>
            <Grid item xs={12} md={5}>
              <CommentAdd addComment = {this.addComment}/>
            </Grid>
            <Grid item xs={12} md={7}>
              <CommentList comments = {comments}/>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

CommentPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CommentPage)