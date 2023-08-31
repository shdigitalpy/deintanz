import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import frontpageStyles from '../styles/frontpage.module.css'
import TextCenter from './../components/TextCenter'
import Fragen from './../components/Fragen'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';



export default function FrontPage({ kurses }) {

	const {ref, inView} = useInView({
      threshold: 0.1
  });

  const controls = useAnimation();

  useEffect(() => {

      console.log("use effect hook, inView = ", inView);

      if(inView){
        controls.start({
          
          opacity: 1,
          transition: {
            type: 'string', duration: 2

          },
          

        });

      }

      if(!inView){
        controls.start({opacity: 0});

      }
      

  }, [inView]);



  return <>

  <div ref={ref} className={frontpageStyles.fp}>       
    
    

    <motion.div animate={controls} className={frontpageStyles.fp1}>
         <h2>Angebote</h2>
                  
                  <br />
                  <br />

                  {/*{kurses.filter(kurs => kurs.categoryValues.includes('for_kids')).map(kurs => (
                  
                   kurs ? 
                  <h3>Für Kinder</h3>

                  : " "
                   
                  ))}*/}

                  
                  <div className={frontpageStyles.angboxwrapper}>
          {kurses.filter(kurs => kurs.categoryValues.includes('for_kids')).map(kurs => (
              <div className={frontpageStyles.angbox}>
                      

                  { kurs.description ? 

                  <Link href={'/kurse/' + kurs.slug} passHref legacyBehavior>
                  
                  <Image 
                  key={kurs.categoryValues} 
            src={kurs.tanzstundeImage.url} // Route of the image file
            height={300} // Desired size with correct aspect ratio
            width={300} // Desired size with correct aspect ratio
            alt={kurs.title}
            className="resize"
       

        /></Link>



        : <Image 
                  key={kurs.categoryValues} 
            src={kurs.tanzstundeImage.url} // Route of the image file
            height={300} // Desired size with correct aspect ratio
            width={300} // Desired size with correct aspect ratio
            alt={kurs.title}
            className="resize"
       

        /> }


        
          { kurs.description ? 

              <Link
                className={frontpageStyles.link}
                href={'/kurse/' + kurs.slug}
                passHref
                legacyBehavior>
                  
          
                   <p>{kurs.title}</p>
                  </Link>

                  : <p>{kurs.title}</p> }
                  
                  </div>

                          ))}

                  </div>

                  
         
   


                  <br />
                  <br />

                  {/*{kurses.filter(kurs => kurs.categoryValues.includes('adults')).map(kurs => (
                  
                   kurs ? 
                  <h3>Neu für Erwachsene ab Mai 2022</h3>

                  : " "
                   
                  ))}*/}
  


                  
                  <div className={frontpageStyles.angboxwrapper}>
          {kurses.filter(kurs => kurs.categoryValues.includes('adults')).map(kurs => (
              <div className={frontpageStyles.angbox}>
                      

                  { kurs.description ? 

                  <Link href={'/kurse/' + kurs.slug} passHref legacyBehavior>
                  
                  <Image 
                  key={kurs.categoryValues} 
            src={kurs.tanzstundeImage.url} // Route of the image file
            height={300} // Desired size with correct aspect ratio
            width={300} // Desired size with correct aspect ratio
            alt={kurs.title}
            className="resize"
       

        /></Link>



        : <Image 
                  key={kurs.categoryValues} 
            src={kurs.tanzstundeImage.url} // Route of the image file
            height={300} // Desired size with correct aspect ratio
            width={300} // Desired size with correct aspect ratio
            alt={kurs.title}
            className="resize"
       

        /> }


        
          { kurs.description ? 

              <Link
                className={frontpageStyles.link}
                href={'/kurse/' + kurs.slug}
                passHref
                legacyBehavior>
                  
          
                   <p>{kurs.title}</p>
                  </Link>

                  : <p>{kurs.title}</p> }
                  
                  </div>

                          ))}

                  </div>

                      <br />
                  <br />

                  {/*{kurses.filter(kurs => kurs.categoryValues.includes('mother_father_kids')).map(kurs => (
                  
                   kurs ? 
                  <h3>Mutter/Vater - Kind- Zeit</h3>

                  : " "
                   
                  ))}*/}
                  


                  
                  <div className={frontpageStyles.angboxwrapper}>
          {kurses.filter(kurs => kurs.categoryValues.includes('mother_father_kids')).map(kurs => (
              <div className={frontpageStyles.angbox}>
                      

                  { kurs.description ? 

                  <Link href={'/kurse/' + kurs.slug} passHref legacyBehavior>
                  
                  <Image 
                  key={kurs.categoryValues} 
            src={kurs.tanzstundeImage.url} // Route of the image file
            height={300} // Desired size with correct aspect ratio
            width={300} // Desired size with correct aspect ratio
            alt={kurs.title}
            className="resize"
       

        /></Link>



        : <Image 
                  key={kurs.categoryValues} 
            src={kurs.tanzstundeImage.url} // Route of the image file
            height={300} // Desired size with correct aspect ratio
            width={300} // Desired size with correct aspect ratio
            alt={kurs.title}
            className="resize"
       

        /> }


        
          { kurs.description ? 

              <Link
                className={frontpageStyles.link}
                href={'/kurse/' + kurs.slug}
                passHref
                legacyBehavior>
                  
          
                   <p>{kurs.title}</p>
                  </Link>

                  : <p>{kurs.title}</p> }
                  
                  </div>

                          ))}

                  </div>
              

           <motion.div whileHover={{

                      scale: 1.1,
                      transition: {
                        duration: .2
                      }


                    }}>
          

             </motion.div>

</motion.div>


</div>{/*end dynamic element */}

                      
          




<div className={frontpageStyles.fpboxeswrapper} >
  
      

      <div className={frontpageStyles.fpbox}>
          <h2>Über mich</h2>
          <br />
          <h3>Bewegung & Natur sind wichtige Bestandteile meines Lebens</h3>
          <br />
          <p>Ich bin Regula Leemann und wurde 1981 geboren. Zusammen mit meinen Kindern lebe ich in
          Winterthur. 2023 habe ich meine dreijährige Ausbildung zur ressourcenorientierten Tanz- und
          Bewegungstherapeutin am integrativen Ausbildungszentrum iac abgeschlossen und befinde
          mich nun in der Aufbauausbildung zur prozessorientierten Tanz- und Bewegungstherapeutin.</p>
          <br />
              <Link style={{cursor:"pointer"}} href="/ueber-mich">
         
                   <b>Mehr über mich</b>
              </Link> <br />
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
          <h2>Meine Angebote</h2>
          <br />
          <h3>Tanz- und Bewegungstherapie</h3>
          <br />
          <p>Tanz- und Bewegungstherapie, eine Fachrichtung der Kunsttherapien, ist eine künstlerische
und körperorientierte Psychotherapie. Sie beruht auf dem Prinzip der Einheit und
Wechselwirkung körperlicher, emotionaler, psychischer, kognitiver und sozialer Prozesse.</p>

          <p>In unserem Körper sind Erfahrungen, Prägungen und Muster gespeichert, die wir seit unserer
Kindheit gemacht haben. Sogar pränatale Erregungs- und Bewegungsmuster begleiten uns.
Einiges bleibt im Unbewussten verborgen, weshalb wir manchmal an unsere Grenzen stoßen,
sowohl mit uns selbst als auch mit anderen, ohne zu wissen, wieso. Therapeutische
Unterstützung stärkt vorhandene Ressourcen. Wir drücken uns kreativ und authentisch aus -
durch Bewegung, Gefühls- und Körperwahrnehmung oder Imaginationen. Verborgene Anteile
finden einen Weg in unser Bewusstsein, können integriert werden. Neues Potenzial entsteht,
Schattenseiten können akzeptiert und transformiert werden. So finden wir Einklang mit uns und
anderen.</p>

 <p>Gerne begleite ich dich auf deinem kreativen und individuellen Weg zu mehr
Handlungsfähigkeit, Selbstvertrauen und Verbundenheit zwischen Körper, Geist und Seele. Die
Tanz- und Bewegungstherapie kann sowohl in Gruppenangeboten als auch in Einzelsitzungen
stattfinden.</p>
          
      </div> 


</div>{/*end 2nd element*/}









 <div>


 

  <h3>In der <Link href="/kursuebersicht" legacyBehavior>

      Übersicht

      </Link> finden Sie alle Angebote von Dein Tanz.</h3>


        



  <style jsx>{`
  
  div {
    height: 500px;
    background-color: rgba(31,8,49,0.03);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;


    
  }
  
`}</style>


</div>


<div className={frontpageStyles.fpcontact}>
  
  <div className={frontpageStyles.fpcontactbox}>
  <h4>Zögern Sie nicht, mich zu kontaktieren</h4><br />
  <br />
  <p>Bei Fragen in Bezug auf das Angebot oder meine Person stehe ich Ihnen gerne vorab zur Verfügung. 
  Ich freue mich von Ihnen zu hören.</p>
  
  <br />
  <motion.div whileHover={{

                      scale: 1.2,
                      transition: {
                        duration: .2
                      }


                    }}>
  <Link  href="/kontakt" passHref legacyBehavior>
     <span className={frontpageStyles.btn2} >Zum Kontakt</span>
    </Link>
    </motion.div>

    </div>
  

</div>{/*end 4rd element*/}






</>;

}
