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

  emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, process.env.USER_ID)
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

                <label class="container">Kurs in Frauenfeld von 14:30 Uhr bis 15:30 Uhr
                <input type="checkbox" name="kursanmeldung" value="Montag 14:30 bis 15:30 Uhr" />
                <span class="checkmark"></span>
                </label>            
                <br/>
                <label class="container">Kurs in Winterthur von 16:00 Uhr bis 17:00 Uhr
                <input type="checkbox" name="interesse" value="Kurs in Winterthur von 16:00 Uhr bis 17:00 Uhr" />
                <span class="checkmark"></span>
                </label>
                <br/>
                <label class="container">Schnuppernachmittag (kostenlos)
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
              <p>Preis pro Quartal, 6 x CHF 110.00.</p>
              <p>Die Rechnung wird vor Quartalsbeginn per E-Mail versendet. Die Quartale werden wie folgt aufgeteilt:</p>
              <p>1. Quartal: Weihnachtsferien bis Fr??hlingsferien</p>
              <p>2. Quartal: Fr??hlingsferien bis Sommerferien
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
            <p>Ein Einstieg ist jederzeit m??glich, die Rechung kann auch an k??rzere Zeitr??ume als ein ganzes Quartal angepasst werden. Sie zahlen dann nur die effektive Zeit, in der Ihr Kind dabei war.
            </p>
            </div>

            <br />
            <div>
            <h3>Ferien</h3>
            <p>W??hrend den Winterthurer Schulferien finden keine Kurse statt.</p>
            </div>
            <br />
            <div>
            <h3>Versicherung</h3>
            <p>Die Versicherung ist die Sache der Kursteilnehmenden. Bitte kl??ren Sie alles Notwendige direkt mit Ihrer Versicherung ab.
            </p>
            </div>
            <br />
            <div>
            <h3>Absenzen</h3>
            <p>Allf??llige Absenzen m??ssen der Kursleitung vorg??ngig mitgeteilt werden. 
            F??r krankheitsbedingte Abwesenheit ab 3 Wochen kann gegen Vorlage eines ??rztlichen Attests eine Gutschrift gew??hrt werden.</p>
            </div>
            <br />
            <div>
            <h3>Kursabmeldung</h3>
            <p>Eine Abmeldung vom Kurs ist bis 2 Wochen vor Quartalsende m??glich, die Abmeldung muss schriftlich bei der Kursleitung eingehen.</p>
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

