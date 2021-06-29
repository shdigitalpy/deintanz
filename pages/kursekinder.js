import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from './../components/layout'
import AngeboteHeader from './../components/AngeboteHeader'
import TanzStunde from './../components/TanzStunde'
import KurseSlider from './../components/KurseSlider'

import ProbeLektion from './../components/ProbeLektion'
import { motion } from "framer-motion"
  


export default function Angebote() {
  

  return (

    <>

  	<Layout>

  		<Head>
      <title>Kurse für Kinder Winterthur | Deintanz</title>
      <meta name="description" content="Kurse für Kinder Winterthur: Soziale Fähigkeiten durch Bewegung steigern" />
      
      <link rel="icon" href="/favicon.ico" />
      </Head>

      <AngeboteHeader title="Kurse für Kinder Winterthur" description="Hier finden Sie eine Übersicht über unsere Kurse für Kinder in Winterthur." />
      <br />

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
      <KurseSlider />
      </motion.div>

      <TanzStunde />


        <ProbeLektion />
      
      

     


      
      
	</Layout>

  </>
)

}