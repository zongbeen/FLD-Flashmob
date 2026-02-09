# 🇰🇷 태극기 플래시몹 모집 웹사이트

## 📁 파일 구조
```
flashmob/
├── index.html      # 메인 HTML 파일
├── style.css       # 스타일 시트
├── script.js       # JavaScript 파일
└── README.md       # 이 파일
```

## 🚀 시작하기

### 1. 동영상 추가하기
`index.html` 파일의 27-33번째 줄을 수정하세요:

**방법 A: 동영상 파일 직접 업로드**
```html
<video id="promo-video" controls poster="thumbnail.jpg">
    <source src="your-video.mp4" type="video/mp4">
    브라우저가 동영상을 지원하지 않습니다.
</video>
```
- `your-video.mp4`를 실제 동영상 파일명으로 변경
- 동영상 파일을 같은 폴더에 저장

**방법 B: YouTube 동영상 사용 (권장)**
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>
```
- YouTube에 동영상 업로드 후 공유 > 퍼가기에서 코드 복사
- `VIDEO_ID` 부분을 실제 동영상 ID로 변경

### 2. 구글폼 링크 추가하기
`index.html` 파일의 124번째 줄 수정:
```html
<a href="https://forms.gle/YOUR_FORM_ID" class="apply-button" target="_blank">
```
- 구글폼 생성 후 '보내기' > '링크' 복사
- `YOUR_GOOGLE_FORM_URL`을 실제 구글폼 링크로 변경

### 3. 로컬에서 테스트하기
1. VS Code에서 Live Server 확장 설치
2. `index.html` 우클릭 > "Open with Live Server"
3. 브라우저에서 자동으로 열림

## 🌐 웹사이트 배포하기

### 옵션 1: GitHub Pages (무료, 추천)
1. GitHub 계정 생성 (https://github.com)
2. 새 저장소(repository) 생성
3. 파일 업로드
4. Settings > Pages에서 배포
5. URL: `https://username.github.io/repository-name`

### 옵션 2: Netlify (무료, 가장 쉬움)
1. Netlify 계정 생성 (https://netlify.com)
2. "Add new site" > "Deploy manually"
3. flashmob 폴더를 드래그 앤 드롭
4. 즉시 배포 완료!
5. 무료 URL 제공: `random-name.netlify.app`
6. 원하는 이름으로 변경 가능

### 옵션 3: Vercel (무료)
1. Vercel 계정 생성 (https://vercel.com)
2. "Add New Project"
3. GitHub 연동 또는 파일 업로드
4. 자동 배포

## 📱 QR 코드 생성하기

### 방법 1: 온라인 도구 사용
1. 웹사이트 배포 후 URL 복사
2. QR 코드 생성 사이트 방문:
   - https://www.qr-code-generator.com
   - https://www.qrcode-monkey.com
   - 네이버 QR코드 생성기
3. URL 입력 후 QR 코드 다운로드

### 방법 2: Chrome에서 바로 생성
1. 배포된 웹사이트 접속
2. 주소창 우측의 QR 아이콘 클릭
3. "다운로드" 버튼으로 저장

## ✏️ 내용 수정하기

### 날짜 변경
`index.html`에서 해당 날짜 찾아서 수정

### 참가비 변경
88-91번째 줄 수정:
```html
<p class="price">10,000원</p>
```

### 색상 변경
`style.css`에서:
- 메인 색상: `#667eea` (보라색)
- 강조 색상: `#f5576c` (분홍색)
- 검색하여 원하는 색상 코드로 변경

## 📊 방문자 추적 (선택사항)

### Google Analytics 추가
1. Google Analytics 계정 생성
2. `</head>` 태그 앞에 추적 코드 추가:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎨 커스터마이징 팁

### 폰트 변경
`style.css` 6번째 줄:
```css
font-family: 'Your Font', -apple-system, sans-serif;
```

### 배경 그라데이션 변경
`style.css` 9번째 줄에서 색상 조정

### 버튼 스타일 변경
`.apply-button` 클래스 스타일 수정

## 📞 문의사항
웹사이트 관련 기술적 문의사항이 있으시면 언제든지 말씀해주세요!

## ✅ 체크리스트
- [ ] 동영상 추가 완료
- [ ] 구글폼 링크 연결 완료
- [ ] 로컬에서 테스트 완료
- [ ] 웹사이트 배포 완료
- [ ] QR 코드 생성 완료
- [ ] 모바일에서 테스트 완료
