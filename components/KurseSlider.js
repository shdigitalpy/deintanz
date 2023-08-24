import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import angeboteStyles from '../styles/angebote.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import mySwiper from '../styles/kurseslider.module.css'

// Import Swiper styles
import 'swiper/css';


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);



export default function KurseSlider() {

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
  


  
  <SwiperSlide>

  	<Image
          src="/images/kissen2.webp" // Route of the image file
          alt="Regula Leemann"
          layout="responsive"
		      width={1000}
		      height={800}

          />


  </SwiperSlide>

  <SwiperSlide>

    <Image
          src="/images/kinder.webp" // Route of the image file
          alt="Regula Leemann"
          layout="responsive"
          width={1000}
          height={800}

          />


  </SwiperSlide>
  <SwiperSlide>



  	 <Image
          src="/images/trommel.jpg" // Route of the image file
          alt="Kurshilfsmittel"
          layout="responsive"
          width={1000}
          height={800}

          />




  </SwiperSlide>


  <SwiperSlide>



  	<Image
          src="/images/kursmittel2-slider.jpg" // Route of the image file
          alt="Regula Leemann"
          layout="responsive"
		      width={1000}
		      height={800}

          />




  </SwiperSlide>
  
  </Swiper>


  	</>

      
)

}
