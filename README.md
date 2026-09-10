# 제철라이프

HTML, CSS, JavaScript로 만든 정적 홈페이지입니다. 별도 패키지 설치나 빌드가 필요하지 않습니다.

## GitHub에 올리기

1. ZIP 압축을 풉니다.
2. GitHub에서 새 저장소를 만듭니다.
3. Add file → Upload files에서 압축을 푼 폴더 안의 public 폴더, vercel.json, README.md 등을 올립니다.
4. 저장소 최상위에 public/과 vercel.json이 보이도록 합니다. ZIP 자체를 올리는 방식이 아닙니다.

## Vercel에서 배포하기

1. Vercel에서 Add New → Project를 선택하고 GitHub 저장소를 가져옵니다.
2. Framework Preset은 Other, Root Directory는 저장소 루트를 사용합니다.
3. vercel.json에 Output Directory가 public으로 설정되어 있습니다. Build Command와 Install Command는 비워 둡니다.
4. Deploy를 누릅니다.

공식 안내: https://vercel.com/docs/builds/configure-a-build
설정 안내: https://vercel.com/docs/project-configuration

## 파일 수정

- public/app.js: 메뉴, 본문, 날짜, 날씨 예시 등 주요 콘텐츠
- public/styles.css: 기본 디자인
- public/cute.css, public/cute.js: 추가 디자인과 동작
- public/24-seasons.svg: 24절기 이미지
- public/index.html: 첫 화면 진입 파일
- public/food, season, weather, health, travel, letter: 각 메뉴의 진입 파일

## 로컬에서 확인하기

Python이 설치되어 있다면 압축을 푼 폴더에서 다음 명령을 실행합니다.

    python -m http.server 8000 --directory public

브라우저에서 http://localhost:8000 을 엽니다. 파일을 더블클릭하는 방식은 루트 기준 경로 때문에 일부 리소스가 표시되지 않을 수 있습니다.

## 원본 상태와 외부 리소스

기존 로컬 제철라이프/dist의 사이트 파일을 그대로 포함했습니다.
날짜와 날씨는 원본의 고정된 예시이며 실시간 API에 연결되어 있지 않습니다.
첫 화면 배경 사진은 public/styles.css에 있는 아래 외부 주소를 사용합니다. 사진 파일 자체는 이 ZIP에 포함되어 있지 않으며 외부 서버 상태에 영향을 받습니다.

https://brand.taisho.co.jp/content/dam/selfmedication/jp/ja/lipovitan/web/colum/sports/373_file0.jpg

이 ZIP은 배포용 파일 묶음입니다. GitHub 업로드나 Vercel 실제 배포는 아직 실행하지 않았습니다.
