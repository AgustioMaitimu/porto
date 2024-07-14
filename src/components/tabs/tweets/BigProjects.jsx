import Image from 'next/image';
import React from 'react';
import Tweet from './Tweet';

function BigProjects() {
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
      <h1 className="mt-1 text-xl font-bold sm:text-2xl">Projects</h1>
      <p className="mt-2 text-sm sm:text-base">
        Diverse Projects Showcasing My Programming Knowledge
      </p>
      <a
        href="https://sqrel.vercel.app/"
        target="_blank"
        className="mt-8 text-lg font-semibold text-[#af2a5d] underline underline-offset-2"
      >
        Sqrel
      </a>
      <a
        href="https://sqrel.vercel.app/"
        target="_blank"
        className="relative mt-3 aspect-video w-full"
      >
        <Image
          alt="sqrel"
          src="/sqrel.png"
          layout="fill"
          className="rounded-2xl object-cover"
        />
      </a>
      <h1 className="mt-3 text-sm sm:text-base">
        Sqrel is a fictional single-page application with a visually appealing
        and user-friendly interface, demonstrating modern web technologies.
        Using design and assets from{' '}
        <a
          href="https://www.bauplanlabs.com/"
          className="text-[#af2a5d]"
          target="_blank"
        >
          Bauplan Labs
        </a>
        , it highlights my ability to create responsive layouts and integrate
        interactive elements for a cohesive user experience.
      </h1>
      <a
        href="https://tolodon.vercel.app/"
        target="_blank"
        className="mt-8 text-lg font-semibold text-[#af2a5d] underline underline-offset-2"
      >
        Tolodon
      </a>
      <a
        href="https://tolodon.vercel.app/"
        target="_blank"
        className="relative mt-3 aspect-video w-full"
      >
        <Image
          alt="tolodon"
          src="/tolodon.png"
          layout="fill"
          className="rounded-2xl object-cover"
        />
      </a>
      <h1 className="mt-3 text-sm sm:text-base">
        Sqrel is a fictional single-page application with a visually appealing
        and user-friendly interface, demonstrating modern web technologies.
        Using design and assets from{' '}
        <a
          href="https://www.bauplanlabs.com/"
          className="text-[#af2a5d]"
          target="_blank"
        >
          Bauplan Labs
        </a>
        , it highlights my ability to create responsive layouts and integrate
        interactive elements for a cohesive user experience.
      </h1>
    </Tweet>
  );
}

export default BigProjects;
