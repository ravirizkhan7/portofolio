import React, { useState } from 'react';
import { Sun, Moon, Palette } from 'lucide-react';

type ThemeSwitcherProps = {
  currentTheme: string;
  setTheme: (theme: string) => void;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
    setIsOpen(false);
  };

  const getThemeIcon = () => {
    switch (currentTheme) {
      case 'light':
        return <Sun size={20} />;
      case 'dark':
        return <Moon size={20} />;
      default:
        return <Palette size={20} />;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`p-2 rounded-full transition-colors flex items-center justify-center ${
          currentTheme === 'light'
            ? 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            : currentTheme === 'dark'
            ? 'bg-gray-700 hover:bg-gray-600 text-white'
            : currentTheme === 'purple'
            ? 'bg-purple-700 hover:bg-purple-600 text-white'
            : 'bg-emerald-700 hover:bg-emerald-600 text-white'
        }`}
        aria-label="Toggle theme"
      >
        {getThemeIcon()}
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 py-2 w-36 rounded-lg shadow-xl z-20 ${
            currentTheme === 'light'
              ? 'bg-white text-gray-800'
              : currentTheme === 'dark'
              ? 'bg-gray-800 text-white'
              : currentTheme === 'purple'
              ? 'bg-purple-900 text-white'
              : 'bg-emerald-900 text-white'
          }`}
        >
          <button
            onClick={() => handleThemeChange('light')}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currentTheme === 'light' ? 'font-bold' : ''
            } hover:opacity-80 transition-opacity flex items-center`}
          >
            <Sun size={16} className="mr-2" /> Light
          </button>
          <button
            onClick={() => handleThemeChange('dark')}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currentTheme === 'dark' ? 'font-bold' : ''
            } hover:opacity-80 transition-opacity flex items-center`}
          >
            <Moon size={16} className="mr-2" /> Dark
          </button>
          <button
            onClick={() => handleThemeChange('purple')}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currentTheme === 'purple' ? 'font-bold' : ''
            } hover:opacity-80 transition-opacity flex items-center`}
          >
            <Palette size={16} className="mr-2" /> Purple
          </button>
          <button
            onClick={() => handleThemeChange('emerald')}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currentTheme === 'emerald' ? 'font-bold' : ''
            } hover:opacity-80 transition-opacity flex items-center`}
          >
            <Palette size={16} className="mr-2" /> Emerald
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;