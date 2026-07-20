import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight
} from "react-icons/fa";

import "./EventHero.css";


export default function EventHero(){

  return(

    <section className="eventHero">


      <div className="eventHeroGlow glow1"></div>
      <div className="eventHeroGlow glow2"></div>


      <div className="eventHeroContainer">


        {/* LEFT */}

        <motion.div

          className="eventHeroContent"

          initial={{
            opacity:0,
            x:-60
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:.8
          }}

          viewport={{
            once:true
          }}

        >


          <span className="eventBadge">
            🚀 Upcoming Events
          </span>



          <h1>

            Build.

            <br/>

            Compete.

            <br/>

            <span>Create.</span>

          </h1>



          <p>

            Discover workshops, hackathons, innovation challenges
            and community events designed to inspire the next
            generation of creators.

          </p>



          <div className="eventInfo">


            <div>

              <FaCalendarAlt />

              <span>
                25 July 2026
              </span>

            </div>



            <div>

              <FaMapMarkerAlt />

              <span>
                Yuvalay Makerspace
              </span>

            </div>



            <div>

              <FaUsers />

              <span>
                250+ Participants
              </span>

            </div>


          </div>



          <div className="eventButtons">


            <Link
              to="/contact"
              className="eventPrimary"
            >

              Register Now

              <FaArrowRight />

            </Link>



            <Link
              to="/gallery"
              className="eventSecondary"
            >

              Explore Memories

            </Link>


          </div>


        </motion.div>



        {/* RIGHT IMAGE */}


        <motion.div

          className="eventVisual"

          initial={{
            opacity:0,
            x:60
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:.8
          }}

          viewport={{
            once:true
          }}

        >


          <div className="eventImageCard">


            <img

              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200"

              alt="Yuvalay Event"

            />


          </div>



          <div className="floatingEventCard cardOne">

            <strong>
              15+
            </strong>

            <span>
              Mentors
            </span>

          </div>



          <div className="floatingEventCard cardTwo">

            <strong>
              2 Days
            </strong>

            <span>
              Innovation Sprint
            </span>

          </div>



          <div className="floatingEventCard cardThree">

            <strong>
              50+
            </strong>

            <span>
              Projects
            </span>

          </div>


        </motion.div>


      </div>


    </section>

  );

}