import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"

import "./contact.css"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formRespone = document.getElementById("form-response");
        formRespone.innerHTML = "Sending...";

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                formRespone.innerHTML = "Message sent successfully";
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                formRespone.innerHTML = "Message not sent";
            });


        setTimeout(() => {
            formRespone.innerHTML = "";
        }, 5000);
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>hamzii.se@gmail.com</h5>
                        <a href="mailto:hamzii.se@gmail.com" target="_blank" rel="noreferrer">Send A Message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Hamza Khan</h5>
                        <a href="https://m.me/Hamzii.SE" target="_blank" rel="noreferrer">Send A Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>(+92)-315-6088777</h5>
                        <a href="https://api.whatsapp.com/send?phone=923156088777" target="_blank" rel="noreferrer">Send A Message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email Address" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                    <p id="form-response"></p>
                </form>
            </div>
        </section>

    )
}

export default Contact