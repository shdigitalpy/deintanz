import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from './../components/layout'
import AngeboteHeader from './../components/AngeboteHeader'
import KurseOverview from './../components/KurseOverview'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
  


export default function Kursübersicht() {


  return (

  	<Layout>

  		<Head>
      <title>Kursübersicht | Deintanz</title>
      <meta name="description" content="Kurse für Kinder Winterthur: Soziale Fähigkeiten durch Bewegung steigern" />
      
      <link rel="icon" href="/favicon.ico" />
      </Head>

      <AngeboteHeader title="Alle Kurse" description="" />
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

          <KurseOverview />
    
      </motion.div>


            

      	


      
      
	</Layout>
)

}