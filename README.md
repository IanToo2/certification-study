# AWS SAA-C03 한국어 스터디북

이 프로젝트는 AWS Solutions Architect Associate(SAA-C03) 시험 대비를 위한 한국어 스터디북 원고다. 모든 콘텐츠는 Markdown으로 관리하며, 이후 PDF로 변환해 학습서 형태로 배포하는 것을 전제로 구성했다.

## 목표

- AWS 핵심 서비스를 시험 관점에서 빠르게 정리한다.
- 서비스 간 선택 기준을 비교 중심으로 설명한다.
- 고가용성, 비용 최적화, 보안, 운영 자동화 패턴을 반복 학습하게 만든다.
- 문제 풀이 시 자주 틀리는 함정 포인트를 따로 분리해 기억하기 쉽게 만든다.

## 공개 주소

- GitHub 저장소: `https://github.com/IanToo2/certification-study`
- GitHub Pages 배포 주소: `https://iantoo2.github.io/certification-study/`

## 문서 구성 원칙

- 모든 설명은 한국어로 작성한다.
- AWS 서비스명은 `Amazon EC2`, `AWS Lambda`, `Amazon RDS`처럼 English 표기를 유지한다.
- 각 서비스 설명은 아래 8개 항목을 반드시 포함한다.
  - 서비스 개념
  - 아키텍처 구조
  - 언제 사용하는가
  - 언제 사용하면 안되는가
  - 비슷한 서비스와 차이
  - 시험에서 자주 나오는 문제 유형
  - 시험 함정 포인트
  - 실무 아키텍처 예시

## 디렉터리 구조

```text
aws-saa-book/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── README.md
├── book.toml
├── diagrams/
│   └── README.md
├── exam-questions/
│   ├── exam_strategy.md
│   ├── practice_exam_1.md
│   ├── practice_exam_2.md
│   ├── practice_exam_3.md
│   ├── practice_exam_4.md
│   └── practice_exam_5.md
├── scripts/
│   └── sync_exam_questions.sh
└── src/
    ├── README.md
    ├── SUMMARY.md
    ├── 01_identity_security.md
    ├── 02_compute.md
    ├── 03_storage.md
    ├── 04_database.md
    ├── 05_networking.md
    ├── 06_integration.md
    ├── 07_monitoring.md
    ├── 08_cost_optimization.md
    ├── 09_architecture_patterns.md
    ├── 10_service_comparisons.md
    ├── 11_exam_patterns.md
    ├── 12_final_cheatsheet.md
    └── exam-questions/
```

## 권장 학습 순서

1. `src/01_identity_security.md`
2. `src/02_compute.md`
3. `src/03_storage.md`
4. `src/04_database.md`
5. `src/05_networking.md`
6. `src/06_integration.md`
7. `src/07_monitoring.md`
8. `src/08_cost_optimization.md`
9. `src/09_architecture_patterns.md`
10. `src/10_service_comparisons.md`
11. `src/11_exam_patterns.md`
12. `src/12_final_cheatsheet.md`
13. `exam-questions/exam_strategy.md`
14. `exam-questions/practice_exam_1.md`
15. `exam-questions/practice_exam_2.md`
16. `exam-questions/practice_exam_3.md`
17. `exam-questions/practice_exam_4.md`
18. `exam-questions/practice_exam_5.md`

## 이 책을 보는 방법

- 앞부분 1~8장은 서비스별 개념과 선택 기준을 이해하는 구간이다.
- 9~10장은 아키텍처 패턴과 서비스 비교를 통해 의사결정 감각을 다지는 구간이다.
- 11장은 시험 문제 패턴을 빠르게 익히는 구간이다.
- 12장은 시험 직전 1회독용 요약본이다.

## 시험 대비 포인트

- 정답이 되는 서비스보다, 왜 다른 선택지가 오답인지까지 설명할 것
- 고가용성 요구사항이 있으면 Multi-AZ, 분산 배치, 리전/엣지 분산을 먼저 떠올릴 것
- 비용 최적화 문제는 Savings Plans, Reserved Instances, Spot Instances, S3 Lifecycle, 서버리스 전환 여부를 함께 볼 것
- 보안 문제는 최소 권한, 암호화, 비공개 네트워크 경로, 감사 로그를 조합해 생각할 것

## 분량 가이드

이 원고는 이후 PDF 변환 시 120페이지 이상 학습서로 확장 가능한 수준을 목표로 작성했다. 각 장은 독립적으로 읽을 수 있지만, 시험 관점에서는 장 간 연결 학습이 중요하므로 순서대로 읽는 것을 권장한다.

## 로컬 미리보기와 배포

- 로컬 미리보기 전에는 `scripts/sync_exam_questions.sh`를 실행해 연습문제 파일을 `src/exam-questions/`로 동기화한다.
- 이후 `mdbook build` 또는 `mdbook serve`로 확인한다.
- GitHub Pages 배포는 `.github/workflows/deploy-pages.yml`이 `main` 브랜치 푸시 시 자동 수행한다.

## PDF 내보내기

- PDF 생성 전에는 먼저 `scripts/sync_exam_questions.sh`를 실행한다.
- 이후 `mdbook build`를 실행해 최신 `book/print.html`을 만든다.
- 브라우저에서 `book/print.html`을 열고 `Print to PDF`로 저장하는 방식을 권장한다.
- 인쇄 전용 스타일은 `theme/pdf.css`에 분리되어 있어 장 제목, 표, 다이어그램, 모의고사 문항이 PDF에서 더 안정적으로 보이도록 조정되어 있다.
- 긴 표와 카드형 홈 섹션은 인쇄 시 단순한 책 레이아웃으로 평탄화된다.
