import React, { useEffect, useRef } from 'react';

type SkillsSectionProps = {
  theme: string;
};

type Skill = {
  name: string;
  level: number; // 0-100
};

const frontendSkills: Skill[] = [
  { name: 'HTML & CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 88 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 92 },
];

const designSkills: Skill[] = [
  { name: 'Figma', level: 90 },
  { name: 'Adobe XD', level: 85 },
  { name: 'UI Design', level: 88 },
  { name: 'UX Research', level: 80 },
  { name: 'Prototyping', level: 87 },
];

const otherSkills: Skill[] = [
  { name: 'Node.js', level: 75 },
  { name: 'Git & GitHub', level: 88 },
  { name: 'RESTful APIs', level: 85 },
  { name: 'Responsive Design', level: 95 },
  { name: 'Performance Optimization', level: 80 },
];

const SkillsSection: React.FC<SkillsSectionProps> = ({ theme }) => {
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

  const getThemeColors = (theme: string) => {
    switch (theme) {
      case 'light':
        return { bar: 'bg-blue-600', bg: 'bg-gray-200' };
      case 'dark':
        return { bar: 'bg-blue-500', bg: 'bg-gray-700' };
      case 'purple':
        return { bar: 'bg-purple-500', bg: 'bg-purple-800' };
      case 'emerald':
        return { bar: 'bg-emerald-500', bg: 'bg-emerald-800' };
      default:
        return { bar: 'bg-blue-600', bg: 'bg-gray-200' };
    }
  };

  const colors = getThemeColors(theme);

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm opacity-80">{skill.level}%</span>
      </div>
      <div className={`w-full h-2 ${colors.bg} rounded-full overflow-hidden`}>
        <div
          className={`h-full ${colors.bar} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-20 ${
        theme === 'light'
          ? 'bg-white text-gray-800'
          : theme === 'dark'
          ? 'bg-gray-800 text-white'
          : theme === 'purple'
          ? 'bg-purple-900 text-white'
          : 'bg-emerald-900 text-white'
      }`}
    >
      <div 
        ref={contentRef}
        className="container mx-auto px-4 md:px-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
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
            Here's a comprehensive overview of my technical skills and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div
            className={`p-6 rounded-xl ${
              theme === 'light'
                ? 'bg-gray-50'
                : theme === 'dark'
                ? 'bg-gray-700'
                : theme === 'purple'
                ? 'bg-purple-800'
                : 'bg-emerald-800'
            }`}
          >
            <h3 className="text-xl font-bold mb-6 text-center">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          <div
            className={`p-6 rounded-xl ${
              theme === 'light'
                ? 'bg-gray-50'
                : theme === 'dark'
                ? 'bg-gray-700'
                : theme === 'purple'
                ? 'bg-purple-800'
                : 'bg-emerald-800'
            }`}
          >
            <h3 className="text-xl font-bold mb-6 text-center">Design</h3>
            {designSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          <div
            className={`p-6 rounded-xl ${
              theme === 'light'
                ? 'bg-gray-50'
                : theme === 'dark'
                ? 'bg-gray-700'
                : theme === 'purple'
                ? 'bg-purple-800'
                : 'bg-emerald-800'
            }`}
          >
            <h3 className="text-xl font-bold mb-6 text-center">Other Skills</h3>
            {otherSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;