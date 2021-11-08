import Layout from './../components/layout'
import AngeboteHeader from './../components/AngeboteHeader'
import Head from 'next/head'
import Link from 'next/link'
import TextCenter from './../components/TextCenter'
import kontaktStyles from '../styles/kontakt.module.css'
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"
import styled from 'styled-components';
import { BsBoxArrowInUp } from "react-icons/bs";


const InfoIcon = styled(BsBoxArrowInUp)`
  font-size: 2rem;
`;


export default function Kontakt() {


	return (

		
		<Layout>
			
		<Head>
	     <title>Kontakt | Dein Tanz</title>
       <meta name="description" content="Nehmen Sie Kontakt auf mit Dein Tanz bei Fragen oder zur Anmeldung eines Kurses." />
	      </Head>


	

		<AngeboteHeader title="Kontakt" description="" />

	<motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .3,
                duration: 0.4,
              }
            },
          }}> 
          <TextCenter 

      p=""
      title="Habe ich Ihr Interesse geweckt?"
      p1="Wenn Sie Fragen zu meinen Angeboten haben oder eine Beratung wünschen, können Sie mich gerne per E-Mail oder per Telefon kontaktieren. Ich freue mich mit Ihren Kindern eine schöne Zeit verbringen zu dürfen."/>

      </motion.div>
      
       {/*end 1st element*/}


       <div className={kontaktStyles.kontakt}>
       		
       		<div className={kontaktStyles.kontaktbox}>
       			<FontAwesomeIcon className={kontaktStyles.icon} icon={faUser} size="3x" /><br />
       			<br /><br />
            <p>Regula Leemann</p>
       			<p>Tanz & Bewegung</p>
       		</div>

       		<div className={kontaktStyles.kontaktbox}>
       			<FontAwesomeIcon className={kontaktStyles.icon} icon={faEnvelope} size="3x" /><br />
       			<br /><br />
            <p>E-Mail</p>
       			<p><Link href="emailto:regula@deintanz.ch">
			      <a>regula@deintanz.ch</a>
			      </Link></p>
       		</div>

       		<div className={kontaktStyles.kontaktbox}>
       			<FontAwesomeIcon className={kontaktStyles.icon} icon={faPhone} size="3x" /><br />
       			<br /><br />
            <p>Telefon</p>
       			<p><Link href="tel:+41 78 763 30 65">
          <a><p>+41 78 763 30 65</p></a>
          </Link></p>
       		</div>

       </div>{/*end 2nd element*/}


       <div className={kontaktStyles.kontakt}>

      <Link href="/kursuebersicht">
          <a className={kontaktStyles.link}>Direkt zu den Kreativkursen Winterthur und Frauenfeld
       <InfoIcon /></a>
          </Link>
       
      </div>{/*end direkt zur anmeldung*/}


       <div className={kontaktStyles.maps}>

       	<div className={kontaktStyles.mapsbox}>

       		<h2>Kursort – Tanzraum Wildbach, Winterthur</h2>
       		<br />
       		<br /><br />
       		<Link href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.744275658368!2d8.729199215818019!3d47.49489490368089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a999eaf8ef463%3A0xb2544eb2cfee18f1!2sWildbachstrasse%207%2C%208400%20Winterthur!5e0!3m2!1sde!2sch!4v1636388881349!5m2!1sde!2sch">
          <a target="_blank"><p>Tanzraum Wildbach,  Wildbachstrasse 7, 8400 Winterthur</p></a>
          </Link>
          <br /><br />

          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.5529288930743!2d8.7272879!3d47.4986221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a999d7dbacc6d%3A0x3510abd421192aa7!2sHaus%20zum%20Widder!5e0!3m2!1sde!2sch!4v1622040282018!5m2!1sde!2sch"
              width="100%"
              height="300px"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"

            />
       		
       	</div>{/*end mapsbox*/}


        

       </div>{/*end 3rd element*/}


        <div className={kontaktStyles.maps}>

        <div className={kontaktStyles.mapsbox}>

          <h2>Kursort – Herzraum Yoga, 8500 Frauenfeld</h2>
          <br />
          <br /><br />
          <Link href="https://www.google.com/maps?q=Herzraum+Yoga,+Z%C3%BCrcherstrasse+34,+8500+Frauenfeld&rlz=1C1CHBF_deCH934CH934&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjR__iSmIn0AhWF26QKHah_C3YQ_AUoAXoECAEQAw">
          <a target="_blank"><p>Herzraum Yoga, Zürcherstrasse 34, 8500 Frauenfeld</p></a>
          </Link>
          <br /><br />

          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.8081122874046!2d8.877041815628646!3d47.55206327918113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a91ac7a6a840d%3A0x723c1d20023aa74d!2sHerzraum%20Yoga!5e0!3m2!1sde!2sch!4v1636389034628!5m2!1sde!2sch"
              width="100%"
              height="300px"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"

            />
          
        </div>{/*end mapsbox*/}


        

       </div>{/*end 4th element*/}


		

			</Layout>

		)


}