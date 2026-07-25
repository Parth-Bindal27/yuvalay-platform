import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollManager() {

    useEffect(() => {

        const tl = gsap.timeline({

            scrollTrigger:{

                trigger:".story-engine",

                start:"top top",

                end:"+=5000",

                scrub:1,

                pin:true,

                anticipatePin:1

            }

        });

        tl.to(".overlay h1",{

            opacity:0,

            y:-120,

            duration:1

        })

        .to(".overlay p",{

            opacity:0,

            y:-60,

            duration:.6

        },"<")

        .to(".chapter",{

            opacity:0,

            duration:.5

        },"<")

        .to(".scroll-indicator",{

            opacity:0,

            duration:.4

        },"<");

        return ()=>{

            ScrollTrigger.getAll().forEach(trigger=>trigger.kill());

        };

    },[]);

    return null;

}