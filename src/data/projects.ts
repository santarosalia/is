import type { Project } from "../types/project";

export const PROJECTS: Project[] = [
    {
      title: 'Worktro RPA 솔루션 개발',
      description: '웹 기반 RPA 솔루션의 드래그앤드롭 방식의 RPA 프로세스 개발 툴을 개발했습니다.',
      thumbnail: '/worktro_logo.png',
      image: ['/worktro.gif'],
      technologies: ['Vue3', 'TypeScript', 'Java', 'Node.js', 'WebSocket', 'Canvas API'],
      github: '',
      live: 'https://wd.digitalworker.co.kr',
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