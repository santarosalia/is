import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import ProjectModal from "./ProjectModal";
import type { Project } from "../types/project";
import { PROJECTS } from "../data/projects";
import { hasValidLink } from "../constants/site";

type ScopeFilter = "all" | "company" | "personal";

function inferProjectScope(project: Project): "company" | "personal" {
  const blob = [
    project.title,
    project.description,
    project.detailedDescription ?? "",
    project.live,
  ].join(" ");

  if (
    blob.includes("사내 B2B") ||
    blob.includes("사내 문서") ||
    blob.includes("회사 프로젝트") ||
    blob.includes("Worktro") ||
    blob.includes("digitalworker") ||
    blob.includes("docuops")
  ) {
    return "company";
  }

  if (
    blob.includes("개인 프로젝트") ||
    project.github.includes("github.com/santarosalia")
  ) {
    return "personal";
  }

  const companyTitles = [
    "OCR",
    "Work Assistant",
    "WUI",
    "AI-Agent",
    "크롬",
    "문서 추출",
    "SLM",
    "Hybrid RAG",
    "Chat Agent",
    "Langfuse",
    "Worktro",
  ];
  if (companyTitles.some((keyword) => project.title.includes(keyword))) {
    return "company";
  }

  return "personal";
}

function matchesScope(project: Project, filter: ScopeFilter): boolean {
  if (filter === "all") return true;
  return inferProjectScope(project) === filter;
}

interface TechnologyTagsProps {
  technologies: string[];
  maxVisible: number;
  compact?: boolean;
}

function TechnologyTags({
  technologies,
  maxVisible,
  compact = false,
}: TechnologyTagsProps) {
  const visible = technologies.slice(0, maxVisible);
  const remaining = technologies.length - maxVisible;

  return (
    <div className="flex flex-wrap gap-1.5 min-w-0">
      {visible.map((tech) => (
        <span
          key={tech}
          className={`project-tag ${compact ? "project-tag-compact" : ""}`}
        >
          {tech}
        </span>
      ))}
      {remaining > 0 && (
        <span className={`project-tag-more ${compact ? "project-tag-compact" : ""}`}>
          +{remaining}
        </span>
      )}
    </div>
  );
}

interface ProjectLinksProps {
  project: Project;
  featured?: boolean;
}

function ProjectLinks({ project, featured = false }: ProjectLinksProps) {
  const showGithub = hasValidLink(project.github);
  const showLive = hasValidLink(project.live);

  if (!showGithub && !showLive) return null;

  return (
    <div
      className="flex flex-wrap items-center gap-x-4 gap-y-2 min-w-0"
      onClick={(e) => e.stopPropagation()}
    >
      {showGithub && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 interactive-focus shrink-0 ${
            featured ? "px-1 py-0.5" : "p-1"
          }`}
        >
          <Github size={featured ? 18 : 16} aria-hidden="true" />
          {featured && <span className="text-sm">GitHub</span>}
        </a>
      )}
      {showLive && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 interactive-focus shrink-0 ${
            featured ? "px-1 py-0.5" : "p-1"
          }`}
        >
          <ExternalLink size={featured ? 18 : 16} aria-hidden="true" />
          {featured && <span className="text-sm">Live Demo</span>}
        </a>
      )}
    </div>
  );
}

interface ProjectThumbnailProps {
  project: Project;
  featured?: boolean;
}

function ProjectThumbnail({ project, featured = false }: ProjectThumbnailProps) {
  if (!project.thumbnail) return null;

  const heightClass = featured ? "h-52 sm:h-56" : "h-40 sm:h-44";

  return (
    <div
      className={`relative ${heightClass} bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/20 shrink-0`}
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  );
}

interface ProjectCardMetaProps {
  project: Project;
  showScope: boolean;
}

function ProjectCardMeta({ project, showScope }: ProjectCardMetaProps) {
  const scopeLabel =
    inferProjectScope(project) === "company" ? "회사" : "개인";

  return (
    <p className="project-card-meta">
      {showScope && (
        <>
          <span>{scopeLabel}</span>
          <span className="project-card-meta-sep" aria-hidden="true">
            ·
          </span>
        </>
      )}
      <span>{project.period}</span>
    </p>
  );
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  index: number;
  showScope: boolean;
  onOpen: (project: Project) => void;
}

function ProjectCard({
  project,
  featured = false,
  index,
  showScope,
  onOpen,
}: ProjectCardProps) {
  const hasThumbnail = Boolean(project.thumbnail);

  return (
    <motion.div
      initial={{ opacity: 0, y: featured ? 50 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * (featured ? 0.15 : 0.08) }}
      viewport={{ once: true }}
      className={`group project-card min-w-0 w-full ${
        featured ? "project-card-featured" : "project-card-standard"
      } ${!hasThumbnail ? "project-card-text-first" : ""}`}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(project);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${project.title} 프로젝트 상세 보기`}
    >
      <ProjectThumbnail project={project} featured={featured} />

      <div
        className={`flex flex-col min-w-0 flex-1 ${
          featured ? "p-6 sm:p-7" : "p-4 sm:p-5"
        }`}
      >
        <h3
          className={`project-card-title mb-3 min-w-0 ${
            featured ? "project-card-title-featured" : ""
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`project-card-description ${
            featured ? "line-clamp-3 mb-5" : "line-clamp-2 mb-4"
          }`}
        >
          {project.description}
        </p>

        <div className={featured ? "mb-6" : "mb-4"}>
          <TechnologyTags
            technologies={project.technologies}
            maxVisible={featured ? 5 : 3}
            compact={!featured}
          />
        </div>

        <div className="mt-auto pt-4 min-w-0 border-t border-slate-100 dark:border-dark-600/80">
          <ProjectLinks project={project} featured={featured} />
          <ProjectCardMeta project={project} showScope={showScope} />
        </div>
      </div>
    </motion.div>
  );
}

const SCOPE_TABS: { id: ScopeFilter; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "company", label: "회사" },
  { id: "personal", label: "개인" },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scopeFilter, setScopeFilter] = useState<ScopeFilter>("all");

  const filteredProjects = useMemo(
    () => PROJECTS.filter((project) => matchesScope(project, scopeFilter)),
    [scopeFilter]
  );

  const featuredProjects = useMemo(
    () => filteredProjects.filter((project) => project.featured),
    [filteredProjects]
  );

  const otherProjects = useMemo(
    () => filteredProjects.filter((project) => !project.featured),
    [filteredProjects]
  );

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-14"
        >
          <h2 className="section-heading">프로젝트</h2>
          <p className="section-subtitle">
            주로 사용하는 TypeScript, Next.js, NestJS, RAG 스택으로 개발한
            프로젝트입니다. SLM Rewrite · Hybrid RAG · Chat Agent 3건은
            문제·역할·접근·결과 케이스 스터디로 상세히 정리했습니다.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
          {SCOPE_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setScopeFilter(tab.id)}
              className={`project-scope-tab ${
                scopeFilter === tab.id ? "project-scope-tab-active" : ""
              }`}
              aria-pressed={scopeFilter === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {featuredProjects.length > 0 && (
          <div className="mb-14 md:mb-20">
            <h3 className="project-section-label mb-6 md:mb-8">
              주요 프로젝트
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 min-w-0">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  featured
                  index={index}
                  showScope={scopeFilter === "all"}
                  onOpen={openModal}
                />
              ))}
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            {featuredProjects.length > 0 && (
              <h3 className="project-section-label mb-6 md:mb-8">
                기타 프로젝트
              </h3>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-w-0">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  showScope={scopeFilter === "all"}
                  onOpen={openModal}
                />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <p className="text-center text-dark-600 dark:text-dark-300 py-12">
            선택한 분류에 해당하는 프로젝트가 없습니다.
          </p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-14"
        >
          <motion.a
            href="https://github.com/santarosalia"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn-secondary"
          >
            더 많은 프로젝트 보기
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
