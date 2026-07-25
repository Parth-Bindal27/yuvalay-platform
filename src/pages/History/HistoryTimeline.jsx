import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import historyData from "./historyData";
import "./HistoryTimeline.css";

gsap.registerPlugin(ScrollTrigger);

export default function HistoryTimeline() {

    const wrapperRef = useRef(null);

    const sidebarRef = useRef(null);

    const progressRef = useRef(null);

    const slidesRef = useRef([]);

    const imageRefs = useRef([]);

    const headingRefs = useRef([]);

    const textRefs = useRef([]);

    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {

    const slides = slidesRef.current;

    const indicator = document.querySelector(".scroll-indicator");

    const ctx = gsap.context(() => {

        slides.forEach((slide, index) => {

            const image = imageRefs.current[index];
            const heading = headingRefs.current[index];
            const paragraphs = textRefs.current[index];

            ScrollTrigger.create({

                trigger: slide,

                start: "top top",

                end: "+=180%",

                pin: true,

                scrub: true,

                anticipatePin: 1,

                onEnter: () => setActiveSlide(index),

                onEnterBack: () => setActiveSlide(index)

            });

            gsap.fromTo(

                heading,

                {
                    y: 120,
                    opacity: 0
                },

                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {

                        trigger: slide,
                        start: "top center"

                    }

                }

            );

            gsap.fromTo(

                paragraphs,

                {
                    y: 60,
                    opacity: 0
                },

                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {

                        trigger: slide,
                        start: "top center"

                    }

                }

            );

            gsap.fromTo(

                image,

                {
                    scale: 1.25,
                    y: 120,
                    opacity: .25
                },

                {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    ease: "none",

                    scrollTrigger: {

                        trigger: slide,

                        start: "top bottom",

                        end: "bottom top",

                        scrub: true

                    }

                }

            );

        });

        // Sidebar Progress

        gsap.to(progressRef.current, {

            height: "100%",

            ease: "none",

            scrollTrigger: {

                trigger: wrapperRef.current,

                start: "top top",

                end: "bottom bottom",

                scrub: true

            }

        });

        // Scroll Indicator

        ScrollTrigger.create({

            trigger: wrapperRef.current,

            start: "top top",

            end: "+=150",

            onUpdate: (self) => {

                if (!indicator) return;

                gsap.to(indicator, {

                    opacity: self.progress > 0.15 ? 0 : 1,

                    y: self.progress > 0.15 ? 30 : 0,

                    duration: 0.35,

                    ease: "power2.out"

                });

            }

        });

    }, wrapperRef);

    return () => {

        ctx.revert();

        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    };

}, []);

    const scrollToSlide=(index)=>{

        slidesRef.current[index]?.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    }

    return(

        <section

            className="history-wrapper"

            ref={wrapperRef}

        >

            <aside

                className="history-sidebar"

                ref={sidebarRef}

            >

                <div className="sidebar-track">

                    <div

                        className="sidebar-progress"

                        ref={progressRef}

                    />

                </div>

                {

                    historyData.map((item,index)=>(

                        <button

                            key={item.id}

                            onClick={()=>scrollToSlide(index)}

                            className={`chapter-link ${activeSlide===index?"active":""}`}

                        >

                            <span className="chapter-dot"/>

                            <div>

                                <span className="chapter-year">

                                    {item.year}

                                </span>

                                <h4>

                                    {item.title}

                                </h4>

                            </div>

                        </button>

                    ))

                }

            </aside>

            <main className="history-main">

                {

                    historyData.map((item,index)=>(

                        <section

                            key={item.id}

                            className="story-slide"

                            ref={el=>slidesRef.current[index]=el}

                        >

                            <div className="story-inner">

                                <div className="story-left">

                                    <p className="watermark">

                                        {item.year}

                                    </p>

                                    <span className="chapter-no">

                                        {item.chapter}

                                    </span>

                                    <h1

                                        ref={el=>headingRefs.current[index]=el}

                                    >

                                        {item.title}

                                    </h1>

                                    <h2>

                                        {item.subtitle}

                                    </h2>
                                                                        <div
                                        className="story-image"
                                        ref={el=>imageRefs.current[index]=el}
                                    >

                                        <img

                                            src={item.image}

                                            alt={item.title}

                                        />

                                    </div>

                                </div>

                                <div className="story-right">

                                    <div className="story-text">

                                        {

                                            item.content.map((paragraph,i)=>(

                                                <p

                                                    key={i}

                                                    ref={el=>{

                                                        if(!textRefs.current[index]){

                                                            textRefs.current[index]=[];

                                                        }

                                                        textRefs.current[index][i]=el;

                                                    }}

                                                >

                                                    {paragraph}

                                                </p>

                                            ))

                                        }

                                    </div>

                                </div>

                            </div>

                        </section>

                    ))

                }

                <section className="story-end">

                        <h2>The Journey Continues</h2>

                        <p>
                            Every great story inspires another.
                            Explore Yuvalay and become a part of our mission.
                        </p>

                        <button
                            className="home-btn"
                            onClick={() => window.location.href = "/"}
                        >
                            Explore Yuvalay
                            <span>→</span>
                        </button>

                    </section>

                    

            </main>
<div className="scroll-indicator">

    <span>Scroll to Continue</span>

    <div className="mouse">

        <div className="wheel"></div>

    </div>

</div>
        </section>
        

    );

}