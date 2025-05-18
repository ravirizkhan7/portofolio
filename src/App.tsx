import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  // Check system color scheme preference and saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Listen for system color scheme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (!savedTheme) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header theme={theme} setTheme={setTheme} />
      <HeroSection theme={theme} />
      <AboutSection theme={theme} />
      <ProjectsSection theme={theme} />
      <SkillsSection theme={theme} />
      <ContactSection theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
