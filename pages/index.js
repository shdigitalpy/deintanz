import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'
import FrontPage from './../components/FrontPage'
import frontpageStyles from '../styles/frontpage.module.css'
import { motion } from "framer-motion"



export default function Home() {


  return (

    <Layout>
      <Head>
        <title>Tanzschule Winterthur für Kinder</title>
         <meta name="description" content="Meta description content goes here." />
      </Head>

       <div className={frontpageStyles.geist}>
          <div className={frontpageStyles.geistbox}>
       <h1>Wo sich Körper und Geist berühren</h1>
        
      </div>{/*end box*/}

     </div>{/*end bgimage*/}


        <FrontPage/>
      
    </Layout>
  )
}