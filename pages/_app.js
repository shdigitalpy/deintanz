import '../styles/global.css'
import { motion } from 'framer-motion';
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import ScrollToTop from "react-scroll-to-top";
import { FiArrowUp } from 'react-icons/fi';


const progress = new ProgressBar({
  size: 2,
  color: "#ea5a56",
  className: "bar-of-progress",
  delay: 100,
});

const red = ({
  color: "#ea5a56",
})

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps, router }) {



  return (

    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1,
          transition: {
                duration: .2
              }
        },
      }}>
      
        <Component {...pageProps} />
        <ScrollToTop smooth component={<p style={{ color: "var(--white)", backgroundColor: "var(--red)" }}><FiArrowUp /></p>} />
      </motion.div>


    )
}