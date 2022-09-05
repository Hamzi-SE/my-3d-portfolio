import React from 'react'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Keyboard, Autoplay, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

import "./testimonials.css"

const data = [
    {
        id: 1,
        name: "Tina Snow",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis rem quia, tempore optio corrupti iste quos nesciunt nam dolores. Placeat non delectus, ullam odit quo necessitatibus obcaecati excepturi atque!",
        avatar: AVTR1
    },
    {
        id: 2,
        name: "Shatta Wale",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis rem quia, tempore optio corrupti iste quos nesciunt nam dolores. Placeat non delectus, ullam odit quo necessitatibus obcaecati excepturi atque!",
        avatar: AVTR2
    },
    {
        id: 3,
        name: "Kwame Despite",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis rem quia, tempore optio corrupti iste quos nesciunt nam dolores. Placeat non delectus, ullam odit quo necessitatibus obcaecati excepturi atque!",
        avatar: AVTR3
    },
    {
        id: 4,
        name: "Nana Ama McBrown",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis rem quia, tempore optio corrupti iste quos nesciunt nam dolores. Placeat non delectus, ullam odit quo necessitatibus obcaecati excepturi atque!",
        avatar: AVTR4
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Autoplay, Pagination, Keyboard]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                keyboard={{ enabled: true }}
            >
                {
                    data.map((item) => {
                        return (
                            <SwiperSlide className="testimonial" key={item.id}>
                                <div className="client__avatar">
                                    <img src={item.avatar} alt={"avatar " + item.name} />
                                </div>
                                <h5 className="client__name">{item.name}</h5>
                                <small className="client__review">
                                    {item.review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>

    )
}

export default Testimonials