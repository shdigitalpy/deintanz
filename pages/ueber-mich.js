import Layout from './../components/layout'
import AngeboteHeader from './../components/AngeboteHeader'
import AboutMe from './../components/AboutMe'
import Head from 'next/head'
import { motion } from "framer-motion"


export default function UeberMich() {


	return (

		
		<Layout>
			
		<Head>
	     <title>test</title>
	      </Head>



		<AngeboteHeader title="Über mich" description="Der Mensch in seiner Einzigartigkeit fasziniert mich. Bewegung, Tanz und Natur sind meine Energiequellen. Erfahre hier mehr über meine Philosophie und meine Zukunftspläne." />


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
			<AboutMe />
			</motion.div>

		</Layout>

		)


}