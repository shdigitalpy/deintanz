import Link from 'next/link'
import tanzstundeStyles from '../styles/tanzstunde.module.css'
import { RichText } from '@graphcms/rich-text-react-renderer';


export default function Frauenfeld({ datefrau, frauenfeld, boxprice_all1, kleidung }) {

    return (

          <div className={tanzstundeStyles.tanzstundeboxdetail}>
               
                <h2>Details zum Kurs {

                  frauenfeld[1] ? 'in ' + frauenfeld[1].name : ''


                }</h2>



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
                  <div className={tanzstundeStyles.tanzflexitem2}>

                  <RichText content={datefrau} />


                  </div>
                  
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Wo</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p>

                  <Link href={

                    frauenfeld[1] ? frauenfeld[1].adresseLink : ''

                  }><a target="_blank">

                  {

                    frauenfeld[1] ? frauenfeld[1].adresse : ''
                  }

                  </a></Link></p>

                  </div>
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Preis</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p><strong>

                 <RichText content={boxprice_all1 ? boxprice_all1.raw : null} />

                  </strong></p></div>                  
                </div>
            
            <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Kleidung</p> </div>
                 <div className={tanzstundeStyles.tanzflexitem2}><p>{kleidung}</p></div>
                  
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Kursleitung</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p><Link href="/ueber-mich"><a>Regula Leemann</a></Link></p></div>
                  
                </div>


                
            
              
          </div>


      )


  }