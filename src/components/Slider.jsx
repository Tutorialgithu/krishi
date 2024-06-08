import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className="w-full h-screen">
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-screen">
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1709532390940-5c09fcdf098d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-screen">
                        <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1661944447290-c36119d0028f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-screen">
                        <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1661854282575-847cea9f0f5b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider