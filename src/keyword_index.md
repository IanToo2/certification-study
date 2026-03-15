# 키워드 인덱스

이 페이지는 검색보다 더 빠르게 원하는 주제로 점프하기 위한 탐색 허브다. 시험 문제에서 자주 나오는 요구사항 표현을 기준으로 관련 장을 바로 연결한다.

<div class="index-hero">
  <p class="index-kicker">Quick Navigation</p>
  <p class="index-summary">
    문제를 풀다가 `정적 웹사이트`, `팬아웃`, `고정 IP 로드 밸런서`, `초저지연 NoSQL` 같은 표현이 보이면 아래 인덱스에서 바로 연결하면 된다.
  </p>
</div>

## 서비스 바로 찾기

<div class="quick-jump-grid">
  <a class="jump-card" href="10_service_comparisons.md#cmp-compute">Amazon EC2 / AWS Lambda / AWS Fargate</a>
  <a class="jump-card" href="10_service_comparisons.md#cmp-storage">Amazon S3 / Amazon EBS / Amazon EFS</a>
  <a class="jump-card" href="10_service_comparisons.md#cmp-load-balancer">Application Load Balancer / Network Load Balancer</a>
  <a class="jump-card" href="10_service_comparisons.md#cmp-messaging">Amazon SQS / Amazon SNS / Amazon EventBridge</a>
  <a class="jump-card" href="10_service_comparisons.md#cmp-rds-ddb">Amazon RDS / Amazon DynamoDB</a>
  <a class="jump-card" href="10_service_comparisons.md#cmp-aurora-rds">Amazon Aurora / Amazon RDS</a>
  <a class="jump-card" href="10_service_comparisons.md#cmp-observability">Amazon CloudWatch / AWS CloudTrail / AWS Config</a>
  <a class="jump-card" href="10_service_comparisons.md#cmp-network-path">Internet Gateway / NAT Gateway / VPC Endpoint</a>
</div>

## 요구사항별 빠른 점프

### 웹과 전송

| 키워드 | 바로 볼 곳 |
|---|---|
| 정적 웹사이트 | [Storage](03_storage.md), [Storage 비교](10_service_comparisons.md#cmp-storage) |
| 글로벌 엣지 캐시 | [글로벌 콘텐츠 배포 패턴](09_architecture_patterns.md#pattern-global-content), [CloudFront vs Global Accelerator vs Route 53](10_service_comparisons.md#cmp-global-delivery) |
| 고정 IP 로드 밸런서 | [ALB vs NLB](10_service_comparisons.md#cmp-load-balancer) |
| 경로 기반 라우팅 | [ALB vs NLB](10_service_comparisons.md#cmp-load-balancer) |

### 비동기와 이벤트

| 키워드 | 바로 볼 곳 |
|---|---|
| 비동기 메시지 처리 | [SQS vs SNS vs EventBridge](10_service_comparisons.md#cmp-messaging) |
| 팬아웃 | [Integration](06_integration.md), [SQS vs SNS vs EventBridge](10_service_comparisons.md#cmp-messaging) |
| 이벤트 라우팅 | [이벤트 기반 아키텍처](09_architecture_patterns.md#pattern-event-driven), [SQS vs SNS vs EventBridge](10_service_comparisons.md#cmp-messaging) |
| 워크플로 오케스트레이션 | [Integration](06_integration.md), [Exam Patterns](11_exam_patterns.md) |

### 데이터와 저장소

| 키워드 | 바로 볼 곳 |
|---|---|
| 공유 파일 시스템 | [Storage](03_storage.md), [S3 vs EBS vs EFS](10_service_comparisons.md#cmp-storage) |
| 블록 스토리지 | [Storage](03_storage.md), [S3 vs EBS vs EFS](10_service_comparisons.md#cmp-storage) |
| 초저지연 NoSQL | [Database](04_database.md), [RDS vs DynamoDB](10_service_comparisons.md#cmp-rds-ddb) |
| 고성능 관계형 | [Database](04_database.md), [Aurora vs RDS](10_service_comparisons.md#cmp-aurora-rds) |
| 읽기 확장 | [읽기 중심 확장 패턴](09_architecture_patterns.md#pattern-read-scale), [Multi-AZ vs Read Replica](10_service_comparisons.md#cmp-ha-vs-read) |

### 네트워크와 보안

| 키워드 | 바로 볼 곳 |
|---|---|
| 공용 인터넷 없이 AWS 서비스 접근 | [Networking](05_networking.md), [Internet Gateway vs NAT Gateway vs VPC Endpoint](10_service_comparisons.md#cmp-network-path) |
| 상태 저장 방화벽 | [Identity & Security](01_identity_security.md), [Security Group vs Network ACL](10_service_comparisons.md#cmp-network-filter) |
| 상태 비저장 필터 | [Identity & Security](01_identity_security.md), [Security Group vs Network ACL](10_service_comparisons.md#cmp-network-filter) |
| 누가 변경했는가 | [Monitoring](07_monitoring.md), [CloudWatch vs CloudTrail vs Config](10_service_comparisons.md#cmp-observability) |

## 아키텍처 패턴 바로 가기

<div class="quick-jump-grid">
  <a class="jump-card" href="09_architecture_patterns.md#pattern-ha-web">고가용성 웹 아키텍처</a>
  <a class="jump-card" href="09_architecture_patterns.md#pattern-serverless">서버리스 아키텍처</a>
  <a class="jump-card" href="09_architecture_patterns.md#pattern-event-driven">이벤트 기반 아키텍처</a>
  <a class="jump-card" href="09_architecture_patterns.md#pattern-microservices">마이크로서비스 아키텍처</a>
  <a class="jump-card" href="09_architecture_patterns.md#pattern-read-scale">읽기 중심 확장</a>
  <a class="jump-card" href="09_architecture_patterns.md#pattern-global-content">글로벌 콘텐츠 배포</a>
  <a class="jump-card" href="09_architecture_patterns.md#pattern-data-lake">데이터 레이크</a>
</div>

## 시험 직전 빠른 진입

<div class="shortcut-grid">
  <a class="shortcut-card" href="12_final_cheatsheet.md">
    <strong>Final Cheatsheet</strong>
    <span>마지막 1회독용 서비스 요약과 함정 정리</span>
  </a>
  <a class="shortcut-card" href="11_exam_patterns.md">
    <strong>Exam Patterns</strong>
    <span>문제 키워드 해석과 오답 제거 기준</span>
  </a>
  <a class="shortcut-card shortcut-card-strong" href="exam-questions/practice_exam_1.md">
    <strong>Practice Exam 1</strong>
    <span>실전 40문항 세트로 바로 이동</span>
  </a>
</div>
