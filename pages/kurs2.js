import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from './../components/layout'
import AngeboteHeader from './../components/AngeboteHeader'
import TanzStundeDetails2 from './../components/TanzStundeDetails2'
import KurseSlider from './../components/KurseSlider'
import Fragen from './../components/Fragen'
import AnmeldungForm1 from './../components/AnmeldungForm1'
import { motion } from "framer-motion"
  


export default function Kurs2() {
  

  return (

    <>

  	<Layout>

  		<Head>
      <title>Tanzen & Bewegen von 7 bis 11 Jahren | Dein Tanz</title>
      <meta name="description" content="Tanz, Bewegung & Entspannung für Kinder von 7 bis 11 Jahren" />
      
      <link rel="icon" href="/favicon.ico" />
      </Head>

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
                duration: 0.4,
              }
            },
          }}>  
      
      </motion.div>

      <TanzStundeDetails2 />

      
      
      <AnmeldungForm1 />
      
      
	</Layout>

  </>
)

}