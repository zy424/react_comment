import React from 'react'
import {NavLink} from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import comment from '../assets/comment.jpg'


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Todo image"
              image={comment}
              title="Todo image"
              height='420'
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Comment
              </Typography>
              <Typography component="p">
                Share your thoughts here.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <NavLink to='/todo'>
              <Button size="small" color="primary">
                Get Started
              </Button>
            </NavLink>
          </CardActions>
        </Card>
      </div>
    )
  }
}


export default HomePage
