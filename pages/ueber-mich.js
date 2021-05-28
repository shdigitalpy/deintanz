import Layout from './../components/layout'
import AngeboteHeader from './../components/AngeboteHeader'
import AboutMe from './../components/AboutMe'
import Head from 'next/head'


export default function UeberMich() {


	return (

		
		<Layout>
			
		<Head>
	     <title>test</title>
	      </Head>

		<AngeboteHeader title="Über mich" description="Der Mensch in seiner Einzigartigkeit fasziniert mich. Bewegung, Tanz und Natur sind meine Energiequellen. Erfahre hier mehr über meine Philosophie und meine Zukunftspläne." />

			<AboutMe />

		</Layout>

		)


}