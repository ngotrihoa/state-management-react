import chroma from 'chroma-js';
import React from 'react';

interface BoxStatusProps {
  children: React.ReactNode;
  color?: string;
}

const BoxStatus: React.FC<BoxStatusProps> = ({ children, color = 'gray' }) => {
  const chromaColor = chroma(color);
  return (
    <div
      style={{
        backgroundColor: chromaColor.alpha(0.1).css(),
        color: chromaColor.css(),
        borderColor: chromaColor.alpha(0.4).css(),
      }}
      className={`border bg-opacity-10 px-[6px] py-[3px] text-sm capitalize rounded-sm`}
    >
      {children}
    </div>
  );
};

export default BoxStatus;
