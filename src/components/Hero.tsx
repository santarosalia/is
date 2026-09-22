import { motion } from "framer-motion";
import { ChevronDown, Github, Mail, ArrowRight } from "lucide-react";
import { useTyping } from "../hooks/useTyping";
import { CONTACT_EMAIL } from "../constants/site";

const Hero = () => {
  const typingText = useTyping("KIM DONGHYUN", 80, 600);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-400 to-white"></div>
      <div className="container-custom z-10">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base font-medium tracking-widest text-slate-600 uppercase mb-4"
          >
            Full-stack Developer
          </motion.p>

          <span className="w-full text-2xl font-bold md:text-4xl lg:text-6xl text-slate-900">
            {typingText}
            <motion.span
              className="inline-block w-1 h-6 md:h-10 lg:h-16 bg-blue-500 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </span>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            TypeScript · React · NestJS로 사용자 경험과 코드 품질을 모두 고려하는
            풀스택 개발자, <span className="text-slate-800 font-medium">김동현</span>입니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10 mb-12"
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              프로젝트 보기
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              연락하기
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href="https://github.com/santarosalia"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm text-gray-300 hover:text-white transition-colors duration-200 border border-slate-700 relative overflow-hidden"
            >
              <Github size={24} className="relative z-10" />
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                whileHover={{
                  opacity: [0, 0.5, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
            <motion.a
              href={`mailto:${CONTACT_EMAIL}`}
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm text-gray-300 hover:text-white transition-colors duration-200 border border-slate-700 relative overflow-hidden"
            >
              <Mail size={24} className="relative z-10" />
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                whileHover={{
                  opacity: [0, 0.5, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              whileHover={{ y: 5 }}
              className="flex flex-col items-center text-slate-700 hover:text-slate-900 transition-colors duration-200 relative"
              aria-label="소개 섹션으로 이동"
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative"
              >
                <ChevronDown size={24} strokeWidth={2.5} />
                <motion.div
                  className="absolute inset-0 text-slate-600 blur-sm"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronDown size={24} strokeWidth={2.5} />
                </motion.div>
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
