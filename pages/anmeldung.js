import Layout from './../components/layout'
import AngeboteHeader from './../components/AngeboteHeader'
import AnmeldungForm from './../components/AnmeldungForm'
import Head from 'next/head'


export default function Anmeldung() {


	return (

		
		<Layout>
			
		<Head>
	     <title>Anmeldung</title>

	      </Head>


	

		<AngeboteHeader title="Anmeldung" description="Willkommen auf der Anmeldungsseite. Hier können Sie Ihr Kind für unsere Tanz- und Bewegungsstunde eintragen." />

		<AnmeldungForm />

			</Layout>

		)


}