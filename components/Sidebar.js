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
        <Link href='/kursuebersicht'><a className={sidebarStyles.sidebarlink}>Kurse</a></Link>
        <Link href='/ueber-mich'><a className={sidebarStyles.sidebarlink}>Über mich</a></Link>
      </SidebarMenu>
      <SideBtnWrap>
        <Link href='/kontakt'><a className={sidebarStyles.sidebarbtn} >Kontakt</a></Link>
      </SideBtnWrap>
    </SidebarContainer>

  		 

      </>
)

}


