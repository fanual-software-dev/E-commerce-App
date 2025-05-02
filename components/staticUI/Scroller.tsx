'use client';

import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

const items = ['TANK TOP', 'T-SHIRT', 'LONG-SLEEVE T-SHIRT', 'RAGLAN-SLEEVE T-SHIRT', 'CROP-TOP', 'V-NECK SHIRT', 'PACKOUTS', 'TROUSERS', 'JACKETS'];

function Scroller() {
  const repeatedItems = [...items, ...items]; // for seamless loop

  return (
    <div className="overflow-hidden hidden sm:block w-full py-4 border-y-2 border-dashed border-[#171717]">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: ['0%', '-50%'], // move half way to left
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 20, // speed of scroll
        }}
      >
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="text-2xl "
          >
            <p className='flex gap-2 items-center text-lg text-[#676665]'><Sun size={18}/> {item}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}



export default Scroller
