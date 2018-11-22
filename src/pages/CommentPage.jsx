import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card,  withStyles, CardHeader, CardContent, Avatar, IconButton} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import CommentForm from '../containers/CommentForm'


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

  render(){
    const { classes} = this.props
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
          <CommentForm/>
        </CardContent>
      </Card>
    )
  }
}

CommentPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CommentPage)