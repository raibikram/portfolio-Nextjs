import React from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

function Home() {
  return (
    <>
      {/* Tree Illustration */}
      <div className="mb-12">
        <svg
          width="120"
          height="200"
          viewBox="0 0 120 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <line
            x1="60"
            y1="120"
            x2="60"
            y2="200"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M60 120 Q45 100 30 80 Q35 75 40 70 Q50 75 60 80 Q70 75 80 70 Q85 75 90 80 Q75 100 60 120"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M30 80 Q25 70 20 60 Q15 50 10 40 Q5 30 8 20 Q12 25 16 30 Q20 35 25 40 Q30 45 35 50 Q40 55 45 60 Q50 65 55 70 Q60 75 60 80"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M90 80 Q95 70 100 60 Q105 50 110 40 Q115 30 112 20 Q108 25 104 30 Q100 35 95 40 Q90 45 85 50 Q80 55 75 60 Q70 65 65 70 Q60 75 60 80"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <g stroke="currentColor" strokeWidth="0.5">
            <line x1="8" y1="20" x2="5" y2="15" />
            <line x1="8" y1="20" x2="12" y2="15" />
            <line x1="16" y1="30" x2="12" y2="25" />
            <line x1="16" y1="30" x2="20" y2="25" />
            <line x1="25" y1="40" x2="20" y2="35" />
            <line x1="25" y1="40" x2="30" y2="35" />
            <line x1="112" y1="20" x2="115" y2="15" />
            <line x1="112" y1="20" x2="108" y2="15" />
            <line x1="104" y1="30" x2="108" y2="25" />
            <line x1="104" y1="30" x2="100" y2="25" />
            <line x1="95" y1="40" x2="100" y2="35" />
            <line x1="95" y1="40" x2="90" y2="35" />
          </g>
        </svg>
      </div>

      <div className="mb-6">
        <h1 className="text-4xl md:text-6xl font-light mb-4">
          Hi, <span className="text-teal-400">Bikram</span> here.|
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 font-light">
          I create stuff sometimes.
        </h2>
      </div>

      <p className="text-gray-300 max-w-2xl mb-12 leading-relaxed text-sm md:text-base">
        I&apos;m a software engineer from Kathmandu, Nepal. I work with the MERN
        stack, Next.js, TypeScript, and PostgreSQL to build scalable, full-stack
        web applications. I&apos;m also learning and working with Docker, CI/CD,
        and Kubernetes to improve how things run in production. Always curious,
        always building.
      </p>

      <Button
        variant="outline"
        className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 bg-transparent px-8 py-3"
        onClick={() => window.open("mailto:raibikraminfo@gmail.com")}
      >
        <Mail className="w-4 h-4 mr-2" />
        Say hi!
      </Button>
    </>
  );
}

export default Home;
