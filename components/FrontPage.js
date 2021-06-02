import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import frontpageStyles from '../styles/frontpage.module.css'
import TextCenter from './../components/TextCenter'
import ProbeLektion from './../components/ProbeLektion'

export default function FrontPage() {

  return (

  		<>

      <div className={frontpageStyles.fp}>       
          <div className={frontpageStyles.fp1}>
		       <h2>Tanz- & Bewegungsstunden für Kinder</h2>
		        <p>Bei "Dein Tanz" können sich die Kinder in kleinen Gruppen frei entfalten, in ihrer Einzigartigkeit. Bei "Dein Tanz" gibt es kein richtig oder falsch.</p>
		        <br /><p>Tanzen fördert die körperliche und geistige Entwicklung von Kindern. Beim gemeinsamen Spielen, Tanzen, Musizieren und Malen können sie Energien loswerden, ihre Kreativität entdecken, Emotionen ausleben und den Umgang miteinander lernen. Bei Entspannungsübungen mit Geschichten zum Träumen können sie zum Schluss wieder zur Ruhe kommen.</p>
		      
		        <Link href="/angebote" passHref>
				   <a className={frontpageStyles.btn}>Mehr erfahren</a>
				    </Link>
				<Link href="/anmeldung" passHref>
				    <a className={frontpageStyles.btn}>Zur Anmeldung</a>
				  </Link>
      </div>

     </div>{/*end 1st element*/}

     <div className={frontpageStyles.fpboxeswrapper} >
     	
     		

     		<div className={frontpageStyles.fpbox}>
     			<h2>Kursleiterin</h2>
     			<br />
     			<h3>Bewegung & Natur sind wichtige Bestandteile meines Lebens</h3>
     			<br />
     			<p>Ich bin Regula Leemann, eine angehende Tanz- und Bewegungstherapeutin am integrativen Ausbildungszentrum iac und selbst Mami von zwei Kindern. Ich freue mich, deinem Kind meine wertvollen Erfahrungen spielerisch näher zu bringen.</p>
     			<br />
     			<Image
          src="/images/regula-leemann.jpg" // Route of the image file
          height={300} // Desired size with correct aspect ratio
          width={300} // Desired size with correct aspect ratio
          alt="Regula Leemann"
          className="roundedfull"

          />

          <style jsx global>{`
		    .roundedfull {
		      border-radius: 50%;


		    }
		  `}</style>
     		</div>  

     		<div className={frontpageStyles.fpbox}>
     			<h2>Aktuelles Angebot</h2>
     			<br />
     			<h3>Tanz- und Bewegungsstunde für Kinder</h3>
     			<br />
     			<p>Wer möchte nicht einmal wie ein Wirbelwind durch den Raum fegen, einen Regentanz aufführen oder sich wie ein Blatt im Wind drehen?</p>
     			<br />
     			<p>Bei «Dein Tanz» haben wir Spass und fördern dabei spielerisch soziale Fähigkeiten, Kreativität, Fantasie, Musik- und Rhythmusgefühl.</p>
     			<br />
     			<Image
          src="/images/kurs.jpg" // Route of the image file
          height={300} // Desired size with correct aspect ratio
          width={300} // Desired size with correct aspect ratio
          alt="Regula Leemann"
          className="roundedfull"

          />

          <style jsx global>{`
		    .roundedfull {
		      border-radius: 50%;


		    }
		  `}</style>
     		</div> 


     </div>{/*end 2nd element*/}

     <ProbeLektion />

     



      <div className={frontpageStyles.fpcontact}>
     	
     	<div className={frontpageStyles.fpcontactbox}>
     	<h4>Zögere Sie nicht, mich zu kontaktieren</h4><br />
     	<br />
      	<p>Bei Fragen im Bezug auf meine Angebote oder meine Person, stehe ich dir gerne zur Verfügung. Ich freue mich von dir zu hören.</p>
      	

      	<Link href="/kontakt" passHref>
		    <a className={frontpageStyles.btn2}>Zum Kontakt</a>
		  </Link>

		  </div>
        

      </div>{/*end 4rd element*/}

    

   


     </>
      
)

}
