import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import fragenStyles from '../styles/fragen.module.css'


export default function Fragen (props) {


	return (

		<>
			<div className={fragenStyles.probe}>

			<div className={fragenStyles.probe1}>

        	<h4>Kurse für Kinder in Winterthur gesucht?</h4>
        	<p>Suchen Sie speziell nach Kursen für Kinder. Wir bieten Tanz, Bewegung & Entspannung für verschiedene Altersklassen.
        	Es ist möglich, dass jedes Kind zur kostenlosen Probelektion kommt.<br />
		    <br /> Weitere Informationen zu den <Link href="/kursekinder">

        		<a> Kursen für Kinder in Winterthur</a>

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