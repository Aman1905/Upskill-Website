import React, {useState} from 'react'
import './Events.css'
import EventsData from './EventsData' 

const Events = () => {

    const [items, setItems] = useState(EventsData);

    const filterMenu = (category) => {
        const updatedItems = EventsData.filter((currElem) => {
            return currElem.category === category;
        });

        setItems(updatedItems);
    }

    return (
        <>
        <div className="my-3 text-center">
            <button className="events-heading mx-auto" onClick={() => setItems(EventsData)}>Our Events</button>
        </div>
        
        <div className="text-center">
            <div className="justify-content-center">
                <button className="eventsBtn-get-started" onClick={() => filterMenu('bootcamp')}>Bootcamps</button>
                <button className="eventsBtn-get-started" onClick={() => filterMenu('webinar')}>Webinars</button>
                <button className="eventsBtn-get-started" onClick={() => filterMenu('competition')}>Competitions</button>
            </div>
        </div>
        <div className="events">
            <div className="container events-container">
                {
                    items.map((elem) => {
                        return (
                            <div className="card events-card" key={elem.id}>
                                <div className="imgbox mt-4">
                                    <img src={elem.imgsrc} alt={elem.imgsrc} />
                                </div>
                                <div className="content events-content">
                                    <h4>{elem.title}</h4>
                                    <p><strong><i className="fa fa-user" style={{color: "green"}} /></strong> : {elem.speaker}</p>
                                    <p><strong><i className="fa fa-calendar" style={{color: "green"}} /></strong> : {elem.dates}</p>
                                    <p><strong><i className="fa fa-book" style={{color: "green"}} /></strong> : {elem.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Events
