# DevPortfolio - 프론트엔드 개발자 포트폴리오

현대적이고 반응형인 개발자 포트폴리오 웹사이트입니다. React, TypeScript, Tailwind CSS, Framer Motion을 사용하여 제작되었습니다.

## 🚀 기술 스택

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## ✨ 주요 기능

- 🌙 다크 모드 지원
- 📱 완전 반응형 디자인
- 🎨 부드러운 애니메이션
- ⚡ 빠른 로딩 속도
- 🔍 SEO 최적화
- 📧 연락처 폼
- 🎯 스크롤 기반 애니메이션

## 🏗️ 프로젝트 구조

```
src/
├── components/
│   ├── Header.tsx      # 네비게이션 헤더
│   ├── Hero.tsx        # 메인 히어로 섹션
│   ├── About.tsx       # 소개 섹션
│   ├── Projects.tsx    # 프로젝트 섹션
│   ├── Skills.tsx      # 기술 스택 섹션
│   ├── Contact.tsx     # 연락처 섹션
│   └── Footer.tsx      # 푸터
├── App.tsx             # 메인 앱 컴포넌트
├── main.tsx           # 앱 진입점
└── index.css          # 글로벌 스타일
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 18+ 
- pnpm

### 설치 및 실행

1. 저장소 클론
```bash
git clone <repository-url>
cd dev-portfolio
```

2. 의존성 설치
```bash
pnpm install
```

3. 개발 서버 실행
```bash
pnpm dev
```

4. 브라우저에서 확인
```
http://localhost:5173
```

### 빌드

```bash
pnpm build
```

### 미리보기

```bash
pnpm preview
```

## 🎨 커스터마이징

### 색상 테마 변경

`tailwind.config.js` 파일에서 색상 팔레트를 수정할 수 있습니다:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... 더 많은 색상
  }
}
```

### 콘텐츠 수정

각 컴포넌트 파일에서 다음을 수정할 수 있습니다:
- 개인 정보
- 프로젝트 목록
- 기술 스택
- 연락처 정보

### 애니메이션 조정

Framer Motion의 애니메이션 설정을 각 컴포넌트에서 조정할 수 있습니다.

## 📱 반응형 디자인

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🌙 다크 모드

사용자의 시스템 설정에 따라 자동으로 다크 모드가 적용되며, 헤더의 토글 버튼으로 수동 전환도 가능합니다.

## 📧 연락처 폼

연락처 섹션의 폼은 현재 콘솔에 데이터를 출력합니다. 실제 이메일 서비스나 백엔드 API와 연동하려면 `Contact.tsx`의 `handleSubmit` 함수를 수정하세요.

## 🔧 추가 설정

### 환경 변수

`.env` 파일을 생성하여 환경 변수를 설정할 수 있습니다:

```env
VITE_SITE_URL=https://your-domain.com
VITE_CONTACT_EMAIL=hello@example.com
```

### 배포

Vercel, Netlify, GitHub Pages 등 다양한 플랫폼에 배포할 수 있습니다.

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 연락처

- 이메일: hello@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
