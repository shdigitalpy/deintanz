import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import frontpageStyles from '../styles/frontpage.module.css'
import TextCenter from './../components/TextCenter'
import ProbeLektion from './../components/ProbeLektion'
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
		       <h2>Tanz- & Bewegungsstunden für Kinder</h2>
		        <p>Bei «Dein Tanz» können sich Kinder, jedes für sich einzigartig, in kleinen Gruppen frei entfalten. Es gibt kein Richtig oder Falsch.</p>
		        <br /><p>Tanzen fördert die körperliche und geistige Entwicklung. Beim gemeinsamen Spielen, 
		        Tanzen, Musizieren oder Malen können die Kinder überschüssige Energien loswerden und dabei die eigene Kreativität entdecken. 
		        Die Tanz- und Bewegungsstunde möchte den Kindern die Gelegenheit bieten, Emotionen auszuleben und den Umgang mit anderen Kindern zu erlernen. 
		        Zum Abschluss helfen liebevolle Geschichten zum Träumen dabei, die Kinder nach den lebhaften Aktivitäten wieder zur Ruhe kommen zu lassen.</p>
		      	


		      	 <motion.div whileHover={{

					        scale: 1.1,
					        transition: {
					          duration: .2
					        }


					      }}>
		        <Link href="/angebote" passHref>
				   <a className={frontpageStyles.btn}>Mehr erfahren</a>
				    </Link>

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
				    </Link> und selbst Mami von zwei Kindern. Ich freue mich, Ihrem Kind meine wertvollen Erfahrungen spielerisch näher zu bringen.</p>
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
     			<h3>Tanz- und Bewegungsstunde für Kinder</h3>
     			<br />
     			<p>Wer möchte nicht einmal wie ein Wirbelwind durch den Raum fegen, einen Regentanz aufführen oder sich wie ein Blatt im Wind drehen?</p>
     			<br />
     			<p>Bei «Dein Tanz» haben wir Spass und fördern dabei spielerisch soziale Fähigkeiten, Kreativität, Fantasie, Musik- und Rhythmusgefühl.</p>
     			<br />
     			<Image
          src="/images/kurs.jpg" // Route of the image file
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

     
     <ProbeLektion />
     

     



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
