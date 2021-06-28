import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import frontpageStyles from '../styles/frontpage.module.css'
import TextCenter from './../components/TextCenter'
import Fragen from './../components/Fragen'
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

      <div ref={ref} className={frontpageStyles.fp}>       
          
          

          <motion.div animate={controls} className={frontpageStyles.fp1}>
		       <h2>Angebote</h2>
		              	
 						<br />
						<br />
 						<h3>Für Kinder</h3>
		      			<div className={frontpageStyles.angboxwrapper}>

		      			<div className={frontpageStyles.angbox}>
		      			
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
		      			<a className={frontpageStyles.link}>
		        <p>Tanz, Bewegung & Entspannung
		       		<br />für Kinder von <b>4 bis 8 Jahren</b></p>
		        		</a></Link>
		      			
		      			</div>{/*end angbox*/}


		       	<div className={frontpageStyles.angbox}>
		       	<Link href="/kurs2" passHref>
		      			<a>
		      			<Image
		          src="/images/kurs.jpg" // Route of the image file
		          height={300} // Desired size with correct aspect ratio
		          width={300} // Desired size with correct aspect ratio
		          alt="Regula Leemann"
		          className="resize"
	         

	          /></a></Link>

	          	<Link href="/kurs2" passHref>
		      			<a className={frontpageStyles.link}>
		        <p>Tanz, Bewegung & Entspannung
		       		<br />für Kinder von <b>7 bis 11 Jahren</b></p>
		        		</a></Link>
		      			

		      			</div>{/*end angbox*/}

		      			</div>{/*end angwrapper*/}

		      			<br />
		      			<br />


		      			<h3>Für Erwachsene</h3>
		      			<div className={frontpageStyles.angboxwrapper}>



		      			<div className={frontpageStyles.angbox}>
		       			<Image
		          src="/images/eltern-kind.jpg" // Route of the image file
		          height={300} // Desired size with correct aspect ratio
		          width={300} // Desired size with correct aspect ratio
		          alt="Regula Leemann"
		    

		          />
		        <p>Tanzen für Eltern und Kinder
		       		<br />Informationen folgen</p>
		        		
		      			

		      			</div>{/*end angbox*/}

		      			<div className={frontpageStyles.angbox}>
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

		      	 <motion.div whileHover={{

					        scale: 1.1,
					        transition: {
					          duration: .2
					        }


					      }}>
		        

				   </motion.div>

      </motion.div>


     </div>{/*end 1st element*/}

     <div className={frontpageStyles.fpboxeswrapper} >
     	
     		

     		<div className={frontpageStyles.fpbox}>
     			<h2>Ich bin die Kursleiterin</h2>
     			<br />
     			<h3>Bewegung & Natur sind wichtige Bestandteile meines Lebens</h3>
     			<br />
     			<p>Meine Name ist <b>Regula Leemann</b>, eine angehende Tanz- und Bewegungstherapeutin am <Link href="https://iac.ch/">
				   <a><b>integrativen Ausbildungszentrum iac</b></a>
				    </Link> und selbst Mami von zwei Kindern. Ich freue mich, 
				    Ihrem Kind meine wertvollen Erfahrungen spielerisch näher zu bringen. <Link href="/ueber-mich">
				   <a><b>Mehr über mich</b></a>
				    </Link> </p>
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
     			<h2>Aktuelles Angebot</h2>
     			<br />
     			<h3>Tanz, Bewegung & Entspannung</h3>
     			<br />
     			<p>Tanzen fördert die körperliche und geistige Entwicklung. Beim gemeinsamen Spielen, Tanzen, Musizieren oder Malen können die Kinder überschüssige Energien loswerden und dabei die eigene Kreativität entdecken. Die Tanz- und Bewegungsstunde möchte den Kindern die Gelegenheit bieten, Emotionen auszuleben und den Umgang mit anderen Kindern zu erlernen. Zum Abschluss helfen liebevolle Geschichten zum Träumen dabei, die Kinder nach den lebhaften Aktivitäten wieder zur Ruhe kommen zu lassen.</p>
     			<p>Mehr zu den <Link href="/kursekinder">
				   <a><b>Kursen für Kinder</b></a>
				    </Link></p>
     			<br />
     			<Image
          src="/images/kurs3.jpg" // Route of the image file
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


     </div>{/*end 2nd element*/}

     
   
     
     

       <Fragen />
     

       <div>


       

      	<h3>Alle unsere Kurse finden Sie in der <Link href="/kursuebersicht">

            <a>Kursübersicht</a>

            </Link> </h3>


              

      

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
      	<p>Bei Fragen in Bezug auf die Kurse oder meine Person stehe ich Ihnen gerne vorab zur Verfügung. 
      	Ich freue mich von Ihnen zu hören.</p>
      	

      	<motion.div whileHover={{

					        scale: 1.2,
					        transition: {
					          duration: .2
					        }


					      }}>
      	<Link href="/kontakt" passHref>
		    <a className={frontpageStyles.btn2}>Zum Kontakt</a>
		  </Link>
		  </motion.div>

		  </div>
        

      </div>{/*end 4rd element*/}

    

   


     </>
      
)

}
