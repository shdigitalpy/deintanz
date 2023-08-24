import Link from 'next/link'
import FragenDetails from './../components/FragenDetails'
import tanzstundeStyles from '../styles/tanzstunde.module.css'
import Image from 'next/image'
import KurseSlider from './KurseSlider'
import { RichText } from '@graphcms/rich-text-react-renderer';
import Frauenfeld from './Frauenfeld'

export default function TanzStundeDetailsDynamic({ 
  title, 
  subtitle, 
  description, 
  image, 
  loc_short, 
  was, 
  zielgruppe, 
  date, 
  kursraum_url, 
  kursraum,
  boxprice_all,
  kleidung,
  kursleitung,
  kursleitung_url,
  datefrau,
  datefrau_wo, 
  datefrau_wolink,
  standortes,
  rundesEinzelbild,
  contact_text


   }) {

  const boxprice_all1 = boxprice_all ? boxprice_all : ' '

  const datefrau1 = datefrau ? datefrau : ' '

  return (
    <div className={tanzstundeStyles.tanzstundewrapper}>
    <div className={tanzstundeStyles.tanzstundetext}>
      <h1>Kurs - {title}</h1>
      <h2>{subtitle}</h2>

      </div>


      <div className={tanzstundeStyles.twocolumnwrapper}>

      <div className={tanzstundeStyles.twocolumn}>
        

      
      <p>{description}</p>

      </div>

      <div className={tanzstundeStyles.twocolumn}>
      <Image
              src={image} // Route of the image file
              height={300} // Desired size with correct aspect ratio
              width={300} // Desired size with correct aspect ratio
              alt="{title}"
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


    {/*start winterthur */}
          <div className={tanzstundeStyles.tanzstundeboxdetail}>
               <h2>Details zum Kurs {standortes[0] ? standortes[0].name : null}</h2>
                <br />

                
                <br />

                <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Was</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>{was}</p></div>
                	
                </div>

               <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Wer</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>{zielgruppe}</p></div>
                	
                </div>

                

                        <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Daten</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}>

                  <RichText content={date} />

                  </div>
                  
                  
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Wo</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>

                  <Link href={standortes[0] ? standortes[0].adresseLink : '/'} legacyBehavior>

                  {standortes[0] ? standortes[0].adresse : null}

                  </Link></p>

                  </div>
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Preis</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p><strong>

                  <RichText content={boxprice_all1.raw} />

                  </strong></p></div>
                	
                </div>
        		
        		<div className={tanzstundeStyles.tanzflex}>

                	<div className={tanzstundeStyles.tanzflexitem1}><p>Kleidung</p> </div>
                	<div className={tanzstundeStyles.tanzflexitem2}><p>{kleidung}</p></div>
                	
                </div>

                <div className={tanzstundeStyles.tanzflex}>

                  <div className={tanzstundeStyles.tanzflexitem1}><p>Kursleitung</p> </div>
                  <div className={tanzstundeStyles.tanzflexitem2}><p><Link href="/ueber-mich" legacyBehavior>Regula Leemann</Link></p></div>
                  
                </div>


                
        		
              
          </div>{/*end 1st tanzstunde*/}

          { standortes[1] ? 
      
      <Frauenfeld 

        
          datefrau={datefrau1}

          frauenfeld={standortes}

          boxprice_all1={boxprice_all1}

          kleidung={kleidung}

          /> 

          : ' ' }



     </div>

     { rundesEinzelbild ?

      <Image
              src={rundesEinzelbild.url} // Route of the image file
              height={500} // Desired size with correct aspect ratio
              width={500} // Desired size with correct aspect ratio
              alt={rundesEinzelbild.fileName}
              className="roundedfull"
           

            />

        : '' }

      { contact_text ?



     <FragenDetails contact_text={contact_text} />

     : null}

     </div>
  );

}

