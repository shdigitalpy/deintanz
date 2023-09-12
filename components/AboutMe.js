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
        <p>Ich bin Regula Leemann und wurde 1981 geboren. Zusammen mit meinen Kindern lebe ich in
          Winterthur. 2023 habe ich meine dreijährige Ausbildung zur ressourcenorientierten Tanz- und
          Bewegungstherapeutin am integrativen <a href="https://www.iac.ch/" target="_blank"> Ausbildungszentrum iac</a> abgeschlossen und befinde
          mich nun in der Aufbauausbildung zur prozessorientierten Tanz- und Bewegungstherapeutin.</p>

          <p>Mein Leben ist eine bewegte Reise, die immer wieder geprägt war von vielfältigen Stationen
          und Herausforderungen sowohl im Job als auch im Privaten. Auf dieser Reise unterstützt
          haben mich stets die Natur, die Musik, die Bewegung, die Kreativität sowie die Menschen an
          meiner Seite. Schon während meiner Ausbildung im Verkauf faszinierten mich die Menschen in
          ihrer Einzigartigkeit. Ich begann darüber nachzudenken, was Menschen bewegt und wie ihre
          Lebensgeschichten geformt wurden. Eigene persönliche Hürden verstärkten mein Interesse an
          der Psyche, den zwischenmenschlichen Beziehungen und dem Körper. Dies führte mich
          letztendlich zu meiner Ausbildung als Tanz- und Bewegungstherapeutin.</p>
        
        
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
      
        <p>Von Anfang an war ich von dieser Form der Therapie begeistert, da sie das Zusammenspiel
von Körper, Geist und Seele betont. Ich glaube daran, dass all unsere Erfahrungen und
Prägungen in unserem Körper gespeichert sind. Durch kreative Ausdrucksformen und
körperliche Arbeit konnte ich meine persönlichen und unbewussten Themen noch tiefer
erforschen und mich stetig weiterentwickeln.</p>
<p>Nun freue ich mich darauf, meine Erfahrungen weiterzugeben und Menschen auf ihrer eigenen
Reise zu begleiten. Es ist meine Leidenschaft, Menschen dabei zu unterstützen, ihre
körperliche und seelische Gesundheit zu fördern, innere Ressourcen zu entdecken und ihr
volles Potenzial zu entfalten. Gemeinsam schaffen wir einen Raum für Wachstum und Heilung.</p>
      
      </div>{/*end meitem2*/}

     </div>{/*end mewrapper*/}

    

      <div className={aboutmeStyles.mefullabout}>

     <div className={aboutmeStyles.mefullbox3}>

     <div className={aboutmeStyles.mefullboxitem1}>
     
        </div>

        <div className={aboutmeStyles.mefullboxitem2}>
       <h3>Ausbildungen</h3>
       <br />
        <p>2020 – 2023 ressourcenorientierte Tanz- und Bewegungstherapeutin, iac Integratives
          Ausbildungszentrum Zürich</p>    

          <br />
          <p>2022 – 2023 Medizinische Grundlagen MG2, Apamed Fachschule, Jona</p>    

          <br />
          <br />
          <h3>Weiterbildungen</h3>

          <br />
        <p>2023 KlientInnen- und Therapeutinnensicherheit MG3, Apamed Fachschule, Jona</p>    

          <br />
          <p>2022 Intensiv Modul «Malen und Bewegen», iac Integratives Ausbildungszentrum, Zürich</p>    

          <br />

           <p>2022 Kontaktimprovisation mit tanztherapeutischem Ansatz, iac Integratives Ausbildungszentrum, Zürich</p>    

          <br />

           <p>Ich besuche laufend, Lehrtherapie- und Supervisonsstunden und Weiterbildungen</p>    

          <br />
          <br />
          <h3>Berufliche Tätigkeiten</h3>

          <br />
        <p>Seit 2022, tätig als selbständige Tanz- und Bewegungstherapeutin im Alters- und Pflegeheim Casa
Solaris Kollbrunn</p>    

          <br />
          <p>Seit 2022 Selbständig bei, Dein Tanz, mit verschieden Gruppenangeboten für Kinder und Erwachsene</p>    

          <br />

        
    
    </div>

    
     </div>
     </div>{/*end aboutme full*/}

  

     <div ref={ref} className={aboutmeStyles.mewrapper2} style={{backgroundColor:"white", margin:"0", paddingTop:"5rem"}}>  

     <motion.div animate={controls} className={aboutmeStyles.mebox2} >
      <Image
          src="/images/1.svg" // Route of the image file
          height={150} // Desired size with correct aspect ratio
          width={150} // Desired size with correct aspect ratio
          alt="Icon"
          className="roundedfull"

          />
      
      
    </motion.div>

    <motion.div animate={controls} className={aboutmeStyles.mebox2} style={{ marginBottom: "10rem" }}>
  <h2>Meine Arbeitsweise</h2>
  <h3>Wie ich arbeite</h3>
  <br /><br />
  <b>Wertfrei für dich da</b><br />
  Als Tanz- und Bewegungstherapeutin schaffe ich einen wertfreien Raum, in dem du dich frei und ohne Wertung ausdrücken kannst. Ich arbeite auf Augenhöhe, höre aufmerksam zu und begleite dich authentisch.<br /><br />
  <b>Deine Freiheit, dein Tempo</b><br />
  Du bist einzigartig und dein Therapieprozess sollte es auch sein. Bei mir bestimmst du das Tempo. Ich bin hier, um dich auf deiner Reise zu unterstützen.<br /><br />
  <b>Empathie und Präsenz</b><br />
  Empathisch und präsent stehe ich dir zur Seite, um deine inneren Herausforderungen anzugehen.<br /><br />
  <b>Schweigepflicht</b><br />
  Als Therapeutin unterliege ich der Schweigepflicht. Deine Daten und Themen sind bei mir sicher.
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


