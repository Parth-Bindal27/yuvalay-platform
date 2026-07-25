import React from 'react';
import MorphingParticles from './MorphingParticles';

export default function ParticleCanvas({ activeStep, isExploded }) {
  return <MorphingParticles activeStep={activeStep} isExploded={isExploded} />;
}