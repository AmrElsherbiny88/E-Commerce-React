import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Navigation } from 'swiper/modules';
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
  
import img1 from '../Images/sale1.jpg'
import img2 from '../Images/sale2.jpg'
import img3 from '../Images/sale3.png'
import img4 from '../Images/sale4.jpg'
import img5 from '../Images/sale5.jpg'
import img6 from '../Images/sale6.jpg'
import img7 from '../Images/sale7.jpg'

const HomeSlider = () => {
  return (
    <div>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
     
        navigation={true}
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <MDBCarousel>
            
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={img1}
        alt='...'
      />
    
    </MDBCarousel>
        </SwiperSlide>

        <SwiperSlide>

        <MDBCarousel>
            
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={1}
              src={img2}
              alt='...'
              
            />
          
          </MDBCarousel>
        </SwiperSlide>

        <SwiperSlide>
        <MDBCarousel>
            
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={1}
              src={img7}
              alt='...'
            />
          
          </MDBCarousel>
        </SwiperSlide>

        <SwiperSlide>
        <MDBCarousel>
            
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={1}
              src={img3}
              alt='...'
            />
          
          </MDBCarousel>
        </SwiperSlide>

        <SwiperSlide>
        <MDBCarousel>
            
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={1}
              src={img4}
              alt='...'
            />
          
          </MDBCarousel>
        </SwiperSlide>

        <SwiperSlide>
        <MDBCarousel>
            
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={1}
              src={img6}
              alt='...'
            />
          
          </MDBCarousel>
        </SwiperSlide>
    
      </Swiper>

    </div>
  )
}

export default HomeSlider