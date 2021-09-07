import React from "react";
import { NavLink } from "react-router-dom";
import home from "../../images/home.png"
import './Home.css'

const Home = () => {
    return (
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>Gain <strong className="brand-name">Skills</strong> and not just <strong className="brand-name certificate">Certificates</strong></h1>
                                <h2 className="my-3 upskill">
                                    <strong className="brand-name">Upskill</strong> yourself by joining us 🤝
                                </h2>
                                <div className="mt-3">
                                    <NavLink to="/events" className="btn-get-started">Get Started</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={home} className="img-fluid animated" alt="homepage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home