import React from 'react';

const CHAPTERS = [
  '01 The Spark',
  '02 The Problem',
  '03 A Vision',
  '04 Yuvalay',
  '05 Beyond Walls',
  '06 India',
  '07 The Future',
  '08 Finale',
];

export default function StoryUI({ activeStep }) {
  return (
    <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4 font-mono text-xs">
      {CHAPTERS.map((title, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-3 transition-colors duration-300 ${
            idx === activeStep ? 'text-emerald-400 font-bold' : 'text-gray-600'
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === activeStep ? 'bg-emerald-400 shadow-[0_0_8px_#00ff88]' : 'bg-gray-700'
            }`}
          />
          <span>{title}</span>
        </div>
      ))}
    </aside>
  );
}