import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: '홈', href: '#home' },
    { name: '소개', href: '#about' },
    { name: '프로젝트', href: '#projects' },
    { name: '기술', href: '#skills' },
    { name: '연락처', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black/80 backdrop-blur-md border-b border-gray-700 shadow-lg"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] ml-2 relative"
          >
            <span className="relative">
              동현
              {/* 네온 글로우 */}
              <span className="absolute inset-0 blur-sm opacity-60 text-purple-400 select-none pointer-events-none">
                동현
              </span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2, scale: 1.08 }}
                className="text-gray-200 drop-shadow-[0_0_6px_rgba(180,180,255,0.7)] hover:text-white hover:drop-shadow-[0_0_12px_rgba(180,180,255,1)] transition-all duration-200 font-medium relative"
              >
                <span className="relative">
                  {item.name}
                  {/* 네온 효과 */}
                  <span className="absolute inset-0 blur-sm opacity-40 text-blue-400 select-none pointer-events-none">
                    {item.name}
                  </span>
                </span>
              </motion.a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] border border-white/20 transition-all duration-200 relative overflow-hidden"
            >
              <span className="relative z-10">{isDark ? <Sun size={20} /> : <Moon size={20} />}</span>
              {/* 버튼 글로우 */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-lg"
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] border border-white/20 relative overflow-hidden"
            >
              <span className="relative z-10">{isMenuOpen ? <X size={20} /> : <Menu size={20} />}</span>
              {/* 버튼 글로우 */}
              <motion.div
                className="absolute inset-0 bg-blue-400/10 rounded-lg"
                animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.08, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-700 bg-gradient-to-br from-black via-gray-900 to-black/80 backdrop-blur-md shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-200 drop-shadow-[0_0_6px_rgba(180,180,255,0.7)] hover:text-white hover:drop-shadow-[0_0_12px_rgba(180,180,255,1)] transition-all duration-200 font-medium relative"
                >
                  <span className="relative">
                    {item.name}
                    {/* 네온 효과 */}
                    <span className="absolute inset-0 blur-sm opacity-40 text-blue-400 select-none pointer-events-none">
                      {item.name}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header; 