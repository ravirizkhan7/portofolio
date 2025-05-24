import React, { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Instagram, ChevronDown } from "lucide-react";
import profilePic from "../../assets/images/ravi.jpg";

type HeroSectionProps = {
  theme: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ theme }) => {
  const photoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const texts = ["Frontend Developer", "UI/UX Designer"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeText = () => {
      const currentText = texts[textIndex];

      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsTypingComplete(true);
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(typeText, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  useEffect(() => {
    if (photoRef.current) {
      photoRef.current.classList.add("opacity-100");
      photoRef.current.classList.remove("opacity-0");
      photoRef.current.classList.add("translate-y-0");
      photoRef.current.classList.remove("translate-y-8");
    }

    if (textRef.current) {
      setTimeout(() => {
        textRef.current?.classList.add("opacity-100");
        textRef.current?.classList.remove("opacity-0");
        textRef.current?.classList.add("translate-y-0");
        textRef.current?.classList.remove("translate-y-8");
      }, 300);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col justify-center relative ${
        theme === "light"
          ? "bg-gray-50 text-gray-800"
          : theme === "dark"
          ? "bg-gray-900 text-white"
          : theme === "purple"
          ? "bg-purple-950 text-white"
          : "bg-emerald-950 text-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 pt-24 md:pt-0">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div
            ref={textRef}
            className="md:w-1/2 transition-all duration-700 ease-out opacity-0 translate-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Muhammad Ravi
              <br />
              <span
                className={
                  theme === "light"
                    ? "text-blue-600"
                    : theme === "dark"
                    ? "text-blue-400"
                    : theme === "purple"
                    ? "text-purple-400"
                    : "text-emerald-400"
                }
              >
                Rizkhan
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
              <span className="opacity-80">I am</span>{" "}
              <span
                className={`font-medium ${
                  theme === "light"
                    ? "text-blue-600"
                    : theme === "dark"
                    ? "text-blue-400"
                    : theme === "purple"
                    ? "text-purple-400"
                    : "text-emerald-400"
                }`}
              >
                {displayText}
              </span>
              <span
                className={`inline-block w-[2px] h-6 ml-1 align-middle ${
                  isTypingComplete ? "animate-pulse" : "animate-blink"
                } ${theme === "light" ? "bg-gray-800" : "bg-white"}`}
              ></span>
            </p>
            <div className="flex space-x-4 mb-8">
              <a
                href="https://github.com/ravirizkhan7"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 ${
                  theme === "light"
                    ? "bg-gray-200 text-gray-800 hover:bg-[#24292e] hover:text-white"
                    : theme === "dark"
                    ? "bg-gray-700 text-white hover:bg-[#24292e]"
                    : theme === "purple"
                    ? "bg-purple-800 text-white hover:bg-[#24292e]"
                    : "bg-emerald-800 text-white hover:bg-[#24292e]"
                }`}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-ravi-rizkhan-59111925b/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 ${
                  theme === "light"
                    ? "bg-gray-200 text-gray-800 hover:bg-[#0077b5] hover:text-white"
                    : theme === "dark"
                    ? "bg-gray-700 text-white hover:bg-[#0077b5]"
                    : theme === "purple"
                    ? "bg-purple-800 text-white hover:bg-[#0077b5]"
                    : "bg-emerald-800 text-white hover:bg-[#0077b5]"
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/ravi_rizkhan/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 ${
                  theme === "light"
                    ? "bg-gray-200 text-gray-800 hover:bg-[#E4405F] hover:text-white"
                    : theme === "dark"
                    ? "bg-gray-700 text-white hover:bg-[#E4405F]"
                    : theme === "purple"
                    ? "bg-purple-800 text-white hover:bg-[#E4405F]"
                    : "bg-emerald-800 text-white hover:bg-[#E4405F]"
                }`}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  theme === "light"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : theme === "dark"
                    ? "bg-blue-500 hover:bg-blue-400 text-white"
                    : theme === "purple"
                    ? "bg-purple-500 hover:bg-purple-400 text-white"
                    : "bg-emerald-500 hover:bg-emerald-400 text-white"
                }`}
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  theme === "light"
                    ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
                    : theme === "dark"
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : theme === "purple"
                    ? "bg-purple-800 hover:bg-purple-700 text-white"
                    : "bg-emerald-800 hover:bg-emerald-700 text-white"
                }`}
              >
                Contact Me
              </button>
            </div>
          </div>
          <div
            ref={photoRef}
            className="mt-12 md:mt-0 md:w-2/5 transition-all duration-700 ease-out opacity-0 translate-y-8"
          >
            <div className="relative">
              {/* Animated background shapes */}
              <div
                className={`absolute inset-0 -inset-x-8 -inset-y-8 rounded-full blur-2xl opacity-30 animate-float-reverse ${
                  theme === "light"
                    ? "bg-blue-400"
                    : theme === "dark"
                    ? "bg-blue-500"
                    : theme === "purple"
                    ? "bg-purple-500"
                    : "bg-emerald-500"
                }`}
              ></div>

              {/* Profile image container */}
              <div className="relative animate-float">
                <img
                  src={profilePic}
                  alt="Muhammad Ravi Rizkhan"
                  className="w-full h-auto object-cover aspect-square rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
