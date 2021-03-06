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



  return (

  		<>

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

		      			<Link href={'/kurse/' + kurs.slug} passHref>
		      			<a>
		      			<Image 
		      			key={kurs.categoryValues} 
		          src={kurs.tanzstundeImage.url} // Route of the image file
		          height={300} // Desired size with correct aspect ratio
		          width={300} // Desired size with correct aspect ratio
		          alt={kurs.title}
		          className="resize"
	         

	          /></a></Link>



	          : <Image 
		      			key={kurs.categoryValues} 
		          src={kurs.tanzstundeImage.url} // Route of the image file
		          height={300} // Desired size with correct aspect ratio
		          width={300} // Desired size with correct aspect ratio
		          alt={kurs.title}
		          className="resize"
	         

	          /> }


	          
	          	{ kurs.description ? 

		       		<Link href={'/kurse/' + kurs.slug} passHref>
		      			<a className={frontpageStyles.link}>
	          	
		       			 <p>{kurs.title}</p>
		        		</a></Link>

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

		      			<Link href={'/kurse/' + kurs.slug} passHref>
		      			<a>
		      			<Image 
		      			key={kurs.categoryValues} 
		          src={kurs.tanzstundeImage.url} // Route of the image file
		          height={300} // Desired size with correct aspect ratio
		          width={300} // Desired size with correct aspect ratio
		          alt={kurs.title}
		          className="resize"
	         

	          /></a></Link>



	          : <Image 
		      			key={kurs.categoryValues} 
		          src={kurs.tanzstundeImage.url} // Route of the image file
		          height={300} // Desired size with correct aspect ratio
		          width={300} // Desired size with correct aspect ratio
		          alt={kurs.title}
		          className="resize"
	         

	          /> }


	          
	          	{ kurs.description ? 

		       		<Link href={'/kurse/' + kurs.slug} passHref>
		      			<a className={frontpageStyles.link}>
	          	
		       			 <p>{kurs.title}</p>
		        		</a></Link>

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

		      			<Link href={'/kurse/' + kurs.slug} passHref>
		      			<a>
		      			<Image 
		      			key={kurs.categoryValues} 
		          src={kurs.tanzstundeImage.url} // Route of the image file
		          height={300} // Desired size with correct aspect ratio
		          width={300} // Desired size with correct aspect ratio
		          alt={kurs.title}
		          className="resize"
	         

	          /></a></Link>



	          : <Image 
		      			key={kurs.categoryValues} 
		          src={kurs.tanzstundeImage.url} // Route of the image file
		          height={300} // Desired size with correct aspect ratio
		          width={300} // Desired size with correct aspect ratio
		          alt={kurs.title}
		          className="resize"
	         

	          /> }


	          
	          	{ kurs.description ? 

		       		<Link href={'/kurse/' + kurs.slug} passHref>
		      			<a className={frontpageStyles.link}>
	          	
		       			 <p>{kurs.title}</p>
		        		</a></Link>

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
     			<h2>Ich bin die Kursleiterin</h2>
     			<br />
     			<h3>Bewegung & Natur sind wichtige Bestandteile meines Lebens</h3>
     			<br />
     			<p>Meine Name ist <b>Regula Leemann</b>, eine angehende Tanz- und Bewegungstherapeutin am <Link href="https://iac.ch/">
				   <a><b>integrativen Ausbildungszentrum iac</b></a>
				    </Link> und Mami von zwei Kindern. Ich freue mich Ihnen und Ihrem Kind, diese wertvollen Erfahrungen spielerisch näher zu bringen. <Link href="/ueber-mich">
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
     			<h2>Meine Angebote</h2>
     			<br />
     			<h3>Tanz, Bewegung & Entspannung</h3>
     			<br />
     			<p>Bei Dein Tanz, Brauchst Du oder Dein Kind keine Tanzkenntnisse, sondern Spass am freien
Improvisieren Deines Tanzes und Deiner Bewegung.
Die Kurse von Dein Tanz beginnen immer mit Entspannung – oder Köperwahrnehmungsübungen, um
ins Zentrum unseres Körpers und ins „hier und jetzt» zu kommen.
Aus dieser Köperwahrnehmung gehen wir in die Bewegung, die immer verschieden gestaltet sein
kann. Durch kleine Anleitungen von mir probieren wir verschiedene Bewegungen und
Tanzmöglichkeiten in verschiedenen Raumebenen aus und folgen dabei unserem Körperimpuls. Auch
kommen mal Musikinstrumente und unsere Stimme zum Einsatz wie auch Papier und Malstifte um
Erlebtes aufzuschreiben oder zu malen.
Gemeinsam in der ganzen Gruppe, zu zweit oder alleine gibt es verschiedene Möglichkeiten unser
Bewegungsrepertoire zu erweitern (mal kraftvoll, mal fein, mal hoch, mal tief, mal langsam, mal
schnell, mal eckig, mal rund). Unserer Kreativität und Fantasie sind keine Grenzen gesetzt.
Ich freue mich auf die vielfältigen Stunden mit Dir oder Deinem Kind. Wo nur der Spass, die
Kreativität und das Wahrnehmen Deines Tanzes im Vordergrund steht.
				  </p>
     			
     		</div> 


     </div>{/*end 2nd element*/}

     
   
     
     


     

       <div>


       

      	<h3>In der Übersicht <Link href="/kursuebersicht">

            <a>Kreativkurse</a>

            </Link> finden Sie alle Kurse von Dein Tanz.</h3>


              

      

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
