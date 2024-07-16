import React from 'react';
import Tweet from '../Tweet';
import Image from 'next/legacy/image';

function ContactInfo() {
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
        📬 Get in touch
      </h1>
      <h1 className="mt-4 text-xl font-bold sm:text-2xl">Contact Info</h1>
      <p className="mt-3 text-sm sm:text-base">
        If you need to reach me, use the message button on the profile or reach
        out through :
      </p>
      <div className="mt-4 flex flex-col gap-3 text-sm sm:text-base">
        <div className="relative flex items-center gap-3">
          <div className="relative aspect-square w-6">
            <Image
              alt="contact"
              layout="fill"
              className="object-cover"
              src="/email.svg"
            />
          </div>{' '}
          agustiomaitimu04@gmail.com
        </div>
        <div className="relative flex items-center gap-2">
          <div className="relative aspect-square w-7">
            <Image
              alt="contact"
              layout="fill"
              className="object-cover"
              src="/phone.svg"
            />
          </div>{' '}
          +62 813 4304 1308
        </div>
        <div className="relative flex items-center gap-3">
          <div className="relative aspect-square w-6">
            <Image
              alt="contact"
              layout="fill"
              className="object-cover"
              src="/instagram.svg"
            />
          </div>{' '}
          @vanilla_paracetamol (personal)
        </div>
      </div>
      <h1 className="mt-10 text-sm font-medium text-[#CC0088] sm:text-base">
        #ContactMe #Email #Phone #SocialMedia
      </h1>
    </Tweet>
  );
}

export default ContactInfo;
