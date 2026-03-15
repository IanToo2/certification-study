# AWS SAA 시험 전략

이 문서는 문제 풀이 속도와 정답률을 높이기 위한 빠른 전략 정리다. 시험에서 중요한 것은 서비스 기능 나열보다 요구사항을 읽고 가장 적절한 선택지를 고르는 능력이다.

<div class="exam-callout">
  <p class="exam-badge">시험 직전 복습</p>
  <p><strong>Exam Strategy</strong>는 모의고사에 들어가기 전에 한 번 훑고 들어가는 압축 정리 페이지다. 먼저 핵심 키워드와 함정을 정리한 뒤 Practice Exam으로 넘어가는 흐름을 권장한다.</p>
  <div class="exam-nav">
    <a href="../12_final_cheatsheet.md">치트시트로 빠르게 복습</a>
    <a href="practice_exam_1.md">Practice Exam 1 시작</a>
  </div>
</div>

## 1. 자주 나오는 AWS 시험 키워드

- `least operational overhead`: 관리형 서비스, 서버리스, 자동화 우선
- `most cost-effective`: 사용 패턴에 맞는 과금 모델과 수명 주기 정책 우선
- `highly available`: Multi-AZ, 오토스케일링, 중복 구성, 장애 조치
- `durable`: `Amazon S3`, 다중 AZ 저장소, 복제
- `decouple`: `Amazon SQS`
- `fanout`: `Amazon SNS`
- `event routing`: `Amazon EventBridge`
- `serverless`: `AWS Lambda`, `AWS Fargate`, 관리형 서비스
- `minimum latency`: `Amazon CloudFront`, `AWS Global Accelerator`, 캐시, 적절한 DB 선택
- `fully managed`: `Amazon RDS`, `Amazon Aurora`, `Amazon DynamoDB`, `Amazon ECS`, `AWS Fargate`
- `temporary credentials`: `IAM Role`
- `customer authentication`: `Amazon Cognito`
- `audit who did what`: `AWS CloudTrail`
- `configuration compliance`: `AWS Config`
- `metrics and alarms`: `Amazon CloudWatch`
- `private access without internet`: `VPC Endpoints`

## 2. 서비스 선택 전략

### 보안

- AWS 리소스 권한: `IAM`
- 서비스 권한 위임: `IAM Role`
- 암호화 키 관리: `AWS KMS`
- 비밀값 저장/회전: `AWS Secrets Manager`
- 최종 사용자 로그인: `Amazon Cognito`

### 컴퓨트

- 서버 제어 필요: `Amazon EC2`
- 이벤트 기반 짧은 실행: `AWS Lambda`
- 컨테이너 + 서버 관리 제거: `AWS Fargate`
- EC2 기반 앱의 배포 자동화: `Elastic Beanstalk`

### 스토리지

- 객체 저장: `Amazon S3`
- 단일 서버용 블록 디스크: `Amazon EBS`
- 공유 파일 시스템: `Amazon EFS`
- Windows SMB 또는 HPC 특화 파일: `Amazon FSx`

### 데이터베이스

- 관계형 SQL: `Amazon RDS`
- 더 높은 성능과 빠른 복구: `Amazon Aurora`
- 초저지연 키-값/문서: `Amazon DynamoDB`
- 읽기 캐시: `Amazon ElastiCache`

### 네트워킹

- HTTP/HTTPS 경로 기반 라우팅: `Application Load Balancer`
- TCP/UDP, 고정 IP: `Network Load Balancer`
- 퍼블릭 인터넷 연결: `Internet Gateway`
- 프라이빗 아웃바운드: `NAT Gateway`
- AWS 서비스 사설 연결: `VPC Endpoints`

### 통합

- 비동기 버퍼링: `Amazon SQS`
- 순서 보장: `Amazon SQS FIFO`
- 팬아웃: `Amazon SNS`
- 규칙 기반 이벤트 분기: `Amazon EventBridge`
- 다단계 워크플로: `AWS Step Functions`

## 3. 아키텍처 의사결정 단축 공식

- 정적 웹사이트: `Amazon S3 + Amazon CloudFront + Amazon Route 53`
- 고가용성 웹 앱: `ALB + Auto Scaling + Multi-AZ RDS`
- 서버리스 API: `API Gateway + AWS Lambda + Amazon DynamoDB`
- 마이크로서비스 비동기 결합: `EventBridge` 또는 `SNS + SQS`
- 프라이빗 서브넷의 S3 접근: `Gateway VPC Endpoint`
- 글로벌 캐시 전송: `Amazon CloudFront`
- 글로벌 네트워크 최적화와 고정 IP: `AWS Global Accelerator`
- 장기 로그 보관: `Amazon S3 + S3 Lifecycle + Glacier`
- 읽기 많은 관계형 앱: `ElastiCache + Read Replica`

## 4. 자주 나오는 시험 함정

- 고가용성 요구인데 `Read Replica`를 선택
- 읽기 확장 문제인데 `Multi-AZ`만 선택
- 최종 사용자 인증 문제인데 `IAM User`를 선택
- 팬아웃 문제인데 `Amazon SQS`만 선택
- 이벤트 라우팅 문제인데 `Amazon SNS`만 선택
- 공용 인터넷 차단 요구인데 `NAT Gateway`만 보고 `VPC Endpoints`를 놓침
- 캐시 문제인데 `AWS Global Accelerator`를 선택
- TCP/UDP 문제인데 `Application Load Balancer`를 선택
- 경로 기반 라우팅 문제인데 `Network Load Balancer`를 선택
- 중단 불가 워크로드에 `Spot Instances`를 선택
- 장기 할인 문제인데 사용 패턴을 보지 않고 무조건 `Reserved Instances`를 선택
- 장기 아카이브 문제인데 복구 시간 요구를 무시

## 5. 문제 푸는 순서

1. 문제에서 최우선 요구사항이 무엇인지 찾는다.
2. 오답을 먼저 두 개 제거한다.
3. 고가용성, 비용, 보안, 운영 단순성 중 우선순위를 정한다.
4. 서비스 이름이 아니라 아키텍처 패턴으로 생각한다.
5. 정답이 가능한지보다 다른 선택지보다 더 적절한지 판단한다.

## 6. 마지막 암기 포인트

- `Decouple` -> `Amazon SQS`
- `Fanout` -> `Amazon SNS`
- `Event routing` -> `Amazon EventBridge`
- `Audit API calls` -> `AWS CloudTrail`
- `Config compliance` -> `AWS Config`
- `Metrics and alarms` -> `Amazon CloudWatch`
- `Private AWS access` -> `VPC Endpoints`
- `Static global content` -> `Amazon CloudFront`
- `Relational managed DB` -> `Amazon RDS`
- `Serverless NoSQL` -> `Amazon DynamoDB`
