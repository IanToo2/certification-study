# AWS SAA-C03 한국어 스터디북

`AWS Solutions Architect Associate(SAA-C03)` 합격을 목표로 한 한국어 실전형 학습서다. 서비스 정의 암기보다 `어떤 요구사항에서 어떤 서비스를 선택해야 하는가`에 집중해, 실제 시험의 아키텍처 의사결정 문제를 빠르게 푸는 감각을 만드는 데 목적이 있다.

## 이 책으로 얻는 것

- 서비스별 핵심 개념보다 `선택 기준`을 먼저 정리한다.
- 고가용성, 비용 최적화, 보안, 운영 단순성 요구를 문제 문장에서 읽는 법을 익힌다.
- `Amazon S3 vs Amazon EBS vs Amazon EFS`, `Application Load Balancer vs Network Load Balancer`처럼 헷갈리는 비교를 정리한다.
- 시험 직전에는 비교표, 치트시트, 모의고사만 빠르게 훑을 수 있게 구성했다.

## 누구에게 적합한가

- AWS SAA-C03를 처음 준비하는 학습자
- 한 번 공부했지만 서비스 선택 기준이 아직 헷갈리는 학습자
- 시험 직전에 빠르게 복습하고 오답 포인트만 정리하려는 학습자

## 바로 시작하기

- [처음부터 학습 시작](01_identity_security.md)
- [아키텍처 패턴부터 보기](09_architecture_patterns.md)
- [헷갈리는 서비스 비교표 보기](10_service_comparisons.md)
- [시험 직전 치트시트 보기](12_final_cheatsheet.md)
- [시험 전략 보기](exam-questions/exam_strategy.md)
- [Practice Exam 1 바로 풀기](exam-questions/practice_exam_1.md)

## 추천 학습 루트

### 처음 준비하는 학습자

- [1장. Identity & Security](01_identity_security.md)
- [2장. Compute](02_compute.md)
- [3장. Storage](03_storage.md)
- [4장. Database](04_database.md)
- [5장. Networking](05_networking.md)
- [6장. Integration](06_integration.md)
- [7장. Monitoring](07_monitoring.md)
- [8장. Cost Optimization](08_cost_optimization.md)
- [9장. Architecture Patterns](09_architecture_patterns.md)

### 헷갈리는 서비스만 빠르게 정리하려는 학습자

- [10장. Service Comparisons](10_service_comparisons.md)
- [11장. Exam Patterns](11_exam_patterns.md)
- [12장. Final Cheatsheet](12_final_cheatsheet.md)
- [Exam Strategy](exam-questions/exam_strategy.md)

### 시험 직전 빠른 복습

- [12장. Final Cheatsheet](12_final_cheatsheet.md)
- [11장. Exam Patterns](11_exam_patterns.md)
- [10장. Service Comparisons](10_service_comparisons.md)
- [Practice Exam 1](exam-questions/practice_exam_1.md)
- [Practice Exam 2](exam-questions/practice_exam_2.md)

## 자주 찾는 주제

- [정적 웹사이트 호스팅과 글로벌 캐시](03_storage.md)
- [서버리스 아키텍처와 이벤트 기반 처리](09_architecture_patterns.md)
- [Amazon S3 vs Amazon EBS vs Amazon EFS](10_service_comparisons.md)
- [Application Load Balancer vs Network Load Balancer](10_service_comparisons.md)
- [Amazon RDS vs Amazon DynamoDB](10_service_comparisons.md)
- [Amazon SQS vs Amazon SNS vs Amazon EventBridge](10_service_comparisons.md)
- [고가용성 웹 아키텍처 패턴](09_architecture_patterns.md)
- [모의고사 전체 보기](exam-questions/practice_exam_1.md)

## 빠른 검색 키워드

- 정적 웹사이트, 정적 사이트 호스팅, 글로벌 엣지 캐시
- 비동기 메시지 처리, 메시지 큐, decouple application components
- 팬아웃, pub/sub, 이벤트 브로드캐스트
- 규칙 기반 이벤트 라우팅, 이벤트 버스
- 공유 파일 시스템, NFS, 다중 EC2 파일 공유
- 블록 스토리지, 서버 디스크, EBS 볼륨
- 초저지연 NoSQL, 키-값 데이터베이스, 세션 저장소
- 읽기 확장, Read Replica, 캐시 계층
- 고정 IP 로드밸런서, L4 로드 밸런서
- 경로 기반 라우팅, 호스트 기반 라우팅, L7 로드 밸런서
- 서버리스 컨테이너, 컨테이너 서버 관리 제거
- 장기 보관, Glacier, S3 Lifecycle
- 프라이빗 AWS 서비스 접근, VPC Endpoint
- 최종 사용자 인증, Amazon Cognito

## 이 책에서 반복해서 보는 기준

- 아키텍처 의사결정 근거
- 고가용성 패턴
- 비용 최적화 패턴
- 서비스 간 비교와 선택 기준
- 시험에서 자주 나오는 함정 포인트

## 온라인 학습과 PDF 변환

- 공개 주소는 `https://iantoo2.github.io/certification-study/`다.
- Markdown 구조는 `mdBook` 기준으로 정리되어 있다.
- 주요 패턴은 Mermaid 다이어그램으로 포함되어 있다.
- 표와 코드 블록은 PDF로 내보내기 쉬운 형식을 우선 사용한다.
- 책 본문 뒤에는 시험 전략 문서와 5개 Practice Exam이 이어진다.
