# 4장. Database

데이터베이스 문제는 성능보다도 운영 모델, 확장 방식, 가용성, 일관성, 지연시간 요구를 구분하는 것이 중요하다. 관계형인지, 키-값인지, 캐시인지에 따라 선택지가 크게 갈린다.

## Amazon RDS

### 1. 서비스 개념

`Amazon RDS`는 관리형 관계형 데이터베이스 서비스다. 엔진 패치, 백업, Multi-AZ, 읽기 전용 복제본 같은 운영 작업을 줄여 준다.

### 2. 아키텍처 구조

```text
Application
   |
   v
Amazon RDS Primary
   |
   +--> Multi-AZ Standby
   +--> Read Replica(s)
```

### 3. 언제 사용하는가

- 관계형 스키마와 SQL이 필요한 경우
- 백업, 패치, 장애 조치를 관리형으로 운영하고 싶을 때
- OLTP 애플리케이션에 적합하다

### 4. 언제 사용하면 안되는가

- 무제한 수평 확장이 핵심인 키-값 워크로드
- 초고속 캐시 레이어가 필요한 경우

### 5. 비슷한 서비스와 차이

- `Aurora`는 `RDS` 계열 중 클라우드 네이티브 구조로 더 높은 성능과 스토리지 분리를 제공한다.
- `DynamoDB`는 NoSQL, `RDS`는 관계형이다.

### 6. 시험에서 자주 나오는 문제 유형

- 읽기 부하 분산을 위한 Read Replica
- 고가용성을 위한 Multi-AZ
- 자동 백업과 스냅샷 차이

### 7. 시험 함정 포인트

- Multi-AZ는 읽기 확장 수단이 아니라 장애 조치용이다.
- Read Replica는 성능 확장용이며 기본적으로 비동기 복제다.

### 8. 실무 아키텍처 예시

주문 서비스의 메인 DB는 `RDS for MySQL` Multi-AZ로 운영하고, 분석 조회나 읽기 트래픽은 Read Replica로 분산한다.

### 시험 핵심 포인트

- 일반적인 관리형 관계형 데이터베이스 문제는 `Amazon RDS`가 기본 선택지다.
- `Multi-AZ`는 고가용성, `Read Replica`는 읽기 확장이라는 차이가 자주 나온다.
- 운영 부담 최소화와 SQL 요구를 함께 만족할 때 강하다.

## Amazon Aurora

### 1. 서비스 개념

`Amazon Aurora`는 MySQL 또는 PostgreSQL 호환의 고성능 관계형 데이터베이스다. 컴퓨트와 스토리지가 분리되어 빠른 복구와 고가용성에 강하다.

### 2. 아키텍처 구조

```text
Application
   |
   v
Aurora Writer
   |
   +--> Shared Cluster Storage (6 copies across 3 AZs)
   |
   +--> Aurora Reader(s)
```

### 3. 언제 사용하는가

- `RDS`보다 더 높은 성능과 빠른 장애 복구가 필요할 때
- 읽기 확장과 글로벌 데이터베이스 구성이 중요할 때
- 클라우드 네이티브 관계형 DB가 필요할 때

### 4. 언제 사용하면 안되는가

- 가장 단순하고 저렴한 소규모 관계형 DB면 일반 `RDS`로 충분한 경우
- 비관계형 키-값 접근이 핵심인 경우

### 5. 비슷한 서비스와 차이

- `RDS`보다 성능과 스토리지 구조가 발전되어 있다.
- `Aurora Serverless`는 간헐적 워크로드에 비용 유연성이 더 있다.

### 6. 시험에서 자주 나오는 문제 유형

- 빠른 장애 복구와 읽기 확장이 필요한 문제
- 글로벌 데이터베이스 또는 다중 리전 읽기 요구
- `RDS`와 `Aurora` 선택 비교

### 7. 시험 함정 포인트

- Aurora의 Multi-AZ 내구성은 기본 스토리지 구조와 연결되어 있다.
- Reader endpoint와 cluster endpoint 차이를 묻는 문제가 나온다.

### 8. 실무 아키텍처 예시

글로벌 SaaS 서비스는 `Aurora` 클러스터를 기본 트랜잭션 DB로 사용하고, 리포팅 읽기는 Reader endpoint로 분산한다. 리전 간 재해 복구는 `Aurora Global Database`로 단축할 수 있다.

### 시험 핵심 포인트

- 더 높은 성능, 빠른 장애 복구, 클라우드 네이티브 관계형 DB 요구가 있으면 `Amazon Aurora`를 검토한다.
- `Amazon RDS`와 비교해 읽기 확장성과 스토리지 구조가 더 강조된다.
- Reader endpoint와 Writer endpoint 구분이 시험 포인트다.

## Amazon DynamoDB

### 1. 서비스 개념

`Amazon DynamoDB`는 완전관리형 NoSQL 키-값 및 문서 데이터베이스다. 밀리초 단위 지연, 자동 확장, 서버리스 운영이 강점이다.

### 2. 아키텍처 구조

```text
Application
   |
   v
DynamoDB Table
   |
   +--> Partition Key
   +--> Sort Key
   +--> GSI / LSI
   +--> Streams
```

### 3. 언제 사용하는가

- 대규모 트래픽에 낮은 지연이 필요할 때
- 예측 가능한 액세스 패턴이 있을 때
- 세션 저장소, 장바구니, IoT, 메타데이터 저장에 적합하다

### 4. 언제 사용하면 안되는가

- 복잡한 조인과 다중 테이블 트랜잭션이 핵심일 때
- 관계형 스키마가 강하게 필요한 경우

### 5. 비슷한 서비스와 차이

- `RDS`와 달리 조인 중심 쿼리가 아니라 액세스 패턴 기반 설계가 필요하다.
- `ElastiCache`는 영속 DB가 아니라 캐시다.

### 6. 시험에서 자주 나오는 문제 유형

- 초당 수백만 요청을 처리해야 하는 서버리스 앱
- 세션 또는 장바구니 저장
- TTL, Streams, DAX, Global Tables

### 7. 시험 함정 포인트

- 스키마 설계보다 액세스 패턴 설계가 먼저다.
- 파티션 키가 잘못되면 핫 파티션 문제가 생긴다.
- `Global Tables`는 다중 리전 활성-활성 패턴에 자주 등장한다.

### 8. 실무 아키텍처 예시

게임 리더보드 서비스는 플레이어 ID와 게임 ID를 키로 한 `DynamoDB`를 사용하고, 실시간 점수 이벤트는 `Streams`를 통해 후처리 시스템으로 전달한다.

### 시험 핵심 포인트

- 초저지연 대규모 키-값 워크로드는 `Amazon DynamoDB`가 적합하다.
- 액세스 패턴 중심 설계와 파티션 키 선택이 핵심이다.
- 조인과 복잡한 관계형 쿼리가 핵심이면 `Amazon RDS` 계열이 더 맞다.

## Amazon ElastiCache

### 1. 서비스 개념

`Amazon ElastiCache`는 `Redis` 또는 `Memcached` 기반 관리형 인메모리 캐시 서비스다. 읽기 지연 감소와 DB 부하 완화에 사용한다.

### 2. 아키텍처 구조

```text
Application
   |
   v
ElastiCache Cluster
   |
   +--> Redis primary/replica
   +--> Memcached nodes
   |
   v
Database
```

### 3. 언제 사용하는가

- 조회 성능을 높이고 데이터베이스 부담을 줄일 때
- 세션 저장소, 캐시, 랭킹, pub/sub가 필요할 때
- 서브밀리초 지연이 중요할 때

### 4. 언제 사용하면 안되는가

- 영속 저장소를 대체하려는 경우
- 데이터 재구성이 불가능한 핵심 원본 데이터를 캐시에만 두려는 경우

### 5. 비슷한 서비스와 차이

- `Redis`는 복제, 영속성 옵션, 자료구조가 풍부하다.
- `Memcached`는 단순 분산 캐시다.
- `DynamoDB DAX`는 `DynamoDB` 전용 캐시다.

### 6. 시험에서 자주 나오는 문제 유형

- 읽기 지연을 줄여야 하는 문제
- 세션 상태를 인메모리로 저장하는 문제
- `RDS` 읽기 부하 완화 문제

### 7. 시험 함정 포인트

- 캐시는 원본 데이터베이스를 대체하지 않는다.
- 장애 시 캐시 미스를 감당할 수 있도록 설계해야 한다.

### 8. 실무 아키텍처 예시

상품 상세 조회 API는 `ElastiCache for Redis`를 앞단에 두고, 캐시 미스 시 `Amazon RDS`에서 조회한 뒤 결과를 짧은 TTL로 저장한다. 피크 시즌에 DB 비용과 지연을 함께 줄일 수 있다.

### 시험 핵심 포인트

- 읽기 지연 단축과 DB 부하 감소 요구가 있으면 `Amazon ElastiCache`를 본다.
- 원본 데이터베이스 대체제가 아니라 캐시 레이어라는 점을 기억해야 한다.
- `Redis`와 `Memcached`의 용도 차이도 출제될 수 있다.

## 장 마무리

- 고가용성 관계형 DB는 `Amazon RDS` 또는 `Amazon Aurora`, 대규모 저지연 NoSQL은 `Amazon DynamoDB`, 성능 보강은 `Amazon ElastiCache`로 정리하면 된다.
- 시험에서는 `Multi-AZ`와 `Read Replica`의 목적 차이를 명확히 구분해야 한다.
