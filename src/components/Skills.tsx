import { motion } from "framer-motion";
import { Code, Database, Palette, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "TypeScript", level: 90 },
        { name: "Vue", level: 85 },
        { name: "React", level: 80 },
        { name: "React Native", level: 50 },
      ],
    },
    {
      title: "Styling & UI",
      icon: Palette,
      skills: [
        { name: "Tailwind CSS", level: 85 },
        { name: "CSS", level: 85 },
        { name: "Framer Motion", level: 70 },
        { name: "Emotion", level: 90 },
      ],
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: [
        { name: "NestJS", level: 75 },
        { name: "Spring", level: 70 },
        { name: "Node.js", level: 80 },
        { name: "PostgreSQL", level: 65 },
        { name: "REST APIs", level: 85 },
      ],
    },
    {
      title: "Tools & Others",
      icon: Zap,
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Vite", level: 80 },
        { name: "Jenkins", level: 75 },
        { name: "Figma", level: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section-padding bg-gray-50 dark:bg-dark-800"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            기술 스택
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            프론트엔드 개발에 특화되어 있으면서도 백엔드까지 다룰 수 있는 기술
            스택을 보유하고 있습니다. 지속적으로 새로운 기술을 학습하며 더 나은
            개발자로 성장하고 있습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <category.icon
                    size={24}
                    className="text-primary-600 dark:text-primary-400"
                  />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-dark-900 dark:text-white text-center mb-8">
            기타 기술 & 도구
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Pinia",
              "Composition API",
              "Redux",
              "Zustand",
              "MUI",
              "Vuetify",
              "Puppeteer",
              "ESLint",
              "Prettier",
              "Husky",
              "Chrome API",
              "Redis",
              "Github Actions",
              "NPM Registry",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
