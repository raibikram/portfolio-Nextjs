import { ExternalLink, Folder, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { IProjectData } from "@/types/projectTypes";

const ProjectCard = ({
  title,
  description,
  stack,
  githubRepo,
  website,
}: IProjectData) => {
  return (
    <Card className="group bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-400/10 hover:-translate-y-1 backdrop-blur-sm">
      <CardContent className="p-6 relative overflow-hidden">
        {/* Subtle background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-teal-400/10 rounded-lg group-hover:bg-teal-400/20 transition-colors duration-300">
              <Folder className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex space-x-3">
              {githubRepo && (
                <a
                  href={githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-all duration-200 hover:scale-110"
                >
                  <Github className="w-4 h-4 text-gray-400 hover:text-white transition-colors duration-200" />
                </a>
              )}
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-all duration-200 hover:scale-110"
                >
                  <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white transition-colors duration-200" />
                </a>
              )}
            </div>
          </div>

          {/* <h3 className="text-md font-semibold mb-3 text-white group-hover:text-teal-100 transition-colors duration-300 leading-tight">
            {title}
          </h3> */}
          <h3 className="text-md font-semibold mb-2 text-white group-hover:text-teal-200 transition-colors duration-300 leading-snug tracking-tight font-lexend">
            {title}
          </h3>

          <p className="text-slate-300 text-sm mb-6 leading-relaxed line-clamp-3 group-hover:text-slate-200 transition-colors duration-300">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {stack.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-600/80 to-blue-600/80 text-blue-100 rounded-full border border-blue-500/20 hover:from-blue-500/80 hover:to-blue-600/80 hover:border-blue-400/30 transition-all duration-200 hover:scale-105 cursor-default backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
