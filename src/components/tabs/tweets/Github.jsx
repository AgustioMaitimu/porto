import Image from 'next/image';
import React from 'react';
import Tweet from './Tweet';

function Github() {
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
      <h1 className="mt-1 text-xl font-bold sm:text-2xl">My Github</h1>
      <a
        href="https://github.com/AgustioMaitimu"
        target="_blank"
        className="relative mt-4 aspect-video w-full"
      >
        <Image
          alt="github"
          src="/github.png"
          layout="fill"
          className="rounded-2xl object-cover"
        />
      </a>
      <div className="mt-2 text-sm sm:text-base">
        You can visit my Github by clicking the picture above or the following
        link :{' '}
        <a
          href="https://github.com/AgustioMaitimu"
          className="text-[#af2a5d]"
          target="_blank"
        >
          https://github.com/AgustioMaitimu
        </a>
      </div>
    </Tweet>
  );
}

export default Github;
