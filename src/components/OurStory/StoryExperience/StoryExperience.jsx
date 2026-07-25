import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ParticleCanvas from './ParticleCanvas';
import StoryUI from './StoryUI';
import ScrollIndicator from './ScrollIndicator';

import ChapterOneHero from './sections/ChapterOneHero';
import ChapterOneWorld from './sections/ChapterOneWorld';
import ChapterOneIndia from './sections/ChapterOneIndia';
import ChapterOneGujarat from './sections/ChapterOneGujarat';
import ChapterOneVadodara from './sections/ChapterOneVadodara';

gsap.registerPlugin(ScrollTrigger);

export default function StoryExperience() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isExploded, setIsExploded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.story-step');

      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            if (index === 1 && activeStep === 0) {
              // Trigger boom transition when scrolling from Hero to World
              setIsExploded(true);
              setTimeout(() => {
                setIsExploded(false);
                setActiveStep(index);
              }, 300);
            } else {
              setActiveStep(index);
            }
          },
          onEnterBack: () => setActiveStep(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeStep]);

  return (
    <div ref={containerRef} className="bg-black text-white relative min-h-screen font-sans selection:bg-emerald-500 selection:text-black">
      <ParticleCanvas activeStep={activeStep} isExploded={isExploded} />
      <StoryUI activeStep={activeStep} />
      <ScrollIndicator />

      <ChapterOneHero />
      <ChapterOneWorld />
      <ChapterOneIndia />
      <ChapterOneGujarat />
      <ChapterOneVadodara />
    </div>
  );
}