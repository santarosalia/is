import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Calendar, Code, Users } from "lucide-react";
import type { Project } from "../types/project";
import { useEffect, useState } from "react";
import { hasValidLink } from "../constants/site";

const VIDEO_EXTENSIONS = /\.(mov|mp4|webm|ogg)$/i;

function isVideoSrc(src: string): boolean {
  return VIDEO_EXTENSIONS.test(src);
}

interface CaseStudySectionProps {
  heading: string;
  children: React.ReactNode;
}

function CaseStudySection({ heading, children }: CaseStudySectionProps) {
  return (
    <section className="case-study-section">
      <h3 className="case-study-heading">{heading}</h3>
      <div className="case-study-body">{children}</div>
    </section>
  );
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setCurrentImage(0);
    setDirection(0);
    setLoadedVideos({});
  }, [project?.title]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  const imageCount = project.image ? project.image.length : 0;
  const activeIndex =
    imageCount > 0
      ? ((currentImage % imageCount) + imageCount) % imageCount
      : 0;
  const activeMedia = imageCount > 0 ? project.image[activeIndex] : "";
  const hasCaseStudy = Boolean(project.problem);
  const hasDemo = imageCount > 0;

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed inset-x-0 inset-y-4 sm:inset-4 z-50 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <div className="flex min-h-full items-start sm:items-center justify-center p-2 sm:p-4">
              <div className="relative w-full max-w-3xl bg-white dark:bg-dark-800 rounded-2xl shadow-2xl overflow-hidden">
                {/* Header — compact for case studies */}
                <div
                  className={`relative ${
                    hasCaseStudy ? "h-32 sm:h-36" : "h-52 sm:h-64"
                  } bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20`}
                >
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-5xl sm:text-6xl opacity-60">🚀</div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black/30" />

                  <button
                    onClick={onClose}
                    aria-label="닫기"
                    className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <X size={20} />
                  </button>

                  <div className="absolute bottom-3 left-4 right-14 sm:left-6 sm:right-16">
                    <h2
                      id="project-modal-title"
                      className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-snug"
                    >
                      {project.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-white/85 font-medium">
                      {project.period}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-7 md:p-8">
                  {/* Links + meta row */}
                  <div className="flex flex-wrap items-center gap-3 mb-5 pb-5 border-b border-slate-100 dark:border-dark-600">
                    {hasValidLink(project.github) && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                    {hasValidLink(project.live) && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 text-sm bg-primary-600 text-white hover:bg-primary-700 rounded-lg transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-dark-500 dark:text-dark-400 text-xs sm:text-sm ml-auto">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} aria-hidden="true" />
                        {project.period}
                      </span>
                      {project.teamSize && (
                        <span className="flex items-center gap-1.5">
                          <Users size={14} aria-hidden="true" />
                          {project.teamSize}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5">
                        <Code size={14} aria-hidden="true" />
                        {project.technologies.length} stack
                      </span>
                    </div>
                  </div>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {hasCaseStudy ? (
                    <div className="space-y-6 sm:space-y-7">
                      <CaseStudySection heading="문제">
                        <p>{project.problem}</p>
                      </CaseStudySection>

                      <CaseStudySection heading="역할">
                        <p>{project.role}</p>
                      </CaseStudySection>

                      <CaseStudySection heading="접근">
                        <p>{project.approach}</p>
                        {project.architecture && (
                          <pre className="case-study-architecture mt-3">
                            {project.architecture}
                          </pre>
                        )}
                      </CaseStudySection>

                      <CaseStudySection heading="결과">
                        <p>{project.result}</p>
                      </CaseStudySection>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <h3 className="case-study-heading mb-2">개요</h3>
                        <p className="text-dark-600 dark:text-dark-300 leading-relaxed text-sm sm:text-base">
                          {project.detailedDescription || project.description}
                        </p>
                      </div>

                      {project.features && project.features.length > 0 && (
                        <div className="mb-6">
                          <h3 className="case-study-heading mb-2">주요 기능</h3>
                          <ul className="space-y-1.5">
                            {project.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-300"
                              >
                                <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}

                  {/* Demo — secondary, only when media exists */}
                  {hasDemo && (
                    <div className="mt-7 pt-6 border-t border-slate-100 dark:border-dark-600">
                      <h3 className="case-study-heading mb-3">데모</h3>
                      <div className="relative w-full h-48 sm:h-56 bg-gray-100 dark:bg-dark-700 rounded-lg overflow-hidden flex items-center justify-center">
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
                                  className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-200 dark:bg-dark-600"
                                  custom={direction}
                                  variants={variants}
                                  initial="enter"
                                  animate="center"
                                  exit="exit"
                                >
                                  <span className="px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium">
                                    데모 영상 재생
                                  </span>
                                </motion.button>
                              )
                            ) : (
                              <motion.img
                                key={activeMedia}
                                src={activeMedia}
                                alt={`${project.title} 데모 ${activeIndex + 1}`}
                                className="absolute inset-0 w-full h-full object-contain"
                                loading="lazy"
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
                            )}
                          </AnimatePresence>
                        </div>
                        {project.image.length > 1 && (
                          <>
                            <button
                              type="button"
                              onClick={handlePrev}
                              aria-label="이전"
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-dark-800/80 p-2 rounded-full shadow text-sm z-10"
                            >
                              {"<"}
                            </button>
                            <button
                              type="button"
                              onClick={handleNext}
                              aria-label="다음"
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-dark-800/80 p-2 rounded-full shadow text-sm z-10"
                            >
                              {">"}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  )}
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
