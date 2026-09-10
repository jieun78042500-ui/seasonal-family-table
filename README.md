# 제철라이프 — GitHub · Vercel 배포용 소스

5인 가족을 위한 제철 식단 홈페이지입니다. 개편한 Home과 기존 주간 식단, 장보기, 26개 레시피, 24절기, 12재료 20메뉴, 양념 사전, 5분 운동, 블로그를 모두 포함합니다.

## 가장 먼저

ZIP 압축을 풀고 **폴더 안의 파일과 폴더**를 GitHub 저장소에 올리세요. ZIP 파일 자체를 GitHub에 올리면 Vercel이 홈페이지를 빌드할 수 없습니다.
저장소 최상위에 `package.json`, `package-lock.json`, `vercel.json`, `app/`, `components/`, `public/` 등이 있어야 합니다.
이미지가 많으므로 GitHub 웹 업로드가 제한되면 GitHub Desktop에서 폴더를 저장소로 추가해 게시하거나 파일을 나누어 올리세요.

## Vercel 배포

1. GitHub에서 새 저장소를 만들고 압축을 푼 소스 전체를 올립니다.
2. Vercel에서 Add New → Project → 해당 GitHub 저장소를 가져옵니다.
3. Framework Preset: **Next.js**
4. Root Directory: **저장소 루트** (`package.json`이 있는 위치)
5. Install Command: **npm ci**
6. Build Command: **npm run build**
7. Output Directory: **기본값 유지** (이전 정적 사이트의 `public` 설정을 사용하지 마세요.)
8. Node.js: **22.x 또는 24.x**
9. Deploy를 누릅니다.

`vercel.json`에 프레임워크와 설치·빌드 명령이 설정되어 있습니다.
기존 Vercel 프로젝트를 재사용한다면 Framework Preset과 Output Directory도 위 값으로 확인하세요.

## 사이트 주소 / SEO

Vercel에서는 `VERCEL_PROJECT_PRODUCTION_URL`을 이용해 canonical, 사이트맵, 공유 주소를 설정합니다.
개인 도메인을 사용하면 Vercel의 Environment Variables에 아래 값을 넣고 재배포하세요.

    NEXT_PUBLIC_SITE_URL=https://사용할-도메인

`.env.example`을 참고하세요. 로컬 실행에서는 기본 주소가 `http://localhost:3000`입니다.
필수 API 키, 로그인 또는 데이터베이스는 없습니다.

## 내 컴퓨터에서 실행

Node.js 22.13 이상을 설치한 뒤 폴더에서 실행하세요.

    npm ci
    npm run dev

브라우저에서 http://localhost:3000 을 엽니다.
배포 빌드 확인:

    npm run build
    npm start

## 주요 파일

- `app/page.tsx`: Home 콘텐츠, CTA, Home SEO, WebSite 구조화 데이터
- `app/home.css`: 홈 화면과 헤더·푸터 디자인 및 반응형 설정
- `components/site-shell.tsx`: 헤더, 모바일 메뉴, 푸터
- `components/home-season-summary.tsx`: 오늘 날짜·절기·다음 절기 표시
- `lib/food.ts`: 5인 가족 식단·레시피·장보기 데이터
- `lib/posts.ts`: 블로그 내용 (배열 앞의 3개가 홈에 표시)
- `lib/seasons.ts`: 2026년 24절기 데이터
- `lib/site.ts`: 사이트 주소, 메뉴, 공통 SEO
- `public/jecheol-life-logo.png`: 제공받은 로고 원본, 색상·비율 유지
- `public/meal-*.png`, `public/seasonal-table.png`: 기존 음식 사진
- `public/seasons/`: 기존 24절기 이미지

## 반영 사항

- 요청한 13단계 흐름으로 Home 개편
- 핵심 CTA를 헤더·히어로·7일 식단·마지막 영역에 반복 배치
- PC 4열 / 태블릿 3열 / 모바일 2열 / 360px 미만 1열 식단 카드
- 메뉴명·유형·레시피 링크는 사진 아래 세로 배치
- 원본 로고와 음식 사진 보존, 푸터 로고 배경은 크림색
- 실제 기존 URL 연결, 날짜는 한국 시간으로 갱신
- 하위 페이지 콘텐츠와 체크리스트, 필터, 운동 타이머 유지

## 운영 참고

주간 식단은 기존 가을 식단 예시입니다. 매주 자동으로 새로운 메뉴를 생성하지 않습니다.
절기 데이터는 2026년 기준입니다. 다른 해에는 `lib/seasons.ts` 데이터를 갱신해 주세요.
장보기·재료 체크는 방문자의 브라우저에 저장됩니다.
이 파일은 소스 배포용이며 GitHub 업로드와 Vercel 공개 배포는 수행하지 않았습니다.

## 공식 안내

- [Vercel 프로젝트 설정](https://vercel.com/docs/project-configuration)
- [Vercel 시스템 환경변수](https://vercel.com/docs/environment-variables/system-environment-variables)
- [Next.js 실행 및 빌드 명령](https://nextjs.org/docs/app/api-reference/cli/next)
