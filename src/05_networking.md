# 5장. Networking

네트워킹은 SAA-C03에서 난도가 높은 축이다. 퍼블릭과 프라이빗 경로, 라우팅, DNS, 엣지 네트워크, 로드 밸런싱을 함께 묻는 복합 문제가 많다. 핵심은 `어디가 인터넷에 노출되는가`, `어떤 경로로 나가는가`, `서비스 레벨 4인지 레벨 7인지`다.

<div class="chapter-overview">
  <h2>이 장에서 바로 찾을 수 있는 서비스</h2>
  <p>VPC 구조, 인터넷 경로, 프라이빗 연결, 글로벌 트래픽 진입점까지 네트워크 문제를 한 번에 점프할 수 있다.</p>
  <div class="chapter-overview-links">
    <a href="#amazon-vpc">Amazon VPC</a>
    <a href="#subnets">Subnets</a>
    <a href="#route-tables">Route Tables</a>
    <a href="#internet-gateway">Internet Gateway</a>
    <a href="#nat-gateway">NAT Gateway</a>
    <a href="#vpc-endpoints">VPC Endpoints</a>
    <a href="#vpc-peering">VPC Peering</a>
    <a href="#transit-gateway">Transit Gateway</a>
    <a href="#amazon-route-53">Amazon Route 53</a>
    <a href="#amazon-cloudfront">Amazon CloudFront</a>
    <a href="#aws-global-accelerator">AWS Global Accelerator</a>
    <a href="#application-load-balancer">Application Load Balancer</a>
    <a href="#network-load-balancer">Network Load Balancer</a>
  </div>
</div>

## Amazon VPC

### 1. 서비스 개념

`Amazon VPC`는 AWS 안에서 격리된 가상 네트워크를 구성하는 기본 서비스다. 서브넷, 라우팅, 보안, 인터넷 연결의 출발점이다.

### 2. 아키텍처 구조

```text
AWS Region
  |
  v
VPC
  |
  +--> Public Subnet
  +--> Private Subnet
  +--> Route Tables
  +--> Security Controls
```

### 3. 언제 사용하는가

- 네트워크를 논리적으로 분리해야 할 때
- 퍼블릭/프라이빗 계층을 나눠 보안 구조를 설계할 때
- 하이브리드 연결과 멀티 계정 연결이 필요할 때

### 4. 언제 사용하면 안되는가

- 서비스형 서버리스만 쓰면서 네트워크 요구사항이 거의 없는데 과도한 커스텀 VPC를 넣는 경우
- 단순 인터넷 공개 정적 웹사이트를 굳이 EC2 기반 VPC 안에서만 구현하려는 경우

### 5. 비슷한 서비스와 차이

- `VPC`는 네트워크 범위
- `Subnet`은 VPC 내부 주소 구간
- `Transit Gateway`는 여러 VPC와 온프레미스 연결 허브다

### 6. 시험에서 자주 나오는 문제 유형

- 퍼블릭/프라이빗 서브넷 설계
- 인터넷 노출 여부 판단
- 멀티 AZ 아키텍처와 라우팅 문제

### 7. 시험 함정 포인트

- VPC만 있다고 인터넷이 되는 것은 아니다.
- 서브넷이 퍼블릭인지 여부는 퍼블릭 IP가 아니라 라우팅과 게이트웨이 경로로 결정된다.

### 8. 실무 아키텍처 예시

전자상거래 시스템은 퍼블릭 서브넷에 `ALB`, 프라이빗 서브넷에 애플리케이션 서버와 데이터베이스를 둔 3계층 `VPC` 구조로 운영한다.

### 시험 핵심 포인트

- 네트워크 격리와 퍼블릭/프라이빗 구분의 출발점은 `Amazon VPC`다.
- 인터넷 연결 여부는 VPC 자체가 아니라 서브넷 라우팅과 게이트웨이 조합으로 결정된다.
- 대부분의 네트워크 문제는 `VPC`, 서브넷, 라우팅을 함께 묻는다.

## Subnets

### 1. 서비스 개념

`Subnet`은 `VPC`를 더 작은 IP 범위로 나눈 것이다. 보통 AZ 단위로 생성되며 퍼블릭과 프라이빗 역할을 구분한다.

### 2. 아키텍처 구조

```text
VPC
  |
  +--> Public Subnet (AZ-a)
  +--> Public Subnet (AZ-b)
  +--> Private App Subnet (AZ-a)
  +--> Private DB Subnet (AZ-b)
```

### 3. 언제 사용하는가

- 계층별 네트워크 분리
- AZ별 고가용성 배치
- 라우팅과 보안 정책을 역할별로 다르게 적용할 때

### 4. 언제 사용하면 안되는가

- 모든 리소스를 한 서브넷에 몰아넣어 격리와 제어를 포기하는 경우
- AZ 분산이 필요한데 단일 서브넷만 사용하는 경우

### 5. 비슷한 서비스와 차이

- 퍼블릭 서브넷은 일반적으로 `Internet Gateway`로 나가는 경로가 있다.
- 프라이빗 서브넷은 인터넷 인바운드를 직접 받지 않고, 필요 시 `NAT Gateway`를 통해 아웃바운드만 허용한다.

### 6. 시험에서 자주 나오는 문제 유형

- 데이터베이스를 프라이빗 서브넷에 두는 설계
- 고가용성을 위해 두 개 이상 AZ에 동일 계층 배치

### 7. 시험 함정 포인트

- 퍼블릭 IP 자동 할당만으로 퍼블릭 서브넷이 되는 것이 아니다.
- 서브넷은 하나의 AZ에만 속한다.

### 8. 실무 아키텍처 예시

웹 서버는 두 AZ의 퍼블릭 서브넷에 `ALB`로 노출하고, 애플리케이션 서버는 두 AZ의 프라이빗 앱 서브넷에 배치한다. 데이터베이스는 별도 프라이빗 DB 서브넷에 둔다.

### 시험 핵심 포인트

- AZ 분산과 계층 분리를 동시에 설계할 때 `Subnet` 이해가 중요하다.
- 퍼블릭 여부는 `Internet Gateway` 경로 존재 여부로 판단한다.
- 데이터베이스는 프라이빗 서브넷이라는 패턴이 매우 자주 나온다.

## Route Tables

### 1. 서비스 개념

`Route Table`은 서브넷에서 나가는 트래픽이 어디로 향할지 결정하는 규칙 집합이다.

### 2. 아키텍처 구조

```text
Subnet
  |
  v
Route Table
  |
  +--> local
  +--> 0.0.0.0/0 -> IGW
  +--> 0.0.0.0/0 -> NAT Gateway
  +--> VPC CIDR -> Peering / TGW
```

### 3. 언제 사용하는가

- 퍼블릭/프라이빗 서브넷 경로를 분리할 때
- 온프레미스, 다른 VPC, 엔드포인트로 트래픽을 보낼 때

### 4. 언제 사용하면 안되는가

- 경로 설계를 하지 않고 보안 그룹만으로 네트워크 동작을 설명하려는 경우

### 5. 비슷한 서비스와 차이

- `Route Table`은 경로 결정
- `Security Group`과 `Network ACL`은 허용/차단 제어

### 6. 시험에서 자주 나오는 문제 유형

- 프라이빗 서브넷에서 인터넷으로 나가는 경로
- VPC 피어링이나 `Transit Gateway` 라우팅

### 7. 시험 함정 포인트

- 라우팅이 없으면 보안 그룹이 허용이어도 통신이 안 된다.
- 가장 구체적인 경로가 우선한다.

### 8. 실무 아키텍처 예시

앱 서브넷 라우팅 테이블은 기본 경로를 `NAT Gateway`로, 내부 서비스 CIDR은 `Transit Gateway`로 보낸다. 덕분에 인터넷과 내부망 경로를 분리할 수 있다.

### 시험 핵심 포인트

- 통신 가능 여부는 보안 그룹 전에 라우팅부터 확인해야 한다.
- 퍼블릭 서브넷은 `0.0.0.0/0 -> Internet Gateway`, 프라이빗 서브넷은 보통 `NAT Gateway`다.
- VPC 피어링과 `Transit Gateway` 문제에서도 라우팅 누락이 자주 함정이 된다.

## Internet Gateway

### 1. 서비스 개념

`Internet Gateway`는 `VPC`와 인터넷을 연결하는 게이트웨이다. 퍼블릭 서브넷 설계의 핵심 요소다.

### 2. 아키텍처 구조

```text
Internet
   |
   v
Internet Gateway
   |
   v
Public Subnet
```

### 3. 언제 사용하는가

- 인터넷에서 직접 접근 가능한 리소스를 둘 때
- 퍼블릭 서브넷 인스턴스가 인터넷과 통신해야 할 때

### 4. 언제 사용하면 안되는가

- 데이터베이스나 내부 서비스처럼 직접 노출되면 안 되는 리소스에 인터넷 경로를 주려는 경우

### 5. 비슷한 서비스와 차이

- `Internet Gateway`는 양방향 인터넷 연결
- `NAT Gateway`는 프라이빗 서브넷의 아웃바운드 전용

### 6. 시험에서 자주 나오는 문제 유형

- 웹 서버를 퍼블릭 서브넷으로 노출하는 문제
- 퍼블릭 서브넷 조건을 묻는 문제

### 7. 시험 함정 포인트

- `IGW`가 있어도 인스턴스에 퍼블릭 IP가 없으면 인터넷에서 직접 접근할 수 없다.
- 프라이빗 서브넷은 기본 경로를 `IGW`로 보내지 않는다.

### 8. 실무 아키텍처 예시

퍼블릭 `ALB`는 `Internet Gateway`로 들어오는 HTTPS 요청을 받고, 백엔드 앱 서버는 프라이빗 서브넷에 두어 외부 직접 접근을 차단한다.

### 시험 핵심 포인트

- 인터넷에서 직접 접근 가능한 리소스가 있으면 `Internet Gateway`가 필요하다.
- 게이트웨이만 있다고 공개되는 것이 아니라 퍼블릭 IP와 라우팅이 함께 필요하다.
- 데이터베이스 같은 내부 리소스에 직접 인터넷 경로를 주면 대부분 오답이다.

## NAT Gateway

### 1. 서비스 개념

`NAT Gateway`는 프라이빗 서브넷 리소스가 인터넷으로 나갈 수 있게 해 주는 관리형 NAT 서비스다. 외부에서 해당 리소스로 직접 들어오는 것은 허용하지 않는다.

### 2. 아키텍처 구조

```text
Private Subnet
    |
    v
NAT Gateway (in Public Subnet)
    |
    v
Internet Gateway
    |
    v
Internet
```

### 3. 언제 사용하는가

- 프라이빗 인스턴스가 패치 서버, 패키지 저장소, 외부 API에 접근해야 할 때
- 인터넷 인바운드는 막고 아웃바운드만 허용해야 할 때

### 4. 언제 사용하면 안되는가

- `S3`, `DynamoDB` 같은 AWS 서비스만 접근하는데 엔드포인트로 대체 가능한 경우
- 비용을 고려하지 않고 모든 트래픽을 NAT로 보내는 경우

### 5. 비슷한 서비스와 차이

- `NAT Gateway`는 관리형이고 가용성이 높다.
- `NAT Instance`는 직접 운영해야 하므로 시험에서는 보통 관리 부담 때문에 오답 후보가 된다.

### 6. 시험에서 자주 나오는 문제 유형

- 프라이빗 서브넷에서 운영체제 업데이트
- 아웃바운드 전용 인터넷 연결
- 고가용성을 위한 AZ별 NAT 배치

### 7. 시험 함정 포인트

- `NAT Gateway`는 퍼블릭 서브넷에 있어야 한다.
- 한 AZ 장애 시 다른 AZ 프라이빗 서브넷이 동일 NAT에만 의존하면 단일 장애점이 된다.

### 8. 실무 아키텍처 예시

각 AZ의 프라이빗 앱 서브넷은 같은 AZ의 `NAT Gateway`를 통해 인터넷으로 나간다. 이 구조는 비용은 늘지만 AZ 장애 시 경로 의존성을 줄인다.

### 시험 핵심 포인트

- 프라이빗 서브넷의 아웃바운드 인터넷 접근은 `NAT Gateway`가 기본 정답이다.
- 인바운드는 허용하지 않으므로 보안 요구와 잘 맞는다.
- `S3`와 `DynamoDB` 접근만 필요하면 `VPC Endpoints`가 더 적절할 수 있다.

## VPC Endpoints

### 1. 서비스 개념

`VPC Endpoints`는 인터넷이나 NAT를 거치지 않고 AWS 서비스에 프라이빗하게 접근하는 기능이다. `Gateway Endpoint`와 `Interface Endpoint`가 있다.

### 2. 아키텍처 구조

```text
Private Subnet
   |
   +--> Gateway Endpoint --> S3 / DynamoDB
   |
   +--> Interface Endpoint --> PrivateLink-supported service
```

### 3. 언제 사용하는가

- 프라이빗 서브넷에서 `S3`나 `DynamoDB`에 인터넷 없이 접근할 때
- 보안 요구사항상 트래픽을 AWS 내부망으로 제한해야 할 때
- NAT 비용을 줄이고 싶을 때

### 4. 언제 사용하면 안되는가

- 지원되지 않는 서비스에 억지로 엔드포인트를 기대하는 경우
- 단순 인터넷 접근 자체를 완전히 대체한다고 오해하는 경우

### 5. 비슷한 서비스와 차이

- `Gateway Endpoint`는 `S3`, `DynamoDB` 전용이며 라우팅 테이블에 연결된다.
- `Interface Endpoint`는 ENI 기반으로 다양한 서비스에 사용된다.

### 6. 시험에서 자주 나오는 문제 유형

- 프라이빗 서브넷에서 `S3` 접근 시 NAT 없이 구현하는 문제
- 민감 데이터 전송을 공용 인터넷에서 분리하는 문제

### 7. 시험 함정 포인트

- `S3` 접근 문제에서 NAT보다 `Gateway Endpoint`가 더 적절한 경우가 많다.
- 엔드포인트 정책과 버킷 정책을 함께 볼 수 있다.

### 8. 실무 아키텍처 예시

배치 서버는 프라이빗 서브넷에서 `S3 Gateway Endpoint`를 통해 입력 데이터를 읽고 결과를 저장한다. 인터넷 경로가 없어 보안과 비용이 모두 개선된다.

### 시험 핵심 포인트

- 공용 인터넷 없이 AWS 서비스에 접근해야 하면 `VPC Endpoints`를 먼저 본다.
- `Amazon S3`와 `Amazon DynamoDB`는 `Gateway Endpoint`라는 점이 자주 출제된다.
- 보안뿐 아니라 NAT 비용 절감 관점에서도 강한 선택지다.

## VPC Peering

### 1. 서비스 개념

`VPC Peering`은 두 VPC를 직접 연결하는 기능이다. 사설 IP로 상호 통신할 수 있다.

### 2. 아키텍처 구조

```text
VPC A <---- Peering ----> VPC B
```

### 3. 언제 사용하는가

- 두 개의 VPC만 단순하게 연결하면 될 때
- 지연이 낮고 단순한 네트워크 연결이 필요할 때

### 4. 언제 사용하면 안되는가

- 다수 VPC를 메쉬 형태로 연결해야 할 때
- 전이 라우팅을 기대하는 경우

### 5. 비슷한 서비스와 차이

- `VPC Peering`은 1:1 직접 연결
- `Transit Gateway`는 허브 앤 스포크 중앙 연결

### 6. 시험에서 자주 나오는 문제 유형

- 두 VPC 간 사설 통신
- 피어링 후 라우팅과 보안 설정

### 7. 시험 함정 포인트

- 전이 라우팅이 지원되지 않는다.
- CIDR 중복이면 연결할 수 없다.

### 8. 실무 아키텍처 예시

공유 서비스 VPC와 애플리케이션 VPC를 단순 연결해 내부 API를 호출하게 한다. 연결 대상이 몇 개 되지 않을 때는 `Transit Gateway`보다 간단하다.

### 시험 핵심 포인트

- 두 VPC만 단순 연결하면 될 때는 `VPC Peering`이 적합하다.
- 전이 라우팅이 안 된다는 점이 대표 함정이다.
- 연결 수가 많아지면 `Transit Gateway`와 비교해야 한다.

## Transit Gateway

### 1. 서비스 개념

`Transit Gateway`는 여러 VPC와 온프레미스를 중앙 허브로 연결하는 네트워크 전송 허브다.

### 2. 아키텍처 구조

```text
VPC A ----\
VPC B -----+--> Transit Gateway <--> On-Premises
VPC C ----/
```

### 3. 언제 사용하는가

- 다수의 VPC를 중앙에서 연결해야 할 때
- 하이브리드 네트워크를 단순화해야 할 때
- 네트워크 분리와 중앙 라우팅 정책 관리가 필요할 때

### 4. 언제 사용하면 안되는가

- 두 개 VPC만 단순 연결하면 충분한 경우
- 비용보다 단순성이 절대적으로 우선인데 소규모 구조인 경우

### 5. 비슷한 서비스와 차이

- `VPC Peering`보다 확장성이 좋다.
- 허브 앤 스포크 구조를 통해 메쉬 복잡도를 줄인다.

### 6. 시험에서 자주 나오는 문제 유형

- 수십 개 VPC 연결
- 중앙 보안 계정과 공유 서비스 계정 연결
- Direct Connect/VPN과의 통합

### 7. 시험 함정 포인트

- 대규모 연결에서는 피어링보다 `Transit Gateway`가 관리상 유리하다.
- 라우트 도메인 분리 개념을 놓치면 보안 설계가 흔들린다.

### 8. 실무 아키텍처 예시

본사 데이터센터와 여러 AWS 계정의 VPC를 `Transit Gateway`로 연결하고, 중앙 검사 VPC를 통해 트래픽을 통제한다. 조직 규모가 커질수록 이 구조의 가치가 커진다.

### 시험 핵심 포인트

- 여러 VPC와 온프레미스를 허브 앤 스포크로 연결할 때 `Transit Gateway`가 유리하다.
- 대규모 연결에서 피어링 메쉬 복잡도를 줄이는 것이 핵심 가치다.
- 조직 단위 네트워크 문제와 중앙 검사 VPC 시나리오에서 자주 나온다.

## Amazon Route 53

### 1. 서비스 개념

`Amazon Route 53`은 DNS, 도메인 등록, 헬스 체크, 트래픽 라우팅 정책을 제공하는 서비스다.

### 2. 아키텍처 구조

```text
User DNS Query
    |
    v
Route 53 Hosted Zone
    |
    +--> ALB Alias
    +--> CloudFront Alias
    +--> Failover / Weighted / Latency Routing
```

### 3. 언제 사용하는가

- 도메인 이름을 AWS 리소스에 연결할 때
- 장애 조치 라우팅, 지연 기반 라우팅이 필요할 때
- 프라이빗 DNS를 VPC 내부에 제공할 때

### 4. 언제 사용하면 안되는가

- CDN 가속과 DNS를 혼동하는 경우
- L7 로드 밸런싱 기능을 `Route 53`만으로 기대하는 경우

### 5. 비슷한 서비스와 차이

- `Route 53`은 DNS 레벨 라우팅
- `ALB`는 HTTP 요청 라우팅
- `Global Accelerator`는 Anycast 기반 네트워크 최적화

### 6. 시험에서 자주 나오는 문제 유형

- 액티브-패시브 DR을 위한 Failover Routing
- 지리적 또는 지연 기반 트래픽 분산
- Alias 레코드 사용 여부

### 7. 시험 함정 포인트

- DNS 변경은 TTL 영향을 받는다.
- `Alias`는 AWS 리소스에 대해 루트 도메인에도 사용할 수 있다는 점이 중요하다.

### 8. 실무 아키텍처 예시

글로벌 서비스는 `Route 53 Latency-based Routing`으로 가까운 리전으로 보내고, 각 리전 장애 시 헬스 체크와 Failover 설정으로 다른 리전으로 우회한다.

### 시험 핵심 포인트

- DNS 라우팅, 헬스 체크, 지연 기반 라우팅 문제는 `Amazon Route 53`를 먼저 떠올린다.
- Alias 레코드와 Failover Routing은 시험 단골 주제다.
- 캐시 서비스가 아니라 DNS 서비스라는 점을 `CloudFront`와 구분해야 한다.

## Amazon CloudFront

### 1. 서비스 개념

`Amazon CloudFront`는 전 세계 엣지 로케이션을 활용하는 CDN 서비스다. 정적/동적 콘텐츠 가속, 보안, 오리진 보호에 쓰인다.

### 2. 아키텍처 구조

```text
Client
  |
  v
CloudFront Edge
  |
  +--> S3 Origin
  +--> ALB Origin
```

### 3. 언제 사용하는가

- 글로벌 사용자에게 정적 콘텐츠를 빠르게 제공해야 할 때
- 오리진 부하를 줄이고 DDoS 보호를 강화할 때
- 캐시 기반 비용 절감이 필요할 때

### 4. 언제 사용하면 안되는가

- 사설 VPC 내부 전용 서비스만 처리하는 경우
- 단순 DNS 라우팅 문제를 CDN으로 풀려는 경우

### 5. 비슷한 서비스와 차이

- `CloudFront`는 캐시와 엣지 기능이 중심이다.
- `Global Accelerator`는 캐시가 아니라 네트워크 경로 최적화다.

### 6. 시험에서 자주 나오는 문제 유형

- 정적 웹사이트 가속
- 서명 URL/쿠키
- 오리진 액세스 제어
- 다중 오리진 설계

### 7. 시험 함정 포인트

- `S3`를 퍼블릭으로 열지 않고 `CloudFront`만 통해 접근시키는 설계를 기억해야 한다.
- 동적 콘텐츠도 가속할 수 있지만 캐시 특성은 다르게 본다.

### 8. 실무 아키텍처 예시

정적 프런트엔드는 `S3`에 저장하고 `CloudFront`를 앞단에 둔다. API는 별도 `ALB`를 오리진으로 두어 정적과 동적 경로를 함께 제공한다.

### 시험 핵심 포인트

- 글로벌 저지연 콘텐츠 전송과 정적 자산 가속은 `Amazon CloudFront`의 대표 시나리오다.
- `Amazon S3` 정적 자산과 자주 결합되며, 오리진 보호 문제에도 자주 나온다.
- `AWS Global Accelerator`와 달리 캐시가 핵심이다.

## AWS Global Accelerator

### 1. 서비스 개념

`AWS Global Accelerator`는 Anycast IP를 통해 사용자 트래픽을 AWS 글로벌 네트워크로 빠르게 진입시켜 가장 건강한 엔드포인트로 전달하는 서비스다.

### 2. 아키텍처 구조

```text
User
  |
  v
Global Accelerator Anycast IP
  |
  +--> Regional ALB/NLB Endpoint
  +--> Health-based failover
```

### 3. 언제 사용하는가

- TCP/UDP 또는 글로벌 애플리케이션 경로 최적화가 필요할 때
- 지역 장애 시 빠른 페일오버가 중요할 때
- 고정 IP가 필요한 글로벌 진입점이 필요할 때

### 4. 언제 사용하면 안되는가

- 캐시가 핵심인 정적 콘텐츠 가속 문제
- DNS 수준 라우팅만으로 충분한 경우

### 5. 비슷한 서비스와 차이

- `CloudFront`는 CDN 캐시
- `Global Accelerator`는 네트워크 경로 최적화와 헬스 기반 라우팅
- `Route 53`은 DNS 레벨 선택

### 6. 시험에서 자주 나오는 문제 유형

- 글로벌 사용자를 가장 가까운 건강한 리전으로 보내는 문제
- 고정 Anycast IP 요구사항

### 7. 시험 함정 포인트

- 캐시 서비스가 아니다.
- TTL 기반 DNS 전환보다 빠른 장애 전환이 가능하다는 점이 핵심이다.

### 8. 실무 아키텍처 예시

글로벌 게임 백엔드는 여러 리전의 `NLB`를 엔드포인트로 등록하고 `Global Accelerator`로 사용자 연결 지연을 줄인다. 실시간 세션 트래픽에서 DNS보다 유리하다.

### 시험 핵심 포인트

- 고정 IP와 빠른 글로벌 페일오버가 필요하면 `AWS Global Accelerator`를 검토한다.
- 캐시가 아니라 AWS 글로벌 네트워크 경로 최적화가 핵심이다.
- DNS TTL 영향을 줄이고 싶을 때 `Amazon Route 53`보다 유리할 수 있다.

## Application Load Balancer

### 1. 서비스 개념

`Application Load Balancer`는 HTTP/HTTPS 전용 L7 로드 밸런서다. 경로 기반, 호스트 기반 라우팅과 웹소켓, 컨테이너 통합에 강하다.

### 2. 아키텍처 구조

```text
Client
  |
  v
ALB
  |
  +--> /api -> ECS Service
  +--> /img -> EC2 ASG
  +--> host=admin -> Lambda
```

### 3. 언제 사용하는가

- URL 경로나 호스트명 기준 라우팅이 필요할 때
- 마이크로서비스를 하나의 진입점으로 묶을 때
- `ECS`, `Lambda`와 연동할 때

### 4. 언제 사용하면 안되는가

- 초고성능 TCP/UDP 전달만 필요할 때
- 고정 IP 또는 소스 IP 보존이 핵심일 때 `NLB`가 더 적합할 수 있다

### 5. 비슷한 서비스와 차이

- `ALB`는 L7
- `NLB`는 L4
- `GWLB`는 네트워크 가상 어플라이언스 배포에 특화된다

### 6. 시험에서 자주 나오는 문제 유형

- 마이크로서비스 경로 기반 라우팅
- 웹 애플리케이션 오토스케일링 앞단
- `ALB`와 `NLB` 비교 문제

### 7. 시험 함정 포인트

- HTTP 헤더, 경로, 호스트 기반 라우팅은 `ALB`
- 정적 IP 요구사항이면 `NLB` 쪽이 더 적합하다

### 8. 실무 아키텍처 예시

하나의 도메인 아래 `/api`, `/admin`, `/static` 경로를 서로 다른 백엔드로 분기해 운영한다. `ALB`가 애플리케이션 레벨 라우팅 허브가 된다.

### 시험 핵심 포인트

- HTTP/HTTPS 경로 기반, 호스트 기반 라우팅이면 `Application Load Balancer`가 정답이다.
- `Amazon ECS`, `AWS Lambda`, 웹 애플리케이션과 자주 결합된다.
- 정적 IP나 순수 TCP 성능 요구는 `Network Load Balancer`와 비교해야 한다.

## Network Load Balancer

### 1. 서비스 개념

`Network Load Balancer`는 초고성능 TCP/UDP/TLS 레벨 로드 밸런서다. 낮은 지연과 높은 처리량, 정적 IP 지원이 강점이다.

### 2. 아키텍처 구조

```text
Client
  |
  v
NLB
  |
  +--> Target 1
  +--> Target 2
```

### 3. 언제 사용하는가

- TCP/UDP 기반 애플리케이션
- 고정 IP가 필요할 때
- 극단적으로 높은 네트워크 처리량이 필요할 때

### 4. 언제 사용하면 안되는가

- URL 경로 라우팅이 필요한 웹 애플리케이션
- 쿠키 기반 세션 같은 L7 기능이 필요한 경우

### 5. 비슷한 서비스와 차이

- `ALB`는 애플리케이션 계층 기능
- `NLB`는 전송 계층 성능과 고정 IP

### 6. 시험에서 자주 나오는 문제 유형

- TLS 패스스루 또는 TCP 서비스 부하 분산
- 고정 IP 화이트리스트 연동

### 7. 시험 함정 포인트

- HTTP 경로 기반 문제에서 `NLB`를 고르면 거의 오답이다.
- L4와 L7 차이를 문제 문장에서 찾아야 한다.

### 8. 실무 아키텍처 예시

금융사 파트너 시스템이 고정 IP 화이트리스트만 허용하는 경우, `NLB`를 앞단에 두고 백엔드 서비스로 TCP 연결을 전달한다.

### 시험 핵심 포인트

- TCP/UDP 처리, 고정 IP, 초고성능 전송 계층 요구면 `Network Load Balancer`를 본다.
- HTTP 경로 기반 라우팅 문제에서는 보통 오답 후보가 된다.
- `Application Load Balancer`와 계층 차이를 확실히 구분해야 한다.

## 장 마무리

- 인터넷 인바운드는 `Internet Gateway`, 프라이빗 아웃바운드는 `NAT Gateway`, AWS 서비스 사설 접근은 `VPC Endpoints`로 구분한다.
- 전역 가속은 `CloudFront`와 `Global Accelerator`의 목적 차이를 반드시 구분해야 한다.
- HTTP 라우팅이면 `ALB`, TCP/UDP와 고정 IP면 `NLB`가 기본 판단 기준이다.
