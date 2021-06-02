import React from 'react'
import emailjs from 'emailjs-com';
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import anmeldungStyles from '../styles/anmeldung.module.css'


export default function AnmeldungForm() {

  const [submitted, setSubmitted] = React.useState(false);

  function sendEmail(e) {
    e.preventDefault();

  emailjs.sendForm("sandro_shd", "deintanz1", e.target, "user_qFh9QUNe6m8dcaGNVdD0x")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      },

      setSubmitted(true),


      );
      e.target.reset()
   


  }
  

  return (

  	<>


      <div className={anmeldungStyles.wrapper}>
        
          
      
          <div className={anmeldungStyles.anmeldeformular}>

            <div className={anmeldungStyles.anmeldeheader}>
              <h3>Anmeldeformular
          Tanz und Bewegungsstunde</h3> 

          <br />

          <p>Bevor Sie Ihr Kind anmelden, lesen Sie bitte die <Link href="#infos"><a>Anmeldeinformationen</a></Link>.</p>
          

            </div>  

                                

            <div className={anmeldungStyles.anmeldewrapper}>

            <form className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              

              <div class="row">
              <div class="col-25">
                  <label>Vorname*</label>
              </div>

              <div class="col-75">
                 <input type="text" name="vorname" required />
                </div>
                </div>


                <div class="row">
              <div class="col-25">
                 <label>Name*</label>
              </div>

              <div class="col-75">
                  <input type="text" name="name" required />
                </div>
                </div>

                <div class="row">
              <div class="col-25">
                 <label>E-Mail*</label>
              </div>

              <div class="col-75">
                   <input type="email" name="email" required />
                </div>
                </div>

                <div class="row">
              <div class="col-25">
                 <label>Telefon*</label>
              </div>

              <div class="col-75">
                   <input type="phone" name="telefon" required />
                </div>
                </div>


                <div class="row">
              <div class="col-25">
                 <label>Name/Vorname Kursteilnehmende*</label>
              </div>

              <div class="col-75">
                   <input type="text" name="kursteil" required />
                </div>
                </div>


                <div class="row">
              <div class="col-25">
                <label>Anzahl Kursteilnehmende*</label>
              </div>

              <div class="col-75">
                   <input type="text" name="anzahl" required />
                </div>
                </div>

                <div class="row">
              <div class="col-25">
                <label>Kursanmeldung*</label>
              </div>

              <div class="col-75">

                <label class="container">Montag 14:30 bis 15:30
                <input type="checkbox" name="kursanmeldung" value="Montag 14:30 bis 15:30" />
                <span class="checkmark"></span>
                </label>
                <br/>
                <label class="container">Ich habe Interesse an weiteren Terminen
                <input type="checkbox" name="interesse" value="Ich habe Interesse an weiteren Terminen" />
                <span class="checkmark"></span>
                </label>
                <br/>
                <label class="container">Schnuppernachmittag
                <input type="checkbox" name="schnupper" value="Schnuppernachmittag" />
                <span class="checkmark"></span>
                </label>
                </div>
                </div>
                

                        <div class="row">
              <div class="col-25">
                <label for="subject">Bemerkungen</label>
              </div>
              <div class="col-75">
                <textarea id="subject" name="bemerkungen"></textarea>
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                
              </div>
              <div class="col-75">
                <input type="submit" value="Anmelden" onSubmit={sendEmail} />
                {submitted && <h1 className={anmeldungStyles.h1success}>** Die Anmeldung war erfolgreich! Vielen Dank.</h1>}

              </div>

            
            </div>
             
            </form>






          </div>





          </div>

          <div id="infos" className={anmeldungStyles.anmeldeinfos}>
                
            <div className={anmeldungStyles.anmeldebox}>
              <h2>Allgemeine Informationen zur Anmeldung</h2>
              <br/>

              <div>
              <h3>Abrechnung</h3>
              <br />
              <p>Preis pro Quartal, CHF 145.00.</p>
              <p>Die Rechnung wird vor Quartalsbeginn per E-Mail versendet. Die Quartale werden wie folgt aufgeteilt:</p>
              <p>1. Quartal: Weihnachtsferien bis Frühlingsferien</p>
              <p>2. Quartal: Frühlingsferien bis Sommerferien
              </p>
              <p>3. Quartal: Sommerferien bis Herbstferien
            </p>
              <p>4. Quartal: Herbstferien bis Weihnachtsferien
            </p>
            </div>

            <br />

            <div>
            <h3>Kurseinstieg       
            </h3>
            <p>Ein Einstieg ist jederzeit möglich, die Rechung kann auch an kürzere Zeiträume als ein ganzes Quartal angepasst werden. Sie zahlen dann nur die effektive Zeit, in der Ihr Kind dabei war.
            </p>
            </div>

            <br />
            <div>
            <h3>Ferien</h3>
            <p>Während den Winterthurer Schulferien finden keine Kurse statt.</p>
            </div>
            <br />
            <div>
            <h3>Versicherung</h3>
            <p>Die Versicherung ist die Sache der Kursteilnehmenden. Bitte klären Sie alles Notwendige direkt mit Ihrer Versicherung ab.
            </p>
            </div>
            <br />
            <div>
            <h3>Absenzen</h3>
            <p>Allfällige Absenzen müssen der Kursleitung vorgängig mitgeteilt werden. 
            Für krankheitsbedingte Abwesenheit ab 3 Wochen kann gegen Vorlage eines ärztlichen Attests eine Gutschrift gewährt werden.</p>
            </div>
            <br />
            <div>
            <h3>Kursabmeldung</h3>
            <p>Eine Abmeldung vom Kurs ist bis 2 Wochen vor Quartalsende möglich, die Abmeldung muss schriftlich bei der Kursleitung eingehen.</p>
            </div>
            <br />
            <div>
            <h3>Datenschutz</h3>
            <p>Alle Ihre Daten werden absolut vertraulich behandelt und nicht an Dritte weitergegeben.</p>
            </div>


          </div>
       


  		</div>

      </div>

      </>
)

}


