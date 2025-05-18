import React from 'react';
import { ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

type ProjectCardProps = {
  project: Project;
  theme: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, theme }) => {
  return (
    <div
      className={`group rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl ${
        theme === 'light'
          ? 'bg-white'
          : theme === 'dark'
          ? 'bg-gray-800'
          : theme === 'purple'
          ? 'bg-purple-900'
          : 'bg-emerald-900'
      }`}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t opacity-60 ${
              theme === 'light'
                ? 'from-black/70 to-transparent'
                : theme === 'dark'
                ? 'from-black/80 to-transparent'
                : theme === 'purple'
                ? 'from-purple-900/80 to-transparent'
                : 'from-emerald-900/80 to-transparent'
            }`}
          ></div>
          <div className="absolute bottom-0 left-0 p-6 z-10">
            <h3 className="text-xl text-white font-bold mb-2 group-hover:text-white">
              {project.title}
            </h3>
          </div>
          <div
            className={`absolute top-4 right-4 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${
              theme === 'light'
                ? 'bg-blue-600 text-white'
                : theme === 'dark'
                ? 'bg-blue-500 text-white'
                : theme === 'purple'
                ? 'bg-purple-500 text-white'
                : 'bg-emerald-500 text-white'
            }`}
          >
            <ExternalLink size={16} />
          </div>
        </div>
      </a>

      <div className="p-6">
        <p className="text-sm mb-4 opacity-80 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded-md ${
                theme === 'light'
                  ? 'bg-gray-200 text-gray-800'
                  : theme === 'dark'
                  ? 'bg-gray-700 text-gray-300'
                  : theme === 'purple'
                  ? 'bg-purple-800 text-purple-200'
                  : 'bg-emerald-800 text-emerald-200'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;