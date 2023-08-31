import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import aboutmeStyles from '../styles/about.module.css'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from "framer-motion"


export default function BewegungsTherapie() {

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
  		<div className={aboutmeStyles.mefull2} style={{background:"white"}}>

     <div className={aboutmeStyles.mefullbox2}>

     <div className={aboutmeStyles.mefullboxitem1}>
   
       
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
        
        
      </div>{/*end meitem1*/}

      

     </div>{/*end mewrapper*/}

       </div> 




       <div className={aboutmeStyles.mefull2} style={{background: "linear-gradient(90deg, rgba(253,220,128,0.75) 34%, rgba(234,90,86,0.75) 60%), url(../public/images/iac.jpg)"}}>

     <div className={aboutmeStyles.mefullbox2}>

     <div className={aboutmeStyles.mefullboxitem1}>

       
       


        <h2>Für wen ist Tanz- und Bewegungstherapie</h2>
        <p>«Vielleicht fragst du dich: Muss ich tanzen können oder sportlich sein?»</p>
        <p>Nein, das musst du nicht. Tanz- und Bewegungstherapie ist für alle, die Körper, Bewegung und
        Kreativität nutzen wollen, um sich mit eigenen Themen auseinanderzusetzen.</p>
        <p>Es gibt kein Richtig oder Falsch in der Tanz- und Bewegungstherapie.</p>
        
       

        <br />
        

</div>{/*end meitem1*/}

      

     </div>{/*end mewrapper*/}



       </div> 

        <div className={aboutmeStyles.mefull3} style={{background: "white"}}>

     <div className={aboutmeStyles.mefullbox2} >
     <div className={aboutmeStyles.mefullboxitem2}>

       <h3>Was Tanz- und Bewegungstherapie bewirken kann:</h3>
       <br />
       <ul style={{ listStyle: 'none', paddingLeft: '20px',listStyle: "square inside"}}>
          <li style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '-20px' }}>•</span>
            Die eigenen Ressourcen über den Körper entdecken und stärken.
          </li>
          <li style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '-20px' }}>•</span>
            Zugang zu eigenen Gefühlen finden.
          </li>
          <li style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '-20px' }}>•</span>
            Selbstregulation entwickeln.
          </li>
          <li style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '-20px' }}>•</span>
            Prägungen und Muster erkennen.
          </li>
          <li style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '-20px' }}>•</span>
            Die eigenen Bedürfnisse besser wahrnehmen können.
          </li>
          <li style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '-20px' }}>•</span>
            Wieder mehr zu sich selbst finden.
          </li>
          <li style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '-20px' }}>•</span>
            Mehr Handlungsfähigkeit und Selbstvertrauen erlangen.
          </li>
        </ul>

        
    
    </div>

      </div>
     </div>{/*end aboutme full*/}


        <div className={aboutmeStyles.mefull4}>

     <div className={aboutmeStyles.mefullbox} style={{background: "linear-gradient(90deg, rgba(253,220,128,0.95) 34%, rgba(234,90,86,0.95) 60%), url(../public/images/iac.jpg)", padding:"3rem"}} >
     <h5>Wichtig ist nicht, wie wir uns bewegen, sondern was uns bewegt.
     </h5>
     <br />
       <h5>Trudi Schoop</h5>
     </div>
     </div>{/*end aboutme full*/}



    


      </>
)

}


