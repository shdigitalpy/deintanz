import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from './../components/layout'
import AngeboteHeader from './../components/AngeboteHeader'
import KurseOverview from './../components/KurseOverview'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {gql, GraphQLClient} from 'graphql-request'



export const getServerSideProps = async (pageContext) => {

  const url = process.env.GRAPH_CMS_URL

  const graphQLClient = new GraphQLClient(url, {
      headers: {
        "Authorization" : `Bearer ${process.env.GRAPH_CMS_TOKEN}`
      }

  })

  const pageSlug = pageContext.query.slug

  const kursesQuery = gql`
    query {
    kurses {
      categoryValues
      title
      description
      slug
      tanzstundeImage {
      url
          }
      }
    }
     `


  

  const data = await graphQLClient.request(kursesQuery)
  const kurses = data.kurses

  return {

    props: {
      kurses

    }
  }

}



export default function Kursübersicht({ kurses }) {


  return (

  	<Layout>

  		<Head>
      <title>Kreativkurse Winterthur Kursübersicht | Dein Tanz</title>
      <meta name="description" content="Kreativkurse Winterthur: Eine Übersicht von Dein Tanz Angeboten für ✓ Kinder und ✓ Erwachsene"/>
      
      <link rel="icon" href="/favicon.ico" />
      </Head>

      <AngeboteHeader title="Alle Angebote" description="Eine Übersicht von allen Dein Tanz Angeboten für Kinder und Erwachsene" />
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

          <KurseOverview kurses={kurses} />
    
      </motion.div>


            

      	


      
      
	</Layout>
)

}