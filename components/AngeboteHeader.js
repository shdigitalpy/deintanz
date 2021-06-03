import Link from 'next/link'
import Head from 'next/head'
import angeboteStyles from '../styles/angebote.module.css'
import { motion } from "framer-motion"

const title = "Kurse"
const description = "Die Tanz- und Bewegungsstunden von «Dein Tanz» bieten Raum für Entfaltung. Hier darf man ganz sich selbst sein."


export default function AngeboteHeader(props) {

  return (



      <div className={angeboteStyles.angebote}>       
          <div className={angeboteStyles.angebotebox}>
       

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
       <h1>{props.title}</h1>
        <p>{props.description}</p>

        </motion.div>
        
      </div>

     </div>

      
)

}












