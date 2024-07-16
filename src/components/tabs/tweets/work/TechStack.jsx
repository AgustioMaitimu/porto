import Image from 'next/legacy/image';
import React from 'react';
import Tweet from '../Tweet';

function TechStack() {
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
          <h1 className="mt-1 text-xs font-light text-gray-400">16 Jul 2024</h1>
        </div>
      </div>
      <h1 className="mt-1 w-fit rounded-full bg-[#495057] px-3 py-1 text-white">
        🎨 Crafting
      </h1>
      <h1 className="mt-4 text-xl font-bold sm:text-2xl">Tech Stack</h1>
      <div className="mt-3 flex w-full items-center justify-start gap-2">
        <div className="relative aspect-square w-[12%]">
          <Image
            alt="tech"
            src="/html.svg"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square w-[12%]">
          <Image
            alt="tech"
            src="/css.svg"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square w-[12%]">
          <Image
            alt="tech"
            src="/javascript.svg"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square w-[12%]">
          <Image
            alt="tech"
            src="/tailwind.svg"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square w-[10%]">
          <Image
            alt="tech"
            src="/react.svg"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square w-[12%]">
          <Image
            alt="tech"
            src="/Next.js.png"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
      <h1 className="mt-3 text-sm sm:text-base">
        I use Tailwind CSS for its efficient utility-first styling approach.
      </h1>
      <h1 className="mt-3 text-sm sm:text-base">
        React enables me to create modular, reusable UI components and manage
        interactivity logic, ensuring dynamic user experiences.
      </h1>
      <h1 className="mt-3 text-sm sm:text-base">
        Next.js enhances performance with server-side rendering and efficient
        static site generation, optimizing both user experience and SEO.
      </h1>
      <h1 className="mt-10 text-sm font-medium text-[#CC0088] sm:text-base">
        #TailwindCSS #ReactJS #NextJS #FrontEndDevelopment #UIUX
      </h1>
    </Tweet>
  );
}

export default TechStack;
