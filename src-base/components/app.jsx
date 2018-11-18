import React, {Component} from 'react'
import logo from '../logo.svg'
export default class App extends Component{
  render(){
    return(
      <div>
        <img className='logo' src={logo} alt='logo'></img>
        <p className='title'>React App Component</p>
      </div>
    )
  }
}
