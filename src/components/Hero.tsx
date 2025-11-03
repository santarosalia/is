import { motion } from "framer-motion";
import { ChevronDown, Github, Mail } from "lucide-react";
import { useTyping } from "../hooks/useTyping";

const Hero = () => {
  const typingText = useTyping("KIM DONGHYUN", 80, 600);

  const scrollToNext = () => {
    const section = document.getElementById("about");
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
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Galaxy
          mouseRepulsion={false}
          // mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div> */}
      <div className="container-custom z-10">
        <div className="text-center">
          {/* Maintitle */}
          <span className="w-full text-2xl font-bold md:text-4xl lg:text-6xl">
            {typingText}
            <motion.span
              className="inline-block w-1 h-6 md:h-10 lg:h-16 bg-blue-400 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </span>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          ></motion.div>

          {/* Social Links */}
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
              {/* 소셜 링크 글로우 효과 */}
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
              href="mailto:mdc@kakao.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm text-gray-300 hover:text-white transition-colors duration-200 border border-slate-700 relative overflow-hidden"
            >
              <Mail size={24} className="relative z-10" />
              {/* 소셜 링크 글로우 효과 */}
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

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 z-10"
          >
            <motion.button
              onClick={scrollToNext}
              whileHover={{ y: 5 }}
              className="flex flex-col items-center text-white hover:text-gray-200 transition-colors duration-200 relative"
            >
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
                    ease: "easeInOut",
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
