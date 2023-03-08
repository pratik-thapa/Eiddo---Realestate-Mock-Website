import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AdsData from '../Data/AdsData'
import { Autoplay } from 'swiper';
export default function Ads() {
    return (
        <>
        <div className="container my-5 ">
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
                        0:{
                            slidesPerView:2,
                        },
                        640:{
                            slidesPerView:2,
                        },

                        768:{
                            slidesPerView:3,
                            spaceBetween:20,
                        },

                        990:{
                            slidesPerView:5,
                            spaceBetween:50,
                        }
                    }
                }
            >
                {AdsData.map((a) => (
                    <SwiperSlide>
                        <div className="ads">
                            <img src={a.img} alt="" />
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>    
        </>
    )
}
