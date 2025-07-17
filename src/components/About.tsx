import { motion } from 'framer-motion';
import { User, Code, Coffee, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: '프로젝트 완료', value: '50+' },
    { icon: Coffee, label: '커피 컵', value: '1000+' },
    { icon: Heart, label: '만족한 클라이언트', value: '20+' },
    { icon: User, label: '경력 연차', value: '3+' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            저에 대해 알아보세요
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            열정적인 프론트엔드 개발자로서 사용자 중심의 웹 애플리케이션을 만드는 것을 좋아합니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
                  <User size={120} className="text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center">
                <Code size={32} className="text-white" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white dark:bg-dark-700 rounded-lg shadow-sm"
                >
                  <stat.icon size={32} className="text-primary-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-dark-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-600 dark:text-dark-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                안녕하세요! 저는 개발자입니다 👨‍💻
              </h3>
              <p className="text-lg text-dark-600 dark:text-dark-300 mb-4">
                3년간의 프론트엔드 개발 경험을 바탕으로 사용자 경험을 중시하는 웹 애플리케이션을 개발하고 있습니다.
                React, TypeScript, Next.js 등의 최신 기술을 활용하여 성능과 접근성을 모두 고려한 솔루션을 제공합니다.
              </p>
              <p className="text-lg text-dark-600 dark:text-dark-300">
                새로운 기술을 배우는 것을 좋아하며, 항상 더 나은 사용자 경험을 제공하기 위해 노력하고 있습니다.
                팀워크를 중시하며, 다른 개발자들과의 협업을 통해 더 좋은 결과물을 만들어내는 것을 즐깁니다.
              </p>
            </div>

            {/* Skills Preview */}
            <div>
              <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                주요 기술 스택
              </h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block btn-primary"
            >
              함께 일해보세요
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 