import Image from 'next/image';
import React from 'react';

function Tweet({ children }) {
  return (
    <div className="flex w-full border-b border-gray-800 px-4 py-5 first:border-t">
      <div>
        <div className="relative aspect-square w-10">
          <Image
            layout="fill"
            className="rounded-full object-cover"
            alt="profile picture"
            src="/profile.gif"
          />
        </div>
      </div>
      <div className="flex w-full flex-col pl-3">{children}</div>
    </div>
  );
}

export default Tweet;
