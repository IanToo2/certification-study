# 12장. Final Cheatsheet

시험 직전에는 모든 내용을 다시 읽기보다 선택 기준을 압축해서 보는 편이 효율적이다. 이 장은 마지막 1회독용 핵심 요약본이다.

## 1. 서비스 한 줄 요약

### 보안

- `IAM`: AWS 리소스 권한 제어의 기본 서비스
- `IAM Role`: 장기 키 없이 서비스에 임시 권한 위임
- `KMS`: 암호화 키 중앙 관리
- `Secrets Manager`: 비밀값 저장과 자동 회전
- `Amazon Cognito`: 애플리케이션 최종 사용자 인증
- `Security Group`: 인스턴스 단위 상태 저장 방화벽
- `Network ACL`: 서브넷 단위 상태 비저장 필터

### 컴퓨트

- `Amazon EC2`: 서버 제어권이 필요한 가상 서버
- `Auto Scaling`: 트래픽과 장애에 맞춰 인스턴스 수 자동 조정
- `Launch Templates`: 표준화된 EC2 시작 구성 템플릿
- `AWS Lambda`: 서버리스 이벤트 처리 함수
- `Elastic Beanstalk`: EC2 기반 앱 배포 자동화 플랫폼
- `Amazon ECS`: AWS 네이티브 컨테이너 오케스트레이션
- `AWS Fargate`: 서버 관리 없는 컨테이너 실행
- `EC2 Placement Groups`: 물리 배치 최적화 기능

### 스토리지

- `Amazon S3`: 객체 저장, 정적 자산, 백업, 로그, 데이터 레이크
- `Amazon EBS`: 단일 인스턴스용 영구 블록 디스크
- `Amazon EFS`: 다중 인스턴스 공유 파일 시스템
- `Amazon FSx`: SMB, Lustre 등 특화 파일 시스템
- `S3 Lifecycle`: 장기 데이터 자동 계층 이동/삭제
- `S3 Replication`: 리전 또는 계정 간 객체 복제
- `Glacier`: 장기 아카이브 스토리지 계열

### 데이터베이스

- `Amazon RDS`: 범용 관리형 관계형 DB
- `Amazon Aurora`: 고성능 클라우드 네이티브 관계형 DB
- `Amazon DynamoDB`: 서버리스 NoSQL 키-값/문서 DB
- `Amazon ElastiCache`: 인메모리 캐시와 세션 저장소

### 네트워킹

- `Amazon VPC`: AWS 격리 네트워크
- `Internet Gateway`: 퍼블릭 인터넷 연결
- `NAT Gateway`: 프라이빗 아웃바운드 인터넷
- `VPC Endpoints`: AWS 서비스 사설 연결
- `VPC Peering`: 두 VPC 간 직접 연결
- `Transit Gateway`: 다수 VPC/온프레미스 중앙 허브
- `Amazon Route 53`: DNS와 헬스 체크 라우팅
- `Amazon CloudFront`: CDN과 엣지 캐시
- `AWS Global Accelerator`: 글로벌 Anycast 네트워크 최적화
- `Application Load Balancer`: HTTP/HTTPS L7 로드 밸런싱
- `Network Load Balancer`: TCP/UDP L4 로드 밸런싱

### 통합

- `Amazon SQS`: 비동기 큐와 버퍼링
- `Amazon SQS FIFO`: 순서 보장 큐
- `Amazon SNS`: 팬아웃 알림
- `Amazon EventBridge`: 규칙 기반 이벤트 라우팅
- `AWS Step Functions`: 상태 기반 워크플로 오케스트레이션
- `Amazon Kinesis`: 실시간 스트리밍 데이터 수집/처리

### 관찰과 비용

- `Amazon CloudWatch`: 메트릭, 로그, 알람
- `AWS CloudTrail`: API 감사 로그
- `AWS Config`: 구성 준수 추적
- `Savings Plans`: 유연한 장기 할인
- `Reserved Instances`: 고정 장기 할인
- `Spot Instances`: 중단 허용 대폭 할인

## 2. 아키텍처 단축 공식

- 정적 웹사이트 호스팅: `Amazon S3 + Amazon CloudFront + Amazon Route 53`
- 고가용성 웹 애플리케이션: `Application Load Balancer + Auto Scaling + Multi-AZ Amazon RDS`
- 서버리스 API: `Amazon API Gateway + AWS Lambda + Amazon DynamoDB`
- 비동기 컴포넌트 분리: `Amazon SQS`
- 이벤트 팬아웃: `Amazon SNS`
- 규칙 기반 이벤트 라우팅: `Amazon EventBridge`
- 글로벌 저지연 콘텐츠 전송: `Amazon CloudFront`
- 글로벌 고정 IP 진입점: `AWS Global Accelerator`
- 프라이빗 서브넷의 AWS 서비스 접근: `VPC Endpoints`
- 장기 로그 보관 비용 절감: `S3 Lifecycle + Glacier`

## 3. 서비스 선택 지름길

- 서버 제어 필요: `Amazon EC2`
- 서버 없이 이벤트 처리: `AWS Lambda`
- 컨테이너이지만 서버 관리 제거: `AWS Fargate`
- 객체 저장: `Amazon S3`
- 블록 디스크: `Amazon EBS`
- 공유 파일 시스템: `Amazon EFS`
- 관계형 SQL: `Amazon RDS`
- 고성능 관계형: `Amazon Aurora`
- 초저지연 NoSQL: `Amazon DynamoDB`
- 읽기 캐시: `Amazon ElastiCache`

## 4. 검색어로 바로 떠올리는 서비스

- 정적 웹사이트, 정적 사이트 호스팅: `Amazon S3 + Amazon CloudFront`
- 비동기 메시지 처리, decouple application components: `Amazon SQS`
- 팬아웃, pub/sub, 다중 구독: `Amazon SNS`
- 이벤트 라우팅, 이벤트 버스: `Amazon EventBridge`
- 공유 파일 시스템, NFS, 다중 EC2 파일 공유: `Amazon EFS`
- 블록 스토리지, 서버 디스크, 부팅 볼륨: `Amazon EBS`
- 초저지연 NoSQL, 키-값 저장소, 세션 저장소: `Amazon DynamoDB`
- 고정 IP 로드 밸런서, 초고성능 TCP/UDP: `Network Load Balancer`
- 경로 기반 라우팅, 호스트 기반 라우팅: `Application Load Balancer`
- 공용 인터넷 없이 AWS 서비스 접근: `VPC Endpoints`

## 5. 헷갈리는 비교 한 줄 정리

- `Multi-AZ`는 고가용성, `Read Replica`는 읽기 확장
- `Security Group`은 상태 저장, `Network ACL`은 상태 비저장
- `Amazon CloudFront`는 캐시, `AWS Global Accelerator`는 네트워크 경로 최적화
- `Amazon SQS`는 큐, `Amazon SNS`는 팬아웃, `Amazon EventBridge`는 규칙 라우팅
- `Amazon EBS`는 블록, `Amazon EFS`는 공유 파일, `Amazon S3`는 객체
- `IAM`은 AWS 권한, `Amazon Cognito`는 앱 사용자 인증
- `Application Load Balancer`는 L7, `Network Load Balancer`는 L4
- `Amazon RDS`는 관계형, `Amazon DynamoDB`는 NoSQL

## 6. 자주 나오는 시험 함정

- 고가용성 요구인데 `Read Replica`만 선택
- 팬아웃 문제인데 `Amazon SQS`만 선택
- 공용 인터넷 차단 요구인데 `NAT Gateway`만 보고 `VPC Endpoints`를 놓침
- 최종 사용자 인증 문제인데 `IAM User`를 선택
- 정적 콘텐츠 가속 문제인데 `AWS Global Accelerator`를 고름
- 장기 보관 문제인데 `Glacier` 복구 시간을 무시
- 중단 불가 워크로드에 `Spot Instances`를 선택
- 상태 저장 세션 구조를 그대로 두고 오토스케일링만 추가

## 7. Decouple/Fanout/Routing 3종 세트

- 애플리케이션 컴포넌트 분리: `Amazon SQS`
- 팬아웃 메시징: `Amazon SNS`
- 이벤트 라우팅: `Amazon EventBridge`

## 8. 시험 직전 체크포인트

- 고가용성 요구면 Multi-AZ 여부를 먼저 본다.
- 비용 요구면 사용 패턴이 안정적인지 변동적인지 본다.
- 보안 요구면 최소 권한, 암호화, 비공개 경로, 감사 로그를 같이 본다.
- 운영 부담 최소화 요구면 관리형/서버리스 서비스 우선이다.
- 인터넷을 거치지 않아야 하면 `VPC Endpoints` 가능 여부를 본다.

## 9. 빠른 검색 키워드 묶음

- 정적 웹사이트, 글로벌 엣지 캐시, CDN
- 비동기 큐, 팬아웃, 이벤트 버스
- 공유 파일 시스템, 블록 스토리지, 객체 스토리지
- 읽기 확장, 고가용성, 자동 페일오버
- 고정 IP, 경로 기반 라우팅, Anycast
- 장기 보관, 수명 주기 정책, 아카이브
- 초저지연 NoSQL, 관계형 SQL, 고성능 관계형 DB

## 10. 30초 복습 다이어그램

```text
Users
  |
  v
Route 53
  |
  v
CloudFront
  |
  v
ALB
  |
  v
Auto Scaling / ECS / Fargate / Lambda
  |
  +--> RDS / Aurora
  +--> DynamoDB
  +--> ElastiCache
  +--> S3
```

## 11. 마지막 조언

- 가장 익숙한 서비스가 아니라 가장 적은 운영 부담으로 요구사항을 만족하는 서비스를 고른다.
- 오답은 대개 요구사항 하나를 놓친 선택지다.
- 서비스 기능 암기보다 선택 기준 암기가 점수에 더 직접적이다.
