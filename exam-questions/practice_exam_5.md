# Practice Exam 5

총 40문항으로 구성된 AWS SAA-C03 스타일 연습문제다. 실제 시험처럼 요구사항 우선순위를 해석해 정답을 선택하는 연습에 초점을 맞췄다.

<div class="exam-callout">
  <p class="exam-badge">시험 모드</p>
  <p><strong>Practice Exam 5</strong>는 최종 점검용 실전 세트다. 점검 후에는 치트시트와 비교표로 약한 영역만 다시 복습하는 흐름을 권장한다.</p>
  <div class="exam-nav">
    <a href="exam_strategy.md">시험 전략 먼저 보기</a>
    <a href="../12_final_cheatsheet.md">치트시트로 복습하기</a>
    <a href="practice_exam_1.md">Practice Exam 1로 다시 보기</a>
  </div>
</div>

## 1

한 회사는 루트 계정 사용을 최소화하고 싶다. 일상적인 운영 작업을 위한 가장 적절한 접근은?

A. 루트 계정을 모든 운영자와 공유  
B. 일반 사용자 또는 역할 기반 접근 사용  
C. 루트 액세스 키 발급  
D. `Network ACL`로 루트 접근 통제

정답: B

해설: 루트 계정은 예외적 작업에만 사용해야 하며, 일상 운영은 일반 사용자나 역할 위임으로 처리해야 한다.

---

## 2

한 회사는 여러 서비스에서 같은 API 키를 사용한다. 키는 암호화되어 저장되어야 하며 접근 이력도 추적 가능해야 한다. 가장 적절한 조합은?

A. `Amazon S3` 평문 파일  
B. `AWS Secrets Manager`와 `AWS KMS`  
C. `Amazon EBS Snapshot`  
D. `CloudFront`와 `Route 53`

정답: B

해설: 비밀값 저장은 `AWS Secrets Manager`, 암호화 키 관리는 `AWS KMS`가 적합하다.

---

## 3

보안 감사 중, 특정 역할이 암호화된 객체를 읽지 못한다는 사실이 발견됐다. 객체 버킷 권한은 이미 허용되어 있다. 가장 가능성 높은 원인은?

A. `KMS` 키 사용 권한 부족  
B. `CloudFront` 캐시 미스  
C. `NAT Gateway` 부족  
D. `EFS` 용량 부족

정답: A

해설: 암호화된 객체는 버킷 권한뿐 아니라 `KMS` 복호화 권한도 필요할 수 있다.

---

## 4

한 기업은 고객용 웹 포털의 인증을 위해 관리형 디렉터리와 토큰 기반 로그인 기능이 필요하다. 어떤 서비스가 가장 적절한가?

A. `Amazon Cognito`  
B. `IAM Role`  
C. `Security Group`  
D. `CloudTrail`

정답: A

해설: 고객용 로그인과 토큰 발급은 `Amazon Cognito`가 적합하다.

---

## 5

서브넷 전체에 대해 특정 국가 IP 대역을 차단하려 한다. 어떤 기능이 가장 적절한가?

A. `Network ACL`  
B. `IAM Policy`  
C. `Amazon SQS`  
D. `AWS Lambda`

정답: A

해설: 서브넷 수준 명시적 차단은 `Network ACL`로 구현하는 것이 적절하다.

---

## 6

기존 모놀리식 애플리케이션을 거의 수정 없이 AWS로 이전해야 한다. 운영체제와 런타임도 현재와 동일해야 한다. 어떤 서비스가 가장 적절한가?

A. `Amazon EC2`  
B. `AWS Lambda`  
C. `Amazon SNS`  
D. `Amazon DynamoDB`

정답: A

해설: 리프트 앤 시프트와 기존 OS 환경 유지에는 `Amazon EC2`가 적합하다.

---

## 7

이벤트 발생 시 1~2초 내에 간단한 로직을 처리하고, 요청이 없을 때 비용을 최소화하려 한다. 어떤 서비스가 적절한가?

A. `AWS Lambda`  
B. `Amazon EC2`  
C. `Amazon EBS`  
D. `Placement Group`

정답: A

해설: 짧은 이벤트 처리와 사용량 기반 과금은 `AWS Lambda`가 적합하다.

---

## 8

컨테이너 애플리케이션을 운영하되, 팀은 오케스트레이션 기능이 필요하고 서버 패치는 하고 싶지 않다. 어떤 구성이 가장 적절한가?

A. `Amazon ECS on AWS Fargate`  
B. `Amazon EC2` 단독  
C. `Elastic Beanstalk`만 사용  
D. `Route 53` 사용

정답: A

해설: 컨테이너 오케스트레이션과 서버리스 실행은 `Amazon ECS on AWS Fargate` 조합이 적합하다.

---

## 9

애플리케이션 배포 후 새 인스턴스는 항상 동일한 부트스트랩 스크립트를 실행해야 한다. 어떤 기능이 적절한가?

A. `Launch Templates`  
B. `CloudTrail`  
C. `Network ACL`  
D. `SNS`

정답: A

해설: 사용자 데이터와 AMI를 포함한 시작 구성 표준화는 `Launch Templates`가 담당한다.

---

## 10

여러 인스턴스가 특정 하드웨어 장애에 동시에 영향을 받지 않도록 소규모로 분리 배치하려 한다. 어떤 Placement Group이 적절한가?

A. `Spread Placement Group`  
B. `Cluster Placement Group`  
C. `Partition Placement Group`  
D. `Public Placement Group`

정답: A

해설: 소수 핵심 인스턴스의 물리적 분리는 `Spread Placement Group`이 적합하다.

---

## 11

정적 파일, 로그, 백업을 하나의 확장 가능한 저장소에 보관하려 한다. 가장 적절한 서비스는?

A. `Amazon S3`  
B. `Amazon EBS`  
C. `Amazon EFS`  
D. `Amazon Aurora`

정답: A

해설: 정적 파일과 로그, 백업의 공통 저장소는 `Amazon S3`가 적합하다.

---

## 12

애플리케이션은 인스턴스에 연결된 영구 디스크가 필요하며, 파일 시스템은 직접 관리할 수 있다. 가장 적절한 스토리지는?

A. `Amazon EBS`  
B. `Amazon S3`  
C. `Amazon SNS`  
D. `Glacier Deep Archive`

정답: A

해설: 인스턴스 연결형 영구 블록 디스크는 `Amazon EBS`가 적합하다.

---

## 13

다수의 Linux 인스턴스가 같은 콘텐츠 디렉터리를 공유해야 하며, 파일 수가 계속 증가한다. 가장 적절한 스토리지는?

A. `Amazon EFS`  
B. `Amazon EBS`  
C. `Amazon S3 Glacier`  
D. `Amazon DynamoDB`

정답: A

해설: 공유 파일 시스템 요구와 자동 확장은 `Amazon EFS`가 적합하다.

---

## 14

오래된 `Amazon S3` 객체는 180일 후 아카이브로 전환하고 5년 후 삭제해야 한다. 어떤 기능이 적절한가?

A. `S3 Lifecycle`  
B. `CloudTrail`  
C. `Route 53`  
D. `Transit Gateway`

정답: A

해설: 객체 전환과 만료는 `S3 Lifecycle`로 자동화할 수 있다.

---

## 15

기업은 `Amazon S3` 객체를 다른 계정으로도 복제해 중앙 보안 계정에 보관하려 한다. 어떤 기능이 적절한가?

A. `S3 Replication`  
B. `Amazon EFS Replication`  
C. `CloudFront`  
D. `AWS Lambda`

정답: A

해설: 계정 간 `Amazon S3` 객체 복제는 `S3 Replication`으로 구현할 수 있다.

---

## 16

데이터 모델이 관계형이고 SQL이 필요하지만, 기본적인 관리형 운영만으로 충분하다. 어떤 선택이 적절한가?

A. `Amazon RDS`  
B. `Amazon DynamoDB`  
C. `Amazon S3`  
D. `Amazon ElastiCache`

정답: A

해설: 범용 관리형 관계형 DB 요구는 `Amazon RDS`가 적합하다.

---

## 17

관계형 데이터베이스의 읽기 확장과 빠른 장애 복구가 모두 중요하다. 어떤 선택이 가장 적절한가?

A. `Amazon Aurora`  
B. `Amazon EFS`  
C. `Amazon DynamoDB`  
D. `S3 Lifecycle`

정답: A

해설: 읽기 확장성과 빠른 복구를 함께 고려하면 `Amazon Aurora`가 강한 선택지다.

---

## 18

애플리케이션은 키 기반 조회가 대부분이며, 초저지연 응답과 완전관리형 확장이 필요하다. 어떤 서비스가 적절한가?

A. `Amazon DynamoDB`  
B. `Amazon RDS`  
C. `Amazon Redshift`  
D. `Amazon FSx`

정답: A

해설: 초저지연 키-값 워크로드는 `Amazon DynamoDB`가 적합하다.

---

## 19

읽기 집중형 웹 애플리케이션에서 데이터베이스 조회 결과를 메모리에 저장해 응답 시간을 줄이고 싶다. 어떤 서비스가 적절한가?

A. `Amazon ElastiCache`  
B. `AWS Config`  
C. `AWS CloudTrail`  
D. `Transit Gateway`

정답: A

해설: 조회 결과 캐싱은 `Amazon ElastiCache`가 적합하다.

---

## 20

운영 DB의 가용성을 높이기 위해 대기 인스턴스를 자동 유지하고 싶다. 읽기 확장은 필요 없다. 어떤 구성이 적절한가?

A. `Multi-AZ`  
B. `Read Replica`  
C. `DAX`  
D. `S3 Replication`

정답: A

해설: 읽기 확장보다 장애 조치가 목적이면 `Multi-AZ`가 적합하다.

---

## 21

웹 애플리케이션은 인터넷에서 접근 가능해야 하지만, 앱 서버와 DB는 외부에 노출되면 안 된다. 가장 적절한 구조는?

A. 모든 리소스를 퍼블릭 서브넷에 배치  
B. 퍼블릭 `ALB`, 프라이빗 앱/DB 서브넷  
C. DB만 퍼블릭으로 열기  
D. `NAT Gateway`를 웹 엔드포인트로 사용

정답: B

해설: 표준 고가용성 웹 구조는 퍼블릭 `ALB`와 프라이빗 앱/DB 서브넷 조합이다.

---

## 22

프라이빗 서브넷의 인스턴스가 외부 패키지 저장소에 접근해야 한다. 가장 적절한 구성은?

A. `Internet Gateway` 직접 연결  
B. `NAT Gateway`  
C. `VPC Peering`  
D. `AWS Config`

정답: B

해설: 프라이빗 서브넷의 외부 인터넷 아웃바운드는 `NAT Gateway`가 적합하다.

---

## 23

프라이빗 서브넷 인스턴스는 `Amazon S3`와 `Amazon DynamoDB`만 사용한다. NAT 비용을 줄이고 보안을 높이려면 어떤 선택이 가장 적절한가?

A. `Gateway VPC Endpoints`  
B. `Internet Gateway`  
C. `ALB`  
D. `CloudFront`

정답: A

해설: `Amazon S3`와 `Amazon DynamoDB` 사설 접근은 `Gateway VPC Endpoints`가 가장 적절하다.

---

## 24

웹 자산을 전 세계에 빠르게 전송하면서 캐시로 오리진 부하를 줄이고 싶다. 어떤 서비스가 적절한가?

A. `Amazon CloudFront`  
B. `AWS Global Accelerator`  
C. `Route 53`만 사용  
D. `Network Load Balancer`

정답: A

해설: 캐시와 엣지 전송이 핵심이면 `Amazon CloudFront`가 적합하다.

---

## 25

HTTP/HTTPS 요청을 경로별로 다른 마이크로서비스로 분기해야 한다. 어떤 서비스가 적절한가?

A. `Application Load Balancer`  
B. `Network Load Balancer`  
C. `Transit Gateway`  
D. `NAT Gateway`

정답: A

해설: 경로 기반 라우팅은 `Application Load Balancer`가 제공한다.

---

## 26

서비스 간 비동기 통신을 구현하려 한다. 소비자는 실패 후 나중에 다시 메시지를 읽을 수 있어야 한다. 어떤 서비스가 적절한가?

A. `Amazon SQS`  
B. `Amazon SNS`  
C. `AWS Config`  
D. `Amazon CloudFront`

정답: A

해설: 소비자 실패 허용과 메시지 보관은 `Amazon SQS`가 적합하다.

---

## 27

하나의 이벤트를 여러 구독자 시스템으로 동시에 전달해야 한다. 어떤 서비스가 적절한가?

A. `Amazon SNS`  
B. `Amazon EBS`  
C. `AWS Step Functions`  
D. `CloudTrail`

정답: A

해설: 다중 구독 팬아웃은 `Amazon SNS`가 적합하다.

---

## 28

여러 애플리케이션 이벤트를 조건에 따라 서로 다른 대상 서비스로 보내야 한다. 가장 적절한 서비스는?

A. `Amazon EventBridge`  
B. `Amazon S3`  
C. `NAT Gateway`  
D. `Amazon EFS`

정답: A

해설: 조건 기반 이벤트 분기는 `Amazon EventBridge`의 핵심 기능이다.

---

## 29

금융 거래 메시지는 순서를 보장해야 하며 중복도 최소화해야 한다. 어떤 메시징 서비스가 적절한가?

A. `Amazon SQS FIFO`  
B. `Amazon SNS`  
C. `Amazon EventBridge`  
D. `Amazon Kinesis Firehose`

정답: A

해설: 순서 보장과 deduplication 요구는 `Amazon SQS FIFO`가 적합하다.

---

## 30

다단계 승인 워크플로를 정의하고 상태를 시각적으로 추적하고 싶다. 어떤 서비스가 적절한가?

A. `AWS Step Functions`  
B. `Amazon Route 53`  
C. `Amazon CloudFront`  
D. `Amazon EBS`

정답: A

해설: 단계별 상태와 조건 분기가 있는 워크플로는 `AWS Step Functions`가 적합하다.

---

## 31

지표, 로그, 알람을 한 서비스에서 관리하려 한다. 어떤 서비스가 적절한가?

A. `Amazon CloudWatch`  
B. `AWS CloudTrail`  
C. `AWS Config`  
D. `Amazon S3`

정답: A

해설: 메트릭, 로그, 알람은 `Amazon CloudWatch`가 담당한다.

---

## 32

누가 리소스를 변경했는지, 어떤 API가 호출되었는지 확인하려 한다. 어떤 서비스가 가장 적절한가?

A. `AWS CloudTrail`  
B. `Amazon CloudWatch`  
C. `AWS Config`  
D. `Amazon SNS`

정답: A

해설: API 호출과 사용자/역할 행위는 `AWS CloudTrail`로 추적한다.

---

## 33

암호화되지 않은 `S3` 버킷 또는 잘못된 보안 그룹 설정을 지속적으로 탐지하려 한다. 어떤 서비스가 적절한가?

A. `AWS Config`  
B. `Amazon Route 53`  
C. `Amazon EFS`  
D. `AWS Lambda`

정답: A

해설: 리소스 구성 준수와 정책 위반 탐지는 `AWS Config`가 적합하다.

---

## 34

애플리케이션 로그에 특정 예외 문자열이 나타나면 경보를 보내야 한다. 어떤 서비스 조합이 적절한가?

A. `CloudWatch Logs`와 Alarm  
B. `CloudTrail`과 `KMS`  
C. `Route 53`과 `ALB`  
D. `EBS`와 `EFS`

정답: A

해설: 로그 기반 경보는 `CloudWatch Logs`와 `CloudWatch Alarm` 조합으로 구현한다.

---

## 35

다중 계정 환경에서 구성 준수 상태를 중앙에서 보고하려 한다. 어떤 서비스가 적절한가?

A. `AWS Config`  
B. `CloudFront`  
C. `ECS`  
D. `RDS Read Replica`

정답: A

해설: 중앙 준수 보고는 `AWS Config`가 적합하다.

---

## 36

여러 컴퓨트 서비스에 걸쳐 안정적인 사용량이 있으며, 인스턴스 유형 변경 가능성도 존재한다. 가장 적절한 할인 모델은?

A. `Compute Savings Plans`  
B. `Spot Instances`만 사용  
C. `Glacier`  
D. `One Zone-IA`

정답: A

해설: 유연성과 장기 사용량 할인은 `Compute Savings Plans`가 적합하다.

---

## 37

항상 켜져 있는 핵심 `EC2` 서버에 대해 장기 비용을 줄이려 한다. 가장 적절한 선택은?

A. `Reserved Instances`  
B. `Spot Instances`  
C. `Amazon EventBridge`  
D. `S3 Lifecycle`

정답: A

해설: 장기 상시 사용 서버는 `Reserved Instances`가 적합하다.

---

## 38

중단돼도 무방한 대규모 렌더링 작업에 가장 적절한 컴퓨트 구매 옵션은?

A. `Spot Instances`  
B. `Dedicated Hosts`  
C. `Reserved Instances`만 사용  
D. `RDS Multi-AZ`

정답: A

해설: 중단 가능 렌더링 작업은 `Spot Instances`가 가장 비용 효율적이다.

---

## 39

오래된 백업 데이터를 자동으로 저렴한 스토리지 등급으로 옮기고 싶다. 어떤 기능이 적절한가?

A. `S3 Lifecycle`  
B. `AWS CloudTrail`  
C. `Launch Templates`  
D. `Network ACL`

정답: A

해설: 저장 계층 자동 전환은 `S3 Lifecycle`의 전형적 기능이다.

---

## 40

요청이 적고 운영자가 적은 사내 도구는 가장 적은 운영 부담으로 제공되어야 한다. 어떤 선택이 가장 적절한가?

A. `AWS Lambda` 기반 서버리스 구현 검토  
B. 항상 켜진 `EC2` 서버 3대 운영  
C. `Cluster Placement Group` 추가  
D. `Reserved Instances` 즉시 구매

정답: A

해설: 낮은 운영 부담과 낮은 사용량에는 서버리스 접근이 가장 적합한 경우가 많다.
