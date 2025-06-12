"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Github,
  Linkedin,
  PenTool,
  ExternalLink,
  Folder,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20"
      >
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
            hi, <span className="text-teal-400">bikram</span> here.|
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 font-light">
            I create stuff sometimes.
          </h2>
        </div>

        <p className="text-gray-300 max-w-2xl mb-12 leading-relaxed text-sm md:text-base">
          I&apos;m a software engineer from Kathmandu, Nepal. I work with the
          MERN stack, Next.js, TypeScript, and PostgreSQL to build scalable,
          full-stack web applications. I&apos;m also learning and working with
          Docker, CI/CD, and Kubernetes to improve how things run in production.
          Always curious, always building.
        </p>

        <Button
          variant="outline"
          className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 bg-transparent px-8 py-3"
          onClick={() => window.open("mailto:raibikraminfo@gmail.com")}
        >
          <Mail className="w-4 h-4 mr-2" />
          Say hi!
        </Button>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-left">
            <span className="text-teal-400">/</span> about me
          </h2>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I am currently a Software Developer at{" "}
                <span className="text-teal-400">Nakshtra Techno Hub</span>,
                {/* working in the AWS sector under team Route 53. At the same time,
                I am undertaking a part-time Master&apos;s of Science in Software
                Engineering at */}
                {/* <span className="text-teal-400">University of Oxford</span>. */}
              </p>

              <div>
                <p className="text-gray-400 mb-4">
                  Here are some technologies I have been working with:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center text-teal-400">
                    <span className="mr-2">▷</span>TypeScript
                  </div>
                  <div className="flex items-center text-teal-400">
                    <span className="mr-2">▷</span> Reactjs
                  </div>
                  <div className="flex items-center text-teal-400">
                    <span className="mr-2">▷</span> Nextjs
                  </div>

                  <div className="flex items-center text-teal-400">
                    <span className="mr-2">▷</span> Java
                  </div>
                  <div className="flex items-center text-teal-400">
                    <span className="mr-2">▷</span> Postgres
                  </div>
                  <div className="flex items-center text-teal-400">
                    <span className="mr-2">▷</span> MongoDb
                  </div>
                  <div className="flex items-center text-teal-400">
                    <span className="mr-2">▷</span> Tawilwind
                  </div>
                  <div className="flex items-center text-teal-400">
                    <span className="mr-2">▷</span> Git
                  </div>
                  <div className="flex items-center text-teal-400">
                    <span className="mr-2">▷</span> Docker
                  </div>
                  <div className="flex items-center text-teal-400">
                    <span className="mr-2">▷</span> React Query
                  </div>
                  <div className="flex items-center text-teal-400">
                    <span className="mr-2">▷</span> Redis
                  </div>
                  <div className="flex items-center text-teal-400">
                    <span className="mr-2">▷</span> CI/CD
                  </div>
                  <div className="flex items-center text-teal-400">
                    <span className="mr-2">▷</span> web RTC & Socket-io
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Outside of work, I&apos;m interested in following the
                developments of science.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-64 h-80 bg-gradient-to-br from-teal-400/20 to-slate-700/20 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=320&width=256"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-left">
            <span className="text-teal-400">/</span> experience
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {/* Left column - Company names */}
            <div className="md:col-span-1 space-y-12">
              <div className="text-sm font-medium text-gray-300">AMAZON</div>
              <div className="text-sm font-medium text-gray-500">WATTPAD</div>
              <div className="text-sm font-medium text-gray-500">
                UNIVERSITY OF TORONTO
              </div>
              <div className="text-sm font-medium text-gray-500">
                CENTIVIZER
              </div>
              <div className="text-sm font-medium text-gray-500">
                ORANGE GATE
              </div>
            </div>

            {/* Right column - Experience details */}
            <div className="md:col-span-4 border-l border-teal-400/30 pl-6 space-y-12">
              {/* Amazon Experience */}
              <div>
                <h3 className="text-xl font-medium mb-1">
                  Software Development Engineer @{" "}
                  <span className="text-teal-400">Amazon</span>
                </h3>
                <p className="text-gray-500 text-sm mb-4">JUL 2022 - PRESENT</p>

                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-teal-400 mr-2">▷</span>
                    <p className="text-gray-300 text-sm">
                      Led development of end-to-end region build automation
                      across Route 53 (AWS&apos;s DNS web service). This enabled
                      the launch of customer-facing global services in new
                      regions within a day, a significant reduction from the
                      previous time-frame of a month.
                    </p>
                  </li>
                  <li className="flex">
                    <span className="text-teal-400 mr-2">▷</span>
                    <p className="text-gray-300 text-sm">
                      Re-built Route 53&apos;s core domain management and DNS
                      systems to provide a better user experience to millions of
                      customers.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Other experiences would go here, but are minimized for brevity */}
              <div className="opacity-50">
                <h3 className="text-xl font-medium mb-1">
                  Previous Experience
                </h3>
                <p className="text-gray-500 text-sm">
                  Details available upon request
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-left">
            <span className="text-teal-400">/</span> projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Project 1 */}
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-400/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-8 h-8 text-teal-400" />
                  <div className="flex space-x-2">
                    <Github className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer" />
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer" />
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">
                  TDSB Homework Management Interface
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  An application created for Toronto District School Board, with
                  a Flask back-end and a Vue front-end.
                </p>
                <div className="text-xs text-gray-500">
                  Python (Flask), Vue.js, Bootstrap, SQL
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-400/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-8 h-8 text-teal-400" />
                  <div className="flex space-x-2">
                    <Github className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer" />
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer" />
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">Adam A.I.</h3>
                <p className="text-gray-400 text-sm mb-4">
                  A self-learning A.I. that learns to traverse through a complex
                  maze using the genetic algorithm.
                </p>
                <div className="text-xs text-gray-500">
                  JavaScript, HTML / CSS
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-400/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-8 h-8 text-teal-400" />
                  <Github className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer" />
                </div>
                <h3 className="text-lg font-medium mb-2">
                  Distributed Logging and Monitoring System
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  A system that establishes an ORM connection to a Prisma client
                  in order to communicate logs from microservices.
                </p>
                <div className="text-xs text-gray-500">
                  Node.js (Express.js), React.js, PostgreSQL
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-400/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-8 h-8 text-teal-400" />
                  <Github className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer" />
                </div>
                <h3 className="text-lg font-medium mb-2">Odin Bot</h3>
                <p className="text-gray-400 text-sm mb-4">
                  A Telegram bot that helps you excel on your daily tasks
                  through Node NLP.
                </p>
                <div className="text-xs text-gray-500">
                  JavaScript, Node.js, Natural NLP, Telegram API
                </div>
              </CardContent>
            </Card>

            {/* Project 5 */}
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-400/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-8 h-8 text-teal-400" />
                  <Github className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer" />
                </div>
                <h3 className="text-lg font-medium mb-2">Game Centre</h3>
                <p className="text-gray-400 text-sm mb-4">
                  An Android app consisting of three board games, including
                  multiplayer, autosave, user authentication, etc.
                </p>
                <div className="text-xs text-gray-500">
                  Java, Android Studio
                </div>
              </CardContent>
            </Card>

            {/* Project 6 */}
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-400/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-8 h-8 text-teal-400" />
                  <Github className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer" />
                </div>
                <h3 className="text-lg font-medium mb-2">Minimax Stonehenge</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Two-player, zero-sum game with a strategic Minimax artificial
                  intelligence.
                </p>
                <div className="text-xs text-gray-500">Python</div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-500 text-sm">
            <p>Built and designed by Bikram Rai.</p>
            <p>All rights reserved. ©</p>
          </div>
        </div>
      </section>
    </div>
  );
}
