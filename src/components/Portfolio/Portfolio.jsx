import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

import "./portfolio.css"

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Crypto Currency Dashboard & Financial Visualization",
        github: "https://www.github.com",
        demo: "https://www.github.com"
    },
    {
        id: 2,
        image: IMG2,
        title: "Charts Templates & Infographics In Figma",
        github: "https://www.github.com",
        demo: "https://www.github.com"
    },
    {
        id: 3,
        image: IMG3,
        title: "Figma Dashboard & UI Kit For Data Design Web Apps",
        github: "https://www.github.com",
        demo: "https://www.github.com"
    },
    {
        id: 4,
        image: IMG4,
        title: "Maintaining Tasks And Tracking Progress",
        github: "https://www.github.com",
        demo: "https://www.github.com"
    },
    {
        id: 5,
        image: IMG5,
        title: "Charts Templates & Infographics In Figma",
        github: "https://www.github.com",
        demo: "https://www.github.com"
    },
    {
        id: 6,
        image: IMG6,
        title: "Figma Dashboard & UI Kit For Data Design Web Apps",
        github: "https://www.github.com",
        demo: "https://www.github.com"
    },
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map((item) => {
                        return (
                            <article className="portfolio__item" key={item.id}>
                                <div className="portfolio__item-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <h3>{item.title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={item.github} className="btn" target="_blank" rel="noreferrer">Github</a>
                                    <a href={item.demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }


            </div>
        </section>

    )
}

export default Portfolio