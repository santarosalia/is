import { motion } from "framer-motion";
import { ChevronDown, Github, Mail, ArrowRight } from "lucide-react";
import { useTyping } from "../hooks/useTyping";
import { CONTACT_EMAIL } from "../constants/site";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-200/80 to-white" />
      <div className="container-custom z-10 py-24 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base font-semibold tracking-[0.2em] text-slate-600 uppercase mb-5"
          >
            Full-stack Developer
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight"
          >
            {typingText}
            <motion.span
              className="inline-block w-0.5 h-7 sm:h-9 md:h-12 lg:h-14 bg-primary-600 ml-1 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              aria-hidden="true"
            />
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 text-base md:text-lg lg:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed"
          >
            TypeScript · React · NestJS로 사용자 경험과 코드 품질을 모두 고려하는
            풀스택 개발자,{" "}
            <span className="text-slate-900 font-semibold">김동현</span>입니다.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-10 mb-12 w-full sm:w-auto"
          >
            <motion.button
              type="button"
              onClick={() => scrollToSection("projects")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              프로젝트 보기
              <ArrowRight size={18} aria-hidden="true" />
            </motion.button>
            <motion.button
              type="button"
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              연락하기
            </motion.button>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex justify-center gap-4 sm:gap-6 mb-16"
          >
            <motion.a
              href="https://github.com/santarosalia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub 프로필"
              whileHover={{ scale: 1.08, y: -2 }}
              className="p-3 rounded-full bg-slate-800/60 backdrop-blur-sm text-slate-200 hover:text-white transition-colors duration-200 border border-slate-600/80 interactive-focus"
            >
              <Github size={22} aria-hidden="true" />
            </motion.a>
            <motion.a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="이메일 보내기"
              whileHover={{ scale: 1.08, y: -2 }}
              className="p-3 rounded-full bg-slate-800/60 backdrop-blur-sm text-slate-200 hover:text-white transition-colors duration-200 border border-slate-600/80 interactive-focus"
            >
              <Mail size={22} aria-hidden="true" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.button
              type="button"
              onClick={() => scrollToSection("about")}
              whileHover={{ y: 4 }}
              className="flex flex-col items-center text-slate-600 hover:text-slate-900 transition-colors duration-200 interactive-focus p-2"
              aria-label="소개 섹션으로 이동"
            >
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown size={24} strokeWidth={2.5} aria-hidden="true" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
