import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from './../components/layout'
import AngeboteHeader from './../components/AngeboteHeader'
import TanzStunde from './../components/TanzStunde'
import KurseSlider from './../components/KurseSlider'


export default function Angebote() {

  return (

  	<Layout>

  		<Head>
      <title>test</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>

      <AngeboteHeader title="Kurse" description="Die Tanz- und Bewegungsstunden von «Dein Tanz» bieten Raum für Entfaltung. Hier darf man ganz sich selbst sein." />

      <TanzStunde />

      <KurseSlider />
      
      <div>

      	<h3>Weitere Angebote folgen ...</h3>

      	<style jsx>{`
        
        div {
          height: 500px;
          background-color: rgba(31,8,49,0.03);
          display: flex;
          justify-content: center;
          align-items: center;
          
        }
        
      `}</style>


      </div>
      
	</Layout>
)

}