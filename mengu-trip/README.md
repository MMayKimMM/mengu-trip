# MENGU TRIP v1.6 — Offline PWA

히로시마 여행용 정적 PWA. 서버/API/계정 없이 HTML, CSS, JS, localStorage에서 동작합니다.

## 준비
1. `assets/fonts/`에 직접 보유한 `NanumSquareNeo-Bold.woff2`, `NanumSquareNeo-ExtraBold.woff2`를 넣어주세요. 저작권이 허용된 경우에만 GitHub에 게시하세요. 폰트를 게시하기 어렵다면 CSS의 해당 @font-face를 제거하고 시스템 폰트를 사용해도 됩니다.
2. 공개 저장소에는 여권, 바우처, 보험 정보 등 개인정보 파일을 절대 추가하지 마세요.
3. `index.html`, `app.js`, `style.css`, `sw.js`, `manifest.webmanifest`, `assets/`를 모두 저장소 최상위에 업로드하세요.
4. GitHub 저장소 **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**를 설정합니다.
5. 생성된 HTTPS 사이트를 iPhone Safari에서 열고 **공유 → 홈 화면에 추가**로 설치합니다.
6. 온라인에서 홈/일정/장소/쇼핑/여행정보 탭을 열어본 뒤 비행기 모드로 전환하고 홈 화면 앱을 완전히 재시작해 확인합니다.

## 중요한 제한
- `localStorage`는 브라우저·사이트 주소별로 격리됩니다. localhost 또는 trycloudflare.com에서 입력했던 데이터는 GitHub Pages로 자동 이동하지 않습니다. 예전 주소에서 JSON 백업하고 새 주소에서 복원하세요.
- iOS는 저장공간 관리 등으로 로컬 데이터나 캐시를 지울 수 있으니 JSON 백업을 파일 앱에 따로 보관하세요.
- 지도, 외부 링크, 온라인 검색은 오프라인에서 열리지 않습니다.
- 서비스 워커는 HTTPS(또는 PC의 localhost)에서만 사용 가능합니다. 파일을 더블 클릭해 여는 file:// 모드에서는 오프라인 설치가 되지 않습니다.
- 인터넷 상태 배너는 참고 표시이며 데이터 저장과 캐시의 영구 보장을 뜻하지 않습니다.
- 배포한 소스 파일은 누구나 열람할 수 있습니다. 기본 일정·숙박 요금처럼 코드에 들어간 여행 계획도 공개될 수 있습니다.

## 업데이트
새 버전 배포 시 `sw.js`의 `CACHE` 버전 문자열을 변경하세요. 기존 기록은 `mengu_trip_v1` 저장 키를 유지합니다.
