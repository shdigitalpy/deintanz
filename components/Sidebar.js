import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SideBtnWrap
} from './../components/SidebarElements';
import sidebarStyles from '../styles/sidebar.module.css'


export default function Sidebar({isOpen, toggle}) {

  return (

  	<>

      <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <Link href='/kursuebersicht'><span className={sidebarStyles.sidebarlink}>Angebote</span></Link>
        
        <Link href='/bewegungstherapie'><span className={sidebarStyles.sidebarlink}>Tanz- und Bewegungstherapie</span></Link>

        <Link href='/ueber-mich'><span className={sidebarStyles.sidebarlink}>Über mich</span></Link>
      </SidebarMenu>
      <SideBtnWrap>
        <Link href='/kontakt'>
        <span className={sidebarStyles.sidebarbtn}>Kontakt</span>
        </Link>
      </SideBtnWrap>
    </SidebarContainer>

  		 

      </>
)

}


