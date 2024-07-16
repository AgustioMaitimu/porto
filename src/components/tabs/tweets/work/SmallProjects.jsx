import React from 'react';
import Tweet from '../Tweet';

function SmallProjects() {
  return (
    <Tweet>
      <div className="flex items-center">
        <h1 className="mr-1">Tio</h1>
        <h1 className="mr-2">🎩</h1>
        <h1 className="mr-2 text-sm font-light text-gray-400">
          @tiothecreator
        </h1>
        <div className="flex items-center">
          <h1 className="mr-2 text-sm text-gray-400">•</h1>
          <h1 className="mt-1 text-xs font-light text-gray-400">15 Jul 2024</h1>
        </div>
      </div>
      <h1 className="mt-1 w-fit rounded-full bg-[#495057] px-3 py-1 text-white">
        🔧 Learning
      </h1>
      <h1 className="mt-4 text-xl font-bold sm:text-2xl">Learning Projects</h1>
      <p className="mt-3 text-sm sm:text-base">
        Showcasing My Journey Through The Small Projects I Made Along The Way.
      </p>
      <p className="mt-8 text-sm sm:text-base">Newest to Oldest</p>
      <div className="mt-3 text-sm sm:text-base">
        <a
          href="https://agustiomaitimu.github.io/strekker-site/"
          target="_blank"
          className="font-semibold text-[#CC0088] underline underline-offset-2"
        >
          Strekker
        </a>
        <p>
          A sleek and innovative kitchen appliance website inspired by
          Tesla&apos;s web design
        </p>
      </div>
      <div className="mt-4 text-sm sm:text-base">
        <a
          href="https://agustiomaitimu.github.io/synergix-solutions/"
          target="_blank"
          className="font-semibold text-[#CC0088] underline underline-offset-2"
        >
          Synergix
        </a>
        <p>
          A traditional landing page inspired by Atlassian&apos;s landing page
        </p>
      </div>
      <div className="mt-4 text-sm sm:text-base">
        <a
          href="https://agustiomaitimu.github.io/perform.it/"
          target="_blank"
          className="font-semibold text-[#CC0088] underline underline-offset-2"
        >
          Perform.it
        </a>
        <p>
          A To-Do web app created using ReactJS to practice Tailwind CSS,
          Optimized for mobile devices
        </p>
      </div>
      <div className="mt-4 text-sm sm:text-base">
        <a
          href="https://agustiomaitimu.github.io/yomo-note/"
          target="_blank"
          className="font-semibold text-[#CC0088] underline underline-offset-2"
        >
          Yomo Note
        </a>
        <p>
          A Note-taking web application created using ReactJS, emphasizing on
          responsive web design. Optimized for mobile devices
        </p>
      </div>
      <div className="mt-4 text-sm sm:text-base">
        <a
          href="https://agustiomaitimu.github.io/kalculator/"
          target="_blank"
          className="font-semibold text-[#CC0088] underline underline-offset-2"
        >
          Kalculator
        </a>
        <p>
          A Calculator Web App created using Plain JavaScript as an experiment
          in responsive web design. Optimized for most mobile devices
        </p>
      </div>
      <div className="mt-4 text-sm sm:text-base">
        <a
          href="https://agustiomaitimu.github.io/pixeler/"
          target="_blank"
          className="font-semibold text-[#CC0088] underline underline-offset-2"
        >
          Pixeler
        </a>
        <p>
          A Web Application for creating pixel art created using Plain
          JavaScript, Not optimized for mobile
        </p>
      </div>
      <h1 className="mt-10 text-sm font-medium text-[#CC0088] sm:text-base">
        #LearningProjects #FrontEndDevelopment
      </h1>
    </Tweet>
  );
}

export default SmallProjects;
