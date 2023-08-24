import React from 'react'
import styles from '../styles/nav.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from './../components/Sidebar'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Nav ({toggle}) {


return <>
 
  <nav className={styles.nav}>

    <div className={styles.logo}>
    <Link href="/"  >
    
    <Image
    className={styles.link}
    src="/images/deintanz-logo.png" // Route of the image file
    height={68} // Desired size with correct aspect ratio
    width={331} // Desired size with correct aspect ratio
    alt="deintanz-logo"
    />
    
    </Link>
    </div>

    <div className={styles.menu}>

    <div className={styles.mainitem}><Link href="/kursuebersicht">
      Angebote
      
      </Link></div>

    
    <div className={styles.mainitem}><Link href="/ueber-mich">
      Über mich
      </Link></div>
      
    <div className={styles.mainitem}><Link href="/kontakt">
      Kontakt
      </Link></div>

    </div>

    <div className={styles.navicon}><GiHamburgerMenu onClick={toggle} /></div>

     </nav>

</>;
}