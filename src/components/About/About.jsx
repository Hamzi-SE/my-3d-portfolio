import React from 'react'
import ME from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { MdWorkOutline } from "react-icons/md"

import "./about.css"

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__card-icon" />
                            <h5>Experience</h5>
                            <small>1+ Year Working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__card-icon" />
                            <h5>Clients</h5>
                            <small>50 Worldwide</small>
                        </article>
                        <article className="about__card">
                            <MdWorkOutline className="about__card-icon" />
                            <h5>Projects</h5>
                            <small>50+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam pariatur inventore ipsam quisquam sit eveniet earum, libero ducimus sed ad velit illum laborum harum fugit laudantium dolorem. Doloribus, necessitatibus ullam!
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About