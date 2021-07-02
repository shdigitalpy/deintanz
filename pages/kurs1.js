import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from './../components/layout'
import AngeboteHeader from './../components/AngeboteHeader'
import TanzStundeDetails from './../components/TanzStundeDetails'
import KurseSlider from './../components/KurseSlider'
import Fragen from './../components/Fragen'
import AnmeldungForm from './../components/AnmeldungForm'
import { motion } from "framer-motion"
  


export default function Kurs1() {
  

  return (

    <>

  	<Layout>

  		<Head>
      <title>Tanzkurs für Kinder von 4 bis 8 Jahren | Dein Tanz</title>
      <meta name="description" content="Tanz, Bewegung & Entspannung für Kinder von 4 bis 8 Jahren" />
      
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

      <TanzStundeDetails />

      
      
      <AnmeldungForm />
      
      
	</Layout>

  </>
)

}