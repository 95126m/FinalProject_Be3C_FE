# 투자 매매 전략 공유 플랫폼 서비스, 시스메틱

<p align="center">
  <img alt="소개" src="https://github.com/user-attachments/assets/4f139e03-ef78-4fbe-8a8e-7db94d8c2d20">
</p>

## 1. 프로젝트 소개

- 시스메틱은 투자 매매 전략 공유 및 중개소셜 플랫폼 서비스입니다.
- 주식투자에 자신없는 투자자들이 꾸준한 수익을 내고 있는 트레이더를 발굴합니다.
- 투자자들의 다양한 투자전략들과 성과들을 공유하고 토론하면서 투자전략에 대한 본인의 스킬들을 향상시킬수 있는 계기를 마련합니다.

<br>

## 2. 팀원 소개

|                                                                  **김대영**                                                                   |                                                             **권혜지**                                                             |                                                                         **김영은**                                                                          |                                                                         **이윤환**                                                                          |     |
| :-------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :-: |
| [<img src="https://avatars.githubusercontent.com/u/106634493?v=4" height=150 width=150> <br/> @dev-meryoung](https://github.com/dev-meryoung) | [<img src="https://avatars.githubusercontent.com/u/92978022?v=4" height=150 width=150> <br/> @hyeppyy](https://github.com/hyeppyy) | [<img src="https://github.com/user-attachments/assets/d1d2b36b-27cd-4ac3-b453-c8f41b0f5424" height=150 width=150> <br/> @95126m](https://github.com/95126m) | [<img src="https://github.com/user-attachments/assets/a53e52f4-7a93-4448-ba6f-21450dca2781" height=150 width=150> <br/> @unanbb](https://github.com/unanbb) |

<br>

## 3. 프로젝트 기간

### 📅 전체 개발 기간

프로젝트 공유 자료 리딩 및 설계 : 2024. 10. 23. ~ 2024. 10. 30.<br>
프로젝트 세팅 : 2024. 10. 29. ~ 2024. 11. 04.<br>
디자인 파일 공유 및 퍼블리싱 작업 : 2024. 10. 29. ~ 2024. 11. 08.<br>
1차 기능 개발 : 2024. 11. 05. ~ 2024. 11. 20.<br>
2차 기능 개발 : 2024. 11. 21. ~ 2024. 12. 05.

<br>

## 4. 기술 스택 및 개발환경

| 기술 스택                                                                                                                  | 도입 이유                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)              | 컴포넌트 기반 아키텍처로 재사용성과 유지보수성이 높고 가상 DOM을 사용하여 효율적인 렌더링 제공 가능 |
| ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)   | 정적 타입 검사로 코드 안정성을 향상시키고 개발 시 오류를 조기에 발견 가능                           |
| ![Zustand](https://img.shields.io/badge/zustand-2759C6.svg?style=for-the-badge&logo=zustand&logoColor=white)               | 애플리케이션의 전역 상태 관리를 단순하고 직관적으로 관리 및 처리                                    |
| ![TanStack Query](https://img.shields.io/badge/tanstack--query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white) | 비동기 데이터 요청 및 캐싱 기능으로 효율적인 서버 데이터 관리                                       |
| ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)                     | 빠른 개발 서버 시작 및 빌드 시간 제공 가능                                                          |
| ![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)                         | Promise 기반의 직관적인 API와 요청/응답 처리의 간편함                                               |
| ![Emotion](https://img.shields.io/badge/emotion-%23FF69B4.svg?style=for-the-badge&logo=emotion&logoColor=white)            | CSS-in-JS 라이브러리로 컴포넌트 기반 스타일링 가능, 동적 스타일링 용이                              |

<br>

## 5. 역할 분담

### ◼️ 김대영

- UI
  - 페이지 : 로그인, 전략 등록, 전략 수정, 전략 상세, 전략승인 관리, 404(Page Not Found)
  - 공통 컴포넌트 : Pagination, Calendar, Tag, Comment, Breadcrumb, Header
- 그 외
  - 프로젝트 세팅 및 공통 로직 구현
  - 로그인한 사용자의 상태 전역 관리 구현
  - 개발용 배포 환경 설정
  - 프로젝트 전반 관리 및 기능 구현
  - GitHub Actions CI/CD 환경 구성

### ◼️ 권혜지

- UI
  - 페이지 : 메인, 전략 탐색, 트레이더별 전략 상세, 마이페이지 전략, 관리자 문의 관리
  - 공통 컴포넌트 : Modal, Tooltip, RangeSlider, Chart, Table, Loading, Checkbox
- 그 외
  - 라우팅 작업

### ◼️ 김영은

- UI
  - 페이지 : 로그인 계정찾기, 비밀번호 재설정, 마이페이지 프로필, 마이페이지 문의, 전략 문의등록, FAQ, 사용자 공지사항, 관리자 공지사항, 개인정보 처리 방침
  - 공통 컴포넌트 : Button, IconButton, Toggle, ProfileImage

### ◼️ 이윤환

- UI
  - 페이지 : 회원가입, 관리자 메인, 관리자 전략관리, 관리자 회원관리
  - 공통 컴포넌트 : SelectBox, RadioButton, Input, TextArea

<br>

## 6. 협업

- 회의: Slack, Zep<br>
- 디자인: Figma<br>
- 백엔드: Swagger

<br>

## 7. 페이지 소개

| 페이지                | 설명                                                                                                                                                                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 메인 페이지           | 시스메틱 인기 트레이더 랭킹, 시스메틱 현황, 대표 전략 평균 지표, SM SCORE 랭킹 TOP 5 정보를 확인할 수 있음.                                                                                                                              |
| 로그인 페이지         | 사용자 로그인 기능을 제공하는 페이지. 이메일과 비밀번호를 입력하여 사용자가 인증을 받을 수 있도록 도와줌. 비밀번호 재설정, 계정 찾기 기능 제공.                                                                                          |
| 회원가입 페이지       | 사용자가 새로운 계정을 만들 수 있는 페이지. 이름, 이메일, 닉네임, 생년월일, 프로필 이미지, 비밀번호 등 필요한 정보를 입력받아 가입 처리.                                                                                                 |
| 전략탐색 페이지       | 사용자가 다양한 전략을 탐색하고, 특정 전략을 선택할 수 있는 페이지. 원하는 전략을 필터링하거나 검색하여 찾을 수 있으며, 시스메틱에 등록된 전체 트레이더 목록도 제공.                                                                     |
| 전략상세 페이지       | 특정 전략에 대한 상세 정보를 확인할 수 있는 페이지. 월간 손익률, 실계좌 정보 및 전략에 대한 다른 지표들을 제공. 분석 파일 엑셀 다운로드 제공.                                                                                            |
| 전략등록 페이지       | 트레이더가 새로운 전략을 시스템에 등록할 수 있는 페이지. 전략의 상세 정보 및 제안서를 추가할 수 있으며, 전략에 대한 설명을 기입할 수 있음.                                                                                               |
| 공지사항 페이지       | 서비스의 주요 공지사항을 사용자에게 전달하는 페이지. 서비스의 업데이트, 점검 일정, 새로운 기능 등을 안내.                                                                                                                                |
| 자주 묻는 질문 페이지 | 사용자들이 자주 묻는 질문들을 모아놓은 페이지. 서비스 이용 중 발생할 수 있는 문제를 해결할 수 있도록 돕는 정보 제공.                                                                                                                     |
| 마이페이지            | 사용자가 자신의 계정 정보를 관리하는 페이지. 개인 정보, 비밀번호 변경, 가입 정보 등을 확인하고 수정할 수 있으며, 내가 문의한 상담 내용을 확인할 수 있음. 트레이더는 내가 등록한 전략을 관리하고, 투자자는 내 관심 전략을 관리할 수 있음. |
| 관리자 페이지         | 서비스 관리자가 시스템을 관리하고 모니터링하는 페이지. 회원 관리, 전략 관리, 공지 및 문의 관리, 서비스 통계 확인 등 다양한 관리 기능 제공.                                                                                               |
