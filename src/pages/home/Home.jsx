import React from 'react'
import classes from './Home.module.css'
import homeImage from '../homePage.png'

const Home = () => {
    return (
        <div className={classes.container}>
            <section className={ classes.homeText }>
                <div className={classes.heading}>
                    Gain <div className={classes.blueText}>Skills</div> <br /> 
                      <div className={classes.blueText}>Not</div> Certificates
                </div>
                <div className={classes.desc}>
                    We with the aim to upskill students are providing technical
                    and non-technical skill courses for FREE.
                </div>
                <button>Take A Tour</button>
            </section>
            <section className={classes.homeImage}>
                <img src={homeImage} alt="home-page" />
            </section>
        </div>
    )
}

export default Home
