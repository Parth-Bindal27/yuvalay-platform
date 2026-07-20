import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import "./FeaturedEvent.css";


export default function FeaturedEvent(){

  return(

    <section className="featuredEvent">


      <div className="featuredContainer">


        {/* IMAGE */}

        <motion.div

          className="featuredImage"

          initial={{
            opacity:0,
            x:-50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:.7
          }}

          viewport={{
            once:true
          }}

        >

          <img

            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400"

            alt="Featured Event"

          />


          <div className="eventStatus">

            UPCOMING

          </div>


        </motion.div>




        {/* CONTENT */}


        <motion.div

          className="featuredContent"

          initial={{
            opacity:0,
            x:50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:.7
          }}

          viewport={{
            once:true
          }}

        >


          <span className="section-tag">
            Featured Event
          </span>



          <h2>

            AI & Robotics
            Innovation Challenge 2026

          </h2>



          <p>

            A two-day innovation sprint where students,
            creators and innovators collaborate to build
            technology solutions for real-world problems.

          </p>



          <div className="featuredDetails">


            <div>

              <FaCalendarAlt />

              <span>
                25 July 2026
              </span>

            </div>



            <div>

              <FaClock />

              <span>
                10:00 AM - 5:00 PM
              </span>

            </div>



            <div>

              <FaMapMarkerAlt />

              <span>
                Yuvalay Makerspace, Vadodara
              </span>

            </div>



            <div>

              <FaUsers />

              <span>
                250 Seats Available
              </span>

            </div>


          </div>



          <div className="eventCountdown">


            <div>

              <strong>
                12
              </strong>

              <span>
                Days
              </span>

            </div>


            <div>

              <strong>
                08
              </strong>

              <span>
                Hours
              </span>

            </div>


            <div>

              <strong>
                45
              </strong>

              <span>
                Minutes
              </span>

            </div>


          </div>




          <button className="registerButton">

            Register Now

            <FaArrowRight />

          </button>


        </motion.div>


      </div>


    </section>

  );

}