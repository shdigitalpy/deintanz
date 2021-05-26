import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import textcenterStyles from '../styles/textcenter.module.css'

const p = 'Corona: Hygiene- und Verhaltensregeln'
const title = 'So schützen wir uns'
const p1 = 'Gemäss Beschluss der Behörden dürfen Kinder unter 12 Jahren ohne Masken zusammen tanzen und bewegen. Während den Lektionen werde ich eine Maske tragen.'
const p2 = 'Beim Bringen und Abholen der Kinder, bitte ich die Eltern eine Maske zu tragen.'


export default function TextCenter (props) {


	return (

		<>
			<div className={textcenterStyles.fpcorona}>
     	
     	<div>
     	<p>{props.p}</p><br />
     	<hr />
     	<br />
      	<h3>{props.title}</h3><br />
      	<p>{props.p1}</p>
      	<p>{props.p2}</p>
      	</div>
        

      </div>{/*end element*/}

		</>

		)


}