import Link from 'next/link'
import FragenDetails from './../components/FragenDetails'
import tanzstundeStyles from '../styles/tanzstunde.module.css'
import Image from 'next/image'

export default function TanzStundeDetails3() {

  return (
    <div className={tanzstundeStyles.tanzstundewrapper}>
    <div className={tanzstundeStyles.tanzstundetext}>
      <h1>Mutter/Vater - Kind- Zeit <br />von 4 bis 12 Jahren</h1>
      <h2>Gönne Dir eine schöne Zeit mit Deinem Kind</h2>

      </div>


      <div className={tanzstundeStyles.twocolumnwrapper}>

      <div className={tanzstundeStyles.twocolumn}>
        

      
      <p>Möchtest Du abschalten vom Alltag, Dich mit deinem Kind zusammen bewegen und
entspannen? Eure Beziehung stärken oder einfach eine schöne Stunde zusammen verbringen.
Gemeinsam tauchen wir ein in verschiedene Themen, Welten, Figuren und Gefühle.
Wir starten mit einer Begrüssungsrunde, dann gehen wir zusammen in den Körper durch Massagen
und Körperwahrnehmungsübungen. Danach wird getanzt, bewegt und gespielt und manchmal auch
musiziert. Am Schluss ist Kuscheln und Entspannung angesagt und auch ein gemeinsames Bild darf
gemalt werden.
      </p>

      </div>

      <div className={tanzstundeStyles.twocolumn}>
      <Image
              src="/images/kind-erwachsene1.jpg" // Route of the image file
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
                	<div className={tanzstundeStyles.tanzflexitem2}><p>Mutter/Vater - Kind- Zeit</p></div>
                	
                </div>

               <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Wer</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>Für Kinder von 4 bis 12 Jahren</p></div>
                	
                </div>

                

                        <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Wann</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>Dienstags an folgenden Daten:  <br />25.1, 22.2, 22.3, 12.4.2022  <br />Zeit von 17:30 Uhr bis 19:00 Uhr</p></div>
                	
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Wo</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>
                  <Link href="https://www.babafe.ch/tanzraum.html" legacyBehavior>Tanzraum Wildbach, Wildbachstrasse 7, 8400 Winterthur</Link></p></div>
                	
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Preis</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p><strong>CHF 35.00 für beide<br /></strong></p></div>
                	
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

     <Image
              src="/images/kursmittel2.jpg" // Route of the image file
              height={500} // Desired size with correct aspect ratio
              width={500} // Desired size with correct aspect ratio
              alt="Kursmittel 2"
              className="roundedfull"
           

            />




     </div>
  );

}