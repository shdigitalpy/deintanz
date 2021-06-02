import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import fragenStyles from '../styles/fragen.module.css'


export default function Fragen (props) {


	return (

		<>
			<div className={fragenStyles.probe}>

			<div className={fragenStyles.probe1}>

        	<h4>Bei Fragen stehe ich gerne zur Verfügung</h4>
        	<p>Der Einstieg in die Kurse für Kinder in Winterthur ist jederzeit möglich. Melden Sie Ihr Kind doch zu einer Schnupperlektion an.<br /><br /> Für weitere Informationen können Sie mich gerne <Link href="/kontakt">

        		<a> kontaktieren</a>

        		</Link>.</p>
        


			</div>


        	
        	<div className={fragenStyles.probe2}>

        	<Link href="/kontakt">
			      <a><Image
			      src="/images/weitere-kurse.webp" // Route of the image file
			      height={3456} // Desired size with correct aspect ratio
			      width={5184} // Desired size with correct aspect ratio
			      alt="deintanz-logo"
			      /></a>
			      </Link>


			</div>





      </div>{/*end element*/}

      

          



      

		</>

		)


}