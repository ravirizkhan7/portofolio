import React from 'react';
import { Heart } from 'lucide-react';

type FooterProps = {
  theme: string;
};

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-12 ${
        theme === 'light'
          ? 'bg-gray-900 text-white'
          : theme === 'dark'
          ? 'bg-gray-950 text-white'
          : theme === 'purple'
          ? 'bg-purple-950 text-white'
          : 'bg-emerald-950 text-white'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="flex flex-col items-center justify-center">
          <a href="#" className="text-2xl font-bold tracking-tighter mb-6">
            Muhammad Ravi Rizkhan
          </a>
          <div className="flex items-center space-x-4 mb-6">
            <a href="#home" className="hover:opacity-80 transition-opacity">
              Home
            </a>
            <span>•</span>
            <a href="#about" className="hover:opacity-80 transition-opacity">
              About
            </a>
            <span>•</span>
            <a href="#projects" className="hover:opacity-80 transition-opacity">
              Projects
            </a>
            <span>•</span>
            <a href="#contact" className="hover:opacity-80 transition-opacity">
              Contact
            </a>
          </div>
          <p className="text-sm opacity-80 flex items-center">
            <span>© {currentYear} Muhammad Ravi Rizkhan. Created with</span>
            <Heart size={14} className="mx-1 text-red-500" />
            <span>and React.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;