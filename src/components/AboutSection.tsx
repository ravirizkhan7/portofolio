import React, { useEffect, useRef } from 'react';
import { Code, Lightbulb, Monitor, Paintbrush } from 'lucide-react';

type AboutSectionProps = {
  theme: string;
};

const AboutSection: React.FC<AboutSectionProps> = ({ theme }) => {
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

  return (
    <section
      ref={sectionRef}
      id="about"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
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
          <p className="text-lg leading-relaxed mb-8">
            I'm a passionate Frontend Developer and UI/UX Designer with a strong focus on creating
            beautiful, intuitive, and high-performing web applications. With a keen eye for design
            and strong technical skills, I bridge the gap between aesthetic appeal and functional
            implementation.
          </p>
          <p className="text-lg leading-relaxed">
            My approach combines clean code, modern design principles, and user-centered thinking
            to build digital experiences that not only look great but also provide seamless
            interactions for users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div
            className={`p-6 rounded-xl transition-all duration-500 hover:scale-105 ${
              theme === 'light'
                ? 'bg-gray-100'
                : theme === 'dark'
                ? 'bg-gray-700'
                : theme === 'purple'
                ? 'bg-purple-800'
                : 'bg-emerald-800'
            }`}
          >
            <div
              className={`p-4 rounded-full inline-block mb-4 ${
                theme === 'light'
                  ? 'bg-blue-100 text-blue-600'
                  : theme === 'dark'
                  ? 'bg-blue-900 text-blue-300'
                  : theme === 'purple'
                  ? 'bg-purple-700 text-purple-200'
                  : 'bg-emerald-700 text-emerald-200'
              }`}
            >
              <Code size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
            <p className="opacity-80">
              Creating responsive, accessible, and performant user interfaces with modern web
              technologies.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl transition-all duration-500 hover:scale-105 ${
              theme === 'light'
                ? 'bg-gray-100'
                : theme === 'dark'
                ? 'bg-gray-700'
                : theme === 'purple'
                ? 'bg-purple-800'
                : 'bg-emerald-800'
            }`}
          >
            <div
              className={`p-4 rounded-full inline-block mb-4 ${
                theme === 'light'
                  ? 'bg-blue-100 text-blue-600'
                  : theme === 'dark'
                  ? 'bg-blue-900 text-blue-300'
                  : theme === 'purple'
                  ? 'bg-purple-700 text-purple-200'
                  : 'bg-emerald-700 text-emerald-200'
              }`}
            >
              <Paintbrush size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p className="opacity-80">
              Designing intuitive and aesthetically pleasing user experiences that solve real
              problems.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl transition-all duration-500 hover:scale-105 ${
              theme === 'light'
                ? 'bg-gray-100'
                : theme === 'dark'
                ? 'bg-gray-700'
                : theme === 'purple'
                ? 'bg-purple-800'
                : 'bg-emerald-800'
            }`}
          >
            <div
              className={`p-4 rounded-full inline-block mb-4 ${
                theme === 'light'
                  ? 'bg-blue-100 text-blue-600'
                  : theme === 'dark'
                  ? 'bg-blue-900 text-blue-300'
                  : theme === 'purple'
                  ? 'bg-purple-700 text-purple-200'
                  : 'bg-emerald-700 text-emerald-200'
              }`}
            >
              <Monitor size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
            <p className="opacity-80">
              Ensuring applications work flawlessly across all devices and screen sizes.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl transition-all duration-500 hover:scale-105 ${
              theme === 'light'
                ? 'bg-gray-100'
                : theme === 'dark'
                ? 'bg-gray-700'
                : theme === 'purple'
                ? 'bg-purple-800'
                : 'bg-emerald-800'
            }`}
          >
            <div
              className={`p-4 rounded-full inline-block mb-4 ${
                theme === 'light'
                  ? 'bg-blue-100 text-blue-600'
                  : theme === 'dark'
                  ? 'bg-blue-900 text-blue-300'
                  : theme === 'purple'
                  ? 'bg-purple-700 text-purple-200'
                  : 'bg-emerald-700 text-emerald-200'
              }`}
            >
              <Lightbulb size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
            <p className="opacity-80">
              Finding elegant solutions to complex challenges through creative thinking and
              technical expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;