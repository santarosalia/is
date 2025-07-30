import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const Hero = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    // 2.5초 후에 애니메이션 완료 상태로 변경 (별들이 퍼지는 애니메이션과 맞춤)
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // 별 컴포넌트들
  const stars = useMemo(() => Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
    angle: Math.random() * 360,
    duration: Math.random() * 4 + 2,
  })), []); // 빈 의존성 배열 = 마운트 시에만 실행

  const dustParticles = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5 + 1.5,
  })), []);

  // 텍스트 별빛 효과를 위한 별들
  const textStars = useMemo(() => Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 1,
  })), []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 우주 배경 */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* 중앙에서 퍼지는 애니메이션 */}
        {!isAnimationComplete && (
          <>
            {/* 중앙에서 퍼지는 별들 */}
            {stars.map((star) => (
              <motion.div
                key={`center-star-${star.id}`}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"
                style={{
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                }}
                initial={{ 
                  x: 0, 
                  y: 0, 
                  opacity: 0,
                  scale: 0
                }}
                animate={{ 
                  x: Math.cos((star.angle * Math.PI) / 180) * 100 + star.x,
                  y: Math.sin((star.angle * Math.PI) / 180) * 100 + star.y,
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1, 1.2, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  delay: star.delay,
                  ease: "easeOut"
                }}
              />
            ))}
          </>
        )}

        {/* 기존 별들  */}
        { stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* 은하수 효과 - 애니메이션 완료 후에만 표시 */}
        {isAnimationComplete && (
          <motion.div 
            className="absolute inset-0 opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          >
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent transform rotate-45"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
            />
            <motion.div 
              className="absolute top-1/3 right-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -rotate-30"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
            />
            <motion.div 
              className="absolute bottom-1/3 left-1/3 w-80 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent transform rotate-15"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 2, delay: 1.6, ease: "easeOut" }}
            />
          </motion.div>
        )}

        {/* 중앙 원 - 그려지는 효과 (데스크탑만) */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <svg width="800" height="800" viewBox="0 0 800 800">
            <motion.circle
              cx="400"
              cy="400"
              r="380"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="2388"
              strokeDashoffset="2388"
              initial={{ strokeDashoffset: 2388 }}
              animate={{ 
                strokeDashoffset: [2388, 0, 0],
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: 4, 
                delay: 0.8, 
                ease: "easeInOut",
                times: [0, 0.5, 1] // 50% 지점에서 사라지기 시작
              }}
            />
          </svg>
        </motion.div>

        {/* 원 부서지는 효과 - 원이 그려진 후 실행 (데스크탑만) */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            duration: 2, 
            delay: 3.8, // 원 그리기 완료 후 시작 (3초 + 0.8초)
            ease: "easeOut" 
          }}
        >
          {/* 원 조각들 */}
          {Array.from({ length: 60 }, (_, i) => {
            const angle = (i * 6) * (Math.PI / 180); // 360도 / 60개 조각
            const radius = 380;
            const startX = 400 + Math.cos(angle) * radius;
            const startY = 400 + Math.sin(angle) * radius;
            const endX = 400 + Math.cos(angle) * (radius + 100);
            const endY = 400 + Math.sin(angle) * (radius + 100);
            
            return (
              <motion.div
                key={`circle-fragment-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${startX}px`,
                  top: `${startY}px`,
                }}
                initial={{ 
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1
                }}
                animate={{ 
                  opacity: [1, 0],
                  x: [0, (endX - startX)],
                  y: [0, (endY - startY)],
                  scale: [1, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  delay: 3.8 + (i * 0.02), // 더 빠른 순차적 부서짐
                  ease: "easeOut"
                }}
              />
            );
          })}
        </motion.div>

        {/* 우주 먼지 효과 */}
        {  (
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          >
            {dustParticles.map((particle) => (
              <motion.div
                key={`dust-${particle.id}`}
                className="absolute w-0.5 h-0.5 bg-purple-300 rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -100],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </motion.div>
        )}
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isAnimationComplete ? 1 : 0, y: isAnimationComplete ? 0 : 20 }}
            transition={{ duration: 0.8, delay: isAnimationComplete ? 0.2 : 0, ease: "easeOut" }}
            className="mb-4 relative"
          >
            <span className="text-white font-medium relative">
            디지털 우주를 탐험하는 개발자 🚀
              {/* 텍스트 주변 별빛 효과 */}
              {isAnimationComplete && textStars.slice(0, 5).map((star) => (
                <motion.div
                  key={`text-star-${star.id}`}
                  className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: star.duration,
                    delay: star.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isAnimationComplete ? 1 : 0, y: isAnimationComplete ? 0 : 20 }}
            transition={{ duration: 0.8, delay: isAnimationComplete ? 0.4 : 0, ease: "easeOut" }}
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
                {/* 이름 주변 별빛 효과 */}
                {isAnimationComplete && textStars.slice(5, 10).map((star) => (
                  <motion.div
                    key={`name-star-${star.id}`}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${star.x}%`,
                      top: `${star.y}%`,
                      width: `${star.size}px`,
                      height: `${star.size}px`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0],
                    }}
                    transition={{
                      duration: star.duration,
                      delay: star.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </span>
              입니다
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isAnimationComplete ? 1 : 0, y: isAnimationComplete ? 0 : 20 }}
            transition={{ duration: 0.8, delay: isAnimationComplete ? 0.6 : 0, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto relative"
          >
            <span className="relative">
              디지털 우주를 탐험하는 풀스택 개발자입니다.
              <br />
              TypeScript, Vue3, React로 프론트엔드 우주를,<br/>
              NestJS와 Java Spring으로 백엔드 은하를 건설합니다.
              {/* 부제목 주변 우주 먼지 효과 */}
              {isAnimationComplete && textStars.slice(10, 15).map((star) => (
                <motion.div
                  key={`subtitle-star-${star.id}`}
                  className="absolute w-0.5 h-0.5 bg-purple-300 rounded-full"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [0, -20],
                  }}
                  transition={{
                    duration: star.duration,
                    delay: star.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isAnimationComplete ? 1 : 0, y: isAnimationComplete ? 0 : 20 }}
            transition={{ duration: 0.8, delay: isAnimationComplete ? 0.8 : 0, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-white/25 relative overflow-hidden"
            >
              <span className="relative z-10">프로젝트 탐험</span>
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
            animate={{ opacity: isAnimationComplete ? 1 : 0, y: isAnimationComplete ? 0 : 20 }}
            transition={{ duration: 0.8, delay: isAnimationComplete ? 1.0 : 0, ease: "easeOut" }}
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
            animate={{ opacity: isAnimationComplete ? 1 : 0 }}
            transition={{ duration: 0.8, delay: isAnimationComplete ? 1.2 : 0, ease: "easeOut" }}
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