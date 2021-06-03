import Layout from './../components/layout'
import AngeboteHeader from './../components/AngeboteHeader'
import AnmeldungForm from './../components/AnmeldungForm'
import Head from 'next/head'
import { motion } from "framer-motion"



export default function Anmeldung() {


	return (

		
		<Layout>
			
		<Head>
	     <title>Anmeldung</title>

	      </Head>


	

		<AngeboteHeader title="Anmeldung" description="Willkommen auf der Anmeldungsseite. Hier können Sie Ihr Kind für unsere Tanz- und Bewegungsstunde eintragen." />

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
		<AnmeldungForm />

		</motion.div>

			</Layout>

		)


}