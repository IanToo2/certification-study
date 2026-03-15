# Practice Exam 4

총 40문항으로 구성된 AWS SAA-C03 스타일 연습문제다. 서비스 이름보다 요구사항 해석과 오답 제거에 집중해 풀어야 한다.

## 1

회사는 프로덕션 리소스 접근 권한을 업무별로 세분화하려고 한다. 개발자는 로그 조회만 가능하고, 운영자는 배포까지 가능해야 한다. 가장 적절한 접근은?

A. 모든 사용자에게 AdministratorAccess 부여  
B. 역할별 최소 권한 `IAM Policy` 적용  
C. 루트 계정 공유  
D. `Security Group`으로 권한 통제

정답: B

해설: 사용자별 최소 권한 정책 설계는 `IAM Policy`의 핵심 사용 사례다.

---

## 2

애플리케이션은 `RDS` 암호화 키 사용 이력을 감사해야 한다. 어떤 서비스가 가장 적절한가?

A. `AWS CloudTrail`  
B. `Amazon Route 53`  
C. `Amazon EFS`  
D. `S3 Lifecycle`

정답: A

해설: `KMS` 관련 API 호출과 키 사용 기록은 `AWS CloudTrail`로 감사할 수 있다.

---

## 3

데이터베이스 비밀번호는 자동으로 회전해야 하며, 애플리케이션은 새 비밀번호를 코드 수정 없이 사용해야 한다. 어떤 서비스가 적절한가?

A. `AWS Secrets Manager`  
B. `Amazon CloudFront`  
C. `IAM Group`  
D. `NAT Gateway`

정답: A

해설: 자동 회전과 애플리케이션 연동은 `AWS Secrets Manager`가 가장 적절하다.

---

## 4

회사는 웹 애플리케이션의 고객 로그인 기능을 직접 구현하지 않고 관리형 서비스로 처리하려 한다. 가장 적절한 선택은?

A. `IAM User`  
B. `Amazon Cognito`  
C. `AWS Config`  
D. `Network ACL`

정답: B

해설: 애플리케이션 사용자 로그인은 `Amazon Cognito`가 적합하다.

---

## 5

특정 서브넷에서 반환 트래픽 포트 허용이 누락되어 연결이 실패하고 있다. 어떤 보안 기능의 특성을 이해해야 하는가?

A. `Security Group`은 상태 비저장이다.  
B. `Network ACL`은 상태 비저장이다.  
C. `IAM Policy`는 상태 저장이다.  
D. `CloudTrail`은 상태 저장이다.

정답: B

해설: `Network ACL`은 상태 비저장이므로 인바운드와 아웃바운드 모두를 고려해야 한다.

---

## 6

운영체제 패치, 커널 튜닝, 특수 네트워크 드라이버 설치가 필요한 워크로드를 배포해야 한다. 어떤 선택이 적절한가?

A. `Amazon EC2`  
B. `AWS Lambda`  
C. `Amazon SNS`  
D. `Amazon DynamoDB`

정답: A

해설: 운영체제 수준 제어가 필요하면 `Amazon EC2`를 선택해야 한다.

---

## 7

요청이 없을 때 비용이 거의 0이어야 하는 웹훅 처리기가 필요하다. 어떤 서비스가 적절한가?

A. `AWS Lambda`  
B. `Amazon EC2 Dedicated Host`  
C. `Amazon EFS`  
D. `Placement Group`

정답: A

해설: 이벤트 기반 웹훅 처리와 사용량 기반 과금은 `AWS Lambda`가 적합하다.

---

## 8

한 애플리케이션은 `ECS`를 사용하고 있다. 팀은 컨테이너 호스트 패치를 없애고 싶다. 어떤 실행 방식을 사용해야 하는가?

A. `EC2 launch type`  
B. `AWS Fargate launch type`  
C. `Auto Scaling Warm Pool`  
D. `Route 53`

정답: B

해설: `Amazon ECS`에서 서버 관리 제거는 `AWS Fargate launch type`으로 달성할 수 있다.

---

## 9

새 애플리케이션 버전 배포 시 오토스케일링 인스턴스를 점진 교체해야 한다. 시작 구성을 버전 관리하려면 무엇이 적절한가?

A. `Launch Templates`  
B. `CloudTrail Trail`  
C. `VPC Peering`  
D. `SNS Topic`

정답: A

해설: `Launch Templates`는 버전별 시작 구성을 관리하고 롤아웃에 활용할 수 있다.

---

## 10

고성능 연산 워크로드는 가능한 한 가까운 물리 하드웨어에 배치되어야 한다. 어떤 기능이 적절한가?

A. `Cluster Placement Group`  
B. `Spread Placement Group`  
C. `Network ACL`  
D. `Read Replica`

정답: A

해설: 가장 낮은 네트워크 지연을 요구하는 HPC 워크로드는 `Cluster Placement Group`이 적합하다.

---

## 11

기업은 로그 파일을 장기간 보관해야 하며, 저장소는 사실상 무제한으로 확장되어야 한다. 가장 적절한 선택은?

A. `Amazon S3`  
B. `Amazon EBS`  
C. `Amazon EFS`  
D. `Amazon ElastiCache`

정답: A

해설: 확장성과 내구성이 중요한 로그 저장소는 `Amazon S3`가 적합하다.

---

## 12

다수의 Linux 인스턴스가 업로드 디렉터리를 공유해야 한다. 가장 적절한 저장소는?

A. `Amazon S3`  
B. `Amazon EFS`  
C. `Amazon EBS`  
D. `Glacier Flexible Retrieval`

정답: B

해설: 리눅스 인스턴스 간 공유 파일 시스템은 `Amazon EFS`가 정답이다.

---

## 13

어떤 파일은 빠른 복구가 필요하지만 접근 빈도는 매우 낮다. 가장 적절한 `S3` 클래스는?

A. `Glacier Instant Retrieval`  
B. `Glacier Deep Archive`  
C. `One Zone-IA`  
D. `S3 Standard`

정답: A

해설: 접근은 드물지만 즉시 또는 매우 빠른 복구가 필요하면 `Glacier Instant Retrieval`이 적합하다.

---

## 14

회사는 오래된 객체의 이전 버전만 자동 삭제하고 현재 버전은 유지하려고 한다. 어떤 기능이 적절한가?

A. `S3 Lifecycle`의 noncurrent version rule  
B. `CloudFront` 캐시 무효화  
C. `NAT Gateway`  
D. `Read Replica`

정답: A

해설: 이전 버전 객체 정리는 `S3 Lifecycle`의 noncurrent version 정책으로 처리할 수 있다.

---

## 15

한 워크로드는 고성능 병렬 파일 시스템이 필요하며, 분석 작업이 끝나면 `Amazon S3`에 저장된 데이터셋을 다시 사용할 수 있어야 한다. 어떤 서비스가 적절한가?

A. `Amazon FSx for Lustre`  
B. `Amazon EFS`  
C. `Amazon RDS`  
D. `Amazon SQS`

정답: A

해설: HPC와 고성능 병렬 파일 시스템은 `Amazon FSx for Lustre`가 적합하다.

---

## 16

주문 시스템은 관계형 스키마와 트랜잭션을 요구하지만, 고성능과 빠른 장애 복구도 중요하다. 가장 적절한 선택은?

A. `Amazon Aurora`  
B. `Amazon DynamoDB`  
C. `Amazon ElastiCache`  
D. `Amazon Neptune`

정답: A

해설: 관계형과 고성능, 빠른 복구 요구가 함께 있으면 `Amazon Aurora`가 적합하다.

---

## 17

애플리케이션은 복잡한 SQL 조인 없이 키로만 조회하며, 트래픽 폭증에도 자동 확장이 필요하다. 어떤 데이터베이스가 적절한가?

A. `Amazon DynamoDB`  
B. `Amazon RDS for Oracle`  
C. `Amazon Aurora`  
D. `Amazon Redshift`

정답: A

해설: 키 기반 단순 접근과 자동 수평 확장은 `Amazon DynamoDB`의 전형적 사용 사례다.

---

## 18

읽기 성능은 이미 충분하지만, 장애 시 빠른 자동 전환이 필요하다. 기존 RDS 인스턴스에 어떤 구성이 적절한가?

A. `Read Replica`  
B. `Multi-AZ`  
C. `DAX`  
D. `S3 Lifecycle`

정답: B

해설: 빠른 장애 조치와 고가용성은 `Multi-AZ` 구성이 담당한다.

---

## 19

애플리케이션은 데이터베이스 읽기 부하를 줄이기 위해 자주 조회하는 결과를 메모리에 저장하려 한다. 어떤 서비스가 적절한가?

A. `Amazon ElastiCache`  
B. `AWS Config`  
C. `Amazon Route 53`  
D. `NAT Gateway`

정답: A

해설: 메모리 캐시를 통한 읽기 성능 향상은 `Amazon ElastiCache`의 대표 시나리오다.

---

## 20

MySQL 데이터베이스에서 보고서 생성용 읽기 전용 복제본이 필요하다. 어떤 기능이 적절한가?

A. `RDS Read Replica`  
B. `RDS Multi-AZ`만 사용  
C. `Security Group`  
D. `Amazon CloudWatch`

정답: A

해설: 읽기 전용 분석/보고서 워크로드 분리는 `Read Replica`가 적합하다.

---

## 21

인터넷에서 직접 접근 가능한 리소스를 포함하는 퍼블릭 서브넷을 만들려면 반드시 필요한 것은?

A. `Internet Gateway` 경로  
B. `AWS Config` 규칙  
C. `Read Replica`  
D. `AWS KMS`

정답: A

해설: 퍼블릭 서브넷 여부는 `Internet Gateway`로 나가는 라우팅이 핵심이다.

---

## 22

두 개의 VPC는 통신해야 하지만, 각각 이미 다른 VPC와 피어링되어 있다. 기존 피어링을 통해 전이적으로 연결되길 기대하면 안 되는 이유는?

A. `VPC Peering`은 전이 라우팅을 지원하지 않는다.  
B. `Route 53`만 전이를 지원한다.  
C. `NAT Gateway`가 이를 차단한다.  
D. `Security Group`이 전이를 막는다.

정답: A

해설: `VPC Peering`의 대표 함정은 전이 라우팅이 지원되지 않는다는 점이다.

---

## 23

프라이빗 서브넷에서 외부 API를 호출해야 한다. 가장 간단한 관리형 옵션은?

A. `NAT Gateway`  
B. `Application Load Balancer`  
C. `Gateway Endpoint`  
D. `CloudFront`

정답: A

해설: 외부 인터넷 API 호출은 `NAT Gateway`가 적절하다. `Gateway Endpoint`는 AWS 서비스 전용이다.

---

## 24

사용자와 가장 가까운 리전의 엔드포인트로 DNS 수준에서 보내고 싶다. 어떤 라우팅 정책이 적절한가?

A. `Route 53 Latency-based Routing`  
B. `Weighted Routing`  
C. `Failover Routing`  
D. `Multivalue Answer Routing`

정답: A

해설: 사용자 지연 기준으로 가장 적절한 엔드포인트 선택은 `Latency-based Routing`이다.

---

## 25

한 서비스는 TCP 연결 수가 매우 많고 지연에 민감하다. 경로 기반 라우팅은 필요 없다. 어떤 로드 밸런서가 적절한가?

A. `Application Load Balancer`  
B. `Network Load Balancer`  
C. `Route 53`  
D. `CloudFront`

정답: B

해설: 전송 계층 고성능과 낮은 지연은 `Network Load Balancer`가 적합하다.

---

## 26

소비자가 다운되어도 이벤트를 잃지 않고 나중에 처리해야 한다. 어떤 서비스가 가장 적절한가?

A. `Amazon SQS`  
B. `Amazon SNS`  
C. `Amazon CloudFront`  
D. `AWS Config`

정답: A

해설: 내구성 있는 비동기 큐는 `Amazon SQS`가 적합하다.

---

## 27

한 이벤트를 여러 서비스로 즉시 전달해야 하지만, 각 서비스는 별도 큐를 갖길 원한다. 어떤 구성이 적절한가?

A. `SNS Topic`에서 여러 `SQS Queue`로 팬아웃  
B. 단일 `SQS`만 사용  
C. `NAT Gateway` 추가  
D. `CloudTrail` 사용

정답: A

해설: 신뢰성 있는 팬아웃은 `Amazon SNS`와 `Amazon SQS` 조합이 자주 정답으로 나온다.

---

## 28

이벤트를 서비스 타입에 따라 서로 다른 워크플로로 보내야 한다. 어떤 서비스가 가장 적절한가?

A. `Amazon EventBridge`  
B. `Amazon EFS`  
C. `Amazon Aurora`  
D. `Security Group`

정답: A

해설: 이벤트 타입별 규칙 분기는 `Amazon EventBridge`가 적합하다.

---

## 29

초당 수만 건의 스트리밍 클릭 이벤트를 실시간 분석 엔진과 아카이브 시스템이 각각 소비해야 한다. 어떤 서비스가 가장 적절한가?

A. `Amazon Kinesis Data Streams`  
B. `Amazon SNS`  
C. `Amazon SQS FIFO`  
D. `AWS Step Functions`

정답: A

해설: 다중 소비자 실시간 스트리밍은 `Amazon Kinesis Data Streams`가 적합하다.

---

## 30

여러 단계의 데이터 처리 작업을 순차적으로 수행하고 각 단계 실패를 개별 재시도해야 한다. 어떤 서비스가 적절한가?

A. `AWS Step Functions`  
B. `Amazon CloudTrail`  
C. `Amazon Route 53`  
D. `Amazon EBS`

정답: A

해설: 순차 워크플로와 단계별 재시도는 `AWS Step Functions`가 적합하다.

---

## 31

운영팀은 지표 임계치 초과 시 자동 확장을 트리거하려 한다. 어떤 서비스가 핵심 역할을 하는가?

A. `Amazon CloudWatch`  
B. `AWS CloudTrail`  
C. `AWS Config`  
D. `Amazon SNS FIFO`

정답: A

해설: 메트릭과 알람 기반 오토스케일링은 `Amazon CloudWatch`가 중심이다.

---

## 32

특정 IAM 역할이 최근 24시간 동안 수행한 모든 API 호출을 검토하려 한다. 어떤 서비스가 적절한가?

A. `AWS CloudTrail`  
B. `Amazon CloudWatch`  
C. `AWS Config`  
D. `Amazon Route 53`

정답: A

해설: 역할별 API 호출 이력 추적은 `AWS CloudTrail`이 담당한다.

---

## 33

보안 팀은 암호화되지 않은 `RDS` 인스턴스를 규정 위반으로 탐지하고 싶다. 어떤 서비스가 적절한가?

A. `AWS Config`  
B. `Amazon SNS`  
C. `CloudFront`  
D. `Placement Group`

정답: A

해설: 리소스 암호화 준수 검사는 `AWS Config` 규칙이 적합하다.

---

## 34

애플리케이션 로그의 특정 문자열을 기반으로 경보를 생성하려고 한다. 어떤 조합이 적절한가?

A. `CloudWatch Logs Metric Filter`와 Alarm  
B. `CloudTrail`과 `NAT Gateway`  
C. `AWS Config`와 `Route 53`  
D. `S3 Replication`

정답: A

해설: 로그 패턴을 메트릭으로 변환하고 알람을 생성하는 것은 `CloudWatch Logs Metric Filter`의 대표 용도다.

---

## 35

리소스 변경 이력과 준수 상태를 대시보드로 보고하려 한다. 어떤 서비스가 가장 적절한가?

A. `AWS Config`  
B. `Amazon CloudFront`  
C. `Amazon S3 One Zone-IA`  
D. `Amazon ECS`

정답: A

해설: 구성 이력과 규정 준수 대시보드는 `AWS Config`의 영역이다.

---

## 36

팀은 지속적으로 사용하는 컴퓨트 워크로드의 비용을 줄이려 한다. `EC2` 인스턴스 타입 변경 가능성이 높다. 어떤 선택이 가장 적절한가?

A. `Savings Plans`  
B. `Spot Instances`만 사용  
C. `Glacier` 사용  
D. `EFS IA`

정답: A

해설: 인스턴스 타입 변경 유연성이 필요하면 `Savings Plans`가 적합하다.

---

## 37

중단되면 안 되는 핵심 프로덕션 데이터베이스에 가장 적절하지 않은 비용 최적화 옵션은?

A. `Reserved Instances`  
B. `Savings Plans`  
C. `Spot Instances`  
D. 스토리지 최적화 검토

정답: C

해설: 핵심 프로덕션 DB는 중단 허용이 어려우므로 `Spot Instances`는 부적절하다.

---

## 38

분석 작업은 야간에만 실행되고 중단되어도 다시 시작 가능하다. 가장 비용 절감 효과가 큰 선택은?

A. `Spot Instances`  
B. `Dedicated Hosts`  
C. `Reserved Instances`만 사용  
D. `RDS Multi-AZ`

정답: A

해설: 중단 허용 야간 배치 작업은 `Spot Instances`가 가장 비용 효율적이다.

---

## 39

오래된 백업 객체를 자동으로 `Glacier Flexible Retrieval`로 이동시키고 싶다. 어떤 기능이 적절한가?

A. `S3 Lifecycle`  
B. `AWS Config`  
C. `CloudTrail`  
D. `Application Load Balancer`

정답: A

해설: `S3 Lifecycle`은 자동 계층 이동과 만료에 사용된다.

---

## 40

거의 사용되지 않는 사내 승인 API를 위한 서버를 상시 켜 두고 있다. 비용 절감과 운영 단순화가 가장 큰 목표다. 어떤 선택이 가장 적절한가?

A. `AWS Lambda`  
B. 대형 `EC2` 유지  
C. `Reserved Instances` 추가 구매  
D. `Cluster Placement Group`

정답: A

해설: 간헐적 승인 API와 운영 단순화 요구는 `AWS Lambda`가 적합하다.
