import React from 'react'
import uuid from 'uuid/v4'

import style from './about-page.style'

import Logo from '../../../assets/svg/crown.svg'

class AboutPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            someshit: []
        }
    }

    render() {

        return (
            <div className={style.aboutPage}>
                <Logo style={{marginBottom: '20px'}} />
                <img src="../assets/images/me_01.png" alt="bla" style={{  }} />
                <h1>This is the about page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam repudiandae voluptate, iste tempore ipsum fuga? Cum delectus voluptatibus adipisci hic.</p>
                <p>uuid: {uuid()}</p>
            </div>
        )
    }
}

export default AboutPage