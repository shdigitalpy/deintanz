import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import kursoverviewStyles from '../styles/kursoverview.module.css'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';



export default function KurseOverview({ kurses }) {

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

<div className={kursoverviewStyles.ang}>

<div className={kursoverviewStyles.ang1}>


      {/*{kurses.filter(kurs => kurs.categoryValues.includes('for_kids')).map(kurs => (
                  
                   kurs ? 

                   <>
                  <h3>Für Kinder</h3>
                  <p>Hier finden Sie unser Angebot für den Kreativen Tanzkurs für Kinder.</p>

                      </>

                  : " "
                   
                  ))}*/}
                  
                  
                  
          <div className={kursoverviewStyles.angboxwrapper}>

          {kurses.filter(kurs => kurs.categoryValues.includes('for_kids')).map(kurs => (
              <div className={kursoverviewStyles.angbox}>
                      

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
                  className={kursoverviewStyles.link}
                  href={'/kurse/' + kurs.slug}
                  passHref
                  legacyBehavior>
              
          
                  <p>{kurs.title}</p>
                  </Link>

              

                  : <p>{kurs.title} (Details folgen)</p> }
                  
                  </div>

                          ))}

                  </div>


                  <br />
                  <br />

                  {/*{kurses.filter(kurs => kurs.categoryValues.includes('adults')).map(kurs => (
                  
                   kurs ? 

                   <>
                  <h3>Neu für Erwachsene ab Mai 2022</h3>
                  <p>Nachfolgend finden Sie unsere Kreativkurse für Erwachsene.</p>
                      </>

                  : " "
                   
                  ))}*/}

                  
                  


                  <div className={kursoverviewStyles.angboxwrapper}>
          {kurses.filter(kurs => kurs.categoryValues.includes('adults')).map(kurs => (
              <div className={kursoverviewStyles.angbox}>
                      

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
                  className={kursoverviewStyles.link}
                  href={'/kurse/' + kurs.slug}
                  passHref
                  legacyBehavior>
                  
          
                   <p>{kurs.title}</p>
                  </Link>

                  : <p>{kurs.title} (Details folgen)</p> }
                  
                  </div>

                          ))}

                  </div>

                  <br />
                  <br />

                  {/*{kurses.filter(kurs => kurs.categoryValues.includes('mother_father_kids')).map(kurs => (
                  
                   kurs ? 

                   <>
                  <h3>Mutter/Vater - Kind - Zeit</h3>
                  <p>Nachfolgend finden Sie unsere Kreativkurse für Erwachsene mit Kind.</p>

                  </>

                  : " "
                   
                  ))}*/}

                  
                  

                  <div className={kursoverviewStyles.angboxwrapper}>
          {kurses.filter(kurs => kurs.categoryValues.includes('mother_father_kids')).map(kurs => (
              <div className={kursoverviewStyles.angbox}>
                      

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
                  className={kursoverviewStyles.link}
                  href={'/kurse/' + kurs.slug}
                  passHref
                  legacyBehavior>
                  
          
                   <p>{kurs.title}</p>
                  </Link>

                  : <p>{kurs.title} (Details folgen)</p> }
                  
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

             <br />
                  <br />

</div>{/*end ang1*/}


</div>{/*end ang*/}





</>;

}
