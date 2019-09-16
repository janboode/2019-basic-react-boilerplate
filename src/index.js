import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'

import './scss/main.scss'

ReactDOM.render(
    // <BrowserRouter basename='/build'>
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)