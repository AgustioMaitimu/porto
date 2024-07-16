import React from 'react';
import Tweet from '../Tweet';
import Image from 'next/legacy/image';

function TweetOne() {
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
          <h1 className="mt-1 text-xs font-light text-gray-400">17 Jul 2024</h1>
        </div>
      </div>
      <h1 className="mt-1 w-fit rounded-full bg-[#495057] px-3 py-1 text-white">
        📸 Snap!
      </h1>
      <p className="mt-4 text-sm sm:text-base">
        Hellooo~ i got nothing important to post here yet so... here&apos;s a
        picture of my mouse
      </p>
      <div className="relative mt-4 aspect-[3/1.8] w-full">
        <Image
          alt="picture"
          src="/post-1.jpg"
          layout="fill"
          className="rounded-2xl object-cover"
        />
      </div>
    </Tweet>
  );
}

export default TweetOne;
