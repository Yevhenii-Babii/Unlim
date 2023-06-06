import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


import photoOne from '../../images/photo1.jpg'
import photoTwo from '../../images/photo2.jpeg'
import photoThree from '../../images/photo3.jpeg'
import { ImageSize, SliderSection } from './slider.styled';


export const SliderUnlim = () => {
    return (
        <SliderSection>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        autoplay = {{delay:3000,
            disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
    
      >
        <SwiperSlide>
            <ImageSize src={photoOne} alt="" /></SwiperSlide>
        <SwiperSlide><ImageSize src={photoTwo} alt="" /></SwiperSlide>
        <SwiperSlide><ImageSize src={photoThree} alt="" /></SwiperSlide>
        <SwiperSlide><ImageSize src={photoOne} alt="" /></SwiperSlide>
        <SwiperSlide><ImageSize src={photoTwo} alt="" /></SwiperSlide>
        <SwiperSlide><ImageSize src={photoThree} alt="" /></SwiperSlide>
        ...
      </Swiper>
      </SliderSection>
    )
}