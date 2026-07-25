import React from 'react';

export default function ChapterOneHero() {
  return (
    <section className="story-step h-screen flex flex-col justify-center items-center text-center px-4 relative z-10">
      <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4">
        CHAPTER 01
      </span>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
        Every Revolution <br />
        Begins With A <span className="text-emerald-400 underline decoration-emerald-500/50">Question</span>
      </h1>
      <p className="max-w-xl text-gray-400 text-lg">
        Every invention... every breakthrough... every idea that changed humanity... started with someone asking "What if?"
      </p>
    </section>
  );
}