import Head from 'next/head'
import Image from 'next/image'
import layoutStyles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'

const name = 'DeinTanz'
export const siteTitle = 'DeinTanz aktuell'

export default function Layout({ children, home }) {
  return (

    <>

      <div className={layoutStyles.layout}>
      <Nav />

        
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>{children}</main>
      
    <Footer />

    </div>

    </>
  )
}