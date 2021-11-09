import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from './../components/layout'
import AngeboteHeader from './../components/AngeboteHeader'
import TanzStundeDetails3 from './../components/TanzStundeDetails3'
import KurseSlider from './../components/KurseSlider'
import Fragen from './../components/Fragen'
import AnmeldungForm1 from './../components/AnmeldungForm1'
import { motion } from "framer-motion"
import {gql, GraphQLClient} from 'graphql-request'


export const getStaticProps = async () => {

  const url = process.env.GRAPH_CMS_URL

  const graphQLClient = new GraphQLClient(url, {
      headers: {
        "Authorization" : `Bearer ${process.env.GRAPH_CMS_TOKEN}`
      }

  })


  const query = gql`
    query {
  
    kurse(where: {slug: "test"}) {
    id
    title
    description
    slug
    price
    persona
    location
    urlLocation
    wear
  }
  
  
}  `


  const data = await graphQLClient.request(query)
  const kurse = data.kurse

  return {

    props: {

      kurse,
    }
  }

  }

export default function Kurs3({kurse}) {
    console.log(kurse)

  return (

    <>

  	<Layout>

  		<Head>
      <title>Mutter / Vater - Kinderstunde | Dein Tanz</title>
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

      <TanzStundeDetails3 />

      
      
      <AnmeldungForm1 />
      
      
	</Layout>

  </>
)

}