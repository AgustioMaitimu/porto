import React from 'react';

function About() {
  return (
    <div className="flex flex-col gap-2 border-y border-gray-800 px-4 py-10 text-white">
      <h1 className="text-3xl font-bold text-[#CC0088]">Tio.</h1>
      <p className=" mb-5">
        Hello! I&apos;m Agus<span className="text-[#CC0088]">tio</span> Maitimu.
      </p>
      <p className="mb-5">
        I am a 20-year-old Information Systems student at Universitas Siber
        Asia, focusing on Front-End Development since 2023. At the beginning of
        2024, after my second semester, I decided to take a break to fully
        immerse myself in front-end development.
      </p>
      <p className="mb-5">
        My university program is fully online and part-time, giving me the
        flexibility to pursue my passion for creating interactive and visually
        appealing digital experiences. While I have been studying programming
        for some time, I began focusing intensively on self-studying front-end
        development in September 2023.
      </p>
      <p className="mb-5">
        I find joy in seeing my code come to life as web applications and
        interacting with them firsthand. Throughout my front-end journey,
        I&apos;ve been honing my skills with React on Next.js, styling projects
        with Tailwind CSS, hosting them on GitHub Pages, and then on Vercel.
      </p>
      <p className="mb-5">
        You can explore samples of my work in the Projects tab. I&apos;m eager
        to connect and collaborate, so feel free to reach out!
      </p>
      <p className="font-bold">Thank you for stopping by!</p>
    </div>
  );
}

export default About;
