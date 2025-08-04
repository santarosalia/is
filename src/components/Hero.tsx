import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail } from 'lucide-react';
import Galaxy from './Galaxy';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">

      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>
      <div className="container-custom z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 , ease: "easeOut" }}
            className="mb-4 relative"
          >
            <span className="text-white font-medium relative">
            디지털 우주를 탐험하는 개발자 🚀
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity:  1 , y:   0  }}
            transition={{ duration: 0.8, delay:  0.4, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 relative"
          >
            <span className="relative">
          
              <span className="text-white relative">
                김동현
                {/* 이름 주변 네온 글로우 효과 */}
                <motion.div
                  className="absolute inset-0 text-white blur-sm"
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  김동현
                </motion.div>
                
              </span>
              입니다
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity:   1 , y:   0 }}
            transition={{ duration: 0.8, delay:   0.6, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto relative"
          >
            <span className="relative">
              디지털 우주를 탐험하는 풀스택 개발자입니다.
              <br />
              TypeScript, Vue3, React로 프론트엔드 우주를,<br/>
              NestJS와 Java Spring으로 백엔드 은하를 건설합니다.
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity:   1 , y:   0 }}
            transition={{ duration: 0.8, delay:   0.8 , ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-white/25 relative overflow-hidden"
            >
              <span className="relative z-10">우주 탐험</span>
              {/* 버튼 내부 글로우 효과 */}
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">통신하기</span>
              {/* 버튼 테두리 글로우 효과 */}
              <motion.div
                className="absolute inset-0 border-2 border-white rounded-full"
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity:   1 , y:   0 }}
            transition={{ duration: 0.8, delay:  1.0, ease: "easeOut" }}
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
              {/* 소셜 링크 글로우 효과 */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                whileHover={{ 
                  opacity: [0, 0.5, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
            <motion.a
              href="mailto:donghyun.kim@example.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm text-gray-300 hover:text-white transition-colors duration-200 border border-slate-700 relative overflow-hidden"
            >
              <Mail size={24} className="relative z-10" />
              {/* 소셜 링크 글로우 효과 */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                whileHover={{ 
                  opacity: [0, 0.5, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity:   1  }}
            transition={{ duration: 0.8, delay:   1.2, ease: "easeOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 z-10"
          >
            <motion.button
              onClick={scrollToNext}
              whileHover={{ y: 5 }}
              className="flex flex-col items-center text-white hover:text-gray-200 transition-colors duration-200 relative"
            >
              <span className="text-sm mb-2 relative">
                우주 탐험 계속하기
                {/* 스크롤 텍스트 글로우 효과 */}
                <motion.div
                  className="absolute inset-0 text-white blur-sm"
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  우주 탐험 계속하기
                </motion.div>
              </span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative"
              >
                <ChevronDown size={20} />
                {/* 화살표 글로우 효과 */}
                <motion.div
                  className="absolute inset-0 text-white blur-sm"
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ChevronDown size={20} />
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