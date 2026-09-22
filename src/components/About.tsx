import { motion } from "framer-motion";
import { Code, Coffee, Briefcase } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "코드 라인", value: "50K+" },
    { icon: Coffee, label: "커피 컵", value: "1000+" },
    { icon: Briefcase, label: "경력 연차", value: "3+" },
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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Branded Avatar */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 mx-auto">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 via-primary-600 to-slate-800 p-1 shadow-lg">
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-800 via-primary-900 to-slate-900 flex flex-col items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    aria-hidden="true"
                  >
                    <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-primary-400 blur-2xl" />
                    <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-full bg-blue-300 blur-3xl" />
                  </div>
                  <span className="relative text-5xl md:text-6xl font-bold text-white tracking-tight select-none">
                    KD
                  </span>
                  <span className="relative mt-2 text-sm font-medium text-primary-200/90 tracking-widest">
                    김동현
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
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
