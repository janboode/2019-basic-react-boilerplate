import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import './App.scss'

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/about' component={AboutPage} />
            </Switch>
        </div>
    )
}

export default App