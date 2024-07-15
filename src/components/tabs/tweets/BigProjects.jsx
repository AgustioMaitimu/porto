import Image from 'next/legacy/image';
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
      <h1 className="mt-1 w-fit rounded-full bg-[#495057] px-3 py-1 text-white">
        🚀 Showcasing creativity
      </h1>
      <div className="mt-4">
        <h1 className="text-xl font-bold sm:text-2xl">Projects</h1>
        <p className="mt-2 text-sm sm:text-base">
          Diverse Projects Showcasing My Programming Knowledge
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-5">
        <a
          href="https://sqrel.vercel.app/"
          target="_blank"
          className="text-lg font-semibold text-[#CC0088] underline underline-offset-2"
        >
          Sqrel
        </a>
        <div className="relative  aspect-video w-full">
          <Image
            alt="sqrel"
            src="/sqrel.png"
            layout="fill"
            className="rounded-2xl object-cover"
          />
        </div>
        <p className=" text-sm sm:text-base">
          Sqrel is a fictional single-page application with a visually appealing
          and user-friendly interface, demonstrating modern web technologies.
          Using design and assets from{' '}
          <a
            href="https://www.bauplanlabs.com/"
            className="text-[#CC0088]"
            target="_blank"
          >
            Bauplan Labs
          </a>
          , it highlights my ability to create responsive layouts and integrate
          interactive elements for a cohesive user experience.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-5">
        <a
          href="https://tolodon.vercel.app/"
          target="_blank"
          className="text-lg font-semibold text-[#CC0088] underline underline-offset-2"
        >
          Tolodon
        </a>
        <div className="relative  aspect-video w-full">
          <Image
            alt="tolodon"
            src="/tolodon.png"
            layout="fill"
            className="rounded-2xl object-cover"
          />
        </div>
        <p className="text-sm sm:text-base">
          Tolodon is a conceptual commerce site that blends aesthetic with
          practicality. Leveraging design and assets from{' '}
          <a
            href="https://kioskodemo.wpcomstaging.com/"
            className="text-[#CC0088]"
            target="_blank"
          >
            Kiosko Demo
          </a>
          , it showcases my expertise in replicating intricate front-end
          designs.
        </p>
        <p className="text-sm sm:text-base">
          The site features distinct sections for store, product details, about,
          blog, and login, illustrating my capability in crafting responsive,
          multi-page applications.
        </p>
      </div>
      <h1 className="mt-10 text-sm font-medium text-[#CC0088] sm:text-base">
        #Sqrel #FrontEndDesign #Tolodon #CommerceSite
      </h1>
    </Tweet>
  );
}

export default BigProjects;
