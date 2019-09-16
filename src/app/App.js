import React from 'react'
import { Route, Link } from 'react-router-dom'
import HomePage from './pages/home-page/home-page.comp'
import AboutPage from './pages/about-page/about-page.comp'

import style from './App.scss'

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
        <div className={style.App}>
            {/* <Switch> */}
            <header>
                <nav>
                    <ul>
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='/about' >About</Link></li>
                    </ul>
                </nav>
            </header>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            {/* </Switch> */}
        </div>
    )
}

export default App