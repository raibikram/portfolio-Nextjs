import { techStack } from "@/lib/data/techStack";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-light mb-12 text-left">
        {/* <span className="text-teal-400">/</span>  */}
        About Me
      </h2>
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-6">
          <p className="text-gray-300 leading-relaxed">
            I am currently a Software Developer at  &nbsp;
            <span className="text-teal-500 ">Nakshtra Techno Hub</span>, &nbsp;
            {/* working in the AWS sector under team Route 53. At the same time,
                I am undertaking a part-time Master&apos;s of Science in Software
                Engineering at */}
            {/* <span className="text-teal-400">University of Oxford</span>. */}
            working on building scalable web applications and improving deployment processes.
          </p>
          <div>
            <p className="text-gray-400 mb-4">
              Here are some technologies I have been working with:
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {techStack &&
                techStack.map((item, idx) => (
                  <div key={idx} className="flex items-center text-teal-400">
                    <span className="mr-2">▷</span>
                    {item}
                  </div>
                ))}
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {/* Outside of work, I&apos;m interested in following the developments
            of science. */}
           Outside of work, I enjoy exploring new ideas and experiences.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-80 bg-gradient-to-br from-teal-400/20 to-slate-700/20 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-teal-500/30 group relative">
            <Image
              src="/bikram.jpeg"
              alt="Profile"
              className="w-full h-full object-cover transition duration-300 group-hover:brightness-110 group-hover:contrast-110"
              width={400}
              height={400}
            />
            {/* Optional overlay glow */}
            <div className="absolute inset-0 rounded-lg bg-teal-400/10 opacity-0 group-hover:opacity-10 transition duration-300 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
