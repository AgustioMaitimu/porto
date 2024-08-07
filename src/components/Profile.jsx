'use client';

import Image from 'next/legacy/image';
import React from 'react';

function Profile() {
  return (
    <div className="z-10 flex w-full flex-col items-center">
      <div className="relative aspect-wide w-full max-w-[768px]">
        <Image
          alt="banner"
          src="/banner.gif"
          unoptimized
          layout="fill"
          className="object-cover"
          priority
        />
      </div>
      <div className="flex w-full max-w-[640px] items-end justify-between border-b-4 border-[#16191D] px-6 pb-4">
        <div className="relative -mt-[16.5%] aspect-square w-[33%] rounded-full border-4 border-white sm:-mt-[11%] sm:w-[22%]">
          <Image
            src="/profile.gif"
            unoptimized
            layout="fill"
            className="rounded-full object-cover"
            alt="profile pic"
          />
        </div>
        <a
          href="mailto:agustiomaitimu04@gmail.com"
          className="flex items-center rounded-full bg-[#CC0088] px-5 py-2 text-xs font-medium text-white md:text-base"
        >
          Message
          <div className="relative ml-2 aspect-square w-5">
            <Image
              alt="message"
              layout="fill"
              className="object-cover"
              src="/mail.svg"
            />
          </div>
        </a>
      </div>
      <div className="flex w-full max-w-[640px] flex-col gap-3 px-6 text-white">
        <h1 className="flex items-center gap-2 text-2xl font-semibold text-white">
          Agustio Maitimu{' '}
          <div className="relative h-6 w-6">
            <Image
              alt="verified"
              src="/verified.png"
              layout="fill"
              className="fill-white object-cover"
            />
          </div>
        </h1>
        <h1 className="text-gray-300">@tiothecreator</h1>
        <h1>Front-End Developer 💻</h1>
        <div className="flex flex-col">
          <h1 className="italic">
            Im not superstitious, but i am a little stitious
          </h1>
          <h1>- Michael Scott</h1>
        </div>
        <div className="flex w-full flex-wrap">
          <div className="mb-2 mr-6 flex items-center gap-2 text-sm">
            <div className="relative aspect-square w-5">
              <Image
                alt="info"
                src="/birthday.svg"
                layout="fill"
                className="object-cover"
              />
            </div>
            <h1>August 20th</h1>
          </div>
          <div className="mb-2 mr-6 flex items-center gap-2 text-sm">
            <div className="relative aspect-square w-5">
              <Image
                alt="info"
                src="/location.svg"
                layout="fill"
                className="object-cover"
              />
            </div>
            <h1>Ambon, Indonesia</h1>
          </div>
          <div className="mb-2 mr-6 flex items-center gap-2 text-sm">
            <div className="relative aspect-square w-5">
              <Image
                alt="info"
                src="/job.svg"
                layout="fill"
                className="object-cover"
              />
            </div>
            <h1>Available</h1>
          </div>
          <div className="mb-2 flex items-center gap-2 text-sm">
            <div className="relative aspect-square w-5">
              <Image
                alt="info"
                src="/calendar.svg"
                layout="fill"
                className="object-cover"
              />
            </div>
            <h1>Joined September 2023</h1>
          </div>
        </div>
        <div className="flex gap-7">
          <p>
            <span className="font-bold">
              {Math.floor(
                (new Date() - new Date('2004-08-20')) / (1000 * 60 * 60 * 24),
              ).toLocaleString()}
            </span>{' '}
            Days Lived
          </p>
          <p>
            <span className="font-bold">
              {Math.floor(
                (new Date() - new Date('2023-09-04')) / (1000 * 60 * 60 * 24),
              ).toLocaleString()}
            </span>{' '}
            Days Coded
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
