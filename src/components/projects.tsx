import React from "react";
import ProjectCard from "./cards/ProjectCard";
import { projectData } from "@/lib/data/projectData";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto w-full">
      <h2 className="text-3xl md:text-4xl font-light mb-12 text-left">
        {/* <span className="text-teal-400">/</span>  */}
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
