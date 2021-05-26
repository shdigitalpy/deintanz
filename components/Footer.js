import styles from '../styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {FacebookIcon} from 'next-share'


export default function Footer () {

return (

  <>
    
    <div className={styles.footerwrapper}>
        
        <div className={styles.footerbox}>

          <Link href="/">
          <a><Image
          src="/images/deintanz-logo.png" // Route of the image file
          height={68} // Desired size with correct aspect ratio
          width={331} // Desired size with correct aspect ratio
          alt="Your Name"
          /></a>
          </Link>
        </div>{/*end footerbox*/}

        <div className={styles.footerbox}>

          <div>
          <p>Kontakt</p>
         <Link href="tel:+41 78 763 30 65">
          <a><p>+41 78 763 30 65</p></a>
          </Link>
          </div>
      
        </div>{/*end footerbox*/}

        <div className={styles.footerbox}>

          <div>
          <p>Auf Social Media</p>
          <Link href="https://www.facebook.com/regula.deintanz">
            <a target="_blank">
              <FacebookIcon size={32} round />
            </a>
            </Link>
            </div>
        </div>{/*end footerbox*/}

    </div>{/*end footerwrapper*/}
  
   

    </>


)
}