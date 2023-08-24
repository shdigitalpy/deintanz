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
        <Link className={sidebarStyles.sidebarlink} href='/kursuebersicht'>Kurse</Link>
        
        <Link className={sidebarStyles.sidebarlink} href='/ueber-mich'>Über mich</Link>
      </SidebarMenu>
      <SideBtnWrap>
        <Link className={sidebarStyles.sidebarbtn} href='/kontakt'>Kontakt</Link>
      </SideBtnWrap>
    </SidebarContainer>

  		 

      </>
)

}


