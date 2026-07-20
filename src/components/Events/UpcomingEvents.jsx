import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

import "./UpcomingEvents.css";


const categories = [
  "All",
  "Workshops",
  "Hackathons",
  "Competitions",
  "Community",
];


const events = [

  {
    title:"Robotics Bootcamp",
    category:"Workshops",
    date:"12 August 2026",
    location:"Yuvalay Makerspace",
    seats:"120 Seats",
    image:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200",
  },


  {
    title:"AI Innovation Hackathon",
    category:"Hackathons",
    date:"25 August 2026",
    location:"Vadodara",
    seats:"250 Seats",
    image:
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200",
  },


  {
    title:"Young Innovators Challenge",
    category:"Competitions",
    date:"05 September 2026",
    location:"Yuvalay Lab",
    seats:"180 Seats",
    image:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
  },


  {
    title:"Community Innovation Meet",
    category:"Community",
    date:"20 September 2026",
    location:"Vadodara",
    seats:"100 Seats",
    image:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200",
  },


];


export default function UpcomingEvents(){

  const [active,setActive]=useState("All");


  const filtered =
  active==="All"
  ?
  events
  :
  events.filter(
    item=>item.category===active
  );


  return(

    <section className="upcomingEvents">


      <div className="upcomingHeading">

        <span className="section-tag">
          Upcoming Events
        </span>


        <h2>
          Discover What's Happening
        </h2>


        <p>
          Explore workshops, competitions,
          hackathons and community programs
          happening at Yuvalay.
        </p>

      </div>



      <div className="eventFilters">

        {
          categories.map(item=>(

            <button
              key={item}
              className={
                active===item
                ?
                "active"
                :
                ""
              }
              onClick={()=>
                setActive(item)
              }
            >

              {item}

            </button>

          ))
        }

      </div>



      <div className="upcomingGrid">


        {
          filtered.map((event,index)=>(

            <motion.div

              className="upcomingCard"

              key={index}

              initial={{
                opacity:0,
                y:50
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:.5,
                delay:index*.1
              }}

              viewport={{
                once:true
              }}

            >


              <div className="upcomingImage">

                <img
                  src={event.image}
                  alt={event.title}
                />

                <span>
                  {event.category}
                </span>

              </div>



              <div className="upcomingContent">


                <h3>
                  {event.title}
                </h3>



                <div>

                  <FaCalendarAlt />

                  {event.date}

                </div>



                <div>

                  <FaMapMarkerAlt />

                  {event.location}

                </div>



                <div>

                  <FaUsers />

                  {event.seats}

                </div>



                <button>

                  Register

                  <FaArrowRight />

                </button>


              </div>


            </motion.div>


          ))
        }


      </div>


    </section>

  );

}