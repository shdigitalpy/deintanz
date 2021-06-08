import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import frontpageStyles from '../styles/frontpage.module.css'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function ProbeLektion (props) {

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
            type: 'string', duration: 2, bounce: 0.3

          },
          

        });

      }

      if(!inView){
        controls.start({opacity: 0});

      }
      

  }, [inView]);


	return (

		<>
			<div ref={ref} className={frontpageStyles.probe}>

			<motion.div animate={controls} className={frontpageStyles.probe1}>

        	<h2>SCHNUPPERNACHMITTAG</h2>
        	<p>Um einen Einblick in unsere Tanz- und Bewegungsstunde zu erhalten, 
        	biete ich Kindern ab 5 Jahren einen pädagogisch wertvollen Spielnachmittag. 
        	Jedes Kind darf zuerst kostenlos zum Schnuppernachmittag kommen. 
        	Der Kursraum befindet sich mitten in der Altstadt von Winterthur.
			   </p>


			</motion.div>
        	
        	<motion.div whileHover={{

              scale: 1.1,
              transition: {
                duration: .2
              }


            }} className={frontpageStyles.probe2}>

        	<Link href="/anmeldung">
			      <a><Image
			      src="/images/probelektion.png" // Route of the image file
			      height={400} // Desired size with correct aspect ratio
			      width={400} // Desired size with correct aspect ratio
			      alt="deintanz-logo"
			      /></a>
			      </Link>

			</motion.div>

      </div>{/*end element*/}


      <div className={frontpageStyles.tanzschulewrapper}>



      <div className={frontpageStyles.tanzschule}>
      <h2>Wichtige Fragen</h2>
      <br />
      <h3>Eine klassiche Tanzschule in Winterthur für Kinder?</h3>
      <p>Bei «Dein Tanz» kann Ihr Kind auf spielerische Weise die Vorzüge von Tanzen,
       Bewegen und Rhythmik lernen. Das Angebot ist keine klassische Tanzschule, vielmehr eine Möglichkeit für die Kinder, die Energie in die richtigen Bahnen zu lenken und spielerisch wichtige Fähigkeiten zu erlangen. Die Kinder lernen durch unsere Übungen auch den sozialen Umgang mit anderen Kindern.</p>
      <br />
      
      	<h3>Wann startet dieser Kinderkurs und wie alt muss mein Kind sein?</h3>
      <p>Ein Einstieg in den laufenden Kurs jeweils am Montagnachmittag ist jederzeit möglich. 
      In einer Probelektion begleite ich Ihr Kind für eine herzliche Aufnahme in die Gruppe. 
      Weitere Informationen zu unseren <Link href="/angebote">
      <a>Kursen für Kinder in Winterthur</a>
      </Link>.
      	</p>
      	<br />
      	<h3>Hygiene- und Verhaltensregeln: Wie schützen wir uns vor Corona?</h3>
      <p>Gemäss Beschluss der Behörden dürfen Kinder unter 12 Jahren ohne Masken zusammen tanzen und bewegen. 
      Während den Lektionen werde ich eine Maske tragen. Beim Bringen und Abholen der Kinder, bitte ich 
      die Eltern eine Maske zu tragen.
      	</p>
      	<br />
      </div>

       </div>{/*end element*/}

		</>

		)


}