import Image from 'next/legacy/image';
import React from 'react';
import Tweet from './tweets/Tweet';
import TechStack from './tweets/TechStack';
import Github from './tweets/Github';
import BigProjects from './tweets/BigProjects';
import SmallProjects from './tweets/SmallProjects';

function Work() {
  return (
    <div className="flex flex-col text-white">
      <TechStack />
      <Github />
      <BigProjects />
      <SmallProjects />
    </div>
  );
}

export default Work;
