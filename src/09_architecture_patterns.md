# 9장. Architecture Patterns

이 장은 개별 서비스 암기를 아키텍처 의사결정으로 연결하는 장이다. 시험 문제는 대부분 서비스 이름보다 요구사항 조합으로 출제되므로, 패턴 단위로 정리해야 점수가 올라간다. 주요 Mermaid 원본은 `diagrams/` 디렉터리에도 함께 보관한다.

<div class="chapter-overview">
  <h2>이 장에서 바로 이동할 수 있는 패턴</h2>
  <p>고가용성, 서버리스, 이벤트 기반, 글로벌 전송, 데이터 레이크, DR 패턴을 빠르게 비교해 문제에 대응할 수 있다.</p>
  <div class="chapter-overview-links">
    <a href="#pattern-ha-web">고가용성 웹</a>
    <a href="#pattern-serverless">서버리스</a>
    <a href="#pattern-event-driven">이벤트 기반</a>
    <a href="#pattern-microservices">마이크로서비스</a>
    <a href="#pattern-read-scale">읽기 확장</a>
    <a href="#pattern-global-content">글로벌 전송</a>
    <a href="#pattern-data-lake">데이터 레이크</a>
    <a href="#pattern-dr">DR</a>
    <a href="#pattern-security-network">보안 우선 네트워크</a>
    <a href="#pattern-cost">비용 최적화</a>
    <a href="#pattern-decision-guide">의사결정 가이드</a>
  </div>
</div>

<a id="pattern-ha-web"></a>
## 1. 고가용성 웹 아키텍처 패턴

```mermaid
graph TD
    U[Client] --> R53[Amazon Route 53]
    R53 --> CF[Amazon CloudFront]
    CF --> ALB[Application Load Balancer]
    ALB --> APPA[App Tier AZ-a]
    ALB --> APPB[App Tier AZ-b]
    APPA --> CACHE[Amazon ElastiCache]
    APPB --> CACHE
    APPA --> DB[(Amazon RDS / Amazon Aurora Writer)]
    APPB --> DB
    DB --> STBY[(Multi-AZ Standby)]
```

- 프런트 계층은 `Amazon CloudFront`로 캐시와 TLS 종료를 담당한다.
- 애플리케이션 계층은 `Amazon EC2`, `Amazon ECS`, `AWS Fargate` 중 하나로 무상태 구성 후 오토스케일링한다.
- 데이터 계층은 `Amazon RDS Multi-AZ` 또는 `Amazon Aurora`로 보호하고, 읽기 성능이 필요하면 `Read Replica` 또는 Reader endpoint를 추가한다.
- 시험 포인트: "고가용성"과 "운영 표준화"가 동시에 보이면 `ALB + Multi-AZ + Auto Scaling + 관리형 DB` 조합을 먼저 떠올린다.

<a id="pattern-serverless"></a>
## 2. 서버리스 아키텍처 패턴

```mermaid
graph TD
    C[Client / Mobile App] --> APIGW[Amazon API Gateway]
    APIGW --> L1[AWS Lambda]
    L1 --> DDB[Amazon DynamoDB]
    L1 --> S3[Amazon S3]
    L1 --> SF[AWS Step Functions]
    S3 --> EVT[Amazon EventBridge]
    EVT --> L2[AWS Lambda Async Worker]
    L2 --> SNS[Amazon SNS]
```

- 요청량 예측이 어렵고 운영 부담을 최소화해야 할 때 적합하다.
- API 처리와 후속 비동기 작업을 분리하면 서버리스 구조에서도 안정성을 높일 수 있다.
- 시험 포인트: "서버 관리 없음", "간헐적 트래픽", "사용량 기반 과금"이 핵심 문구다.

<a id="pattern-event-driven"></a>
## 3. 이벤트 기반 아키텍처 패턴

```mermaid
graph TD
    P[Producer Service] --> EB[Amazon EventBridge]
    EB --> R1[Rule: Payment Events]
    EB --> R2[Rule: Inventory Events]
    EB --> R3[Rule: Notification Events]
    R1 --> Q1[Amazon SQS Payment Queue]
    R2 --> Q2[Amazon SQS Inventory Queue]
    R3 --> SN[Amazon SNS Topic]
    Q1 --> L1[AWS Lambda Payment Worker]
    Q2 --> L2[AWS Lambda Inventory Worker]
    SN --> L3[AWS Lambda Notification Worker]
```

- 생산자와 소비자를 분리해 서비스 간 결합도를 낮춘다.
- 각 소비자는 자기 처리 속도에 맞춰 이벤트를 받으므로 장애 전파를 줄이기 쉽다.
- 시험 포인트: 규칙 기반 라우팅은 `Amazon EventBridge`, 버퍼링과 재처리는 `Amazon SQS`, 다중 구독 팬아웃은 `Amazon SNS`다.

<a id="pattern-microservices"></a>
## 4. 마이크로서비스 아키텍처 패턴

```mermaid
graph TD
    U[Client] --> CF[Amazon CloudFront]
    CF --> ALB[Application Load Balancer]
    ALB --> API[API Service]
    ALB --> ORD[Order Service]
    ALB --> INV[Inventory Service]
    API --> AUTH[Amazon Cognito]
    ORD --> EV[Amazon EventBridge]
    INV --> EV
    EV --> Q[Amazon SQS]
    Q --> WRK[AWS Fargate / AWS Lambda Worker]
    ORD --> DB1[(Amazon Aurora)]
    INV --> DB2[(Amazon DynamoDB)]
```

- 경계가 분리된 서비스별 저장소를 선택해 독립 배포와 독립 확장을 가능하게 한다.
- 동기 호출은 최소화하고, 도메인 이벤트는 비동기 경로로 넘겨 병목을 줄인다.
- 시험 포인트: 서비스별 데이터 분리, 비동기 이벤트 전달, API 진입점 통합이 마이크로서비스 문제의 핵심 단서다.

<a id="pattern-read-scale"></a>
## 5. 읽기 중심 확장 패턴

```mermaid
graph TD
    C[Clients] --> ALB[Application Load Balancer]
    ALB --> APP1[App Node 1]
    ALB --> APP2[App Node 2]
    APP1 --> CACHE[Amazon ElastiCache]
    APP2 --> CACHE
    APP1 --> WRITER[(Amazon RDS Primary)]
    APP2 --> WRITER
    WRITER --> READER[(Read Replica)]
```

- 읽기 부하가 많으면 먼저 캐시 적중률을 높이고, 이후에도 부족하면 읽기 복제본을 추가한다.
- 쓰기 일관성이 중요한 트랜잭션은 Primary로 유지하고 조회성 트래픽만 분리한다.
- 시험 포인트: `Read Replica`는 읽기 확장, `Multi-AZ`는 고가용성이라는 목적 차이를 반드시 구분해야 한다.

<a id="pattern-global-content"></a>
## 6. 글로벌 콘텐츠 배포 패턴

```mermaid
graph TD
    G[Global Users] --> R53[Amazon Route 53]
    R53 --> CF[Amazon CloudFront]
    CF --> S3[Amazon S3 Static Assets]
    CF --> ALB[Application Load Balancer Dynamic Origin]
    ALB --> APP[Regional App Tier]
```

- 정적 콘텐츠는 엣지 캐시로 가속하고 오리진 부하를 줄인다.
- 동적 콘텐츠도 전송 경로 최적화와 TLS 종료에 이점이 있다.
- 시험 포인트: 캐시가 핵심이면 `CloudFront`, 네트워크 경로 최적화와 고정 IP가 핵심이면 `Global Accelerator`다.

<a id="pattern-data-lake"></a>
## 7. 데이터 레이크 아키텍처 패턴

```mermaid
graph TD
    SRC[App Logs / DB Export / IoT Data] --> ING[Amazon Kinesis / AWS DataSync]
    ING --> RAW[Amazon S3 Raw Zone]
    RAW --> ETL[AWS Glue / AWS Lambda ETL]
    ETL --> CUR[Amazon S3 Curated Zone]
    CUR --> ATH[Amazon Athena / Analytics]
    CUR --> ML[ML / BI Consumers]
```

- 데이터 레이크 문제의 핵심은 `Amazon S3`를 중심으로 원천 데이터와 가공 데이터를 논리적으로 분리하는 것이다.
- 적재, 가공, 분석 계층을 나누면 비용과 보안 정책을 데이터 단계별로 적용하기 쉽다.
- 시험 포인트: "대용량 원본 저장", "유연한 확장", "저비용 장기 보관"이 보이면 `Amazon S3` 기반 데이터 레이크를 우선 검토한다.

<a id="pattern-dr"></a>
## 8. DR 패턴

### Backup and Restore

- 가장 저렴하지만 복구 시간이 길다.
- 백업 데이터만 다른 리전에 보관한다.

### Pilot Light

- 핵심 데이터베이스와 최소 핵심 서비스만 대기한다.
- 장애 시 애플리케이션 계층을 빠르게 확장한다.

### Warm Standby

- 축소된 전체 환경을 항상 유지한다.
- 복구 시간이 더 짧다.

### Multi-Site Active/Active

- 가장 비싸지만 복구 시간과 복구 시점이 가장 유리하다.
- `Route 53`, `Global Accelerator`, `DynamoDB Global Tables`, `Aurora Global Database`가 함께 나올 수 있다.

<a id="pattern-security-network"></a>
## 9. 보안 우선 네트워크 패턴

```mermaid
graph TD
    NET[Internet] --> EDGE[Amazon CloudFront / ALB]
    EDGE --> PUB[Public Subnet]
    PUB --> APP[Private App Subnet]
    APP --> DB[Private DB Subnet]
    APP --> EP[VPC Endpoints]
    DB --> BAK[Encrypted Backup]
```

- 외부 공개는 최소 진입점에만 허용한다.
- 내부 서비스는 `Security Group` 참조와 `VPC Endpoints`로 보호한다.
- 시험 포인트: 데이터베이스는 프라이빗, 관리자 접근은 제한된 경로, 로그는 중앙 저장소로 보낸다.

<a id="pattern-cost"></a>
## 10. 비용 최적화 패턴

- 상시 부하는 `Savings Plans` 또는 `Reserved Instances`
- 변동 부하는 `Spot Instances`
- 간헐적 API는 `Lambda`
- 장기 로그는 `S3 Lifecycle`
- 자주 읽는 데이터는 `ElastiCache`로 DB 비용 감소

## 11. 시험에서 패턴으로 읽는 방법

- "운영 부담 최소화"라는 문구가 있으면 서버리스나 관리형 서비스로 기운다.
- "고가용성"이 있으면 Multi-AZ, 분산 라우팅, 중복 컴포넌트를 먼저 찾는다.
- "비용 절감"이 있으면 약정 할인, 스팟, 수명 주기 정책을 함께 본다.
- "보안 강화"가 있으면 최소 권한, 암호화, 프라이빗 경로, 감사 로그를 조합한다.

<a id="pattern-decision-guide"></a>
## 12. 아키텍처 의사결정 가이드

아래 가이드는 시험 문제를 읽을 때 서비스를 고르는 순서를 빠르게 정리하기 위한 것이다. 정답은 기능만이 아니라 운영 모델과 비용 제약까지 함께 만족해야 한다.

### Compute 의사결정

```mermaid
graph TD
    Q1[컴퓨트 워크로드인가] --> Q2{운영체제 제어가 필요한가}
    Q2 -->|예| EC2[Amazon EC2]
    Q2 -->|아니오| Q3{이벤트 기반의 짧은 실행인가}
    Q3 -->|예| L[ AWS Lambda ]
    Q3 -->|아니오| Q4{컨테이너 이미지를 사용해야 하는가}
    Q4 -->|예| F[ AWS Fargate ]
    Q4 -->|아니오| EB[Elastic Beanstalk 또는 관리형 플랫폼 검토]
```

- 서버 제어권이 필요하면 `Amazon EC2`
- 서버리스 이벤트 처리면 `AWS Lambda`
- 컨테이너는 유지하되 서버 관리는 줄이고 싶으면 `AWS Fargate`

### Storage 의사결정

```mermaid
graph TD
    S1[데이터를 저장해야 하는가] --> S2{객체 형태인가}
    S2 -->|예| S3[Amazon S3]
    S2 -->|아니오| S3B{단일 서버용 블록 디스크인가}
    S3B -->|예| EBS[Amazon EBS]
    S3B -->|아니오| S4{여러 리눅스 인스턴스 공유 파일인가}
    S4 -->|예| EFS[Amazon EFS]
    S4 -->|아니오| FSX[Amazon FSx 검토]
```

- 객체 저장은 `Amazon S3`
- 인스턴스용 영구 블록 디스크는 `Amazon EBS`
- 공유 파일 시스템은 `Amazon EFS`
- SMB, Lustre, ONTAP 같은 특화 파일 시스템은 `Amazon FSx`

### Database 의사결정

```mermaid
graph TD
    D1[데이터베이스가 필요한가] --> D2{관계형 SQL이 필요한가}
    D2 -->|예| D3{더 높은 성능과 빠른 복구가 핵심인가}
    D3 -->|예| AUR[Amazon Aurora]
    D3 -->|아니오| RDS[Amazon RDS]
    D2 -->|아니오| D4{초저지연 키-값/문서 접근인가}
    D4 -->|예| DDB[Amazon DynamoDB]
    D4 -->|아니오| CACHE[Amazon ElastiCache 또는 다른 특화 저장소 검토]
```

- 일반 SQL 애플리케이션은 `Amazon RDS`
- 더 높은 성능과 읽기 확장, 글로벌 구성이 중요하면 `Amazon Aurora`
- 서버리스 NoSQL과 초저지연이 핵심이면 `Amazon DynamoDB`

### Messaging 의사결정

```mermaid
graph TD
    M1[서비스를 분리해야 하는가] --> M2{버퍼링과 재처리가 중요한가}
    M2 -->|예| SQS[Amazon SQS]
    M2 -->|아니오| M3{여러 구독자에게 동시에 보내야 하는가}
    M3 -->|예| SNS[Amazon SNS]
    M3 -->|아니오| M4{규칙 기반 이벤트 라우팅인가}
    M4 -->|예| EB[Amazon EventBridge]
    M4 -->|아니오| SF[AWS Step Functions 또는 직접 호출 검토]
```

- 비동기 버퍼링은 `Amazon SQS`
- 팬아웃은 `Amazon SNS`
- 규칙 기반 이벤트 버스는 `Amazon EventBridge`
- 상태 기반 절차 제어는 `AWS Step Functions`
