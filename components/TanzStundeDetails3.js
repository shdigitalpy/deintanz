import Link from 'next/link'
import FragenDetails from './../components/FragenDetails'
import tanzstundeStyles from '../styles/tanzstunde.module.css'
import Image from 'next/image'

export default function TanzStundeDetails3() {

  return (


    <div className={tanzstundeStyles.tanzstundewrapper}>
    <div className={tanzstundeStyles.tanzstundetext}>
      <h1>Mutter- / Vater-Kinderstunde <br />von 4 bis 8 Jahren</h1>

      </div>


      <div className={tanzstundeStyles.twocolumnwrapper}>

      <div className={tanzstundeStyles.twocolumn}>
        

      
      <p>Möchtest Du abschalten vom Alltag, Dich mit deinem Kind/Kindern zusammen bewegen und
    entspannen? Eure Beziehung stärken oder einfach eine schöne Stunde zusammen verbringen.<br />
    Zusammen tauchen wir ein in verschiedene Themen, Welten, Figuren und Gefühle.<br />
    Am Anfang gibt es eine Begrüssungsrund, dann gehen wir zusammen in den Körper, durch Massagen,
    Körperwahrnehmungsübungen. Danach wird getanzt - bewegt und gespielt und manchmal musiziert.
    Am Schluss ist Kuscheln und Entspannungszeit so wie ein gemeinsames Bild darf gemalt werden.
      </p>

      </div>

      <div className={tanzstundeStyles.twocolumn}>
      <Image
              src="/images/kinder-4-8jahre.jpg" // Route of the image file
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
               <h2>Details zum Kurs</h2>
                <br />

                
                <br />

                <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Was</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>Mutter- / Vater-Kinderstunde</p></div>
                	
                </div>

               <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Wer</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>Für Kinder von 4 bis 8 Jahren</p></div>
                	
                </div>

                

                        <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Wann</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>20.09.2021, 4.10.2021, 25.10.2021,<br /> 8.11.2021, 22.11.2021, 6.12.2021<br />Zeit von 16:00 Uhr bis 17:15 Uhr </p></div>
                	
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Wo</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p><Link href="https://www.haus-zum-widder.ch/willkommen.html"><a target="_blank">Im Haus zum Widder</a></Link>, in 8400 Winterthur</p></div>
                	
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Preis</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p><strong>6 x 120.00 CHF oder Einzelbuchung<br /></strong></p></div>
                	
                </div>
        		
        		<div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Kleidung</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>Bequeme Kleidung anziehen</p></div>
                	
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Kursleitung</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p><Link href="/ueber-mich"><a>Regula Leemann</a></Link></p></div>
                  
                </div>


                
        		
              
          </div>{/*end 1st tanzstunde*/}




     </div>

     <FragenDetails />

     </div>

      
)

}