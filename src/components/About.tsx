import { motion } from "framer-motion";
import { User, Code, Coffee, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "프로젝트 완료", value: "35+" },
    { icon: Coffee, label: "커피 컵", value: "1000+" },
    { icon: Heart, label: "만족한 클라이언트", value: "18+" },
    { icon: User, label: "경력 연차", value: "3+" },
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
            @me
          </h2>
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
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
                  <User
                    size={80}
                    className="md:w-[120px] md:h-[120px] text-gray-400 dark:text-gray-500"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-primary-500 rounded-full flex items-center justify-center">
                <Code size={24} className="md:w-8 md:h-8 text-white" />
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
                  <stat.icon
                    size={32}
                    className="text-primary-600 mx-auto mb-2"
                  />
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
                안녕하세요! 저는 김동현입니다.
              </h3>
              <p className="text-lg text-dark-600 dark:text-dark-300 mb-4">
                3년간의 개발 경험을 통해 프론트엔드 개발에 특화되어 있으면서도,
                백엔드 개발까지 가능한 풀스택 개발자로 성장했습니다.
                TypeScript를 기반으로 Vue3와 React를 주력으로 사용하며, NestJS와
                Java Spring으로 서버 개발도 진행합니다.
              </p>
              <p className="text-lg text-dark-600 dark:text-dark-300">
                사용자 경험을 최우선으로 생각하며, 깔끔하고 유지보수가 용이한
                코드 작성을 지향합니다. 새로운 기술 학습에 적극적이며, 팀 협업을
                통해 더 나은 결과물을 만들어내는 것을 즐깁니다.
              </p>
            </div>

            {/* Skills Preview */}
            <div>
              <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                주요 기술 스택
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "Vue3",
                  "React",
                  "NestJS",
                  "Java Spring",
                  "Node.js",
                ].map((skill, index) => (
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
