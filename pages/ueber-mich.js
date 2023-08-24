import Layout from './../components/layout'
import AngeboteHeader from './../components/AngeboteHeader'
import AboutMe from './../components/AboutMe'
import Head from 'next/head'
import { motion } from "framer-motion"


export default function UeberMich() {


	return (

		
		<Layout>
			
		<Head>
	     <title>Über mich Regula Leemann | Dein Tanz</title>
       <meta name="description" content="Regula Leemann ist die Kursleiterin bei Dein Tanz aus Winterthur" />
	      </Head>



		<AngeboteHeader title="Über mich" description="Hier erfahren Sie mehr über meine Philosophie und meinen Werdegang" />


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