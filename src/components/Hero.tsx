import { motion } from 'framer-motion';
import { ChevronDown, Github,  Mail} from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // SVG 패턴을 별도 변수로 분리
  const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-dark-800 dark:to-dark-900">
        <div 
          className="absolute inset-0 opacity-50"
          style={{ backgroundImage: `url("${backgroundPattern}")` }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-primary-600 font-medium">안녕하세요! 👋</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-dark-900 dark:text-white mb-6"
          >
            저는{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              김동현
            </span>
            입니다
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-8 max-w-3xl mx-auto"
          >
            프론트엔드 개발에 특화되어 있으면서도 백엔드까지 다룰 수 있는 풀스택 개발자입니다.
            TypeScript, Vue3, React를 주력으로 하며, NestJS와 Java Spring으로 서버 개발도 가능합니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              프로젝트 보기
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              연락하기
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="mailto:donghyun.kim@example.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 z-10"
          >
            <motion.button
              onClick={scrollToNext}
              whileHover={{ y: 5 }}
              className="flex flex-col items-center text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <span className="text-sm mb-2">더 알아보기</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 