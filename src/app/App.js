import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import './App.scss'

const App = () => {
    const say = 'B R Y T E'
    const spacing = '7px';
    const borderColor = '#eae7ff'
    const styles =
        `
            padding: ${spacing};
            background-color: darkslateblue;
            color: white;
            font-style: normal;
            font-weight: bold;
            border: 2px solid ${borderColor};
            font-size: 1em;
            border-radius: 3px
        `
    console.log(`%c${say}`, styles)
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