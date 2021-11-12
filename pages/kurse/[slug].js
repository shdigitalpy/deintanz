import Layout from './../../components/layout'
import {gql, GraphQLClient} from 'graphql-request'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from "framer-motion"
import AnmeldungFormDynamic from './../../components/AnmeldungFormDynamic'
import KurseSliderDynamic from './../../components/KurseSliderDynamic'
import TanzStundeDetailsDynamic from './../../components/TanzStundeDetailsDynamic'
import Image from 'next/image'



export const getServerSideProps = async (pageContext) => {

	const url = process.env.GRAPH_CMS_URL

	const graphQLClient = new GraphQLClient(url, {
      headers: {
        "Authorization" : `Bearer ${process.env.GRAPH_CMS_TOKEN}`
      }

  })

	const pageSlug = pageContext.query.slug

	const query = gql`
    query($pageSlug: String!) {
  
	    kurse (where: {slug: $pageSlug}) {
	    id
	    title
	    subtitle
	    
	    description
	    slug
      boxprice_all {
      raw
    }

	    persona
	   
	    wear
	    tanzstundeImage {
      	url
      
    	}
    	locationShort

    categoryValues
    what
    dateDescription {
      raw
    }
    standortes {
      adresse
      adresseLink
      name
    }
    boxFrauenfeldDaten {
      raw
    }

    sliderBilder {
      fileName
      url
      
    }

    anmeldeform_text_below {
      raw
    }
    anmeldeform_text
    anmeldeform_times

    rundesEinzelbild {
      url
      fileName
    }

    contact_text {
      raw
    }
    
	  }
	  
	  
	}  `


	const variables = {
		pageSlug,
	}

	const data = await graphQLClient.request(query, variables)
	const kurse = data.kurse

	return {

		props: {
			kurse

		}
	}

}




const Kurse = ({ kurse }) => {


	return (



		<>

  	<Layout>

		<Head>
      <title>{kurse.title}</title>
      <meta name="description" content={kurse.title} />
      
      <link rel="icon" href="/favicon.ico" />
      </Head>

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
      
      </motion.div>

      <TanzStundeDetailsDynamic 

      title={kurse.title} 
      subtitle={kurse.subtitle} 
      description={kurse.description}
      image={kurse.tanzstundeImage.url}
      loc_short={kurse.locationShort}
      was={kurse.what}
      zielgruppe={kurse.persona}
      date={kurse.dateDescription ? kurse.dateDescription.raw : null}
      kursraum={kurse.location}
      kursraum_url={kurse.urlLocation}
      boxprice_all={kurse.boxprice_all ? kurse.boxprice_all : null}
			kleidung={kurse.wear}
			datefrau={kurse.boxFrauenfeldDaten ? kurse.boxFrauenfeldDaten.raw : null}	
			standortes={kurse.standortes}
      rundesEinzelbild={kurse.rundesEinzelbild}
      contact_text={kurse.contact_text}
      />

      <KurseSliderDynamic images={kurse.sliderBilder} />

      


     <AnmeldungFormDynamic 
     text_oben={kurse.anmeldeform_text}
     text_unten={kurse.anmeldeform_text_below}
     text_anmeldung={kurse.anmeldeform_times}
     title={kurse.title}
      />

		</Layout>

  </>


		)

}

export default Kurse