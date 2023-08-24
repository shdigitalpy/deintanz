import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'
import FrontPage from './../components/FrontPage'
import frontpageStyles from '../styles/frontpage.module.css'
import { motion } from "framer-motion"
import Pixel from '../components/Pixel'
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
      slug
      description
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


export default function Home({kurses}) {

  return (

    <Layout>
      <Head>
        <title>Kreative Tanzschule Winterthur | Dein Tanz</title>
         <meta name="description" content="Dein Tanz - Bewegt mehr als Du denkst. Kreativer Kindertanz in Winterthur. 
Tanz, Bewegung und Entspannung. " />
      </Head>

      <Pixel name='FACEBOOK_PIXEL_1' />

     	 <div className={frontpageStyles.geist}>
          

          <div className={frontpageStyles.geistbox}>

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
                duration: 0.7,
              }
            },
          }}>
              <h1>Wo sich Körper, Geist und Seele berühren</h1>
          </motion.div>

      </div>{/*end box*/}

     </div>{/*end bgimage*/}


        <FrontPage kurses={kurses} />
    	
    </Layout>
  )
}