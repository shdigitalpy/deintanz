import Link from 'next/link'
import FragenDetails from './../components/FragenDetails'
import tanzstundeStyles from '../styles/tanzstunde.module.css'
import Image from 'next/image'
import KurseSlider from './KurseSlider'



export default function TanzStundeDetails() {

  return (


    <div className={tanzstundeStyles.tanzstundewrapper}>
    <div className={tanzstundeStyles.tanzstundetext}>
      <h1>Tanz, Bewegung & Entspannung für Kinder von 5 bis 10 Jahren</h1>

      </div>


      <div className={tanzstundeStyles.twocolumnwrapper}>

      <div className={tanzstundeStyles.twocolumn}>
        

      
      <p>Ermöglichen Sie Ihrem Kind einen Raum zur Entfaltung mit unseren Kursen. Bei "Dein Tanz" lernt Ihr Kind keinen speziellen Tanzstil, aber es lernt auch seinen Körper besser kennen und wahrzunehmen. Nach einem Begrüssungsritual tauchen wir ein in verschiedene Figuren/Welten/Themen/ Gefühle und drücken diese beim Tanz, Bewegen und Musizieren individuell aus. Am Schluss gibt es immer eine kleine Entspannungsreise in Form einer Geschichte zum jeweiligen Thema, welche die Kinder beim Malen visualisieren können. In kleinen Gruppen gebe ich den Kindern einen Raum sich frei zu entfalten und ganz sich selbst zu sein. Dadurch gewinnen die Kinder mehr Selbstvertrauen und mehr Sozialkompetenzen. Durch die kleine Gruppe von max. 6 Kindern kann ich auf die Bedürfnisse der Kinder besser ein gehen. Die Tanzstunde bietet auch Raum fürs Erzählen und eigene Ideen.
      </p>

      </div>

      <div className={tanzstundeStyles.twocolumn}>
      <Image
              src="/images/kurs2.jpg" // Route of the image file
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
               <h2>Details zum Kurs in Winterthur</h2>
                <br />

                
                <br />

                <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Was</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>Tanz, Bewegung & Entspannung</p></div>
                	
                </div>

               <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Wer</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>Für Kinder von 5 bis 10 Jahren</p></div>
                	
                </div>

                

                        <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Daten</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p>
                  Weinachtsferien bis zu den Frühlingsferien:
                  <br />
                  14.1, 28.1, 25.2, 4.3, 18.3, 1.4  <small>(Daten für nach den Frühlingsferien folgen)
              </small>
                     <br />

                  <strong>Montag 16:00 bis 17:00 Uhr</strong>

                  <br />
                  <small>(der Kurs findet bei max. 2 Anmeldungen statt)</small>
                  </p>


                  </div>
                  
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Wo</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p><Link href="https://www.babafe.ch/tanzraum.html"><a target="_blank">Tanzraum Wildbach, Wildbachstrasse 7, 8400 Winterthur</a></Link></p></div>
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Preis</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p><strong>110.00 CHF pro Quartal für 6x</strong></p></div>
                	
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


          <div className={tanzstundeStyles.tanzstundeboxdetail}>
               <h2>Details zum Kurs in Frauenfeld</h2>
                <br />

                
                <br />

                <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Was</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p>Tanz, Bewegung & Entspannung</p></div>
                  
                </div>

               <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Wer</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p>Für Kinder von 5 bis 10 Jahren</p></div>
                  
                </div>

                

                        <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Daten</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p>
                  Weinachtsferien bis zu den Frühlingsferien:
                  <br />
                  14.1, 28.1, 25.2, 4.3, 18.3, 1.4  <small>(Daten für nach den Frühlingsferien folgen)
              </small>
                     <br />

                  <strong>Montag 14:30 bis 15:30 Uhr</strong>

                  <br />
                  <small>(der Kurs findet bei max. 2 Anmeldungen statt)</small>
                  </p>


                  </div>
                  
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Wo</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p><Link href="https://www.herzraum.yoga/"><a target="_blank">Herzraum Yoga, Zürcherstrasse 34, 8500 Frauenfeld</a></Link></p></div>
                  
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Preis</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p><strong>110.00 CHF pro Quartal für 6x</strong></p></div>
                  
                </div>
            
            <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Kleidung</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p>Bequeme Kleidung anziehen</p></div>
                  
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Kursleitung</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p><Link href="/ueber-mich"><a>Regula Leemann</a></Link></p></div>
                  
                </div>


                
            
              
          </div>{/*end 2nd tanzstunde*/}




     </div>

     <FragenDetails />

     </div>

      
)

}

