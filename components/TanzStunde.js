import Link from 'next/link'
import tanzstundeStyles from '../styles/tanzstunde.module.css'


export default function TanzStunde() {

  return (


    <div className={tanzstundeStyles.tanzstundewrapper}>
    <div className={tanzstundeStyles.tanzstundetext}>
      <h2>Ermöglichen Sie Ihrem Kind einen Raum zur Entfaltung mit unseren Kursen</h2>
      <p>Bei "Dein Tanz" lernt Dein Kind keinen speziellen Tanzstil, aber es lernt seinen Körper besser kennen und wahrzunehmen.
Nach einem Begrüssungsritual, tauchen wir ein, in verschiedene Figuren/Welten/Themen/ Gefühle und drücken diese beim Tanz, Bewegen und Musizieren individuell aus. Am Schluss gibt es immer eine kleine Entspannungsreise Geschichte zum jeweiligen Thema, welche die Kinder beim malen visualisieren können.
In kleinen Gruppen, gebe ich den Kindern einen Raum sich frei zu entfalten und ganz sich selbst zu sein. Durch das gewinnen Die Kinder mehr Selbstvertrauen und mehr Sozial Kompetenzen. Durch die kleine Gruppe von max. 6 Kindern kann ich auf die Bedürfnisse der Kinder besser ein gehen. Es gibt auch Platz zum erzählen und eigene Ideen. </p>
      </div>
    

      <div className={tanzstundeStyles.tanzstunde}>   



          <div className={tanzstundeStyles.tanzstundebox}>
               <h2>Kurs 1: Tanz, Bewegung und Entspannung für Kinder von 4 bis 8 Jahren </h2>
                <br />

                
                <br />

                <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Was</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>Tanz, Bewegung & Entspannung</p></div>
                	
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


                <Link href="/kurs1" passHref>
               <a className={tanzstundeStyles.btn}>Zu den Details</a>
                </Link>
              
          </div>{/*end 1st tanzstunde*/}

          <div className={tanzstundeStyles.tanzstundebox}>
               <h2>Kurs 2: Tanz, Bewegung & Entspannung für Kinder von 7 bis 11 Jahren</h2>
                <br />

                
                <br />

                <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Was</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p>Tanz, Bewegung & Entspannung
                  </p></div>
                  
                </div>

               <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Wer</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p>Für Kinder von 7 bis 11 Jahren</p></div>
                  
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


                <Link href="/kurs2" passHref>
               <a className={tanzstundeStyles.btn}>Zu den Details</a>
                </Link>
            
              
          </div>{/*end 2nd tanzstunde*/}

     </div>

     </div>

      
)

}