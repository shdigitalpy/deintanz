import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'
import FrontPage from './../components/FrontPage'
import frontpageStyles from '../styles/frontpage.module.css'
import { motion } from "framer-motion"
import Pixel from '../components/Pixel'


export default function Home() {


  return (

    <Layout>
      <Head>
        <title>Kreative Tanzschule Winterthur | Dein Tanz</title>
         <meta name="description" content="Dein Tanz - Bewegt mehr als Du denkst. Kreativer Kindertanz in Winterthur. 
Tanz, Bewegung und Entspannung. " />
      </Head>

      <Pixel name='FACEBOOK_PIXEL_1' />

     	 <div className={frontpageStyles.geist}>
          

          <div className={frontpageStyles.geistbox}>

          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .3,
                duration: 0.7,
              }
            },
          }}>
              <h1>Wo sich Körper und Geist berühren</h1>
          </motion.div>

      </div>{/*end box*/}

     </div>{/*end bgimage*/}


        <FrontPage/>
    	
    </Layout>
  )
}