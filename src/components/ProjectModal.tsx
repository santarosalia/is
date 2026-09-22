import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Calendar, Code, Users } from "lucide-react";
import type { Project } from "../types/project";
import { useEffect, useState } from "react";
import { hasValidLink } from "../constants/site";

const VIDEO_EXTENSIONS = /\.(mov|mp4|webm|ogg)$/i;

function isVideoSrc(src: string): boolean {
  return VIDEO_EXTENSIONS.test(src);
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const [loadedVideos, setLoadedVideos] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setCurrentImage(0);
    setDirection(0);
    setLoadedVideos({});
  }, [project?.title]);

  if (!project) return null;

  const imageCount = project.image ? project.image.length : 0;
  const activeIndex =
    imageCount > 0
      ? ((currentImage % imageCount) + imageCount) % imageCount
      : 0;
  const activeMedia = imageCount > 0 ? project.image[activeIndex] : "";
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrentImage((prev) => (prev - 1 + imageCount) % imageCount);
  };
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % imageCount);
  };

  // 슬라이드 애니메이션 variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

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
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-8xl">🚀</div>
                    )}
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
                    {hasValidLink(project.github) && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors duration-200"
                      >
                        <Github size={18} />
                        <span>GitHub</span>
                      </a>
                    )}
                    {hasValidLink(project.live) && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 rounded-lg transition-colors duration-200"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-dark-600 dark:text-dark-300">
                      <Calendar size={16} />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-dark-600 dark:text-dark-300">
                      <Code size={16} />
                      <span className="text-sm">
                        {project.technologies.length}개 기술
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-dark-600 dark:text-dark-300">
                      <Users size={16} />
                      <span className="text-sm">{project.teamSize}명</span>
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
                  {/* Project Demo GIF */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
                      프로젝트 데모
                    </h3>
                    <div className="relative w-full h-64 md:h-80 bg-gray-100 dark:bg-dark-700 rounded-lg overflow-hidden flex items-center justify-center">
                      {project.image && project.image.length > 0 ? (
                        <>
                          <div className="w-full h-full relative overflow-hidden">
                            <AnimatePresence
                              initial={false}
                              custom={direction}
                              mode="wait"
                            >
                              {isVideoSrc(activeMedia) ? (
                                loadedVideos[activeMedia] ? (
                                  <motion.video
                                    key={activeMedia}
                                    src={activeMedia}
                                    className="absolute inset-0 w-full h-full object-contain"
                                    controls
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                      type: "spring",
                                      stiffness: 300,
                                      damping: 30,
                                    }}
                                  />
                                ) : (
                                  <motion.button
                                    key={`${activeMedia}-poster`}
                                    type="button"
                                    onClick={() =>
                                      setLoadedVideos((prev) => ({
                                        ...prev,
                                        [activeMedia]: true,
                                      }))
                                    }
                                    className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 bg-gray-200 dark:bg-dark-600 text-dark-700 dark:text-dark-200"
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                      type: "spring",
                                      stiffness: 300,
                                      damping: 30,
                                    }}
                                  >
                                    {project.thumbnail ? (
                                      <img
                                        src={project.thumbnail}
                                        alt={`${project.title} 미리보기`}
                                        className="absolute inset-0 w-full h-full object-cover opacity-40"
                                      />
                                    ) : null}
                                    <span className="relative z-10 px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium">
                                      데모 영상 재생
                                    </span>
                                  </motion.button>
                                )
                              ) : (
                                <motion.img
                                  key={activeMedia}
                                  src={activeMedia}
                                  alt={`${project.title} 데모 ${activeIndex + 1}`}
                                  className="absolute inset-0 w-full h-full object-contain cursor-grab"
                                  loading="eager"
                                  custom={direction}
                                  variants={variants}
                                  initial="enter"
                                  animate="center"
                                  exit="exit"
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                  }}
                                  drag="x"
                                  dragConstraints={{ left: 0, right: 0 }}
                                  dragElastic={0.8}
                                  onDragEnd={(_e, info) => {
                                    if (info.offset.x < -100) {
                                      setDirection(1);
                                      setCurrentImage(
                                        (prev) => (prev + 1) % imageCount
                                      );
                                    } else if (info.offset.x > 100) {
                                      setDirection(-1);
                                      setCurrentImage(
                                        (prev) =>
                                          (prev - 1 + imageCount) % imageCount
                                      );
                                    }
                                  }}
                                />
                              )}
                            </AnimatePresence>
                          </div>
                          {project.image.length > 1 && (
                            <>
                              {/* 이전 버튼 */}
                              <button
                                onClick={handlePrev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-dark-800/70 p-2 rounded-full shadow hover:bg-white/90 dark:hover:bg-dark-800 z-10"
                              >
                                {"<"}
                              </button>
                              {/* 다음 버튼 */}
                              <button
                                onClick={handleNext}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-dark-800/70 p-2 rounded-full shadow hover:bg-white/90 dark:hover:bg-dark-800 z-10"
                              >
                                {">"}
                              </button>
                              {/* 인디케이터 */}
                              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                                {project.image.map((_, idx) => (
                                  <div
                                    key={idx}
                                    className={`w-2 h-2 rounded-full ${
                                      idx === activeIndex
                                        ? "bg-primary-600"
                                        : "bg-gray-300 dark:bg-dark-500"
                                    }`}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </>
                      ) : (
                        <div className="flex items-center justify-center h-full text-dark-400 dark:text-dark-500">
                          <div className="text-center">
                            <p className="text-sm">이미지를 준비 중입니다...</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
                      주요 기능
                    </h3>
                    <ul className="space-y-2">
                      {(
                        project.features || [
                          "반응형 웹 디자인",
                          "사용자 인증 및 권한 관리",
                          "데이터베이스 연동",
                          "API 통신",
                          "상태 관리",
                        ]
                      ).map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-dark-600 dark:text-dark-300"
                        >
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
                      {(
                        project.challenges || [
                          "복잡한 상태 관리 구조 설계",
                          "성능 최적화 및 코드 분할",
                          "크로스 브라우저 호환성 확보",
                          "보안 취약점 방지",
                        ]
                      ).map((challenge, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-dark-600 dark:text-dark-300"
                        >
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
