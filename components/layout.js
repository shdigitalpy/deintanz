import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import layoutStyles from '../styles/layout.module.css'
import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'
import Sidebar from './../components/Sidebar'
import { useRouter } from "next/router";


const name = 'DeinTanz'
export const siteTitle = 'DeinTanz aktuell'


export default function Layout({ children, home }) {

const site = "https://www.deintanz.ch";
const canonicalURL = site + useRouter().pathname;


  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);

  }



  return (

    <>

      <div className={layoutStyles.layout}>

      <Nav toggle={toggle} />

      <Sidebar isOpen={isOpen} toggle={toggle} />

        
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
        <link rel="canonical" href={canonicalURL} />
      </Head>

      <main>{children}</main>
      
    <Footer />


      </div>

    </>
  )
}