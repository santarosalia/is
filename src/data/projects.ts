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
      title: 'HR-Expert 솔루션 개발',
      description: 'Vue3 + NestJS 기반의 AI 인사 솔루션입니다. 문서 추출, 표절검사, 주요부분 하이라이트, 인터뷰 질문생성 기능을 제공하여 채용 프로세스를 효율적으로 지원합니다.',
      image: ['/worktro.gif'],
      thumbnail: '',
      technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'JWT', 'Swagger', 'Vue3', 'Prisma'],
      github: '',
      live: '',
      featured: true,
      detailedDescription: 'NestJS 프레임워크를 사용하여 확장 가능하고 유지보수가 용이한 RESTful API를 구축했습니다. Prisma를 활용한 PostgreSQL 데이터베이스 연동, JWT를 통한 사용자 인증, Swagger를 통한 API 문서 자동 생성 기능을 구현했습니다. 모듈화된 구조로 각 기능별로 분리하여 개발했습니다.',
      features: [
        '사용자 인증 및 권한 관리',
        'CRUD API 엔드포인트',
        '데이터베이스 연동',
        'API 문서 자동 생성',
        '에러 핸들링 및 로깅',
        '환경 설정 관리'
      ],
      challenges: [
        'NestJS 아키텍처 설계 및 모듈화',
        'Prisma를 활용한 데이터베이스 연동',
        'JWT 토큰 기반 인증 시스템 구현',
        'API 보안 및 입력 검증'
      ]
    },
    {
      title: '크롬 확장프로그램 개발',
      description: 'Worktro와 함께 사용하는 크롬 확장프로그램으로, 웹 엘리먼트 선택자 추출, 사용자 액션 프로세스화, CDP Session을 통한 브라우저 자동화 기능을 구현했습니다.',
      image: ['/selector.gif','/browserRecorder.gif'],
      thumbnail: '',
      technologies: ['Chrome API', 'JavaScript', 'TypeScript', 'CDP', 'DOM API'],
      github: '',
      live: 'https://chromewebstore.google.com/detail/worktronics-browser-autom/okgoldnaebbnedldbbdambomgnpipphj',
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
        'Manifest V3 적용',
        'Native Messaging 활용 클라이언트 앱 연동'
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
      title: 'Work Assistant 프로세스 실행기',
      description: 'Worktro와 결합하여 사용 가능한 프로세스 실행기입니다. C# WebView에 Vue3 + Vuetify로 UI를 구성하여 기존 백엔드에 새로운 화면을 제공하고, 배포된 프로세스를 즉시 실행할 수 있습니다.',
      image: ['/workAssistant.gif'],
      thumbnail: '/worktro_logo.png',
      technologies: ['C#', 'WebView', 'Vue3', 'Vuetify', 'TypeScript'],
      github: '',
      live: 'https://wa.digitalworker.co.kr',
      featured: false,
      detailedDescription: 'Worktro RPA 솔루션과 연동되는 프로세스 실행기를 개발했습니다. C# WebView를 기반으로 하여 Vue3와 Vuetify를 활용한 모던한 UI를 구성했습니다. 기존 Worktro 백엔드 시스템과 연동하여 배포된 RPA 프로세스를 즉시 실행할 수 있는 독립적인 실행 환경을 제공합니다.',
      features: [
        'C# WebView 기반 독립 실행 환경',
        'Vue3 + Vuetify 모던 UI 구성',
        'Worktro 프로세스 즉시 실행',
        '실시간 프로세스 모니터링',
        '사용자 친화적 인터페이스',
        '기존 백엔드 시스템과의 원활한 연동'
      ],
      challenges: [
        'C# WebView와 Vue3 통합',
        'Vuetify 컴포넌트 최적화',
        'Worktro 백엔드 API 연동',
        '프로세스 실행 상태 관리',
        '크로스 플랫폼 호환성',
        '실시간 데이터 동기화'
      ]
    },
    {
      title: 'WUI 디자인 컴포넌트 라이브러리',
      description: 'Vue3 기반의 Worktro 디자인 시스템 컴포넌트 라이브러리입니다. 30개의 다양한 컴포넌트와 MUI 그리드 시스템을 참고한 레이아웃 시스템을 개발하여 일관된 UI/UX를 제공합니다.',
      image: ['/worktro_logo.png'],
      thumbnail: '/worktro_logo.png',
      technologies: ['Vue3', 'TypeScript', 'Vite', 'Storybook', 'NPM', 'Nexus Repository'],
      github: '',
      live: '',
      featured: true,
      detailedDescription: 'Worktro 프로젝트의 일관된 디자인 시스템을 위해 Vue3 기반의 컴포넌트 라이브러리를 개발했습니다. 총 30개의 다양한 컴포넌트를 구현하여 버튼, 폼, 네비게이션, 데이터 표시 등 모든 UI 요소를 표준화했습니다. MUI의 그리드 시스템을 참고하여 반응형 레이아웃 시스템을 개발했으며, Storybook을 활용하여 컴포넌트 문서화 및 개발 환경을 구축했습니다. 사내망 Nexus Repository에 NPM 패키지로 배포하여 팀 내에서 쉽게 사용할 수 있도록 했습니다.',
      features: [
        '30개 Vue3 기반 디자인 컴포넌트',
        '그리드 시스템',
        '반응형 레이아웃 시스템',
        '컴포넌트 문서화',
        'TypeScript 타입 지원',
        'Nexus Repository NPM 배포',
        '일관된 디자인 토큰 시스템',
        '다크/라이트 테마 지원'
      ],
      challenges: [
        '대규모 컴포넌트 라이브러리 아키텍처 설계',
        'MUI 그리드 시스템의 Vue3 적응',
        '사내 Nexus Repository 구축 및 배포',
        '컴포넌트 간 일관성 유지',
        'TypeScript 타입 정의 최적화',
        'WUI 기반 문서화',
        '버전 관리 및 호환성 유지'
      ]
    },
    {
      title: '홀리심볼 타이머',
      description: '메이플스토리 홀리심볼 스킬 쿨다운을 관리하는 일렉트론 기반 타이머 앱입니다. 웹뷰로 구성된 UI와 백그라운드 단축키 감지 기능을 통해 게임 중에도 편리하게 타이머를 리셋할 수 있습니다.',
      image: ['/worktro_logo.png'],
      thumbnail: '/worktro_logo.png',
      technologies: ['Next.js', 'Electron', 'React', 'TypeScript', 'WebView', 'Global Hotkey'],
      github: 'https://github.com/santarosalia/holy-symbol-timer',
      live: 'https://holy-symbol-timer.vercel.app/',
      featured: false,
      detailedDescription: '메이플스토리 게임을 즐기면서 홀리심볼 스킬의 쿨다운을 효율적으로 관리하기 위해 개발한 개인 프로젝트입니다. 일렉트론 프레임워크를 기반으로 하여 웹뷰를 통해 Vue3로 구성된 직관적인 타이머 인터페이스를 제공합니다. 백그라운드에서 전역 단축키를 감지하여 게임 중에도 타이머를 쉽게 리셋할 수 있으며, 쿨다운 완료 시 알림 기능을 통해 스킬 사용 타이밍을 놓치지 않도록 도와줍니다.',
      features: [
        '홀리심볼 스킬 쿨다운 타이머',
        '전역 단축키를 통한 타이머 리셋',
        '쿨다운 완료 시 알림 기능',
        '웹뷰 기반 직관적인 UI',
        '백그라운드 실행 지원',
        '게임 중 오버레이 형태로 표시',
        '타이머 커스터마이징 옵션'
      ],
      challenges: [
        '일렉트론과 Vue3 통합',
        '전역 단축키 감지 및 처리',
        '백그라운드 프로세스 관리',
        '게임과의 호환성 확보',
        '시스템 알림 권한 처리',
        '크로스 플랫폼 지원'
      ]
    },
  ];