import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 스크롤이 맨 위에 있거나 위로 스크롤할 때는 헤더를 보이게
      if (currentScrollY <= 0) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // 위로 스크롤할 때
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 아래로 스크롤할 때 (100px 이상 스크롤된 후)
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
  ];

  const onClickMenu = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl"
          style={{
            filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          }}
        >
          <div className="container-custom">
            <div className="flex items-center justify-between h-16">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={""}
                    onClick={(e) => onClickMenu(e, item.sectionId)}
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
                    filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.15))",
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.25) 100%)",
                    backdropFilter: "blur(10px) saturate(140%)",
                    WebkitBackdropFilter: "blur(10px) saturate(140%)",
                  }}
                >
                  <span className="relative z-10">
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </span>
                  {/* 버튼 글로우 */}
                  <motion.div
                    className="absolute inset-0 bg-blue-400/10 rounded-lg"
                    animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.08, 1] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden py-4 border-t border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl"
                style={{
                  filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.08))",
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.08) 100%)",
                  backdropFilter: "blur(15px) saturate(160%)",
                  WebkitBackdropFilter: "blur(15px) saturate(160%)",
                }}
              >
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      onClick={(e) => onClickMenu(e, item.sectionId)}
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
      )}
    </AnimatePresence>
  );
};

export default Header;
