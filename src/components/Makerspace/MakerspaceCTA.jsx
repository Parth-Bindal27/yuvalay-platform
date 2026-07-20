import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaRocket,
} from "react-icons/fa";

import "./MakerspaceCTA.css";


export default function MakerspaceCTA(){

  return(

    <section className="makersCTA">


      <div className="ctaGlow glowOne"></div>
      <div className="ctaGlow glowTwo"></div>


      <motion.div
        className="makersCTABox"

        initial={{
          opacity:0,
          y:60
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:.7
        }}

        viewport={{
          once:true
        }}
      >


        <div className="ctaRocket">

          <FaRocket />

        </div>



        <span className="section-tag">
          Start Building Today
        </span>



        <h2>
          Ready To Build
          Something Amazing?
        </h2>



        <p>
          Join Yuvalay Makerspace and transform your
          ideas into real-world innovations with
          technology, tools and expert mentorship.
        </p>



        <div className="ctaActions">


          <Link
            to="/contact"
            className="ctaPrimary"
          >

            Book A Visit

            <FaArrowRight />

          </Link>



          <Link
            to="/donate"
            className="ctaSecondary"
          >

            Become A Member

          </Link>


        </div>


      </motion.div>


    </section>

  );

}