import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import type { Project } from '../types/project';



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects: Project[] = [
    {
      title: 'Worktro RPA 솔루션 개발',
      description: '웹 기반 RPA 솔루션의 드래그앤드롭 방식의 RPA 프로세스 개발 툴을 개발했습니다.',
      thumbnail: '/worktro_logo.png',
      image: ['/worktro.gif'],
      technologies: ['Vue3', 'TypeScript', 'Java', 'Node.js', 'WebSocket', 'Canvas API'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      detailedDescription: 'Worktro는 웹 기반으로 동작하는 RPA(Robotic Process Automation) 솔루션입니다. 드래그앤드롭 방식의 RPA 프로세스 개발 툴을 담당하여 개발했습니다. 사용자가 직관적으로 RPA 워크플로우를 설계할 수 있도록 Canvas API와 드래그앤드롭 인터페이스를 구현했습니다. 프론트엔드, 서버, 클라이언트 앱 간의 세션 관리를 통해 프로세스 실행을 제어할 수 있도록 구현했습니다.',
              features: [
          '드래그앤드롭 방식의 프로세스 설계',
          '실시간 워크플로우 편집기',
          '다양한 RPA 액션 컴포넌트',
          '프로세스 실행 및 모니터링',
          '조건부 로직 및 반복 처리',
          '세션 기반 프로세스 실행 제어',
        ],
              challenges: [
          '드래그앤드롭 인터페이스 구현',
          'Canvas API를 활용한 워크플로우 시각화',
          '실시간 데이터 동기화 및 상태 관리',
          '프론트엔드-서버-클라이언트 앱 간 세션 관리',
          '대용량 프로세스의 성능 최적화',
          '다양한 브라우저 호환성 확보'
        ]
    },
    {
      title: 'NestJS REST API',
      description: 'NestJS와 TypeScript로 개발한 RESTful API 서버입니다. JWT 인증, PostgreSQL 데이터베이스 연동, Swagger를 통한 API 문서화를 구현했습니다.',
      image: ['/worktro.gif'],
      thumbnail: '',
      technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'JWT', 'Swagger'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      detailedDescription: 'NestJS 프레임워크를 사용하여 확장 가능하고 유지보수가 용이한 RESTful API를 구축했습니다. TypeORM을 활용한 PostgreSQL 데이터베이스 연동, JWT를 통한 사용자 인증, Swagger를 통한 API 문서 자동 생성 기능을 구현했습니다. 모듈화된 구조로 각 기능별로 분리하여 개발했습니다.',
      features: [
        '사용자 인증 및 권한 관리',
        'CRUD API 엔드포인트',
        '데이터베이스 연동 및 마이그레이션',
        'API 문서 자동 생성',
        '에러 핸들링 및 로깅',
        '환경 설정 관리'
      ],
      challenges: [
        'NestJS 아키텍처 설계 및 모듈화',
        'TypeORM을 활용한 복잡한 쿼리 최적화',
        'JWT 토큰 기반 인증 시스템 구현',
        'API 보안 및 입력 검증'
      ]
    },
    {
      title: '크롬 확장프로그램 개발',
      description: 'Worktro와 함께 사용하는 크롬 확장프로그램으로, 웹 엘리먼트 선택자 추출, 사용자 액션 프로세스화, CDP Session을 통한 브라우저 자동화 기능을 구현했습니다.',
      image: ['/selector.gif','/browserRecorder.gif'],
      thumbnail: '',
      technologies: ['Chrome Extension', 'JavaScript', 'TypeScript', 'CDP', 'WebDriver', 'DOM API'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      detailedDescription: 'Worktro RPA 솔루션과 함께 사용하는 크롬 확장프로그램을 개발했습니다. 클라이언트에서 Worktro 프로세스 개발 시 웹 엘리먼트 선택자를 쉽게 추출할 수 있는 기능과 사용자 액션을 프로세스화하는 기능을 구현했습니다. 또한 Selenium을 대체할 수 있는 CDP(Chrome DevTools Protocol) Session을 제어하여 WebDriver 없이 브라우저 자동화를 가능하게 했습니다.',
      features: [
        '웹 엘리먼트 선택자 자동 추출',
        '사용자 액션 프로세스화',
        'CDP Session을 통한 브라우저 자동화',
        'Worktro와의 실시간 연동',
        '웹페이지 요소 인스펙션',
        '자동화 스크립트 생성'
      ],
      challenges: [
        'Chrome Extension API 활용',
        'CDP Protocol 이해 및 구현',
        'DOM 요소 선택자 최적화',
        'Worktro와의 데이터 통신',
        '크로스 브라우저 호환성',
        '보안 정책 준수'
      ]
    },
    {
      title: 'OCR 프론트엔드 개발',
      description: '문서 OCR, 테이블 OCR, Canvas API를 활용한 문서 미리보기, 문서 레이블링, 학습 기능, OCR 테스트 기능을 구현한 프론트엔드 모듈을 개발했습니다.',
      image: ['/aicenter.gif'],
      thumbnail: '/worktro_logo.png',
      technologies: ['Vue3', 'TypeScript', 'Canvas API', 'PDF.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      detailedDescription: 'OCR(Optical Character Recognition) 기능을 위한 프론트엔드 모듈을 개발했습니다. 문서 OCR과 테이블 OCR 기능을 구현하고, Canvas API를 활용하여 문서 미리보기 기능을 제공합니다. 또한 문서 레이블링 기능과 학습 기능, OCR 테스트 기능을 통해 사용자가 OCR 결과를 검증하고 개선할 수 있도록 했습니다.',
      features: [
        '문서 OCR 및 테이블 OCR',
        'Canvas API 기반 문서 미리보기',
        '문서 레이블링 및 어노테이션',
        'OCR 결과 학습 및 개선',
        'OCR 테스트 및 검증',
        'PDF 문서 처리 및 렌더링'
      ],
      challenges: [
        'Canvas API를 활용한 대용량 문서 렌더링',
        'OCR 결과의 정확도 향상',
        '실시간 문서 미리보기 성능 최적화',
        '복잡한 테이블 구조 인식',
        '다양한 문서 형식 지원'
      ]
    },
    {
      title: 'Vue3 + NestJS Full Stack',
      description: 'Vue3 프론트엔드와 NestJS 백엔드를 결합한 풀스택 애플리케이션입니다. Socket.io를 활용한 실시간 채팅, 파일 업로드, 사용자 관리 기능을 구현했습니다.',
      image: ['/worktro.gif'],
      thumbnail: '',
      technologies: ['Vue3', 'NestJS', 'TypeScript', 'Socket.io', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      title: 'React Portfolio',
      description: 'React와 Framer Motion을 활용한 개발자 포트폴리오 웹사이트입니다. 반응형 디자인과 부드러운 애니메이션을 구현하여 사용자 경험을 향상시켰습니다.',
      image: ['/worktro.gif'],
      thumbnail: '',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            프로젝트
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            주로 사용하는 기술 스택인 TypeScript, Vue3, React, NestJS, Java Spring을 활용하여 개발한 프로젝트들입니다.
            각 프로젝트는 사용자 경험과 코드 품질을 모두 고려하여 개발되었습니다.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20">
                <div className="absolute inset-0 flex items-center justify-center">
                {project.thumbnail? <img src={project.thumbnail} alt={project.title} className="" /> : <div className="text-6xl">🚀</div>}
             
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-dark-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20">
                <div className="absolute inset-0 flex items-center justify-center">
                {project.thumbnail? <img src={project.thumbnail} alt={project.title} className="" /> : <div className="text-6xl">🚀</div>}

                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-dark-600 dark:text-dark-300 mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
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

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects; 