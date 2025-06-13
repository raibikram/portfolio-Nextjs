"use client";

import { experienceData } from "@/lib/data/experienceData";
import { useState } from "react";

export default function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-light mb-12 text-left">
        {/* <span className="text-teal-400">/</span> */}
         Experience
      </h2>

      <div className="hidden  sm:grid sm:grid-cols-5 gap-6">
        {/* Left column - Company names */}
        <div className="md:col-span-1 space-y-2 md:space-y-4">
          {experienceData.map((exp, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`text-left w-full p-3 rounded-lg transition-all duration-300 text-sm font-medium border-l-2 ${
                index === selectedIndex
                  ? "text-teal-400 bg-teal-400/10 border-teal-400"
                  : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/50 border-transparent hover:border-gray-600"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Right column - Experience details */}
        <div className="md:col-span-4 border-l border-teal-400/30 pl-6">
          <div className="h-auto">
            <div
              key={selectedIndex}
              className="animate-in fade-in duration-300"
            >
              <h3 className="text-xl md:text-2xl font-medium mb-2">
                {experienceData[selectedIndex].role} @{" "}
                <span className="text-teal-400">
                  {experienceData[selectedIndex].company}
                </span>
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                {experienceData[selectedIndex].duration}
              </p>

              <ul className="space-y-4">
                {experienceData[selectedIndex].highlights.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start group"
                    style={{
                      animationDelay: `${idx * 100}ms`,
                    }}
                  >
                    <span className="text-teal-400 mr-3 mt-1 transition-transform group-hover:translate-x-1">
                      ▷
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view - Stacked layout */}
      <div className="sm:hidden mt-8">
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border transition-all duration-300 ${
                index === selectedIndex
                  ? "border-teal-400/50 bg-teal-400/5"
                  : "border-gray-700 bg-gray-800/30"
              }`}
            >
              <button
                onClick={() => setSelectedIndex(index)}
                className="w-full text-left"
              >
                <h3 className="text-lg font-medium mb-1">
                  {exp.role} @{" "}
                  <span className="text-teal-400">{exp.company}</span>
                </h3>
                <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>
              </button>

              {index === selectedIndex && (
                <ul className="space-y-3 animate-in slide-in-from-top-2 duration-300">
                  {exp.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-teal-400 mr-2 mt-1">▷</span>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
