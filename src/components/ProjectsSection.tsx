import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';

type ProjectsProps = {
  theme: string;
};

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'A fully responsive e-commerce platform with cart functionality and payment integration.',
    image: 'https://images.pexels.com/photos/5077049/pexels-photo-5077049.jpeg',
    tags: ['React', 'Redux', 'Tailwind CSS', 'Node.js'],
    link: 'https://example.com/project1',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for organizing and tracking personal and team tasks.',
    image: 'https://images.pexels.com/photos/8391470/pexels-photo-8391470.jpeg',
    tags: ['React', 'TypeScript', 'Firebase'],
    link: 'https://example.com/project2',
  },
  {
    id: 3,
    title: 'Travel Blog',
    description: 'A beautiful blog for sharing travel experiences with a custom CMS for easy content management.',
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg',
    tags: ['Next.js', 'Sanity.io', 'Framer Motion'],
    link: 'https://example.com/project3',
  },
  {
    id: 4,
    title: 'Music Streaming App',
    description: 'A music player with playlist management and audio visualization features.',
    image: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg',
    tags: ['React', 'Web Audio API', 'Styled Components'],
    link: 'https://example.com/project4',
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'A weather application with real-time updates, forecasts, and location-based services.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
    tags: ['Vue.js', 'Weather API', 'Chart.js'],
    link: 'https://example.com/project5',
  },
  {
    id: 6,
    title: 'Portfolio Template',
    description: 'A customizable portfolio template for developers and designers to showcase their work.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://example.com/project6',
  },
];

const ProjectsSection: React.FC<ProjectsProps> = ({ theme }) => {
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  // Get all unique tags from projects
  const allTags = ['All', ...new Set(projectsData.flatMap(project => project.tags))];
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`py-20 ${
        theme === 'light'
          ? 'bg-gray-50 text-gray-800'
          : theme === 'dark'
          ? 'bg-gray-900 text-white'
          : theme === 'purple'
          ? 'bg-purple-950 text-white'
          : 'bg-emerald-950 text-white'
      }`}
    >
      <div 
        ref={contentRef}
        className="container mx-auto px-4 md:px-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div
            className={`h-1 w-20 mx-auto mb-8 ${
              theme === 'light'
                ? 'bg-blue-600'
                : theme === 'dark'
                ? 'bg-blue-500'
                : theme === 'purple'
                ? 'bg-purple-500'
                : 'bg-emerald-500'
            }`}
          ></div>
          <p className="text-lg">
            Here are some of my recent projects. Each one represents a unique challenge and solution.
          </p>
        </div>

        {/* Project filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? theme === 'light'
                    ? 'bg-blue-600 text-white'
                    : theme === 'dark'
                    ? 'bg-blue-500 text-white'
                    : theme === 'purple'
                    ? 'bg-purple-500 text-white'
                    : 'bg-emerald-500 text-white'
                  : theme === 'light'
                  ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  : theme === 'dark'
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : theme === 'purple'
                  ? 'bg-purple-800 text-white hover:bg-purple-700'
                  : 'bg-emerald-800 text-white hover:bg-emerald-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              theme={theme} 
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors ${
              theme === 'light'
                ? 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                : theme === 'dark'
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : theme === 'purple'
                ? 'bg-purple-800 hover:bg-purple-700 text-white'
                : 'bg-emerald-800 hover:bg-emerald-700 text-white'
            }`}
          >
            <span>View More on GitHub</span>
            <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;