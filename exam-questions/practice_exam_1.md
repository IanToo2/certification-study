# Practice Exam 1

총 40문항으로 구성된 AWS SAA-C03 스타일 연습문제다. 각 문항은 아키텍처 의사결정 관점으로 설계했다.

## 1

한 회사는 여러 `EC2` 인스턴스에서 공통 스크립트를 실행해 `Amazon S3` 버킷에 로그를 업로드해야 한다. 보안 팀은 장기 액세스 키를 서버에 저장하는 것을 금지했다.

A. 각 인스턴스에 `IAM User`를 생성하고 액세스 키를 저장한다.  
B. 각 인스턴스에 `IAM Role`을 연결한다.  
C. 버킷을 퍼블릭으로 열고 업로드를 허용한다.  
D. `Amazon Cognito` User Pool을 생성한다.

정답: B

해설: `EC2`에서 AWS 리소스에 접근할 때는 장기 키 대신 `IAM Role`을 사용해야 한다. 이는 최소 권한과 키 관리 제거라는 시험 포인트를 동시에 만족한다.

---

## 2

한 기업은 여러 AWS 계정에서 누가 `Amazon S3` 버킷 정책을 변경했는지 중앙에서 추적하려고 한다. 가장 적절한 서비스는 무엇인가?

A. `Amazon CloudWatch`  
B. `AWS CloudTrail`  
C. `AWS Config`  
D. `Amazon Inspector`

정답: B

해설: API 호출 주체와 시점을 추적하는 서비스는 `AWS CloudTrail`이다. `AWS Config`는 구성 상태를 보지만 누가 변경했는지 추적하는 핵심 서비스는 아니다.

---

## 3

한 애플리케이션은 데이터베이스 비밀번호를 주기적으로 자동 교체해야 한다. 애플리케이션은 `AWS Lambda`에서 실행된다. 가장 적절한 선택은?

A. 환경 변수에 비밀번호를 평문 저장한다.  
B. `AWS Secrets Manager`를 사용하고 `Lambda`에 조회 권한을 부여한다.  
C. 비밀번호를 코드에 하드코딩한다.  
D. 비밀번호를 `Amazon S3`에 텍스트 파일로 저장한다.

정답: B

해설: 자동 회전과 비밀값 저장 요구사항은 `AWS Secrets Manager`의 전형적인 사용 사례다. `Lambda`는 `IAM Role`을 통해 비밀값을 안전하게 조회할 수 있다.

---

## 4

모바일 애플리케이션 사용자가 직접 가입하고 로그인해야 한다. 로그인 후에는 사용자별로 제한된 리소스만 사용하게 해야 한다. 어떤 서비스가 가장 적절한가?

A. `IAM User`  
B. `Amazon Cognito`  
C. `AWS Organizations`  
D. `AWS Shield`

정답: B

해설: 애플리케이션 최종 사용자 인증은 `Amazon Cognito`가 담당한다. `IAM`은 AWS 관리자나 서비스 권한 제어에 더 적합하다.

---

## 5

보안 팀은 특정 서브넷으로 들어오는 일부 악성 IP 대역을 명시적으로 거부하려고 한다. 어떤 기능이 가장 적절한가?

A. `Security Group`  
B. `Network ACL`  
C. `IAM Policy`  
D. `AWS WAF`

정답: B

해설: 서브넷 단위에서 명시적 거부 규칙이 필요한 경우 `Network ACL`이 적합하다. `Security Group`은 상태 저장이며 거부 규칙을 지원하지 않는다.

---

## 6

한 회사는 레거시 라이선스 소프트웨어를 AWS로 이전하려고 한다. 이 소프트웨어는 운영체제 수준 설정 변경과 커스텀 에이전트 설치가 필요하다. 가장 적절한 컴퓨트 선택은?

A. `AWS Lambda`  
B. `Amazon EC2`  
C. `AWS Fargate`  
D. `Amazon API Gateway`

정답: B

해설: 운영체제 제어와 에이전트 설치가 필요하면 `Amazon EC2`가 가장 적합하다. 이는 SAA에서 서버 제어권이 필요한 전형적인 단서다.

---

## 7

한 웹 애플리케이션은 매일 오전 9시와 오후 8시에 트래픽이 급증한다. 사용자는 지연 없이 애플리케이션을 사용해야 한다. 가장 비용 효율적인 확장 방식은?

A. 고정 대형 인스턴스 1대를 계속 사용한다.  
B. `Auto Scaling`의 스케줄 기반 확장을 사용한다.  
C. 모든 요청을 `AWS Lambda`로 전환한다.  
D. `Placement Group`을 사용한다.

정답: B

해설: 예측 가능한 시간대별 트래픽 증가는 스케줄 기반 `Auto Scaling`으로 대응하는 것이 적절하다. 필요 시 메트릭 기반 정책과 함께 사용할 수도 있다.

---

## 8

어떤 팀은 컨테이너 이미지를 사용해야 하지만 클러스터 노드 패치와 용량 관리는 하고 싶지 않다. 어떤 서비스가 가장 적절한가?

A. `Amazon EC2 Auto Scaling`  
B. `AWS Fargate`  
C. `Elastic Beanstalk`  
D. `AWS Batch`

정답: B

해설: 서버 관리 없이 컨테이너를 실행하려면 `AWS Fargate`가 적합하다. `Amazon ECS`와 함께 사용하면 관리형 컨테이너 운영이 가능하다.

---

## 9

한 팀은 새 인스턴스를 항상 같은 AMI, 보안 그룹, 사용자 데이터로 시작해야 한다. `Auto Scaling Group`과 함께 사용할 가장 적절한 기능은?

A. `Launch Templates`  
B. `Snapshots`  
C. `Reserved Instances`  
D. `IAM Group`

정답: A

해설: `Launch Templates`는 인스턴스 시작 구성을 버전과 함께 표준화한다. 오토스케일링과 조합될 때 자주 출제된다.

---

## 10

실시간 금융 계산 시스템은 같은 AZ 내 인스턴스 간 매우 낮은 네트워크 지연을 요구한다. 어떤 기능이 가장 적절한가?

A. `Spread Placement Group`  
B. `Cluster Placement Group`  
C. `NAT Gateway`  
D. `Read Replica`

정답: B

해설: 초저지연 고성능 네트워크가 요구되면 `Cluster Placement Group`이 정답 후보다. 성능 최적화와 장애 분리 목적을 구분하는 것이 중요하다.

---

## 11

한 회사는 전 세계 사용자에게 정적 이미지를 제공하려고 한다. 파일은 자주 변경되지 않고, 가장 높은 내구성과 낮은 운영 부담이 필요하다. 가장 적절한 조합은?

A. `Amazon EBS + NLB`  
B. `Amazon S3 + Amazon CloudFront`  
C. `Amazon EFS + ALB`  
D. `Amazon FSx + Route 53`

정답: B

해설: 정적 자산 저장은 `Amazon S3`, 글로벌 저지연 전송은 `Amazon CloudFront`가 전형적인 정답 조합이다.

---

## 12

여러 `EC2` 인스턴스가 동일한 리눅스 파일 시스템을 공유해야 한다. 저장소는 자동으로 확장되어야 한다. 어떤 서비스가 가장 적절한가?

A. `Amazon EBS`  
B. `Amazon EFS`  
C. `Amazon S3`  
D. `Glacier Deep Archive`

정답: B

해설: 다수 인스턴스가 공유하는 리눅스 파일 시스템에는 `Amazon EFS`가 적합하다. `Amazon EBS`는 일반적으로 단일 인스턴스용 블록 스토리지다.

---

## 13

회사는 보안 로그를 7년간 보관해야 한다. 대부분의 기간 동안 조회하지 않지만, 필요 시 복구는 가능해야 한다. 가장 비용 효율적인 선택은?

A. `Amazon EFS`  
B. `Amazon S3 Standard`  
C. `S3 Lifecycle`로 `Glacier Deep Archive`로 전환  
D. `Amazon RDS`

정답: C

해설: 장기 보관과 낮은 접근 빈도는 `S3 Lifecycle`과 `Glacier` 계열 조합이 적합하다. 시험에서는 비용과 복구 시간을 함께 판단해야 한다.

---

## 14

한 애플리케이션은 EC2 루트 디스크에 저장된 데이터를 주기적으로 백업해야 한다. 가장 적절한 방법은?

A. `EBS Snapshot` 생성  
B. `Amazon SNS` 발행  
C. `Security Group` 변경  
D. `SQS FIFO` 사용

정답: A

해설: `Amazon EBS` 데이터 백업은 스냅샷이 기본 선택이다. 스냅샷은 증분 백업이므로 시험에서 자주 묻는다.

---

## 15

기업은 다른 리전에 자동으로 객체 사본을 유지해 재해 복구를 강화하려고 한다. 어떤 기능이 가장 적절한가?

A. `S3 Transfer Acceleration`  
B. `S3 Cross-Region Replication`  
C. `EBS Multi-Attach`  
D. `Storage Gateway`

정답: B

해설: 다른 리전으로 `Amazon S3` 객체를 자동 복제하려면 `S3 Cross-Region Replication`을 사용한다. 버전 관리가 선행 조건이라는 점도 중요하다.

---

## 16

어떤 회사는 전통적인 트랜잭션 기반 온라인 주문 시스템을 운영한다. SQL 쿼리와 관계형 스키마가 필수이며, 관리 부담은 줄이고 싶다. 어떤 데이터베이스가 가장 적절한가?

A. `Amazon DynamoDB`  
B. `Amazon RDS`  
C. `Amazon S3`  
D. `Amazon ElastiCache`

정답: B

해설: 관계형 스키마와 SQL, 관리형 운영 요구는 `Amazon RDS`가 가장 적절하다. 이는 SAA에서 매우 기본적인 관계형 선택 문제다.

---

## 17

한 애플리케이션은 데이터베이스 장애 시 자동 장애 조치가 필요하지만, 읽기 성능 확장은 중요하지 않다. 어떤 구성이 가장 적절한가?

A. `Read Replica`  
B. `Multi-AZ`  
C. `ElastiCache`  
D. `DynamoDB Global Tables`

정답: B

해설: 장애 조치를 위한 고가용성은 `Multi-AZ`가 목적이다. `Read Replica`는 읽기 확장이지 고가용성의 핵심 수단이 아니다.

---

## 18

게임 애플리케이션은 초당 수백만 건의 세션 조회를 매우 낮은 지연으로 처리해야 한다. 스키마는 단순 키-값 형태다. 가장 적절한 데이터베이스는?

A. `Amazon DynamoDB`  
B. `Amazon RDS for PostgreSQL`  
C. `Amazon Redshift`  
D. `Amazon Aurora`

정답: A

해설: 초저지연 대규모 키-값 접근은 `Amazon DynamoDB`가 적합하다. 관계형 기능보다 확장성과 지연 특성이 우선인 문제다.

---

## 19

기업은 기존 MySQL 호환 애플리케이션을 거의 수정하지 않고 더 높은 성능과 빠른 장애 복구를 얻고 싶다. 어떤 선택이 가장 적절한가?

A. `Amazon Aurora MySQL-Compatible`  
B. `Amazon DynamoDB`  
C. `Amazon Neptune`  
D. `Amazon ElastiCache`

정답: A

해설: MySQL 호환성과 더 높은 성능, 빠른 복구 요구는 `Amazon Aurora MySQL-Compatible`의 전형적인 사용 사례다.

---

## 20

전자상거래 사이트는 상품 상세 읽기 요청이 많아 기본 데이터베이스 부하가 증가하고 있다. 데이터 일관성은 약간 늦어져도 괜찮다. 가장 적절한 해결책은?

A. `Read Replica` 추가  
B. `NAT Gateway` 추가  
C. `AWS Config` 활성화  
D. `Placement Group` 사용

정답: A

해설: 읽기 요청이 많은 관계형 데이터베이스는 `Read Replica`로 읽기 부하를 분산할 수 있다. 문제에서 읽기 확장이 핵심 단서다.

---

## 21

한 회사는 `ALB` 뒤에 있는 애플리케이션 서버와 `RDS` 데이터베이스를 분리된 프라이빗 서브넷에 배치하려고 한다. 인터넷에서 직접 노출되어야 하는 것은 무엇인가?

A. `RDS`  
B. 애플리케이션 서버  
C. `ALB`  
D. `NAT Gateway`

정답: C

해설: 3계층 웹 아키텍처에서 인터넷에 직접 노출되는 것은 일반적으로 `Application Load Balancer`다. 앱과 DB는 프라이빗 서브넷에 둔다.

---

## 22

프라이빗 서브넷의 인스턴스가 운영체제 패치를 받기 위해 인터넷에 아웃바운드 연결을 해야 한다. 외부에서 인스턴스로 직접 들어오면 안 된다. 가장 적절한 구성은?

A. `Internet Gateway` 직접 연결  
B. `NAT Gateway` 사용  
C. 퍼블릭 IP 부여  
D. `VPC Peering`

정답: B

해설: 프라이빗 서브넷의 아웃바운드 인터넷 접근은 `NAT Gateway`가 정답이다. 인바운드는 허용하지 않는 점이 핵심이다.

---

## 23

애플리케이션은 프라이빗 서브넷에서 `Amazon S3`에 접근해야 한다. 보안팀은 공용 인터넷과 NAT를 거치지 말라고 요구했다. 가장 적절한 선택은?

A. `Internet Gateway`  
B. `Gateway VPC Endpoint for S3`  
C. `Transit Gateway`  
D. `Route 53 Resolver`

정답: B

해설: `Amazon S3` 사설 접근은 `Gateway VPC Endpoint`가 가장 적절하다. 이는 보안과 NAT 비용 절감 요구를 동시에 만족한다.

---

## 24

글로벌 사용자에게 정적 콘텐츠를 빠르게 전달하고 오리진 부하를 줄여야 한다. 가장 적절한 서비스는?

A. `AWS Global Accelerator`  
B. `Amazon CloudFront`  
C. `Amazon Route 53`  
D. `Network Load Balancer`

정답: B

해설: 캐시와 엣지 전송이 핵심이면 `Amazon CloudFront`가 적절하다. `AWS Global Accelerator`는 캐시가 아니라 네트워크 경로 최적화 서비스다.

---

## 25

애플리케이션은 URL 경로에 따라 `/api` 요청은 하나의 백엔드로, `/images` 요청은 다른 백엔드로 보내야 한다. 어떤 서비스가 가장 적절한가?

A. `Network Load Balancer`  
B. `Application Load Balancer`  
C. `Route 53 Failover Routing`  
D. `NAT Gateway`

정답: B

해설: 경로 기반 라우팅은 `Application Load Balancer`의 대표 기능이다. L7 요구사항을 읽어내는 것이 중요하다.

---

## 26

회사는 애플리케이션 컴포넌트를 분리하고, 소비자가 잠시 실패하더라도 메시지가 유실되지 않게 하려 한다. 어떤 서비스가 가장 적절한가?

A. `Amazon SNS`  
B. `Amazon SQS`  
C. `Amazon EventBridge`  
D. `Amazon Kinesis`

정답: B

해설: 내구성 있는 큐와 비동기 버퍼링은 `Amazon SQS`의 핵심 가치다. 소비자 장애 시에도 메시지를 유지할 수 있다.

---

## 27

한 이벤트를 이메일 서비스, 분석 서비스, 감사 서비스에 동시에 전달해야 한다. 가장 적절한 서비스는?

A. `Amazon SNS`  
B. `Amazon SQS FIFO`  
C. `AWS Step Functions`  
D. `Amazon EBS`

정답: A

해설: 다중 구독자 팬아웃은 `Amazon SNS`가 적합하다. 각 구독자에게 동일 이벤트를 동시에 배포할 수 있다.

---

## 28

주문 상태 변경 이벤트는 반드시 순서대로 처리되어야 하며 중복 처리도 최소화해야 한다. 가장 적절한 선택은?

A. `Amazon SQS Standard`  
B. `Amazon SQS FIFO`  
C. `Amazon SNS`  
D. `Amazon EventBridge`

정답: B

해설: 순서 보장과 중복 제거 요구는 `Amazon SQS FIFO`의 대표 사용 사례다. 메시지 그룹과 deduplication 개념이 중요하다.

---

## 29

여러 AWS 서비스와 커스텀 애플리케이션 이벤트를 규칙에 따라 서로 다른 대상에 분기해야 한다. 가장 적절한 서비스는?

A. `Amazon EventBridge`  
B. `Amazon SQS`  
C. `Amazon MQ`  
D. `AWS KMS`

정답: A

해설: 규칙 기반 이벤트 라우팅은 `Amazon EventBridge`가 가장 적합하다. SAA에서 큐와 이벤트 버스를 구분하는 대표 문제다.

---

## 30

한 회사는 결제, 배송, 승인 단계를 가진 긴 비즈니스 프로세스를 시각적으로 관리하고 재시도 로직을 넣고 싶다. 가장 적절한 서비스는?

A. `Amazon SNS`  
B. `AWS Step Functions`  
C. `Amazon S3`  
D. `Amazon Route 53`

정답: B

해설: 여러 단계와 상태, 재시도, 예외 처리는 `AWS Step Functions`가 적합하다. 이벤트 전달과 워크플로 오케스트레이션을 구분해야 한다.

---

## 31

운영팀은 EC2 CPU 사용률이 80%를 넘으면 자동으로 알람을 발생시키고 싶다. 어떤 서비스가 가장 적절한가?

A. `AWS CloudTrail`  
B. `Amazon CloudWatch`  
C. `AWS Config`  
D. `Amazon Inspector`

정답: B

해설: 메트릭 수집과 알람은 `Amazon CloudWatch`의 핵심 기능이다. 오토스케일링과도 자주 함께 출제된다.

---

## 32

보안 팀은 누가 보안 그룹 규칙을 변경했는지 알고 싶다. 가장 적절한 서비스는?

A. `Amazon CloudWatch`  
B. `AWS CloudTrail`  
C. `AWS Config`  
D. `Amazon SQS`

정답: B

해설: 사용자 또는 역할이 수행한 API 호출 추적은 `AWS CloudTrail`이 담당한다. `AWS Config`는 변경된 결과 상태를 보는 데 더 적합하다.

---

## 33

회사는 암호화되지 않은 `EBS` 볼륨이 생성되면 이를 규정 위반으로 표시하고 싶다. 어떤 서비스가 가장 적절한가?

A. `AWS Config`  
B. `Amazon CloudFront`  
C. `AWS Shield`  
D. `Amazon RDS`

정답: A

해설: 리소스 구성 준수 평가와 규칙 기반 검사에는 `AWS Config`가 적합하다. 암호화 여부 확인은 대표적인 Config 시나리오다.

---

## 34

애플리케이션 로그에서 특정 오류 문자열이 발생하면 운영자에게 즉시 통보하려고 한다. 가장 적절한 조합은?

A. `CloudWatch Logs`와 `CloudWatch Alarm`  
B. `CloudTrail`과 `Route 53`  
C. `Config`와 `SNS FIFO`  
D. `S3`와 `NAT Gateway`

정답: A

해설: 로그 패턴 감시와 알람은 `CloudWatch Logs` 및 `CloudWatch Alarm` 조합으로 구현한다. 운영 모니터링 문제의 전형적인 형태다.

---

## 35

여러 계정의 감사 로그를 중앙 저장소로 장기 보관하려고 한다. 가장 적절한 구성은?

A. 각 계정에 별도 `CloudWatch Dashboard`만 생성  
B. 중앙 보안 계정의 `Amazon S3` 버킷으로 `CloudTrail` 로그 집계  
C. 모든 계정에서 `EBS Snapshot` 공유  
D. `Network ACL` 사용

정답: B

해설: 다중 계정 감사 로그 중앙화는 `CloudTrail`을 중앙 `Amazon S3` 버킷으로 집계하는 패턴이 대표적이다.

---

## 36

상시 실행되는 프로덕션 API 서버가 있고, 향후 3년 동안 사용량이 안정적일 것으로 예상된다. 가장 비용 효율적인 선택은?

A. 항상 온디맨드만 사용  
B. `Savings Plans` 또는 `Reserved Instances` 사용 검토  
C. 전부 `Spot Instances`로 전환  
D. `Glacier`로 이동

정답: B

해설: 장기 안정 사용량은 약정 기반 할인 모델을 검토해야 한다. 문제에서 유연성이 중요하면 `Savings Plans`가 더 적합할 수 있다.

---

## 37

대규모 배치 렌더링 작업은 중단되어도 재시작이 가능하다. 비용을 최대한 절감하려면 어떤 인스턴스 옵션이 적절한가?

A. 온디맨드 인스턴스만 사용  
B. `Spot Instances` 사용  
C. `Dedicated Hosts` 사용  
D. `Reserved Instances`만 사용

정답: B

해설: 중단 허용 배치 작업은 `Spot Instances`의 전형적인 사용 사례다. 시험에서는 체크포인트나 큐 기반 설계와 함께 나온다.

---

## 38

회사는 오래된 `Amazon S3` 로그를 자동으로 저렴한 스토리지 클래스로 이동하고 싶다. 가장 적절한 기능은?

A. `S3 Lifecycle`  
B. `CloudTrail Event History`  
C. `Auto Scaling`  
D. `Transit Gateway`

정답: A

해설: 객체 생명주기 기반 자동 전환은 `S3 Lifecycle`이 담당한다. 비용 최적화 문제에서 반복 출제되는 포인트다.

---

## 39

트래픽 급증 시에는 저렴한 용량을 추가 사용하되, 기본 서비스 용량은 안정적으로 유지해야 한다. 어떤 전략이 가장 적절한가?

A. 온디맨드와 `Spot Instances` 혼합  
B. `Glacier Deep Archive` 사용  
C. `IAM Group` 생성  
D. `SQS FIFO` 생성

정답: A

해설: 기준 용량은 온디맨드 또는 약정 할인으로 유지하고, 추가 용량은 `Spot Instances`로 보완하는 전략이 비용과 안정성의 균형을 맞춘다.

---

## 40

어떤 애플리케이션은 거의 사용되지 않지만 사용될 때는 즉시 실행되어야 한다. 서버를 항상 켜 두는 비용을 줄이고 싶다. 가장 적절한 선택은?

A. 대형 `EC2` 인스턴스 상시 실행  
B. `AWS Lambda`  
C. `Reserved Instances` 구매  
D. `Cluster Placement Group` 사용

정답: B

해설: 간헐적 요청과 상시 서버 비용 절감 요구는 `AWS Lambda`가 적합하다. 사용량 기반 과금이 핵심이다.
