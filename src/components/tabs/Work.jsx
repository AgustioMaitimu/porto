import Image from 'next/legacy/image';
import React from 'react';
import Tweet from './tweets/Tweet';
import TechStack from './tweets/work/TechStack';
import Github from './tweets/work/Github';
import BigProjects from './tweets/work/BigProjects';
import SmallProjects from './tweets/work/SmallProjects';

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
