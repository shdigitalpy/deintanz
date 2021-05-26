import Link from 'next/link'
import Head from 'next/head'
import angeboteStyles from '../styles/angebote.module.css'

const title = "Kurse"
const description = "Die Tanz- und Bewegungsstunden von «Dein Tanz» bieten Raum für Entfaltung. Hier darf man ganz sich selbst sein."


export default function AngeboteHeader(props) {

  return (



      <div className={angeboteStyles.angebote}>       
          <div className={angeboteStyles.angebotebox}>
       <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>

     </div>

      
)

}












