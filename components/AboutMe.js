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
      <h2>Seinem K??rper vertrauen</h2>
        <p>Bei meinen eigenen Herausforderungen haben immer Bewegung, Tanz, die Musik, die Natur wie auch die 
        Menschen an meiner Seite eine wichtige Rolle gespielt. Im Laufe meines eigenen Entwicklungsprozesses habe ich gemerkt, 
        dass ich meiner Intuition und meinem K??rper vertrauen kann. Diese Erfahrungen haben mich ans integrativen <Link href="https://www.iac.ch/startseite">
           <a>Ausbildungszentrum iac</a>
            </Link> gef??hrt, zur Ausbildung als Tanz- und Bewegungstherapeutin.</p>
      
      </div>{/*end meitem2*/}

     </div>{/*end mewrapper*/}

    

      <div className={aboutmeStyles.mefull2}>

     <div className={aboutmeStyles.mefullbox2}>

     <div className={aboutmeStyles.mefullboxitem1}>
     <Image
          src="/images/iac-logo.png" // Route of the image file
          height={110} // Desired size with correct aspect ratio
          width={260} // Desired size with correct aspect ratio
          alt="Icon"
          className="roundedfull"

          />
        </div>

        <div className={aboutmeStyles.mefullboxitem2}>
       <p>Am richtigen Ort angekommen ist es mir eine Freude, mich Schritt 
        f??r Schritt auf dieses Berufsfeld zuzubewegen. Dass mein eigenes Projekt 
        ??Dein Tanz?? mich auf diesem Weg begleitet, erf??llt mich sehr. Meine Ausbildung in der Tanz- und Bewegungstherapie am iac bef??higt mich, die Bewegung und 
      der authentische Tanz als kreatives Ausdrucksmittel 
      f??r meine Kurse zu verwenden. <small>Quelle Bild: <Link href="https://www.iac.ch/startseite">
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
     	<p>Ich m??chte den Kindern und meinen zuk??nftigen Kunden einen Raum bieten, in dem sie sich entfalten und ganz sich selbst sein k??nnen in ihrer Einzigartigkeit. Ich er??ffne ihnen neue Erfahrungsr??ume, ihrem K??rper und ihrem Gef??hl zu vertrauen und Neues zu entdecken. 
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
		<h2>Meine Zukunftspl??ne</h2>
     	<p>Mein Ziel ist es, nach meiner Ausbildung eine eigene Praxis als Tanz- und Bewegungstherapeutin zu gr??nden, in welcher ich Menschen - von Kindern bis in hohe Alter - in ihren pers??nlichen Prozessen begleiten darf. Wo sie sich ganz idividuell durch Tanz und Bewegung ausdr??cken d??rfen um so einen besseren Zugang zu sich und ihren Gef??hlen zu finden, zur Ruhe kommen und neue Kraft sch??pfen.</p>
     	</motion.div>


      <motion.div animate={controls} className={aboutmeStyles.mebox2}>
        <Image
          src="/images/1.svg" // Route of the image file
          height={150} // Desired size with correct aspect ratio
          width={150} // Desired size with correct aspect ratio
          alt="Icon"
          className="roundedfull"

          />
    <h2>Tanz-und Bewegungstherapie ist f??r mich</h2>
      <p>Neue Ausdrucks- und Bewegungsformen ??ber den K??rper und die Imagination finden 
      und diese ins Bewusstsein kommen zulassen. Dadurch kann man alte Muster loslassen und 
      neue Wege gehen, neues pers??nliches Potenzial erkennen.
      Man kommt immer mehr in Einklang mit sich selbst und seinen Mitmenschen.</p>
      <br />
     <p className={aboutmeStyles.psmall}>"Tanztherapie ist k??nstlerische und k??rperorientierte Psychotherapie. Sie beruht auf dem Prinzip der Einheit und Wechselwirkung k??rperlicher, emotionaler, psychischer, kognitiver und sozialer Prozesse."
     <br /> Aus dem Buch, Grundlagen der Tanztherapie von Susanne Bender </p>

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


