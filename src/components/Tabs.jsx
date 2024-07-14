'use client';

import Image from 'next/image';
import React, { useState } from 'react';

function Tabs() {
  const [currentTab, setCurrentTab] = useState('About');

  return (
    <div className="mt-14 flex w-full max-w-[640px] flex-col px-4 pb-10">
      <div className="flex justify-around text-sm font-bold">
        {['Feed', 'Work', 'Contact', 'About'].map((x, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2"
              onClick={(e) => setCurrentTab(x)}
            >
              <h1
                className={`${currentTab == x ? 'text-white' : 'text-gray-400'} px-3 transition-all duration-300`}
              >
                {x}
              </h1>
              <div
                className={`${currentTab == x ? 'opacity-100' : 'opacity-0'} h-1 w-full rounded-full bg-[#af2a5d] transition-all duration-300`}
              ></div>
            </div>
          );
        })}
      </div>
      {currentTab == 'About' && (
        <div className="flex flex-col gap-2 pt-10 text-white">
          <h1 className="text-3xl font-bold text-[#af2a5d]">Tio.</h1>
          <p className=" mb-5">
            Hello! I&apos;m Agus<span className="text-[#af2a5d]">tio</span>{' '}
            Maitimu.
          </p>
          <p className="mb-5">
            I&apos;m a 20-year-old Information Systems student at Universitas
            Siber Asia, focusing on Front-End Development since 2023. At the
            beginning of 2023, after my second semester, I took a break to dive
            into pursuing front-end development full-time.
          </p>
          <p className="mb-5">
            My university program is fully online and part-time, allowing me
            ample time to pursue my passion for creating interactive, visually
            appealing digital experiences.
          </p>
          <p className="mb-5">
            I find joy in watching my code come to life as web applications and
            interacting with them firsthand. In my front-end journey, I&apos;ve
            been honing my skills with React on Next.js, styling projects with
            Tailwind CSS, and hosting them on Vercel.
          </p>
          <p className="mb-5">
            You can explore samples of my work in the Projects tab. I&apos;m
            eager to connect and collaborate, so feel free to reach out!
          </p>
          <p className="font-bold">Thank you for stopping by!</p>
        </div>
      )}
    </div>
  );
}

export default Tabs;
