import Image from 'next/legacy/image';
import React from 'react';

function Background() {
  return (
    <div className="fixed -bottom-[20vh] -right-[24vh] aspect-square h-[60vh]">
      <Image
        alt="background"
        layout="fill"
        className="object-cover"
        src="/background.svg"
      />
    </div>
  );
}

export default Background;
