import { motion } from "framer-motion";
import { ArrowUp, Github, Mail } from "lucide-react";
import { CONTACT_EMAIL } from "../constants/site";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const onClickNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const navLinks = [
    { name: "홈", sectionId: "home" },
    { name: "소개", sectionId: "about" },
    { name: "프로젝트", sectionId: "projects" },
    { name: "기술", sectionId: "skills" },
    { name: "연락", sectionId: "contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/santarosalia",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: `mailto:${CONTACT_EMAIL}`,
      label: "이메일",
    },
  ];

  return (
    <footer className="bg-dark-900 dark:bg-black text-white">
      <div className="container-custom px-4 sm:px-6 py-8 md:py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <p className="text-lg font-bold text-white">Kim Donghyun</p>
            <p className="text-sm text-gray-300">김동현 · Full-stack Developer</p>
          </motion.div>

          {/* Section Nav */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            aria-label="푸터 내비게이션"
            className="space-y-2"
          >
            <p className="text-sm font-semibold text-gray-200">바로가기</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {navLinks.map((link) => (
                <li key={link.sectionId}>
                  <a
                    href={`#${link.sectionId}`}
                    onClick={(e) => onClickNav(e, link.sectionId)}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-sm font-semibold text-gray-200">연락처</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="block text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="flex gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © 2026 Kim Donghyun (김동현). All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 bg-primary-600 hover:bg-primary-700 rounded-full transition-colors duration-200"
            aria-label="맨 위로 이동"
          >
            <ArrowUp size={18} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
