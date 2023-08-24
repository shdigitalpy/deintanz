import styles from '../styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {SocialIcon} from 'react-social-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import kontaktStyles from '../styles/kontakt.module.css'


export default function Footer () {

return <>
  
  <div className={styles.footerwrapper}>
      
      <div className={styles.footerbox}>

        <Link href="/" legacyBehavior>
        <Image
        src="/images/deintanz-logo.png" // Route of the image file
        height={68} // Desired size with correct aspect ratio
        width={331} // Desired size with correct aspect ratio
        alt="Your Name"
        />
        </Link>
      </div>{/*end footerbox*/}

      <div className={styles.footerbox}>

        <div>
        <p>Kontakt</p>
        <Link href="mailto:regula@deintanz.ch" legacyBehavior>
        <p><FontAwesomeIcon className={styles.icon2} icon={faEnvelope} size="1x" />regula@deintanz.ch</p>
        </Link>
        
       
       <Link href="tel:+41 78 763 30 65" legacyBehavior>
        <p><FontAwesomeIcon className={styles.icon2} icon={faPhone} size="1x" />+41 78 763 30 65</p>
        </Link>

        </div>
        
    
      </div>{/*end footerbox*/}

      <div className={styles.footerbox}>

        <div>
        <p>Auf Social Media</p>
        
            <SocialIcon className={styles.socialicon} url="https://www.facebook.com/regula.deintanz" style={{ height: 30, width: 30}}/>
                    
            <SocialIcon className={styles.socialicon} url="https://www.instagram.com/dein_tanz/?hl=de" bgColor="#E1306C" style={{ height: 30, width: 30}} />
        
          </div>
      </div>{/*end footerbox*/}

  </div>{/*end footerwrapper*/}

 

  </>;
}