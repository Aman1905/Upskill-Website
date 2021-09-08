import React from 'react'
import './Team.css'

const Card = (props) => {
    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 ">
                <div className="cards our-team">

                    <div className="picture">
                        <img className="img-fluid" src={props.imgsrc} alt="hello" />
                    </div>

                    <div className="team-content">
                        <h3 className="name">{props.name}</h3>
                        <h4 className="title">{props.designation}</h4>
                    </div>

                    <ul className="social">
                        <li><a href={props.t_link} className="fa fa-twitter"  target="blank"></a></li>
                        <li><a href={props.g_link} className="fa fa-github"  target="blank"></a></li>
                        <li><a href={props.l_link} className="fa fa-linkedin"  target="blank"></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card
