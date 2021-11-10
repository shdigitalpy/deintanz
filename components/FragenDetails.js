import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import fragenStyles from '../styles/fragen.module.css'
import { RichText } from '@graphcms/rich-text-react-renderer';

export default function FragenDetails ({contact_text, props}) {


	return (

		<>
			<div className={fragenStyles.probe}>

			<div className={fragenStyles.probe1}>

        	<h4>Kontakt aufnehmen bei Fragen</h4>
        	<p>

        	<RichText content={contact_text.raw} />
				</p>
        	<Link href="/kontakt">
<a className={fragenStyles.btnfragen}>Kontakt</a>

        		</Link>
        


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