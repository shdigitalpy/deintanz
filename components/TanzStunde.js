import Link from 'next/link'
import tanzstundeStyles from '../styles/tanzstunde.module.css'


export default function TanzStunde() {

  return (



      <div className={tanzstundeStyles.tanzstunde}>       
          <div className={tanzstundeStyles.tanzstundebox}>
       <h2>Tanz- & Bewegungsstunde für Kinder</h2>
        <br />

        <p>Mit Papier, Malstiften, Trommeln, Schlaghölzern sowie Geschichten zum Entspannen und Träumen werden verschiedene Sinne geweckt. Ihr Kind lernt auf  spielerische Weise seinen Körper besser kennen und gewinnt somit mehr Selbstvertrauen und einen  besseren Zugang zu seinen Gefühlen. Soziale Fähigkeiten, Kreativität, Fantasie, Musik- und Rhythmusgefühl werden ebenso gefördert.
        </p>
        <br />

        <div className={tanzstundeStyles.tanzflex}>

        	<div className={tanzstundeStyles.tanzflexitem1}><p>Was</p> </div>
        	<div className={tanzstundeStyles.tanzflexitem2}><p>Tanz- & Bewegungsstunde für Kinder</p></div>
        	
        </div>

       <div className={tanzstundeStyles.tanzflex}>

        	<div className={tanzstundeStyles.tanzflexitem1}><p>Wer</p> </div>
        	<div className={tanzstundeStyles.tanzflexitem2}><p>Für Kinder von 5 bis 8 Jahren</p></div>
        	
        </div>

        

                <div className={tanzstundeStyles.tanzflex}>

        	<div className={tanzstundeStyles.tanzflexitem1}><p>Wann</p> </div>
        	<div className={tanzstundeStyles.tanzflexitem2}><p><strong>Montag 14:30 bis 15:30 Uhr</strong></p></div>
        	
        </div>

        <div className={tanzstundeStyles.tanzflex}>

        	<div className={tanzstundeStyles.tanzflexitem1}><p>Wo</p> </div>
        	<div className={tanzstundeStyles.tanzflexitem2}><p><Link href="https://www.haus-zum-widder.ch/willkommen.html"><a target="_blank">Im Haus zum Widder</a></Link>, in 8400 Winterthur</p></div>
        	
        </div>

        <div className={tanzstundeStyles.tanzflex}>

        	<div className={tanzstundeStyles.tanzflexitem1}><p>Preis</p> </div>
        	<div className={tanzstundeStyles.tanzflexitem2}><p><strong>145.00 CHF pro Quartal</strong></p></div>
        	
        </div>
		
		<div className={tanzstundeStyles.tanzflex}>

        	<div className={tanzstundeStyles.tanzflexitem1}><p>Kleidung</p> </div>
        	<div className={tanzstundeStyles.tanzflexitem2}><p>Bequeme Kleidung anziehen</p></div>
        	
        </div>

        <div className={tanzstundeStyles.tanzflex}>

          <div className={tanzstundeStyles.tanzflexitem1}><p>Kursleitung</p> </div>
          <div className={tanzstundeStyles.tanzflexitem2}><p><Link href="/ueber"><a>Regula Leemann</a></Link></p></div>
          
        </div>


        <Link href="/" passHref>
		   <a className={tanzstundeStyles.btn}>Zur Anmeldung</a>
		    </Link>
		<Link href="/" passHref>
		    <a className={tanzstundeStyles.btn}>Zum Kontakt</a>
		  </Link>
        <br /><br />

        <h4>Weitere Informationen</h4>
       	<p>Der Einstieg ist jederzeit möglich. Schicken Sie Ihr Kind doch zu einer Schnupperlektion. Für weitere Informationen können Sie mich gerne kontaktieren. Auf Anfrage gibt es auch weitere Kurse.</p>
        
       	


      </div>

     </div>

      
)

}