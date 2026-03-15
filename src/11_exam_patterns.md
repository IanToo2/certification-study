# 11장. Exam Patterns

이 장은 SAA-C03 문제를 읽는 방법을 정리한다. 실제 시험에서는 서비스 정의를 외우는 것보다 요구사항 문장을 빠르게 분해하는 능력이 점수에 직접 연결된다.

## 1. 문제를 읽는 순서

1. 무엇을 최우선으로 요구하는지 확인한다.
2. 가용성, 비용, 보안, 운영 단순성 중 우선순위를 나눈다.
3. 오답 선택지가 어떤 조건에서 탈락하는지 본다.
4. 마지막에 정답 서비스를 고른다.

## 2. 자주 나오는 키워드와 해석

| 문제 키워드 | 우선 떠올릴 것 |
|---|---|
| 최소 운영 부담 | 관리형 서비스, 서버리스 |
| 가장 비용 효율적 | 약정 할인, 스팟, 수명 주기 |
| 고가용성 | Multi-AZ, 오토스케일링, 다중 엔드포인트 |
| 글로벌 저지연 | CloudFront, Global Accelerator, Route 53 |
| 순서 보장 | SQS FIFO |
| 팬아웃 | SNS |
| 비동기 버퍼링 | SQS |
| 규칙 기반 이벤트 라우팅 | EventBridge |
| 장기 보관 | Glacier, Lifecycle |
| 최종 사용자 인증 | Cognito |
| 최소 권한 | IAM Role, 세분화 정책 |

## 3. 대표 출제 패턴

### 패턴 A. "운영 부담을 가장 줄여라"

- `EC2` 직접 운영보다 `Lambda`, `Fargate`, `RDS`, `Aurora`, `S3` 같은 관리형 서비스가 우선된다.
- 예외: OS 제어나 특정 소프트웨어 설치가 요구되면 `EC2`가 필요하다.

### 패턴 B. "고가용성을 높여라"

- 단일 인스턴스는 거의 오답 후보다.
- `ALB + Auto Scaling + Multi-AZ`
- `RDS Multi-AZ`
- 멀티 리전 요구면 `Route 53`, `Global Accelerator`, 복제 구조를 본다.

### 패턴 C. "비용을 최소화하라"

- 장기 안정 사용: `Savings Plans`, `Reserved Instances`
- 가변/중단 가능: `Spot Instances`
- 장기 저장: `S3 Lifecycle`, `Glacier`
- 간헐적 요청: `Lambda`

### 패턴 D. "보안을 강화하라"

- 장기 액세스 키 제거: `IAM Role`
- 저장 데이터 암호화: `KMS`
- 비밀값 저장: `Secrets Manager`
- 프라이빗 액세스: `VPC Endpoints`
- 감사: `CloudTrail`, `Config`

### 패턴 E. "성능을 높여라"

- 읽기 성능: `ElastiCache`, `Read Replica`, `CloudFront`
- 초저지연 키-값: `DynamoDB`
- 고성능 네트워크: `Placement Group`, `NLB`

## 4. 시험 함정 유형

### 함정 1. 비슷하지만 목적이 다른 서비스

- `Multi-AZ` vs `Read Replica`
- `CloudFront` vs `Global Accelerator`
- `Security Group` vs `Network ACL`
- `SQS` vs `SNS` vs `EventBridge`

### 함정 2. 관리형 서비스보다 직접 구축을 고르게 유도

- `NAT Instance` 대신 `NAT Gateway`
- 자체 비밀 저장 대신 `Secrets Manager`
- 자체 인증 시스템 대신 `Cognito`

### 함정 3. 보안 요구를 비용 문제로 덮어쓰게 유도

- 더 싸다고 퍼블릭 경로를 선택하면 오답일 수 있다.
- 프라이빗 경로와 암호화 요구가 있으면 비용보다 우선된다.

### 함정 4. 가용성 요구를 성능 확장으로 착각하게 유도

- 읽기 확장은 가용성과 다르다.
- 캐시는 영속 저장소 대체제가 아니다.

## 5. 서비스 조합 패턴 암기

- 정적 웹사이트: `S3 + CloudFront + Route 53`
- 고가용성 웹앱: `ALB + Auto Scaling + RDS Multi-AZ`
- 서버리스 API: `API Gateway + Lambda + DynamoDB`
- 비동기 처리: `SNS + SQS + Lambda`
- 글로벌 애플리케이션: `CloudFront` 또는 `Global Accelerator` + 멀티 리전
- 보안 로그 중앙화: `CloudTrail + S3 + KMS`

## 6. 계산형 문제보다 판단형 문제가 많다

- 문제의 핵심은 "가장 적합한가"다.
- 한 서비스가 가능한지보다, 다른 서비스보다 더 적합한지 따져야 한다.
- 정답은 보통 관리 부담, 비용, 고가용성을 가장 균형 있게 만족한다.

## 7. 마지막 점검 체크리스트

- 이 선택은 최소 권한을 지키는가
- 이 구조는 AZ 장애를 견디는가
- 이 비용 모델은 사용 패턴에 맞는가
- 이 서비스는 운영 부담을 줄이는가
- 이 경로는 공용 인터넷을 우회할 수 있는가

## 8. 실전 풀이 팁

- 먼저 오답 두 개를 버리고 남은 둘을 비교한다.
- 요구사항 문장에 있는 형용사를 놓치지 않는다.
- "quickly", "most cost-effective", "least operational overhead" 같은 표현은 정답을 강하게 제한한다.
- 익숙한 서비스를 고르지 말고, 문제 문장이 요구하는 관리 수준을 기준으로 선택한다.
