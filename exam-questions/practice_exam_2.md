# Practice Exam 2

총 40문항으로 구성된 AWS SAA-C03 스타일 연습문제다. 각 문항은 실무형 시나리오와 시험 함정을 함께 반영했다.

<div class="exam-callout">
  <p class="exam-badge">시험 모드</p>
  <p><strong>Practice Exam 2</strong>는 두 번째 실전 세트다. 풀이 전에는 전략만 확인하고, 풀이 후에는 해설을 통해 서비스 선택 근거를 정리한다.</p>
  <div class="exam-nav">
    <a href="exam_strategy.md">시험 전략 먼저 보기</a>
    <a href="../12_final_cheatsheet.md">치트시트로 복습하기</a>
    <a href="practice_exam_3.md">다음 모의고사</a>
  </div>
</div>

## 1

한 회사는 개발자들이 프로덕션 계정에 직접 관리자 권한으로 접속하지 못하게 하려 한다. 대신 필요 시 임시로 권한을 위임받아 작업하게 해야 한다. 가장 적절한 접근 방식은?

A. 개발자별 루트 계정을 만든다.  
B. 관리자 권한이 있는 `IAM Role`을 생성하고 필요 시 AssumeRole하게 한다.  
C. 액세스 키를 공유 파일에 저장한다.  
D. 모든 사용자를 `Amazon Cognito`에 만든다.

정답: B

해설: 사람 사용자의 상시 관리자 권한 대신 `IAM Role` 기반 임시 위임이 가장 안전하다. 교차 계정 또는 승격 권한 시나리오에서 자주 나온다.

---

## 2

한 팀은 `Amazon S3` 버킷 객체가 항상 `KMS`로 암호화되도록 강제하려고 한다. 가장 적절한 방법은?

A. `NAT Gateway` 추가  
B. 버킷 정책으로 `SSE-KMS`가 없는 업로드를 거부  
C. `CloudFront`를 앞단에 둔다.  
D. `Read Replica`를 생성한다.

정답: B

해설: 업로드 시 암호화 조건을 강제하려면 버킷 정책으로 제어하는 것이 적절하다. `AWS KMS`와 정책 조합은 보안 문제의 전형적인 형태다.

---

## 3

한 기업은 여러 계정에서 암호화된 객체를 공유해야 한다. 객체는 고객 관리형 `KMS key`로 보호되어 있다. 무엇을 반드시 고려해야 하는가?

A. `Route 53` 헬스 체크  
B. 키 정책과 IAM 권한  
C. `S3 Transfer Acceleration`  
D. `Launch Template` 버전

정답: B

해설: 암호화된 데이터 공유는 리소스 권한만으로 충분하지 않을 수 있다. `KMS key`에 대한 정책과 IAM 권한을 함께 확인해야 한다.

---

## 4

모바일 앱은 소셜 로그인 기능이 필요하고, 로그인 성공 후 사용자별로 `Amazon S3` 업로드 권한이 달라야 한다. 가장 적절한 구성은?

A. `IAM User`를 앱 사용자마다 생성  
B. `Amazon Cognito` User Pool과 Identity Pool 사용  
C. `AWS Config` 규칙 생성  
D. `Security Group` 추가

정답: B

해설: 소셜 로그인과 사용자별 AWS 자격 증명 위임은 `Amazon Cognito` User Pool과 Identity Pool 조합이 적합하다.

---

## 5

특정 애플리케이션 서버만 데이터베이스 포트에 접근하게 하려 한다. 가장 권장되는 보안 그룹 설계는?

A. 데이터베이스 보안 그룹에 `0.0.0.0/0` 허용  
B. 데이터베이스 보안 그룹의 소스로 애플리케이션 보안 그룹 지정  
C. 데이터베이스를 퍼블릭 서브넷에 둔다.  
D. `Network ACL`만 사용한다.

정답: B

해설: 계층 간 통신은 CIDR보다 보안 그룹 참조를 사용하는 것이 더 안전하고 관리가 쉽다. 시험에서도 권장 패턴으로 자주 등장한다.

---

## 6

사용량이 꾸준한 사내 웹 애플리케이션이 있다. 서버는 거의 바뀌지 않으며, 팀은 가장 단순한 서버 기반 운영을 원한다. 어떤 선택이 가장 적절한가?

A. `Amazon EC2`  
B. `AWS Lambda`  
C. `Amazon EventBridge`  
D. `Amazon Kinesis`

정답: A

해설: 서버 기반 애플리케이션이고 운영체제 수준의 단순한 지속 실행 환경이 필요하면 `Amazon EC2`가 적합하다.

---

## 7

간헐적으로만 호출되는 이미지 썸네일 생성 API가 있다. 요청이 없을 때는 비용이 거의 발생하지 않아야 한다. 어떤 선택이 가장 적절한가?

A. `AWS Lambda`  
B. `Amazon EC2 Reserved Instances`  
C. `Cluster Placement Group`  
D. `Dedicated Hosts`

정답: A

해설: 간헐적 이벤트 처리와 사용량 기반 과금 요구는 `AWS Lambda`가 가장 적합하다.

---

## 8

회사는 Docker 이미지를 사용하지만 Kubernetes는 필요하지 않다. 운영 팀은 AWS 서비스와의 통합이 좋고 단순한 컨테이너 오케스트레이션을 원한다. 가장 적절한 선택은?

A. `Amazon ECS`  
B. `Amazon EC2` 단독  
C. `Amazon RDS`  
D. `Amazon S3`

정답: A

해설: Kubernetes가 필요 없고 AWS 네이티브 컨테이너 관리가 목적이면 `Amazon ECS`가 적절하다. 실행 방식으로 `AWS Fargate`를 함께 고려할 수 있다.

---

## 9

팀은 JVM 기반 웹 애플리케이션을 AWS에 빠르게 올리고 싶다. 뒤의 `EC2`, `ALB`, 오토스케일링 구성을 서비스가 자동으로 관리해 주길 원한다. 어떤 서비스가 적절한가?

A. `Elastic Beanstalk`  
B. `AWS Lambda`  
C. `Amazon Redshift`  
D. `AWS Glue`

정답: A

해설: `Elastic Beanstalk`는 EC2 기반 애플리케이션 배포와 환경 구성을 자동화한다. 완전 서버리스는 아니지만 운영 복잡도를 줄인다.

---

## 10

한 HPC 워크로드는 랙 수준 장애 격리를 유지하면서 많은 인스턴스를 그룹으로 배치해야 한다. 가장 적절한 Placement Group 유형은?

A. Cluster  
B. Spread  
C. Partition  
D. Dedicated

정답: C

해설: 대규모 분산 워크로드에서 장애 도메인을 분리하려면 `Partition Placement Group`이 적합하다.

---

## 11

데이터 레이크의 원본 로그 파일을 사실상 무제한으로 저장하고, 여러 분석 서비스에서 접근하게 하려 한다. 가장 적절한 저장소는?

A. `Amazon EBS`  
B. `Amazon S3`  
C. `Amazon EFS`  
D. `Amazon ElastiCache`

정답: B

해설: 데이터 레이크 원본 저장소는 일반적으로 `Amazon S3`가 가장 적합하다. 내구성, 확장성, 비용 면에서 유리하다.

---

## 12

여러 Windows 서버가 SMB 기반 파일 공유를 사용해야 하며, 기존 Active Directory와 통합이 필요하다. 가장 적절한 서비스는?

A. `Amazon EFS`  
B. `Amazon FSx for Windows File Server`  
C. `Amazon S3`  
D. `Glacier Instant Retrieval`

정답: B

해설: SMB와 Active Directory 통합 요구는 `Amazon FSx for Windows File Server`의 대표 시나리오다.

---

## 13

한 회사는 객체 접근 패턴을 예측할 수 없다. 스토리지 클래스 선택을 자동으로 최적화하고 싶다. 어떤 옵션이 적절한가?

A. `S3 One Zone-IA`  
B. `S3 Intelligent-Tiering`  
C. `Amazon EBS gp3`  
D. `Glacier Deep Archive`

정답: B

해설: 접근 패턴이 불확실한 경우 `S3 Intelligent-Tiering`이 적절하다. 시험에서는 예측 불가라는 표현이 핵심 단서다.

---

## 14

기업은 리전 장애에 대비해 `Amazon S3` 버킷 데이터를 다른 리전에 자동 복제하려 한다. 복제 구성 전에 반드시 필요한 것은?

A. `IAM Group`  
B. 버전 관리 활성화  
C. `EBS Snapshot`  
D. `CloudFront` 배포

정답: B

해설: `S3 Replication`의 선행 조건은 버전 관리 활성화다. 자주 출제되는 함정 포인트다.

---

## 15

한 데이터베이스 서버는 낮은 지연의 고성능 블록 스토리지가 필요하다. 여러 서버와 공유할 필요는 없다. 가장 적절한 선택은?

A. `Amazon EFS`  
B. `Amazon EBS io2` 또는 `gp3`  
C. `Amazon S3 Glacier`  
D. `Amazon FSx for Lustre`

정답: B

해설: 단일 서버용 고성능 블록 디스크는 `Amazon EBS`가 정답이다. 공유 파일 시스템 문제와 구분해야 한다.

---

## 16

한 전자결제 시스템은 강한 트랜잭션 일관성과 관계형 데이터 모델이 필요하다. 동시에 운영 부담은 최소화하고 싶다. 가장 적절한 선택은?

A. `Amazon DynamoDB`  
B. `Amazon RDS`  
C. `Amazon S3`  
D. `Amazon Neptune`

정답: B

해설: 관계형 모델과 트랜잭션이 핵심이면 `Amazon RDS`가 적합하다. NoSQL 선택지를 버릴 수 있어야 한다.

---

## 17

회사는 PostgreSQL 호환을 유지하면서도 더 빠른 복구와 고성능 읽기 확장을 원한다. 어떤 선택이 적절한가?

A. `Amazon Aurora PostgreSQL-Compatible`  
B. `Amazon DynamoDB`  
C. `Amazon ElastiCache Memcached`  
D. `Amazon EBS Multi-Attach`

정답: A

해설: PostgreSQL 호환성과 고성능 관계형 클러스터 요구는 `Amazon Aurora PostgreSQL-Compatible`이 적합하다.

---

## 18

사용자 세션 조회가 매우 많아 기본 관계형 데이터베이스의 부하가 급증하고 있다. 가장 적절한 보완 서비스는?

A. `Amazon ElastiCache`  
B. `AWS Config`  
C. `AWS Shield`  
D. `Route 53`

정답: A

해설: 세션과 자주 읽는 데이터를 캐시해 지연과 DB 부하를 줄이는 데 `Amazon ElastiCache`가 적합하다.

---

## 19

한 글로벌 애플리케이션은 여러 리전에서 활성-활성으로 쓰기 가능한 NoSQL 데이터베이스가 필요하다. 가장 적절한 기능은?

A. `Read Replica`  
B. `DynamoDB Global Tables`  
C. `RDS Multi-AZ`  
D. `Amazon EFS`

정답: B

해설: 다중 리전 활성-활성 NoSQL은 `DynamoDB Global Tables`가 대표 해답이다.

---

## 20

읽기 전용 리포팅 워크로드를 운영 DB와 분리하려고 한다. 운영 DB 엔진은 MySQL이다. 가장 적절한 선택은?

A. `RDS Read Replica`  
B. `RDS Multi-AZ`만 추가  
C. `NAT Gateway` 사용  
D. `Security Group` 삭제

정답: A

해설: 리포팅과 읽기 부하 분산은 `Read Replica`의 전형적 용도다. `Multi-AZ`만으로는 읽기 확장이 되지 않는다.

---

## 21

두 개의 VPC만 사설 IP로 통신하게 하려 한다. 전이 라우팅은 필요 없고 단순성이 가장 중요하다. 어떤 선택이 적절한가?

A. `Transit Gateway`  
B. `VPC Peering`  
C. `Internet Gateway`  
D. `NAT Gateway`

정답: B

해설: 소수의 VPC를 단순 연결하는 경우 `VPC Peering`이 적합하다. 다수 연결일 때는 `Transit Gateway`를 고려한다.

---

## 22

수십 개의 VPC와 온프레미스 네트워크를 중앙 허브로 연결해야 한다. 가장 관리가 쉬운 선택은?

A. 전부 `VPC Peering`으로 메쉬 구성  
B. `Transit Gateway`  
C. `Route 53 Public Hosted Zone`  
D. `ALB`

정답: B

해설: 대규모 허브 앤 스포크 네트워크는 `Transit Gateway`가 적합하다. 피어링 메쉬 복잡도를 줄일 수 있다.

---

## 23

사용자는 전 세계에 분산되어 있고, 애플리케이션은 고정 Anycast IP를 통해 가장 가까운 건강한 리전으로 빠르게 연결되어야 한다. 어떤 서비스가 적절한가?

A. `Amazon CloudFront`  
B. `AWS Global Accelerator`  
C. `Amazon Route 53 Weighted Routing`  
D. `Amazon S3`

정답: B

해설: 고정 Anycast IP와 빠른 글로벌 장애 전환은 `AWS Global Accelerator`의 대표 장점이다.

---

## 24

DNS 수준에서 리전 장애 시 다른 리전으로 페일오버해야 한다. 가장 적절한 서비스는?

A. `Amazon Route 53 Failover Routing`  
B. `Network ACL`  
C. `AWS KMS`  
D. `Amazon SQS`

정답: A

해설: DNS 레벨 장애 조치는 `Amazon Route 53 Failover Routing`이 담당한다. TTL 영향을 고려해야 한다.

---

## 25

한 파트너사는 고정 IP 주소만 허용한다. 백엔드는 TCP 기반 애플리케이션이다. 어떤 서비스가 가장 적절한가?

A. `Application Load Balancer`  
B. `Network Load Balancer`  
C. `Amazon CloudFront`  
D. `AWS Config`

정답: B

해설: TCP 기반, 고정 IP 요구사항은 `Network Load Balancer`가 적합하다.

---

## 26

생산자와 소비자 간 완전한 버퍼링이 필요하고, 소비자는 각자 속도에 맞춰 메시지를 처리해야 한다. 어떤 서비스가 적절한가?

A. `Amazon SNS`  
B. `Amazon SQS`  
C. `AWS Step Functions`  
D. `Amazon CloudFront`

정답: B

해설: 소비자 속도와 무관하게 메시지를 버퍼링하려면 `Amazon SQS`가 적합하다.

---

## 27

회사 내부 애플리케이션은 주문 생성 이벤트를 여러 시스템에 동시에 알려야 한다. 각 시스템은 독립적으로 메시지를 받는다. 가장 적절한 선택은?

A. `Amazon SNS`  
B. `Amazon SQS FIFO`  
C. `Amazon EBS`  
D. `AWS Config`

정답: A

해설: 다중 구독 팬아웃은 `Amazon SNS`의 대표 용도다.

---

## 28

한 회사는 AWS 서비스 이벤트와 SaaS 애플리케이션 이벤트를 한곳에서 받아 규칙 기반으로 분기하려고 한다. 어떤 서비스가 가장 적절한가?

A. `Amazon EventBridge`  
B. `Amazon S3`  
C. `Elastic Beanstalk`  
D. `NAT Gateway`

정답: A

해설: AWS 이벤트와 SaaS 이벤트의 중앙 버스 및 규칙 라우팅은 `Amazon EventBridge`가 적합하다.

---

## 29

동일 고객 ID에 대한 이벤트만 순서대로 처리되면 되고, 다른 고객 이벤트는 병렬 처리해도 된다. 가장 적절한 메시징 구성은?

A. `Amazon SQS FIFO`와 `Message Group ID` 사용  
B. `Amazon SNS`만 사용  
C. `Amazon EventBridge`만 사용  
D. `CloudTrail`만 사용

정답: A

해설: `SQS FIFO`는 메시지 그룹 단위로 순서를 보장한다. 전역 순서가 아니라 그룹별 순서라는 점이 중요하다.

---

## 30

주문 승인 후 결제, 재고 확인, 배송 생성, 알림 발송을 단계적으로 오케스트레이션해야 한다. 실패 시 특정 단계만 재시도해야 한다. 가장 적절한 서비스는?

A. `Amazon SQS`  
B. `AWS Step Functions`  
C. `Amazon SNS`  
D. `Amazon Route 53`

정답: B

해설: 상태 기반 다단계 워크플로와 재시도는 `AWS Step Functions`의 핵심 기능이다.

---

## 31

운영 팀은 애플리케이션 요청 수와 지연 시간을 그래프로 보고 경보를 설정하고 싶다. 어떤 서비스가 적절한가?

A. `AWS CloudTrail`  
B. `Amazon CloudWatch`  
C. `AWS Config`  
D. `IAM`

정답: B

해설: 메트릭 시각화와 알람은 `Amazon CloudWatch`의 기본 기능이다.

---

## 32

보안 감사관은 특정 사용자가 언제 `TerminateInstances` API를 호출했는지 알고 싶다. 어떤 서비스가 가장 적절한가?

A. `Amazon CloudWatch Logs Insights`  
B. `AWS CloudTrail`  
C. `AWS Config`  
D. `Amazon VPC Flow Logs`

정답: B

해설: API 호출 기록과 주체 확인은 `AWS CloudTrail`의 역할이다.

---

## 33

회사는 `Security Group`이 특정 포트에 대해 `0.0.0.0/0`를 허용하면 규정 위반으로 표시하려 한다. 어떤 서비스가 가장 적절한가?

A. `AWS Config`  
B. `AWS Shield Advanced`  
C. `Amazon Route 53`  
D. `Amazon Kinesis`

정답: A

해설: 보안 그룹 구성 준수 여부를 지속 평가하는 데 `AWS Config`가 적합하다.

---

## 34

장애 조사 중 운영 팀은 애플리케이션 로그와 인프라 메트릭을 같은 도구에서 보고 싶어 한다. 어떤 서비스가 가장 적절한가?

A. `Amazon CloudWatch`  
B. `AWS CloudTrail`  
C. `AWS Organizations`  
D. `Amazon Inspector`

정답: A

해설: 로그와 메트릭을 함께 다루는 운영 관찰 서비스는 `Amazon CloudWatch`다.

---

## 35

회사는 리소스 설정 변경 이력을 장기간 보관하고 싶다. 누가 바꿨는지보다 어떤 설정이 언제 바뀌었는지가 더 중요하다. 어떤 서비스가 적절한가?

A. `AWS CloudTrail`  
B. `AWS Config`  
C. `Amazon SQS`  
D. `Elastic Beanstalk`

정답: B

해설: 리소스 구성 상태와 변경 이력 추적은 `AWS Config`의 핵심 역할이다.

---

## 36

한 회사는 컴퓨트 비용을 절감하고 싶다. `EC2`, `AWS Lambda`, `AWS Fargate`를 함께 사용하며 향후 인스턴스 타입 변경 가능성도 높다. 가장 적절한 할인 모델은?

A. `Reserved Instances`만 구매  
B. `Compute Savings Plans` 검토  
C. 전부 `Spot Instances` 사용  
D. `S3 Lifecycle`

정답: B

해설: 여러 컴퓨트 서비스와 높은 유연성이 필요하면 `Compute Savings Plans`가 적합하다.

---

## 37

항상 켜져 있는 데이터베이스 인스턴스에 대해 장기 할인을 적용하고 싶다. 인스턴스 속성은 크게 바뀌지 않는다. 가장 적절한 선택은?

A. `Spot Instances`  
B. `Reserved Instances`  
C. `S3 Intelligent-Tiering`  
D. `AWS Glue`

정답: B

해설: 장기 고정 사용의 대표적인 비용 절감 수단은 `Reserved Instances`다.

---

## 38

중단되어도 재시작 가능한 빅데이터 작업이 있다. 가장 낮은 비용이 중요하다. 어떤 옵션이 적절한가?

A. `Dedicated Hosts`  
B. `Spot Instances`  
C. `Savings Plans`만 사용  
D. `On-Demand Capacity Reservations`

정답: B

해설: 중단 허용 워크로드는 `Spot Instances`가 가장 비용 효율적이다.

---

## 39

오래된 객체를 자동으로 삭제해야 하는 요구사항이 있다. 사람이 직접 주기적으로 관리하지 않으려면 어떤 기능이 가장 적절한가?

A. `S3 Lifecycle Expiration`  
B. `CloudTrail Event History`  
C. `Amazon Inspector`  
D. `Auto Scaling`

정답: A

해설: 객체 자동 만료는 `S3 Lifecycle Expiration`으로 구현하는 것이 적절하다.

---

## 40

야간에만 실행되는 배치 작업이 있으며, 서버는 그 시간 외에는 필요 없다. 가장 비용 효율적인 컴퓨트 선택은?

A. 대형 `EC2` 인스턴스 상시 실행  
B. `AWS Lambda` 또는 스케줄 기반 서버리스 접근 검토  
C. `Reserved Instances` 3년 구매  
D. `Cluster Placement Group`

정답: B

해설: 사용 시간대가 제한되고 실행 시간이 서버리스 한계 안에 들어오면 `AWS Lambda`가 비용 효율적이다. 문제의 핵심은 상시 서버 비용 제거다.
