import Link from 'next/link'
import tanzstundeStyles from '../styles/tanzstunde.module.css'


export default function TanzStunde() {

  return (


    <div className={tanzstundeStyles.tanzstundewrapper}>
    <div className={tanzstundeStyles.tanzstundetext}>
      <h2>Ermöglichen Sie Ihrem Kind einen Raum zur Entfaltung mit unseren Kursen</h2>
      <p>Die Tanz- und Bewegungsstunden von «Dein Tanz» bieten Raum für Entfaltung. Hier darf man ganz sich selbst sein. Mit Papier, Malstiften, Trommeln, Schlaghölzern sowie Geschichten zum Entspannen und Träumen werden verschiedene Sinne geweckt. Ihr Kind lernt auf  spielerische Weise seinen Körper besser kennen und gewinnt somit mehr Selbstvertrauen und einen  besseren Zugang zu seinen Gefühlen. Soziale Fähigkeiten, Kreativität, Fantasie, Musik- und Rhythmusgefühl werden ebenso gefördert.
      </p>
      </div>
    

      <div className={tanzstundeStyles.tanzstunde}>   



          <div className={tanzstundeStyles.tanzstundebox}>
               <h2>Kurs 1: Tanz- & Bewegungsstunde für Kinder</h2>
                <br />

                
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
                  <div className={tanzstundeStyles.tanzflexitem2}><p><Link href="/ueber-mich"><a>Regula Leemann</a></Link></p></div>
                  
                </div>


                <Link href="/anmeldung" passHref>
        		   <a className={tanzstundeStyles.btn}>Zur Anmeldung</a>
        		    </Link>
        		<Link href="/kontakt" passHref>
        		    <a className={tanzstundeStyles.btn}>Zum Kontakt</a>
        		  </Link>
              
          </div>{/*end 1st tanzstunde*/}

          <div className={tanzstundeStyles.tanzstundebox}>
               <h2>Kurs 2: Tanz, Bewegung und Entspannung für Mädchen</h2>
                <br />

                
                <br />

                <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Was</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p>Tanz, Bewegung und Entspannung
                  </p></div>
                  
                </div>

               <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Wer</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p>Für Mädchen von 8 bis 11 Jahren</p></div>
                  
                </div>

                

                        <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Wann</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p><strong>Montag 16:00 bis 17:00 Uhr</strong></p></div>
                  
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
                  <div className={tanzstundeStyles.tanzflexitem2}><p><Link href="/ueber-mich"><a>Regula Leemann</a></Link></p></div>
                  
                </div>


                <Link href="/anmeldung" passHref>
               <a className={tanzstundeStyles.btn}>Zur Anmeldung</a>
                </Link>
            <Link href="/kontakt" passHref>
                <a className={tanzstundeStyles.btn}>Zum Kontakt</a>
              </Link>
              
          </div>{/*end 1st tanzstunde*/}

     </div>

     </div>

      
)

}