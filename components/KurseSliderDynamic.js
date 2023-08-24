import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import angeboteStyles from '../styles/angebote.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import mySwiper from '../styles/kurseslider.module.css'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);



export default function KurseSliderDynamic({ images }) {

  return (



      <>

      	<Swiper slidesPerView={1} spaceBetween={5} pagination={{
  "clickable": true
}} breakpoints={{
  "@0.00": {
    "slidesPerView": 1,
    "spaceBetween": 10
  },
  "@0.75": {
    "slidesPerView": 2,
    "spaceBetween": 20
  },
  "@1.00": {
    "slidesPerView": 3,
    "spaceBetween": 40
  },
  "@1.50": {
    "slidesPerView": 4,
    "spaceBetween": 50
  }
}} className="mySwiper">
  

{images.map(image =>

    (
  
  <SwiperSlide key={image.id}>

  


    <Image
          src={image.url} // Route of the image file
          alt={image.fileName}
          layout="responsive"
          width={1000}
          height={800}

          />





  	


  </SwiperSlide>

    ))}

 
  
  </Swiper>


  	</>

      
)

}
