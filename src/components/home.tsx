import { Mail, Github, Linkedin, PenTool } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-lg font-medium">
            Bikram Rai
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm hover:text-teal-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm hover:text-teal-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/experience"
              className="text-sm hover:text-teal-400 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="text-sm hover:text-teal-400 transition-colors"
            >
              Projects
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="mailto:"
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
            href="https://linkedin.com/raibikraminfo"
            className="hover:text-teal-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-teal-400 transition-colors">
            <PenTool className="w-5 h-5" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
