import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl"
      style={{
        filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)'
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] ml-2 relative"
          >
            <span className="relative">
              {/* 빛의 삼원색 애니메이션 */}
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" style={{ zIndex: 2 }}>
                {/* 빨강 원 */}
                <motion.span
                  className="absolute"
                  style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,0,0,1)', mixBlendMode: 'screen' }}
                  animate={{
                    x: [Math.random() * -30 - 20, 0, Math.random() * 30 + 20],
                    y: [Math.random() * -20 - 10, 0, Math.random() * 20 + 10],
                    scale: [1.2, 1.7, 1.2],
                    opacity: [0.85, 1, 0.85],
                    background: [
                      'rgba(255,0,0,1)',
                      'rgba(255,255,255,1)',
                      'rgba(255,0,0,1)'
                    ]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                  }}
                />
                {/* 초록 원 */}
                <motion.span
                  className="absolute"
                  style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,255,0,1)', mixBlendMode: 'screen' }}
                  animate={{
                    x: [Math.random() * 30 + 20, 0, Math.random() * -30 - 20],
                    y: [Math.random() * -20 - 10, 0, Math.random() * 20 + 10],
                    scale: [1.2, 1.7, 1.2],
                    opacity: [0.85, 1, 0.85],
                    background: [
                      'rgba(0,255,0,1)',
                      'rgba(255,255,255,1)',
                      'rgba(0,255,0,1)'
                    ]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                  }}
                />
                {/* 파랑 원 */}
                <motion.span
                  className="absolute"
                  style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,0,255,1)', mixBlendMode: 'screen' }}
                  animate={{
                    x: [Math.random() * 20 - 10, 0, Math.random() * -20 + 10],
                    y: [Math.random() * 30 + 20, 0, Math.random() * -30 - 20],
                    scale: [1.2, 1.7, 1.2],
                    opacity: [0.85, 1, 0.85],
                    background: [
                      'rgba(0,0,255,1)',
                      'rgba(255,255,255,1)',
                      'rgba(0,0,255,1)'
                    ]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                  }}
                />
              </span>
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
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] border border-white/30 backdrop-blur-sm relative overflow-hidden"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.15))',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.25) 100%)',
                backdropFilter: 'blur(10px) saturate(140%)',
                WebkitBackdropFilter: 'blur(10px) saturate(140%)'
              }}
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
            className="md:hidden py-4 border-t border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.08))',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.08) 100%)',
              backdropFilter: 'blur(15px) saturate(160%)',
              WebkitBackdropFilter: 'blur(15px) saturate(160%)'
            }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-200 drop-shadow-[0_0_6px_rgba(180,180,255,0.7)] hover:text-white hover:drop-shadow-[0_0_12px_rgba(180,180,255,1)] transition-all duration-200 font-medium relative ml-4"
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