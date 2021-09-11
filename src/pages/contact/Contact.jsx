import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {

    const [data, setData] = useState({
        name: "",
        contact: "",
        email: "",
        message: ""
    })

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_nxdvvz1', 'template_btx4tzx', e.target, 'user_Mis6CFxjvDLsIYCXs6ard')
          .then((result) => {
              console.log("message send success");
              alert(`thank you ${data.name} for your message`);
          }, (error) => {
              console.log(error.text);
          });

          setData({
            name: "",
            contact: "",
            email: "",
            message: ""
        })
    }

    return (
        <>
        <div className="my-3">
            <h1 className="text-center contact-heading">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your full name" name="name" value={data.name} onChange={InputEvent} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Contact</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter your contact number" name="contact" value={data.contact} onChange={InputEvent} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={data.email} onChange={InputEvent} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent} required></textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-outline-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact
