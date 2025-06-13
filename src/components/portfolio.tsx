"use client";

import { Mail, Github, Linkedin, PenTool } from "lucide-react";

import Link from "next/link";
import { useEffect, useState } from "react";
import Home from "./home";
import About from "./about";
import Experience from "./experience";
import Projects from "./projects";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-lg font-medium">
              Bikram Rai
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-sm transition-colors ${
                  activeSection === "home"
                    ? "text-teal-400"
                    : "hover:text-teal-400"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-sm transition-colors ${
                  activeSection === "about"
                    ? "text-teal-400"
                    : "hover:text-teal-400"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className={`text-sm transition-colors ${
                  activeSection === "experience"
                    ? "text-teal-400"
                    : "hover:text-teal-400"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`text-sm transition-colors ${
                  activeSection === "projects"
                    ? "text-teal-400"
                    : "hover:text-teal-400"
                }`}
              >
                Projects
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="mailto:raibikraminfo@gmail.com"
              className="hover:text-teal-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/raibikram"
              className="hover:text-teal-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/raibikraminfo"
              className="hover:text-teal-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://blogsbikram.vercel.app"
              className="hover:text-teal-400 transition-colors"
            >
              <PenTool className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>
      <div className="p-2">
        {/* Home Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center px-6 text-center pt-20 max-w-5xl mx-auto w-full"
        >
          <Home />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="flex items-center justify-center px-6 py-20 max-w-5xl mx-auto w-full"
        >
          <About />
        </section>
        {/* Experience Section */}
        <section
          id="experience"
          className=" flex items-center  justify-center px-6 py-20 max-w-5xl mx-auto w-full"
        >
          <Experience />
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="flex flex-col justify-center px-6 py-20 max-w-5xl mx-auto w-full"
        >
          <Projects />
        </section>
        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mb-10">
          <p>Built and designed by Bikram Rai.</p>
          <p>All rights reserved. ©</p>
        </div>
      </div>
    </div>
  );
}
