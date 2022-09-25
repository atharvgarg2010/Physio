import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HomeItem from './HomeItem';
import Hm from './s.jpg';
import Hme from './drdr.jpg';

function Home() {
  return (
    <div>
            <Swiper
    //   spaceBetween={50}
    //   slidesPerView={3}
      loop
    
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><HomeItem s="Open For Everyone" img="https://cdn.pixabay.com/photo/2017/09/19/17/57/gym-2765975_960_720.jpg"/></SwiperSlide>
      
      <SwiperSlide><HomeItem s="Qualified Doctor" img="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/></SwiperSlide>
      <SwiperSlide><HomeItem s="Affordable" img={Hme}/></SwiperSlide>
      <SwiperSlide><HomeItem s="Best Experience" img={Hm}/></SwiperSlide>
      
    </Swiper>
    </div>
  )
}

export default Home
