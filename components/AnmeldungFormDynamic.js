import React from 'react'
import emailjs from 'emailjs-com';
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import anmeldungStyles from '../styles/anmeldung.module.css'
import { RichText } from '@graphcms/rich-text-react-renderer';



export default function AnmeldungForm({ text_anmeldung, text_oben, text_unten, title }) {


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
              <h3>Anmeldeformular</h3> 

          <br />

          <p>{text_oben  ? text_oben : null}</p>
          

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

                <div style={{ display: text_anmeldung[0] ? "block" : "none"}}>
                 <label class="container">{ text_anmeldung ? text_anmeldung[0] : null }
                <input type="checkbox" name="kursanmeldung" value={title + ' <br>' + '<li>' + text_anmeldung[0] + '</li>' } />
                <span class="checkmark"></span>
                </label>    
                </div>        
                <br/>

                <div style={{ display: text_anmeldung[1] ? "block" : "none"}}>
                <label class="container">{ text_anmeldung ? text_anmeldung[1] : null }
                <input type="checkbox" name="interesse" value={' <br>' + '<li>' + text_anmeldung[1] + '</li>'} />
                <span class="checkmark"></span>
                </label>

                </div>



                <br/>

                   <div style={{ display: text_anmeldung[2] ? "block" : "none"}}>
                <label class="container">{ text_anmeldung ? text_anmeldung[2] : null }
                <input type="checkbox" name="kurs" value={' <br>' + '<li>' + text_anmeldung[2] + '</li>'} />
                <span class="checkmark"></span>
                </label>

                </div>

                <div style={{ display: text_anmeldung[3] ? "block" : "none"}}>
                <label class="container">{ text_anmeldung ? text_anmeldung[3] : null }
                <input type="checkbox" name="schnupper" value={' <br>' + '<li>' + text_anmeldung[3] + '</li>'} />
                <span class="checkmark"></span>
                </label>

                </div>

                <div style={{ display: text_anmeldung[4] ? "block" : "none"}}>
                <label class="container">{ text_anmeldung ? text_anmeldung[4] : null }
                <input type="checkbox" name="letztes" value={' <br>' + '<li>' + text_anmeldung[4] + '</li>'} />
                <span class="checkmark"></span>
                </label>

                </div>
                
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


              <RichText content={text_unten ? text_unten.raw : null } />
              


          </div>
       


      </div>

      </div>

      </>
)

}


