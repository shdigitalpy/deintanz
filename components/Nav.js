import styles from '../styles/nav.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav () {

return (

  <>
    
  
    <nav className={styles.nav}>

      <div className={styles.logo}>
      <Link href="/">
      <a><Image
      src="/images/deintanz-logo.png" // Route of the image file
      height={68} // Desired size with correct aspect ratio
      width={331} // Desired size with correct aspect ratio
      alt="Your Name"
      /></a>
      </Link>
      </div>

      <div className={styles.menu}>
    <div className={styles.mainitem}><Link href="/angebote">
      <a>Kurse</a>
      </Link></div>
    <div className={styles.mainitem}><Link href="/anmeldung">
      <a>Anmeldung</a>
      </Link></div>
    <div className={styles.mainitem}><Link href="/ueber-mich">
      <a>Über mich</a>
      </Link></div>
    <div className={styles.mainitem}><Link href="/kontakt">
      <a>Kontakt</a>
      </Link></div>


      </div>

       </nav>

    </>


)
}