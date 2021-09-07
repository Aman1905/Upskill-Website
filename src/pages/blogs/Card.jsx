import React from 'react'
import './Blog.css'

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{fontWeight: "bold"}}>{props.title}</h5>
                        <p className="card-text">{props.about}</p>
                        <a href={props.visit} target="blank" className="btn-get-started">Lets Upskill</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
