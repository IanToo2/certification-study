# 10장. Service Comparisons

이 장은 시험에서 헷갈리기 쉬운 서비스를 직접 비교해 선택 기준을 압축 정리한다. 비교 문제는 "둘 다 될 것 같아 보이는 선택지" 중 하나를 버리는 능력이 중요하다.

## 1. Amazon EC2 vs AWS Lambda vs AWS Fargate

| 기준 | Amazon EC2 | AWS Lambda | AWS Fargate |
|---|---|---|---|
| 아키텍처 유형 | 서버 기반 컴퓨트 | 서버리스 함수 | 서버리스 컨테이너 |
| 확장성 | Auto Scaling으로 확장 | 요청 수 기반 자동 확장 | 태스크 수 기반 확장 |
| 지연 특성 | 인스턴스 준비 후 안정적 | 콜드 스타트 가능 | 컨테이너 시작 지연 존재 |
| 영속성 | 인스턴스 자체는 휘발성, 데이터는 EBS/EFS로 보완 | 실행 상태 비영속 | 태스크 자체는 비영속 |
| 대표 시험 시나리오 | OS 제어, 레거시 이전, 에이전트 설치 | 이벤트 기반 처리, 간헐적 API | 컨테이너 앱, 서버 관리 최소화 |

선택 기준:

- 운영체제 수준 제어가 필요하면 `Amazon EC2`
- 요청 기반 짧은 처리면 `AWS Lambda`
- 컨테이너 이미지는 유지하되 서버는 관리하기 싫으면 `AWS Fargate`

## 2. Amazon S3 vs Amazon EBS vs Amazon EFS

| 기준 | Amazon S3 | Amazon EBS | Amazon EFS |
|---|---|---|---|
| 아키텍처 유형 | 객체 스토리지 | 블록 스토리지 | 공유 파일 스토리지 |
| 확장성 | 사실상 무제한 | 볼륨 단위 확장 | 자동 확장 |
| 지연 특성 | 네트워크 객체 접근 | 낮은 지연 블록 접근 | 공유 파일 시스템 지연 특성 |
| 영속성 | 매우 높음 | 영구 저장 가능 | 영구 저장 가능 |
| 대표 시험 시나리오 | 정적 웹, 백업, 로그, 데이터 레이크 | 서버 디스크, DB 볼륨 | 다중 EC2 공유 파일 시스템 |

선택 기준:

- 정적 자산과 백업은 `Amazon S3`
- 단일 서버용 영구 디스크는 `Amazon EBS`
- 여러 인스턴스의 공유 파일 시스템은 `Amazon EFS`

## 3. Application Load Balancer vs Network Load Balancer

| 기준 | Application Load Balancer | Network Load Balancer |
|---|---|---|
| 아키텍처 유형 | L7 HTTP/HTTPS 로드 밸런서 | L4 TCP/UDP/TLS 로드 밸런서 |
| 확장성 | 웹 트래픽에 맞춰 관리형 확장 | 고성능 네트워크 처리에 맞춰 확장 |
| 지연 특성 | 애플리케이션 계층 기능만큼 처리 비용 존재 | 매우 낮은 지연과 높은 처리량 |
| 영속성 | 상태 비저장 | 상태 비저장 |
| 대표 시험 시나리오 | 경로 기반 라우팅, 호스트 기반 라우팅, 웹 앱 | 고정 IP, TCP/UDP, 초고성능 네트워크 |

선택 기준:

- URL 경로나 호스트명 기준 분기면 `Application Load Balancer`
- TCP/UDP, 정적 IP, 소스 IP 보존 요구면 `Network Load Balancer`

## 4. Amazon SQS vs Amazon SNS vs Amazon EventBridge

| 기준 | Amazon SQS | Amazon SNS | Amazon EventBridge |
|---|---|---|---|
| 아키텍처 유형 | 메시지 큐 | 퍼블리시/서브스크라이브 | 이벤트 버스 |
| 확장성 | 소비자 수와 처리량에 맞춰 확장 | 구독자 수 확장 | 규칙과 대상 수 확장 |
| 지연 특성 | 비동기 폴링 기반 | 푸시형 전달 | 규칙 매칭 후 전달 |
| 영속성 | 메시지 저장 | 직접 보관보다는 팬아웃 전달 중심 | 이벤트 라우팅 중심 |
| 대표 시험 시나리오 | 비동기 버퍼링, DLQ, 재시도 | 팬아웃 알림, 다중 구독 | AWS 이벤트 라우팅, 규칙 기반 분기 |

선택 기준:

- 비동기 버퍼링과 재처리는 `Amazon SQS`
- 동일 이벤트의 다중 구독은 `Amazon SNS`
- 규칙 기반 이벤트 라우팅은 `Amazon EventBridge`

## 5. Amazon RDS vs Amazon DynamoDB

| 기준 | Amazon RDS | Amazon DynamoDB |
|---|---|---|
| 아키텍처 유형 | 관리형 관계형 DB | 서버리스 NoSQL |
| 확장성 | 읽기 복제본 중심 확장 | 자동 수평 확장 |
| 지연 특성 | 일반 DB 지연 특성 | 매우 낮은 밀리초 단위 지연 |
| 영속성 | 영구 저장 | 영구 저장 |
| 대표 시험 시나리오 | SQL, 트랜잭션, 관계형 스키마 | 세션, 장바구니, 고속 키-값 조회 |

선택 기준:

- 관계형 스키마와 SQL이 필요하면 `Amazon RDS`
- 초고속 키-값 패턴과 대규모 자동 확장이 핵심이면 `Amazon DynamoDB`

## 6. Amazon Aurora vs Amazon RDS

| 기준 | Amazon Aurora | Amazon RDS |
|---|---|---|
| 아키텍처 유형 | 클라우드 네이티브 관계형 클러스터 | 관리형 관계형 인스턴스 |
| 확장성 | Reader 확장과 빠른 복구에 강함 | Read Replica 중심 확장 |
| 지연 특성 | 고성능 저지연 읽기/쓰기 | 엔진별 일반 성능 특성 |
| 영속성 | 다중 AZ 분산 스토리지 | 엔진별 스토리지 기반 영속성 |
| 대표 시험 시나리오 | 빠른 장애 복구, 고성능 관계형, 글로벌 DB | 일반 SQL 워크로드, 운영 단순화 |

선택 기준:

- 고성능과 빠른 복구가 더 중요하면 `Amazon Aurora`
- 범용 관리형 관계형 DB면 `Amazon RDS`

## 7. Amazon CloudWatch vs AWS CloudTrail vs AWS Config

| 기준 | Amazon CloudWatch | AWS CloudTrail | AWS Config |
|---|---|---|---|
| 아키텍처 유형 | 운영 모니터링 | API 감사 | 구성 추적/준수 |
| 확장성 | 메트릭/로그 수집 확장 | 계정 활동 로그 집계 확장 | 리소스 구성 기록 확장 |
| 지연 특성 | 실시간 또는 준실시간 알람 | 이벤트 기록 후 조회 | 구성 변경 기록과 규칙 평가 |
| 영속성 | 로그 보존 정책 기반 | 감사 로그 장기 보관 가능 | 구성 이력 장기 보관 가능 |
| 대표 시험 시나리오 | CPU 알람, 로그 모니터링, 오토스케일링 | 누가 삭제했는지 추적, 보안 감사 | 퍼블릭 버킷 탐지, 암호화 준수 확인 |

선택 기준:

- 운영 메트릭과 알람은 `Amazon CloudWatch`
- 사용자/API 행위 추적은 `AWS CloudTrail`
- 리소스 설정 준수 평가는 `AWS Config`

## 8. Multi-AZ vs Read Replica

| 기준 | Multi-AZ | Read Replica |
|---|---|---|
| 아키텍처 유형 | 고가용성 구성 | 읽기 확장 구성 |
| 확장성 | 장애 대비 중심 | 읽기 요청 확장 |
| 지연 특성 | 주 목적은 장애 조치 | 읽기 지연 감소 가능 |
| 영속성 | 동일 DB 계열 복제 구조 | 복제본 기반 읽기 분산 |
| 대표 시험 시나리오 | 장애 시 자동 페일오버 | 읽기 트래픽 분산, 리포팅 |

시험 함정:

- 고가용성 요구사항인데 `Read Replica`만 선택하면 오답이다.
- 읽기 성능 문제인데 `Multi-AZ`만 추가해도 해결되지 않는다.

## 9. Amazon CloudFront vs AWS Global Accelerator vs Amazon Route 53

| 기준 | Amazon CloudFront | AWS Global Accelerator | Amazon Route 53 |
|---|---|---|---|
| 아키텍처 유형 | CDN/엣지 캐시 | 글로벌 네트워크 진입점 | DNS 라우팅 |
| 확장성 | 전 세계 엣지 캐시 확장 | 글로벌 엔드포인트 확장 | DNS 정책 확장 |
| 지연 특성 | 캐시 적중 시 매우 낮음 | AWS 백본 경로 최적화 | DNS TTL 영향 |
| 영속성 | 캐시 데이터 | 상태 비저장 | 상태 비저장 |
| 대표 시험 시나리오 | 정적 콘텐츠 가속, 오리진 보호 | 고정 Anycast IP, 빠른 글로벌 페일오버 | 지연 기반/가중치/Failover DNS |

선택 기준:

- 캐시가 핵심이면 `Amazon CloudFront`
- 글로벌 네트워크 경로 최적화와 고정 IP면 `AWS Global Accelerator`
- DNS 레벨 정책 라우팅이면 `Amazon Route 53`

## 10. Security Group vs Network ACL

| 기준 | Security Group | Network ACL |
|---|---|---|
| 아키텍처 유형 | 인스턴스/ENI 수준 가상 방화벽 | 서브넷 수준 네트워크 필터 |
| 확장성 | 리소스 단위 참조 확장 | 서브넷 단위 규칙 확장 |
| 지연 특성 | 상태 저장 허용 중심 | 상태 비저장 규칙 평가 |
| 영속성 | 규칙 지속 저장 | 규칙 지속 저장 |
| 대표 시험 시나리오 | 웹-앱-DB 계층 제어 | 악성 IP 차단, 서브넷 경계 제어 |

선택 기준:

- 인스턴스 단위 세밀 제어는 `Security Group`
- 명시적 거부와 서브넷 경계는 `Network ACL`

## 11. Internet Gateway vs NAT Gateway vs VPC Endpoint

| 기준 | Internet Gateway | NAT Gateway | VPC Endpoint |
|---|---|---|---|
| 아키텍처 유형 | 인터넷 연결 게이트웨이 | 프라이빗 아웃바운드 게이트웨이 | AWS 서비스 사설 접속 |
| 확장성 | VPC 인터넷 진입점 | 관리형 NAT 확장 | 서비스별 엔드포인트 확장 |
| 지연 특성 | 직접 인터넷 경로 | NAT 경유 | AWS 내부망 경로 |
| 영속성 | 상태 비저장 | 상태 비저장 | 상태 비저장 |
| 대표 시험 시나리오 | 퍼블릭 서브넷 공개 | 프라이빗 서브넷 패치/외부 API 접근 | `S3`/`DynamoDB` 사설 접근 |

선택 기준:

- 인터넷 인바운드 공개면 `Internet Gateway`
- 프라이빗 아웃바운드 전용이면 `NAT Gateway`
- AWS 서비스만 사설 접근하면 `VPC Endpoint`

## 12. Savings Plans vs Reserved Instances vs Spot Instances

| 기준 | Savings Plans | Reserved Instances | Spot Instances |
|---|---|---|---|
| 아키텍처 유형 | 사용량 약정 할인 | 자원 속성 약정 할인 | 잉여 용량 할인 |
| 확장성 | 다양한 컴퓨트에 유연 적용 | 대상 리소스 속성 중심 | 대량 확장 가능하나 중단 위험 |
| 지연 특성 | 성능 영향 없음 | 성능 영향 없음 | 중단 가능성 존재 |
| 영속성 | 과금 모델 | 과금 모델 | 과금 모델 |
| 대표 시험 시나리오 | 장기 안정 컴퓨트 할인 | 장기 고정 사용 EC2/RDS 할인 | 배치, 렌더링, 중단 허용 처리 |

시험 함정:

- 중단 허용이 없는데 `Spot Instances`를 선택하면 오답이다.
- 장기 워크로드를 계속 온디맨드로만 운영하면 비용 최적화 부족으로 보일 수 있다.

## 13. 비교 문제를 푸는 실전 기준

- 가장 먼저 기능 요구사항을 본다.
- 그다음 운영 모델과 고가용성을 본다.
- 마지막으로 비용 최적화 수단을 본다.
- 시험에서는 더 많은 기능보다 더 적절한 제약 조건 충족이 정답이다.
