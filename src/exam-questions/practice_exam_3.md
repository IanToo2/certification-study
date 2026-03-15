# Practice Exam 3

총 40문항으로 구성된 AWS SAA-C03 스타일 연습문제다. 각 문항은 서비스 정의 암기보다 아키텍처 선택 기준을 묻도록 구성했다.

<div class="exam-callout">
  <p class="exam-badge">시험 모드</p>
  <p><strong>Practice Exam 3</strong>는 중간 점검용 실전 세트다. 점수보다 어떤 유형에서 반복적으로 흔들리는지 확인하는 데 초점을 둔다.</p>
  <div class="exam-nav">
    <a href="exam_strategy.md">시험 전략 먼저 보기</a>
    <a href="../12_final_cheatsheet.md">치트시트로 복습하기</a>
    <a href="practice_exam_4.md">다음 모의고사</a>
  </div>
</div>

## 1

한 회사는 운영자가 여러 계정에 로그인할 때 중앙 인증 체계를 사용하고 싶다. 개별 계정마다 사용자 계정을 만들고 싶지 않다. 가장 적절한 선택은?

A. 각 계정에 `IAM User` 개별 생성  
B. 역할 기반 위임과 중앙 인증 체계 사용  
C. 모든 계정에 동일 루트 계정 사용  
D. `Amazon Cognito`만 사용

정답: B

해설: 다중 계정 운영에서는 중앙 인증 후 역할 위임 방식이 적절하다. 시험에서는 장기 계정 분산 관리보다 역할 기반 위임이 권장된다.

---

## 2

한 보안 팀은 비밀값이 코드 저장소에 포함되지 않도록 하려 한다. 또한 애플리케이션이 시작될 때만이 아니라 실행 중에도 최신 비밀값을 조회해야 한다. 가장 적절한 서비스는?

A. `AWS Secrets Manager`  
B. `Amazon EBS`  
C. `AWS CloudTrail`  
D. `Security Group`

정답: A

해설: 비밀값 중앙 관리와 최신 값 조회는 `AWS Secrets Manager`가 적합하다. 특히 자동 회전 요구와 함께 자주 출제된다.

---

## 3

한 회사는 특정 역할만 `KMS` 키를 사용해 객체를 복호화하도록 제한하고 싶다. 무엇이 가장 중요한가?

A. `Route Table`  
B. 키 정책과 역할 권한  
C. `NAT Gateway`  
D. `ALB Listener Rule`

정답: B

해설: `KMS` 사용 권한은 키 정책과 IAM 권한이 핵심이다. 암호화된 리소스 접근 문제에서 자주 나오는 포인트다.

---

## 4

웹 애플리케이션의 최종 사용자가 직접 가입하고 MFA를 사용할 수 있어야 한다. 어떤 서비스가 가장 적절한가?

A. `Amazon Cognito`  
B. `IAM Role`  
C. `AWS Organizations SCP`  
D. `Network ACL`

정답: A

해설: 사용자 가입, 로그인, MFA는 `Amazon Cognito` User Pool의 전형적인 기능이다.

---

## 5

특정 인스턴스에서 시작된 아웃바운드 응답 트래픽은 자동으로 허용되어야 하지만, 인바운드 포트는 최소한만 열고 싶다. 어떤 보안 기능이 이에 가장 적합한가?

A. `Security Group`  
B. `Network ACL`  
C. `IAM Policy`  
D. `CloudTrail`

정답: A

해설: 상태 저장 특성으로 응답 트래픽을 자동 허용하는 것은 `Security Group`의 특징이다.

---

## 6

팀은 매우 긴 시간 동안 실행되는 백그라운드 프로세스를 운영해야 한다. 요청 기반 함수 실행보다 서버 지속 실행이 적합하다. 어떤 선택이 가장 적절한가?

A. `AWS Lambda`  
B. `Amazon EC2`  
C. `Amazon SNS`  
D. `Amazon SQS`

정답: B

해설: 장시간 지속 프로세스는 `Amazon EC2` 같은 서버 기반 컴퓨트가 적합하다. `AWS Lambda`는 실행 시간 제한이 있다.

---

## 7

회사는 예측 불가능한 API 트래픽을 처리해야 하며, 서버 관리 부담을 최소화하려 한다. 요청당 실행 모델이 적합하다. 어떤 선택이 가장 적절한가?

A. `AWS Lambda`  
B. `Reserved Instances`  
C. `Spread Placement Group`  
D. `Amazon EBS`

정답: A

해설: 예측 불가능한 요청 기반 API와 최소 운영 부담 요구는 `AWS Lambda`가 적합하다.

---

## 8

애플리케이션은 여러 컨테이너 서비스로 나뉘어 있으며, 각 서비스는 독립 배포되어야 한다. 팀은 노드 관리가 아니라 서비스 정의에 집중하고 싶다. 어떤 조합이 적절한가?

A. `Amazon ECS + AWS Fargate`  
B. `Amazon EC2` 단일 서버  
C. `Elastic Beanstalk` 단일 환경  
D. `Amazon RDS Multi-AZ`

정답: A

해설: 컨테이너 서비스 운영과 서버 관리 제거 요구는 `Amazon ECS + AWS Fargate` 조합이 적합하다.

---

## 9

새 인스턴스를 배포할 때 사용자 데이터 스크립트와 AMI 버전을 함께 관리하고 롤백하려 한다. 어떤 기능이 적절한가?

A. `Launch Templates`  
B. `SNS Topic`  
C. `CloudTrail Trail`  
D. `Route 53 Hosted Zone`

정답: A

해설: 시작 구성을 버전으로 관리하는 기능은 `Launch Templates`다.

---

## 10

어떤 애플리케이션은 소수의 핵심 인스턴스가 물리적으로 서로 다른 하드웨어에 배치되기를 원한다. 가장 적절한 Placement Group 유형은?

A. Cluster  
B. Spread  
C. Partition  
D. Launch

정답: B

해설: 소수의 중요 인스턴스를 서로 다른 하드웨어에 분산하려면 `Spread Placement Group`이 적합하다.

---

## 11

회사 웹사이트의 정적 HTML, CSS, JavaScript 파일을 가장 간단하게 호스팅하려고 한다. 서버를 운영하고 싶지 않다. 어떤 선택이 가장 적절한가?

A. `Amazon S3` 정적 웹사이트 호스팅  
B. `Amazon EBS`  
C. `Amazon RDS`  
D. `Amazon ElastiCache`

정답: A

해설: 정적 웹사이트 호스팅은 `Amazon S3`의 대표 시나리오다. 글로벌 가속이 필요하면 `Amazon CloudFront`를 추가한다.

---

## 12

대량의 파일을 거의 읽지 않지만 즉시 복구는 가능해야 한다. 가장 적절한 `S3` 클래스는?

A. `S3 Standard`  
B. `S3 Standard-IA`  
C. `Glacier Deep Archive`  
D. `One Zone-IA`

정답: B

해설: 드물게 접근하지만 즉시 복구가 필요한 경우 `S3 Standard-IA`가 적합하다.

---

## 13

장기 보관 데이터에 대해 가장 낮은 저장 비용이 필요하고, 복구 시간은 길어도 괜찮다. 어떤 선택이 적절한가?

A. `S3 Standard`  
B. `Amazon EFS`  
C. `Glacier Deep Archive`  
D. `Amazon FSx`

정답: C

해설: 최저 비용 장기 아카이브는 `Glacier Deep Archive`가 적합하다.

---

## 14

여러 EC2 인스턴스가 동시에 동일한 스토리지를 공유할 필요는 없고, 각각 독립적인 영구 디스크만 필요하다. 어떤 저장소가 가장 적절한가?

A. `Amazon EBS`  
B. `Amazon EFS`  
C. `Amazon S3`  
D. `SQS FIFO`

정답: A

해설: 단일 인스턴스용 영구 블록 디스크는 `Amazon EBS`가 적합하다.

---

## 15

리전 간 복제는 필요 없고, 같은 리전 내 다른 버킷으로만 `Amazon S3` 데이터를 복제하려 한다. 어떤 기능이 적절한가?

A. `S3 Same-Region Replication`  
B. `EBS Snapshot Copy`  
C. `CloudFront Origin Shield`  
D. `Transit Gateway`

정답: A

해설: 같은 리전의 다른 버킷 복제는 `S3 Same-Region Replication`을 사용한다.

---

## 16

관계형 데이터베이스의 장애 조치 시간 최소화와 읽기 확장이 모두 중요하다. 어떤 선택이 가장 적절한가?

A. `Amazon Aurora`  
B. `Amazon DynamoDB`  
C. `Amazon S3`  
D. `Amazon EFS`

정답: A

해설: 빠른 장애 복구와 읽기 확장을 동시에 요구하면 `Amazon Aurora`가 강력한 정답 후보다.

---

## 17

한 애플리케이션은 단순 키로 조회하는 카탈로그 메타데이터를 저장한다. 스키마는 유연해야 하고 자동 확장이 필요하다. 어떤 데이터베이스가 적절한가?

A. `Amazon DynamoDB`  
B. `Amazon RDS for SQL Server`  
C. `Amazon Aurora`  
D. `Amazon Redshift`

정답: A

해설: 유연한 스키마와 키 기반 접근, 자동 수평 확장은 `Amazon DynamoDB`의 장점이다.

---

## 18

읽기 요청은 많지만 쓰기 요청은 적은 전자상거래 상품 데이터베이스가 있다. 읽기 지연을 줄이고 DB 부담을 완화하려면 무엇이 가장 적절한가?

A. `Amazon ElastiCache`  
B. `Transit Gateway`  
C. `AWS Config`  
D. `Placement Group`

정답: A

해설: 조회 중심 애플리케이션은 `Amazon ElastiCache`를 활용해 읽기 지연과 DB 부하를 줄일 수 있다.

---

## 19

회사는 MySQL 데이터베이스의 고가용성을 높이려 한다. 읽기 전용 리포트 애플리케이션은 필요 없고, 장애 조치만 중요하다. 어떤 구성이 적절한가?

A. `Read Replica`  
B. `Multi-AZ`  
C. `DAX`  
D. `S3 Replication`

정답: B

해설: 장애 조치가 목적이면 `Multi-AZ`가 적합하다. 읽기 전용 복제본과 목적이 다르다.

---

## 20

리포팅 시스템은 기본 트랜잭션 DB와 분리된 읽기 전용 데이터 소스가 필요하다. 가장 적절한 선택은?

A. `Read Replica`  
B. `Security Group`  
C. `IAM Role`  
D. `NAT Gateway`

정답: A

해설: 읽기 전용 리포팅은 `Read Replica`의 대표 시나리오다.

---

## 21

애플리케이션 서버는 인터넷에 직접 노출되면 안 되지만, 사용자는 웹 사이트에 접근할 수 있어야 한다. 가장 적절한 아키텍처는?

A. 앱 서버를 퍼블릭 서브넷에 배치  
B. 퍼블릭 `ALB`와 프라이빗 앱 서브넷 조합  
C. 데이터베이스를 퍼블릭으로 개방  
D. `NAT Gateway`를 퍼블릭 엔드포인트로 사용

정답: B

해설: 웹 진입은 퍼블릭 `ALB`, 앱 서버는 프라이빗 서브넷에 두는 것이 표준 고가용성 웹 아키텍처다.

---

## 22

프라이빗 서브넷 인스턴스는 외부 인터넷 대신 AWS 내부망을 통해 `DynamoDB`에 접근해야 한다. 어떤 선택이 적절한가?

A. `Gateway VPC Endpoint`  
B. `Internet Gateway`  
C. `NAT Instance`  
D. `VPC Peering`

정답: A

해설: `Amazon DynamoDB` 사설 접근은 `Gateway VPC Endpoint`로 구현할 수 있다.

---

## 23

여러 리전에 배포된 TCP 애플리케이션이 있다. 사용자 연결을 가장 가까운 건강한 엔드포인트로 보내고 싶다. 어떤 선택이 가장 적절한가?

A. `Amazon Route 53` 단독  
B. `AWS Global Accelerator`  
C. `Amazon CloudFront`  
D. `Application Load Balancer`

정답: B

해설: TCP 애플리케이션의 글로벌 경로 최적화와 빠른 장애 전환은 `AWS Global Accelerator`가 적합하다.

---

## 24

회사 도메인의 루트 도메인을 `ALB`로 연결하려 한다. 어떤 DNS 레코드 유형이 가장 적절한가?

A. CNAME  
B. Alias  
C. PTR  
D. TXT

정답: B

해설: AWS 리소스에 루트 도메인을 연결할 때는 `Route 53`의 Alias 레코드를 사용하는 것이 적절하다.

---

## 25

어떤 웹 애플리케이션은 호스트 이름에 따라 서로 다른 백엔드 서비스로 요청을 분기해야 한다. 어떤 로드 밸런서가 적절한가?

A. `Network Load Balancer`  
B. `Application Load Balancer`  
C. `Gateway Load Balancer`  
D. `Transit Gateway`

정답: B

해설: 호스트 기반 라우팅은 `Application Load Balancer`의 L7 기능이다.

---

## 26

서비스 간 직접 통신을 줄이고 싶지만, 한 이벤트를 동시에 여러 하위 시스템으로 보내야 한다. 가장 적절한 서비스는?

A. `Amazon SNS`  
B. `Amazon EBS`  
C. `AWS Config`  
D. `Amazon RDS`

정답: A

해설: 팬아웃 요구가 있으면 `Amazon SNS`가 적절하다.

---

## 27

한 팀은 소비자가 오프라인이어도 메시지가 유지되는 구조를 원한다. 어떤 서비스가 가장 적절한가?

A. `Amazon SQS`  
B. `Amazon SNS`  
C. `Amazon Route 53`  
D. `Amazon EFS`

정답: A

해설: 소비자 장애나 지연 시에도 메시지를 보관하는 것은 `Amazon SQS`의 강점이다.

---

## 28

회사 이벤트 플랫폼은 주문 이벤트를 유형별로 필터링해 다른 대상에 전달해야 한다. 어떤 서비스가 가장 적절한가?

A. `Amazon EventBridge`  
B. `Amazon EC2`  
C. `Amazon EBS`  
D. `NAT Gateway`

정답: A

해설: 규칙 기반 필터링과 이벤트 대상 분기는 `Amazon EventBridge`의 대표 기능이다.

---

## 29

로그, 센서 데이터, 클릭스트림처럼 연속적인 이벤트를 실시간으로 여러 소비자가 처리해야 한다. 어떤 서비스가 가장 적절한가?

A. `Amazon Kinesis`  
B. `Amazon SNS`  
C. `Amazon EFS`  
D. `AWS KMS`

정답: A

해설: 대량 스트리밍 데이터의 실시간 다중 소비는 `Amazon Kinesis`가 적합하다.

---

## 30

업무 프로세스에서 승인 단계와 조건 분기가 있으며, 실패 시 일부 단계만 재시도해야 한다. 가장 적절한 선택은?

A. `AWS Step Functions`  
B. `Amazon CloudFront`  
C. `Amazon EBS`  
D. `Route 53`

정답: A

해설: 상태 있는 워크플로, 조건 분기, 재시도는 `AWS Step Functions`가 적합하다.

---

## 31

운영팀은 모든 웹 서버의 5xx 오류율이 특정 임계치를 넘으면 경고를 받고 싶다. 어떤 서비스가 적절한가?

A. `Amazon CloudWatch`  
B. `AWS CloudTrail`  
C. `AWS Config`  
D. `Amazon Aurora`

정답: A

해설: 애플리케이션 지표와 알람은 `Amazon CloudWatch`의 핵심 영역이다.

---

## 32

보안 사고 분석 중 누가 `DeleteBucket` API를 호출했는지 찾아야 한다. 어떤 서비스가 가장 적절한가?

A. `AWS Config`  
B. `AWS CloudTrail`  
C. `Amazon CloudWatch Synthetics`  
D. `Amazon SNS`

정답: B

해설: API 행위 추적은 `AWS CloudTrail`이 담당한다.

---

## 33

회사는 `Amazon S3` 버킷이 퍼블릭으로 설정되면 즉시 규정 위반으로 보고하고 싶다. 어떤 서비스가 적절한가?

A. `AWS Config`  
B. `Amazon SQS`  
C. `AWS Shield`  
D. `Elastic Beanstalk`

정답: A

해설: `Amazon S3` 퍼블릭 설정 감지는 `AWS Config` 규칙으로 자주 구현한다.

---

## 34

여러 서비스 로그를 한곳에서 수집하고 검색해 오류 패턴을 찾아야 한다. 가장 적절한 기본 서비스는?

A. `Amazon CloudWatch Logs`  
B. `AWS CloudTrail`  
C. `AWS Config`  
D. `Amazon Route 53`

정답: A

해설: 애플리케이션 및 인프라 로그 수집과 검색은 `Amazon CloudWatch Logs`가 적합하다.

---

## 35

중앙 보안 계정으로 여러 계정의 구성 기록을 모아 준수 상태를 보고하려 한다. 어떤 서비스가 적절한가?

A. `AWS Config`  
B. `Amazon SQS FIFO`  
C. `Glacier Flexible Retrieval`  
D. `NAT Gateway`

정답: A

해설: 리소스 구성과 준수 상태 집계는 `AWS Config`가 적합하다.

---

## 36

장기적으로 사용 패턴이 안정적이지만, 인스턴스 타입 변경 가능성이 남아 있다. `EC2` 비용 절감 수단으로 가장 유연한 선택은?

A. `Spot Instances`  
B. `Savings Plans`  
C. `Dedicated Hosts`  
D. `S3 Lifecycle`

정답: B

해설: 유연성을 유지하면서 장기 할인 효과를 얻으려면 `Savings Plans`가 적합하다.

---

## 37

워크로드는 상시 실행되며, 인스턴스 패밀리와 리전도 장기간 유지될 예정이다. 어떤 할인 모델이 가장 적절한가?

A. `Reserved Instances`  
B. `S3 One Zone-IA`  
C. `Amazon EventBridge`  
D. `CloudTrail Lake`

정답: A

해설: 고정적인 장기 사용은 `Reserved Instances`의 대표 사용 사례다.

---

## 38

분산 배치 작업은 언제든 중단될 수 있지만 재시작은 가능하다. 가장 낮은 비용이 중요하다. 어떤 옵션이 적절한가?

A. `Spot Instances`  
B. `Provisioned IOPS EBS`  
C. `RDS Multi-AZ`  
D. `Dedicated Hosts`

정답: A

해설: 중단 허용 배치 작업은 `Spot Instances`가 적합하다.

---

## 39

로그 데이터는 처음 30일 동안 자주 조회되지만 이후에는 거의 조회되지 않는다. 자동 비용 최적화 방안으로 가장 적절한 것은?

A. `S3 Lifecycle`로 IA 또는 Glacier 계층 전환  
B. 모든 객체를 즉시 삭제  
C. `CloudWatch Alarm`만 생성  
D. `Security Group` 수정

정답: A

해설: 접근 주기 변화가 명확하면 `S3 Lifecycle` 전환 정책이 비용 최적화에 적합하다.

---

## 40

개발 환경은 평일 근무 시간에만 사용된다. 운영팀은 서버를 항상 켜 두고 싶지 않다. 가장 비용 효율적인 접근은?

A. 대형 `EC2` 상시 실행  
B. 스케줄 기반 시작/중지 또는 서버리스 대안 검토  
C. `Reserved Instances` 3년 구매  
D. `Cluster Placement Group` 사용

정답: B

해설: 제한된 시간에만 사용하는 환경은 스케줄 기반 중지 또는 서버리스로 비용을 크게 줄일 수 있다.
