import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import FrontPage from './../components/FrontPage'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

     	 <div className={utilStyles.geist}>
          <div className={utilStyles.geistbox}>
       <h1>Wo sich Körper und Geist berühren</h1>
        
      </div>{/*end box*/}

     </div>{/*end bgimage*/}


        <FrontPage/>
    	
    </Layout>
  )
}