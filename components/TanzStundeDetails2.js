import Link from 'next/link'
import FragenDetails from './../components/FragenDetails'
import tanzstundeStyles from '../styles/tanzstunde.module.css'
import Image from 'next/image'

export default function TanzStundeDetails2() {

  return (
    <div className={tanzstundeStyles.tanzstundewrapper}>
    <div className={tanzstundeStyles.tanzstundetext}>
      <h1>Tanz, Bewegung & Entspannung für Kinder von 7 bis 11 Jahren</h1>

      </div>


      <div className={tanzstundeStyles.twocolumnwrapper}>

      <div className={tanzstundeStyles.twocolumn}>
        

      
      <p>Die Tanz- und Bewegungsstunden von «Dein Tanz» bieten Raum für Entfaltung. Hier darf man ganz sich selbst sein. Mit Papier, Malstiften, Trommeln, Schlaghölzern sowie Geschichten zum Entspannen und Träumen werden verschiedene Sinne geweckt. Ihr Kind lernt auf  spielerische Weise seinen Körper besser kennen und gewinnt somit mehr Selbstvertrauen und einen  besseren Zugang zu seinen Gefühlen. Soziale Fähigkeiten, Kreativität, Fantasie, Musik- und Rhythmusgefühl werden ebenso gefördert.
      </p>

      </div>

      <div className={tanzstundeStyles.twocolumn}>
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

              </div>

      
    

      <div className={tanzstundeStyles.tanzstunde}>   



          <div className={tanzstundeStyles.tanzstundeboxdetail}>
               <h2>Details</h2>
                <br />

                
                <br />

                <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Was</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>Tanz, Bewegung & Entspannung</p></div>
                	
                </div>

               <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Wer</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>Für Kinder von 7 bis 11 Jahren</p></div>
                	
                </div>

                

                        <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Wann</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p><strong>Findet im Moment nur auf Anfrage statt</strong></p></div>
                	
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Wo</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>

                  <Link href="https://www.haus-zum-widder.ch/willkommen.html" legacyBehavior>Im Haus zum Widder</Link>, in 8400 Winterthur</p></div>
                	
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
                  <div className={tanzstundeStyles.tanzflexitem2}><p><Link href="/ueber-mich" legacyBehavior>Regula Leemann</Link></p></div>
                  
                </div>


                
        		
              
          </div>{/*end 1st tanzstunde*/}




     </div>

     <FragenDetails />

     </div>
  );

}