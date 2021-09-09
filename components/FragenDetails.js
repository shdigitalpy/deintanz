import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import fragenStyles from '../styles/fragen.module.css'


export default function FragenDetails (props) {


	return (

		<>
			<div className={fragenStyles.probe}>

			<div className={fragenStyles.probe1}>

        	<h4>Kontakt aufnehmen bei Fragen</h4>
        	<p>Der Einstieg in die Kurse für Kinder ist jederzeit möglich. 
        	Melden Sie Ihr Kind auch zu einer kostenlosen Schnupperlektion an. Das entsprechende Formular finden Sie unten.<br />
		    <br /> Bei Fragen können Sie gerne mich, Regula Leemann, gerne <Link href="/kontakt">

        		<a> kontaktieren</a>

        		</Link>.</p>
        


			</div>


        	
        	<div className={fragenStyles.probe2}>

        	<Link href="/kontakt">
			      <a><Image
			      src="/images/regula-leemann.jpg" // Route of the image file
			      height={300} // Desired size with correct aspect ratio
			      width={300} // Desired size with correct aspect ratio
			      alt="kinder"
			      /></a>
			      </Link>


			</div>





      </div>{/*end element*/}

      

          



      

		</>

		)


}