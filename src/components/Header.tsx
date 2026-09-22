import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: "홈", sectionId: "home" },
    { name: "소개", sectionId: "about" },
    { name: "프로젝트", sectionId: "projects" },
    { name: "기술", sectionId: "skills" },
    { name: "연락", sectionId: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const onClickMenu = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const onClickBrand = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection("home");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50 overflow-x-clip bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl"
          style={{
            filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          }}
        >
          <div className="container-custom px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 min-w-0">
              {/* Brand */}
              <motion.a
                href="#home"
                onClick={onClickBrand}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2.5 shrink-0 interactive-focus rounded-lg py-1 pr-2"
                aria-label="홈으로 이동"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-slate-800 text-sm font-bold text-white shadow-sm">
                  K
                </span>
                <span className="hidden sm:flex flex-col leading-tight">
                  <span className="text-sm font-bold text-slate-900 tracking-tight">
                    Kim Donghyun
                  </span>
                  <span className="text-xs font-medium text-slate-600">
                    김동현
                  </span>
                </span>
              </motion.a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6 lg:gap-8 min-w-0">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={`#${item.sectionId}`}
                    onClick={(e) => onClickMenu(e, item.sectionId)}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="text-gray-800 hover:text-gray-900 transition-all duration-200 font-medium relative whitespace-nowrap"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <div className="flex items-center md:hidden shrink-0">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-black border border-black/30 backdrop-blur-sm"
                  aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden py-4 border-t border-black/20 bg-white/10 backdrop-blur-xl"
              >
                <div className="flex flex-col space-y-3 px-1">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={`#${item.sectionId}`}
                      onClick={(e) => onClickMenu(e, item.sectionId)}
                      className="text-gray-900 hover:text-black transition-colors duration-200 font-medium py-1 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </motion.nav>
            )}
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
