import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Code, Users } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  thumbnail: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
  detailedDescription?: string;
  features?: string[];
  challenges?: string[];
  duration?: string;
  teamSize?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 z-50 overflow-y-auto"
          >
            <div className="flex min-h-full items-center justify-center p-4">
              <div className="relative w-full max-w-4xl bg-white dark:bg-dark-800 rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.image? <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> : <div className="text-8xl">🚀</div>}
                  </div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <X size={20} />
                  </button>
                  
                  {/* Project Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Project Links */}
                  <div className="flex gap-4 mb-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>

                  {/* Project Info */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-dark-600 dark:text-dark-300">
                      <Calendar size={16} />
                      <span className="text-sm">2024년</span>
                    </div>
                    <div className="flex items-center gap-2 text-dark-600 dark:text-dark-300">
                      <Code size={16} />
                      <span className="text-sm">{project.technologies.length}개 기술</span>
                    </div>
                    <div className="flex items-center gap-2 text-dark-600 dark:text-dark-300">
                      <Users size={16} />
                      <span className="text-sm">개인 프로젝트</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
                      프로젝트 개요
                    </h3>
                    <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                      {project.detailedDescription || project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
                      주요 기능
                    </h3>
                    <ul className="space-y-2">
                      {(project.features || [
                        '반응형 웹 디자인',
                        '사용자 인증 및 권한 관리',
                        '데이터베이스 연동',
                        'API 통신',
                        '상태 관리'
                      ]).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-dark-600 dark:text-dark-300">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
                      기술적 도전과 해결
                    </h3>
                    <ul className="space-y-2">
                      {(project.challenges || [
                        '복잡한 상태 관리 구조 설계',
                        '성능 최적화 및 코드 분할',
                        '크로스 브라우저 호환성 확보',
                        '보안 취약점 방지'
                      ]).map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2 text-dark-600 dark:text-dark-300">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
                      사용 기술
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal; 