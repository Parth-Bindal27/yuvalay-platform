import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

import "./MakerspaceFAQ.css";

const faqs = [
  {
    question: "Who can join Yuvalay Makerspace?",
    answer:
      "Students, schools, colleges, startups and innovation enthusiasts can become part of Yuvalay Makerspace.",
  },
  {
    question: "Do I need prior technical knowledge?",
    answer:
      "No. Beginners can start with basic workshops and gradually learn advanced technologies with mentor support.",
  },
  {
    question: "What equipment is available?",
    answer:
      "The makerspace includes robotics kits, electronics tools, IoT devices, 3D printers, prototyping equipment and more.",
  },
  {
    question: "Can schools organize visits?",
    answer:
      "Yes. Schools can arrange guided tours, demonstrations and hands-on innovation programs.",
  },
  {
    question: "Can I build my own project here?",
    answer:
      "Absolutely. Members can use available resources and get guidance to convert ideas into working prototypes.",
  },
  {
    question: "How can I register?",
    answer:
      "You can contact Yuvalay through the website or register for upcoming programs and events.",
  },
];


export default function MakerspaceFAQ(){

  const [active,setActive] = useState(null);


  return(

    <section className="makersFAQ">


      <div className="faqHeading">

        <span className="section-tag">
          FAQ
        </span>

        <h2>
          Frequently Asked Questions
        </h2>

        <p>
          Everything you need to know before starting
          your innovation journey at Yuvalay Makerspace.
        </p>

      </div>



      <div className="faqContainer">


        {
          faqs.map((item,index)=>(

            <motion.div
              className="faqItem"
              key={index}
              initial={{
                opacity:0,
                y:30
              }}
              whileInView={{
                opacity:1,
                y:0
              }}
              viewport={{
                once:true
              }}
            >


              <button
                onClick={()=> 
                  setActive(
                    active===index ? null : index
                  )
                }
              >

                <span>
                  {item.question}
                </span>


                {
                  active===index
                  ?
                  <FaMinus />
                  :
                  <FaPlus />
                }


              </button>



              <AnimatePresence>

              {
                active===index && (

                  <motion.div
                    className="faqAnswer"
                    initial={{
                      height:0,
                      opacity:0
                    }}
                    animate={{
                      height:"auto",
                      opacity:1
                    }}
                    exit={{
                      height:0,
                      opacity:0
                    }}
                  >

                    <p>
                      {item.answer}
                    </p>

                  </motion.div>

                )
              }

              </AnimatePresence>


            </motion.div>

          ))
        }


      </div>


    </section>

  );

}