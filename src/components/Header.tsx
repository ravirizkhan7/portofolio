import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import profilePic from "../../assets/images/logo3.png";

type HeaderProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-opacity-80 shadow-md py-3"
          : "py-5 bg-opacity-0"
      } ${
        theme === "light"
          ? "bg-white text-gray-800"
          : theme === "dark"
          ? "bg-gray-900 text-white"
          : theme === "purple"
          ? "bg-purple-900 text-white"
          : "bg-emerald-900 text-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="#"
              className="text-xl md:text-2xl font-bold tracking-tight"
            >
              <img
                src={profilePic}
                alt="Muhammad Ravi Rizkhan"
                className="w-12 h-12 object-cover rounded-full"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="hover:text-opacity-70 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-opacity-70 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-opacity-70 transition-colors font-medium"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-opacity-70 transition-colors font-medium"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-opacity-70 transition-colors font-medium"
            >
              Contact
            </a>
            <div className="ml-4">
              <ThemeSwitcher currentTheme={theme} setTheme={setTheme} />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <div className="mr-4">
              <ThemeSwitcher currentTheme={theme} setTheme={setTheme} />
            </div>
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full py-4 shadow-lg ${
            theme === "light"
              ? "bg-white text-gray-800"
              : theme === "dark"
              ? "bg-gray-900 text-white"
              : theme === "purple"
              ? "bg-purple-900 text-white"
              : "bg-emerald-900 text-white"
          } backdrop-blur-md bg-opacity-95`}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="py-2 hover:text-opacity-70 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="py-2 hover:text-opacity-70 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="py-2 hover:text-opacity-70 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="py-2 hover:text-opacity-70 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="py-2 hover:text-opacity-70 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
