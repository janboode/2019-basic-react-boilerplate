import React from 'react'

import style from './home-page.style'

import Me from '../../../assets/images/me_01.png'

const homePage = () => {
    return (
        <div className={style.homePage}>
            <img src={Me} alt='bla' style={{ width: "250px" }} />
            <h1>2019 basic react boilerplate.</h1>
            <p>Personal Boilerplate for mid 2019. It contains Webpack, Babel, Sass, React and some goodies like post-css (autoprefixer), uglify-js and optimize-css! Ready when you are!</p>
        </div>
    )
}

export default homePage