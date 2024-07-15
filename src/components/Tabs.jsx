'use client';

import Image from 'next/legacy/image';
import React, { useState } from 'react';
import About from './tabs/About';
import Work from './tabs/Work';
import Contact from './tabs/Contact';

function Tabs() {
  const [currentTab, setCurrentTab] = useState('Work');

  return (
    <div className="z-10 mt-12 flex w-full max-w-[640px] flex-col pb-32">
      <div className="flex justify-around text-sm font-bold">
        {['Feed', 'Work', 'Contact', 'About'].map((x, index) => {
          return (
            <div
              key={index}
              className="flex cursor-pointer flex-col gap-2"
              onClick={(e) => setCurrentTab(x)}
            >
              <h1
                className={`${currentTab == x ? 'text-white' : 'text-gray-400'} px-3 transition-all duration-300`}
              >
                {x}
              </h1>
              <div
                className={`${currentTab == x ? 'opacity-100' : 'opacity-0'} h-1 w-full rounded-full bg-[#CC0088] transition-all duration-300`}
              ></div>
            </div>
          );
        })}
      </div>
      {currentTab == 'About' && <About />}
      {currentTab == 'Work' && <Work />}
      {currentTab == 'Contact' && <Contact />}
    </div>
  );
}

export default Tabs;
