import React from 'react'
import './Team.css'
import TeamData from './TeamData'
import Card from './Card'

const Team = () => {
    return (
        <>
        <div className="my-3">
            <h1 className="text-center team-heading my-2">Our Team</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            TeamData.map((elem) => {
                                return (
                                    <Card
                                    key={elem.id}
                                    name={elem.name}
                                    designation={elem.designation}
                                    imgsrc={elem.imgsrc}
                                    l_link={elem.l_link} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Team
