import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import kursoverviewStyles from '../styles/kursoverview.module.css'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function FrontPage() {

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
 

  return (

  		<>

      <div className={kursoverviewStyles.ang}>

      <div className={kursoverviewStyles.ang1}>
		              	
 						<h3>Für Kinder</h3>
 						<p>Hier finden Sie unser Angebot für den Kreativen Tanzkurs für Kinder.</p>
		      			<div className={kursoverviewStyles.angboxwrapper}>

		      			<div className={kursoverviewStyles.angbox}>
		      			
		      			<Link href="/kurs1" passHref>
		      			<a>
		      			<Image
		          src="/images/kurs2.jpg" // Route of the image file
		          height={300} // Desired size with correct aspect ratio
		          width={300} // Desired size with correct aspect ratio
		          alt="Regula Leemann"
		          className="resize"
	         

	          /></a></Link>

		       		<Link href="/kurs1" passHref>
		      			<a className={kursoverviewStyles.link}>
		        <p>Tanz, Bewegung & Entspannung
		       		<br />für Kinder von <b>5 bis 10 Jahren</b></p>
		        		</a></Link>
		      			
		       			
				   
				    
		      			</div>{/*end angbox*/}


		      			


		      			

		       	

		      			</div>{/*end angwrapper*/}


		      			<br />
		      			<br />

		      			<h3>Mutter/Vater - Kind - Zeit</h3>
		      			<p>Nachfolgend finden Sie unsere Kreativkurse für Erwachsene mit oder ohne Kinder. </p>
		      			<div className={kursoverviewStyles.angboxwrapper}>



		      			<div className={kursoverviewStyles.angbox}>
		       	

		       	<Link href="/kurs3" passHref>
		      			<a>


		      			<Image
		          src="/images/kind-erwachsene1.jpg" // Route of the image file
		          height={300} // Desired size with correct aspect ratio
		          width={300} // Desired size with correct aspect ratio
		          alt="Regula Leemann"
		          className="resize"
		          
	         

	          /></a></Link>
		        

		        	<Link href="/kurs3" passHref>
		      			<a className={kursoverviewStyles.link}>
		        <p>Mutter- / Vater-Kinderstunde
		        <br />für Kinder von <b>4 bis 12 Jahren </b></p>
		        		</a></Link>
		        		
		      			

		      			</div>{/*end angbox*/}

		      			

		        	</div>{/*end angwrapper*/}


		      	 <motion.div whileHover={{

					        scale: 1.1,
					        transition: {
					          duration: .2
					        }


					      }}>
		        

				   </motion.div>

				   <br />
		      			<br />

		      			<h3>Neu für Erwachsene ab Mai 2022</h3>
		      			<p>Nachfolgend finden Sie unsere Kreativkurse für Erwachsene mit oder ohne Kinder. </p>
		      			<div className={kursoverviewStyles.angboxwrapper}>



		      			<div className={kursoverviewStyles.angbox}>
		       	

		       	<Link href="" passHref>
		      			<a>


		      			<Image
		          src="/images/kind-erwachsene1.jpg" // Route of the image file
		          height={300} // Desired size with correct aspect ratio
		          width={300} // Desired size with correct aspect ratio
		          alt="Regula Leemann"
		          className="resize"
		          
	         

	          /></a></Link>
		        

		        	<Link href="" passHref>
		      			<a className={kursoverviewStyles.link}>
		        <p>Tanz, Bewegung und Entspannung für Erwachsene
		        ab <b>Mai 2022 </b></p>
		        		</a></Link>
		        		
		      			

		      			</div>{/*end angbox*/}

		      			<div className={kursoverviewStyles.angbox}>
		       			<Image
		          src="/images/achtsames-tanzen-natur.jpg" // Route of the image file
		          height={300} // Desired size with correct aspect ratio
		          width={300} // Desired size with correct aspect ratio
		          alt="Regula Leemann"
		    

		          />
		        <p>Achtsames Tanzen in der Natur
		       		<br />Informationen folgen</p>
		        		
		      			

		      			</div>{/*end angbox*/}

		        	</div>{/*end angwrapper*/}

   	</div>{/*end ang1*/}


     </div>{/*end ang*/}


   


     </>
      
)

}
