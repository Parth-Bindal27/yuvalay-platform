import { motion } from "framer-motion";
import {
  FaTrophy,
  FaUsers,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

import "./PastEvents.css";


const timeline = [

  {
    year:"2026",
    icon:<FaRocket />,
    title:"Innovation & Future Tech",
    events:[
      "AI Innovation Hackathon",
      "Robotics Bootcamp",
      "Advanced Makerspace Programs"
    ]
  },


  {
    year:"2025",
    icon:<FaTrophy />,
    title:"Growth & Recognition",
    events:[
      "Innovation Expo",
      "Student Competitions",
      "Technology Workshops"
    ]
  },


  {
    year:"2024",
    icon:<FaLightbulb />,
    title:"Building Innovation Culture",
    events:[
      "STEM Awareness Programs",
      "Prototype Development",
      "Community Innovation Meets"
    ]
  },


  {
    year:"2014",
    icon:<FaUsers />,
    title:"The Beginning",
    events:[
      "Foundation of Innovation Activities",
      "First Community Initiatives"
    ]
  }

];


export default function PastEvents(){

  return(

    <section className="pastEvents">


      <div className="pastHeading">

        <span className="section-tag">
          Our Journey
        </span>


        <h2>
          Moments That Built Us
        </h2>


        <p>
          A timeline of workshops, competitions,
          collaborations and innovation milestones.
        </p>

      </div>



      <div className="timeline">


        {
          timeline.map((item,index)=>(


            <motion.div

              className="timelineItem"

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
                duration:.6,
                delay:index*.15
              }}

              viewport={{
                once:true
              }}

            >


              <div className="timelineIcon">

                {item.icon}

              </div>



              <div className="timelineCard">


                <span>
                  {item.year}
                </span>


                <h3>
                  {item.title}
                </h3>


                <ul>

                  {
                    item.events.map((event,i)=>(

                      <li key={i}>
                        {event}
                      </li>

                    ))
                  }

                </ul>


              </div>


            </motion.div>


          ))
        }


      </div>


    </section>

  );

}