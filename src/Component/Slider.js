import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderData from '../Data/SliderData'
import { Autoplay } from 'swiper';
export default function Slider() {
    return (
        <>
        <div className="container">
        <Swiper 
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay:2500,
                    disableOnInteraction:false,
                }}
                modules={[Autoplay]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

                breakpoints={
                    {
                        640:{
                            slidesPerView:1,
                        },

                        768:{
                            slidesPerView:2,
                            spaceBetween:20,
                        },

                        990:{
                            slidesPerView:3,
                            spaceBetween:50,
                        }
                    }
                }
            >
                {SliderData.map((a) => (
                    <SwiperSlide>
                    <div className="inner">
                        <img src={a.url} alt="" className='w-100 h-100' />
                        <p>{a.location}</p>
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>
       
        </div>
        <div className="find bg-gray w-100">
        <div className=" container d-flex align-items-center justify-content-between">
        <span className='fs-4 fw-semibold'> Find a new Place</span>  
        <i className="fa fa-building me-2"  aria-hidden="true"> <nbsp/> <nbsp/> <a href="">Apartments</a></i>
        <i class="fa fa-users" aria-hidden="true"> <nbsp/> <a href="">Condominium</a></i> 
        <i class="fa fa-home" aria-hidden="true"> <nbsp/> <a href="">House</a></i>
        <i class="fa fa-print" aria-hidden="true"> <nbsp/> <a href="">Office</a></i> 
        <i class="fa fa-shopping-bag" aria-hidden="true"> <nbsp/> <a href="">Shop</a></i>
        </div>
        </div>
        </>
    );
};