import Image from 'next/legacy/image';
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
          <h1 className="mt-1 text-xs font-light text-gray-400">16 Jul 2024</h1>
        </div>
      </div>
      <h1 className="mt-1 w-fit rounded-full bg-[#495057] px-3 py-1 text-white">
        👨‍💻 Code explorer
      </h1>
      <h1 className="mt-4 text-xl font-bold sm:text-2xl">My Github</h1>
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
      <div className="mt-5 text-sm sm:text-base">
        You can visit my Github by clicking the picture above or the following
        link :{' '}
        <a
          href="https://github.com/AgustioMaitimu"
          className="text-[#CC0088]"
          target="_blank"
        >
          https://github.com/AgustioMaitimu
        </a>
      </div>
      <h1 className="mt-10 text-sm font-medium text-[#CC0088] sm:text-base">
        #GitHub #Portfolio #FrontEndDeveloper
      </h1>
    </Tweet>
  );
}

export default Github;
