import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import aboutmeStyles from '../styles/about.module.css'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from "framer-motion"


export default function AboutMe() {

  const {ref, inView} = useInView({
      threshold: 0.2
  });

  const controls = useAnimation();

  useEffect(() => {

      console.log("use effect hook, inView = ", inView);

      if(inView){
        controls.start({
          
          x: 0,
          transition: {
            type: 'spring', duration: 2

          }

        });

      }

      if(!inView){
        controls.start({x: '-100vw'});

      }
      

  }, [inView]);
  

  return (

  	<>
  		<div className={aboutmeStyles.memain}>   

      <div className={aboutmeStyles.mewrapper}>       
       

       <div className={aboutmeStyles.meitem1}>
   
       <h2>Regula Leemann</h2>
        <p>Ich bin <b>Regula Leemann</b>, eine angehende Tanz- und Bewegungstherapeutin aus Winterthur und 
        selbst Mami von zwei Kindern. Mein Leben ist nicht immer nur geradlinig verlaufen, verschiedene 
        Herausforderungen habe ich erfolgreich gemeistert.</p>
        
        
      </div>{/*end meitem1*/}

      <div className={aboutmeStyles.meitem2}>
      <Image
          src="/images/regula-leemann.jpg" // Route of the image file
          height={350} // Desired size with correct aspect ratio
          width={350} // Desired size with correct aspect ratio
          alt="Regula Leemann"
          className="roundedfull"

          />
      
      </div>{/*end meitem2*/}

     </div>{/*end mewrapper*/}

     

     <div className={aboutmeStyles.mewrapper}>       
       

       <div className={aboutmeStyles.meitem1}>
   
       
       <Image
          src="/images/haende-kinder.jpg" // Route of the image file
          height={350} // Desired size with correct aspect ratio
          width={350} // Desired size with correct aspect ratio
          alt="Regula Leemann"
          className="roundedfull"

          />
        
        
        
      </div>{/*end meitem1*/}

      <div className={aboutmeStyles.meitem2}>
      <h2>Seinem Körper vertrauen</h2>
        <p>Bei meinen eigenen Herausforderungen haben immer Bewegung, Tanz, die Musik, die Natur wie auch die 
        Menschen an meiner Seite eine wichtige Rolle gespielt. Im Laufe meines eigenen Entwicklungsprozesses habe ich gemerkt, 
        dass ich meiner Intuition und meinem Körper vertrauen kann. Diese Erfahrungen haben mich ans integrativen <Link href="https://www.iac.ch/startseite">
           <a>Ausbildungszentrum iac</a>
            </Link> geführt, zur Ausbildung als Tanz- und Bewegungstherapeutin.</p>
      
      </div>{/*end meitem2*/}

     </div>{/*end mewrapper*/}

    

      <div className={aboutmeStyles.mefull2}>

     <div className={aboutmeStyles.mefullbox2}>

     <div className={aboutmeStyles.mefullboxitem1}>
     <Image
          src="/images/iac-logo.jpg" // Route of the image file
          height={110} // Desired size with correct aspect ratio
          width={260} // Desired size with correct aspect ratio
          alt="Icon"
          className="roundedfull"

          />
        </div>

        <div className={aboutmeStyles.mefullboxitem2}>
       <p>Am richtigen Ort angekommen ist es mir eine Freude, mich Schritt 
        für Schritt auf dieses Berufsfeld zuzubewegen. Dass mein eigenes Projekt 
        «Dein Tanz» mich auf diesem Weg begleitet, erfüllt mich sehr. Meine Ausbildung in der Tanz- und Bewegungstherapie am iac befähigt mich, die Bewegung und 
      der authentische Tanz als kreatives Ausdrucksmittel 
      für meine Kurse zu verwenden. <small>Quelle Bild: <Link href="https://www.iac.ch/startseite">
           <a>Ausbildungszentrum iac</a>
            </Link></small>
    </p>
    </div>
     </div>
     </div>{/*end aboutme full*/}

     

     <br />
      <br />

     <div ref={ref} className={aboutmeStyles.mewrapper2}>  

     <motion.div animate={controls} className={aboutmeStyles.mebox2}>
      <Image
          src="/images/1.svg" // Route of the image file
          height={150} // Desired size with correct aspect ratio
          width={150} // Desired size with correct aspect ratio
          alt="Icon"
          className="roundedfull"

          />
      
      
    </motion.div>

     <motion.div animate={controls} className={aboutmeStyles.mebox2}>
     	
     	<h2>Meine Philosophie</h2>
     	<p>Ich möchte den Kindern einen Raum bieten, in dem sie sich entfalten und ganz sich selbst sein können in ihrer Einzigartigkeit. Ich eröffne ihnen neue Erfahrungsräume, ihrem Körper und ihrem Gefühl zu vertrauen und Neues zu entdecken. 
		</p>
    </motion.div>

		 
		<motion.div animate={controls} className={aboutmeStyles.mebox2}>
      	<Image
          src="/images/2.svg" // Route of the image file
          height={150} // Desired size with correct aspect ratio
          width={150} // Desired size with correct aspect ratio
          alt="Icon"
          className="roundedfull"

          />
		<h2>Meine Zukunftspläne</h2>
     	<p>Mein Ziel ist es, nach meiner Ausbildung eine eigene Praxis als Tanz- und Bewegungstherapeutin zu gründen, in welcher ich Menschen - von Kindern bis in hohe Alter - in ihren persönlichen Prozessen begleiten darf. Wo sie sich ganz idividuell durch Tanz und Bewegung ausdrücken dürfen um so einen besseren Zugang zu sich und ihren Gefühlen zu finden, zur Ruhe kommen und neue Kraft schöpfen.</p>
     	</motion.div>


      </div>

       <div className={aboutmeStyles.mefull}>

     <div className={aboutmeStyles.mefullbox}>
     <h5>Der Mensch in seiner Einzigartigkeit fasziniert mich. 
     Bewegung, Tanz und Natur sind meine Energiequellen.
     </h5>
     <br />
       <h5>Regula Leemann</h5>
     </div>
     </div>{/*end aboutme full*/}

       </div> 

      </>
)

}


