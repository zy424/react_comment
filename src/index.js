
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './components/App'
import './index.css'



render(

    <BrowserRouter>
      <App/>
    </BrowserRouter>,

  document.getElementById('root')
)
