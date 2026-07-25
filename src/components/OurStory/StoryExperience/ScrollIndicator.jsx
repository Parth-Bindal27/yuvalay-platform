import React from 'react';

export default function ScrollIndicator() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none text-xs font-mono text-gray-500 uppercase tracking-widest">
      <span>Scroll to begin</span>
      <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center p-1">
        <div className="w-1 h-2 bg-emerald-400 rounded-full animate-bounce" />
      </div>
    </div>
  );
}