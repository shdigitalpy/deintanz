import Layout from './../components/layout'
import AngeboteHeader from './../components/AngeboteHeader'
import BewegungsTherapie from './../components/BewegungsTherapie'
import Head from 'next/head'
import { motion } from "framer-motion"


export default function UeberMich() {


	return (

		
		<Layout>
			
		<Head>
	     <title>Was ist Tanz- und Bewegungstherapie? | Dein Tanz</title>
       <meta name="description" content="Tanz- und Bewegungstherapie, eine Fachrichtung der Kunsttherapien, ist eine künstlerische
und körperorientierte Psychotherapie." />
	      </Head>



		<AngeboteHeader title="Was ist Tanz- und Bewegungstherapie?" description="" />


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
			<BewegungsTherapie />

			
     
			</motion.div>

		</Layout>

		)


}