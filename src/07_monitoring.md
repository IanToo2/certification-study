# 7장. Monitoring

모니터링과 감사 서비스는 직접 정답으로도 나오지만, 보안과 운영 문제의 보조 선택지로도 자주 등장한다. 로그, 메트릭, 구성 기록의 역할을 분리해 이해해야 한다.

<div class="chapter-overview">
  <h2>이 장에서 바로 찾을 수 있는 서비스</h2>
  <p>운영 모니터링, API 감사, 구성 추적의 차이를 빠르게 점프해서 확인할 수 있다.</p>
  <div class="chapter-overview-links">
    <a href="#amazon-cloudwatch">Amazon CloudWatch</a>
    <a href="#aws-cloudtrail">AWS CloudTrail</a>
    <a href="#aws-config">AWS Config</a>
  </div>
</div>

## Amazon CloudWatch

### 1. 서비스 개념

`Amazon CloudWatch`는 메트릭, 로그, 알람, 대시보드, 이벤트를 제공하는 운영 모니터링 서비스다.

### 2. 아키텍처 구조

```text
AWS Resources / Apps
   |
   +--> Metrics
   +--> Logs
   +--> Alarms
          |
          v
Auto Scaling / SNS / Ops Response
```

### 3. 언제 사용하는가

- CPU, 네트워크, 요청 수, 애플리케이션 로그를 관찰할 때
- 경보 기반 자동 확장이나 운영 알림이 필요할 때

### 4. 언제 사용하면 안되는가

- API 호출 감사 기록이 필요한데 로그 수집 서비스로만 접근하려는 경우
- 리소스 설정 변경 이력을 메트릭으로 해결하려는 경우

### 5. 비슷한 서비스와 차이

- `CloudWatch`는 관찰과 알람
- `CloudTrail`은 API 감사
- `AWS Config`는 리소스 구성 상태 추적

### 6. 시험에서 자주 나오는 문제 유형

- CPU 기준 오토스케일링
- 특정 로그 패턴 경보
- 커스텀 메트릭 수집

### 7. 시험 함정 포인트

- 메트릭과 로그는 다르다.
- 장애 원인 추적과 규정 준수 감사는 각각 다른 서비스가 더 적합할 수 있다.

### 8. 실무 아키텍처 예시

웹 계층은 5xx 비율과 응답 시간 알람을 `CloudWatch`에 설정하고, 임계치 초과 시 `SNS`로 운영자에게 통보하며 `Auto Scaling`을 트리거한다.

### 시험 핵심 포인트

- 메트릭, 로그, 알람 문제는 `Amazon CloudWatch`가 기본 정답 축이다.
- 오토스케일링과 운영 경보 문제에서 매우 자주 연결된다.
- API 감사는 `AWS CloudTrail`, 구성 준수는 `AWS Config`와 구분해야 한다.

## AWS CloudTrail

### 1. 서비스 개념

`AWS CloudTrail`은 AWS 계정에서 수행된 API 호출과 계정 활동을 기록하는 감사 서비스다.

### 2. 아키텍처 구조

```text
User / Role / Service Action
        |
        v
    CloudTrail
        |
        +--> Event History
        +--> S3 Log Archive
        +--> CloudWatch Logs
```

### 3. 언제 사용하는가

- 누가 어떤 API를 언제 호출했는지 감사해야 할 때
- 보안 조사와 포렌식 근거가 필요할 때
- 규정 준수 로그 보관이 필요할 때

### 4. 언제 사용하면 안되는가

- 성능 메트릭 수집을 `CloudTrail`로 해결하려는 경우
- 애플리케이션 비즈니스 로그를 API 감사 로그와 혼동하는 경우

### 5. 비슷한 서비스와 차이

- `CloudTrail`은 제어 평면 활동 추적
- `CloudWatch`는 운영 메트릭/로그
- `AWS Config`는 설정 상태와 변경 이력

### 6. 시험에서 자주 나오는 문제 유형

- 특정 버킷 삭제자를 찾아야 하는 문제
- 보안 감사 로그 장기 보관 문제

### 7. 시험 함정 포인트

- 데이터 이벤트와 관리 이벤트 차이를 구분해야 한다.
- 중앙 보안 계정 `S3` 버킷으로 로그를 집계하는 패턴이 자주 나온다.

### 8. 실무 아키텍처 예시

모든 계정의 `CloudTrail` 로그를 중앙 보안 계정 버킷으로 모으고, 변조 방지를 위해 버전 관리와 별도 접근 제어를 적용한다.

### 시험 핵심 포인트

- 누가 어떤 API를 호출했는지 추적하는 감사 문제는 `AWS CloudTrail`이 맞다.
- 보안 조사와 계정 활동 기록 문제에서 가장 자주 등장한다.
- `Amazon CloudWatch` 운영 메트릭과 혼동하면 오답이 되기 쉽다.

## AWS Config

### 1. 서비스 개념

`AWS Config`는 리소스 구성을 기록하고, 규칙 기반으로 규정 준수 상태를 평가하는 서비스다.

### 2. 아키텍처 구조

```text
AWS Resources
   |
   v
AWS Config Recorder
   |
   +--> Configuration History
   +--> Config Rules
   +--> Compliance Dashboard
```

### 3. 언제 사용하는가

- 특정 리소스 구성이 정책을 준수하는지 지속 평가할 때
- 설정 변경 이력을 시간순으로 추적할 때
- 보안 표준 준수 상태를 보고할 때

### 4. 언제 사용하면 안되는가

- 실시간 애플리케이션 성능 모니터링이 필요한 경우
- API 호출 주체를 확인해야 하는 경우

### 5. 비슷한 서비스와 차이

- `Config`는 구성 상태
- `CloudTrail`은 행위 기록
- `CloudWatch`는 운영 관찰

### 6. 시험에서 자주 나오는 문제 유형

- 암호화되지 않은 볼륨 감지
- 퍼블릭 `S3` 버킷 감지
- 허용되지 않은 보안 그룹 규칙 탐지

### 7. 시험 함정 포인트

- 위반 탐지와 자동 수정은 별도 자동화가 필요할 수 있다.
- 스냅샷이 아니라 지속 기록이라는 점이 중요하다.

### 8. 실무 아키텍처 예시

보안팀은 `AWS Config Rules`로 `S3` 퍼블릭 액세스 차단, `EBS` 암호화, 루트 MFA 사용 여부를 지속 평가해 준수 대시보드를 운영한다.

### 시험 핵심 포인트

- 리소스 설정 변경 이력과 규정 준수 평가는 `AWS Config`가 핵심이다.
- 암호화 미적용, 퍼블릭 버킷 탐지 같은 문제에 자주 나온다.
- 행위 기록은 `AWS CloudTrail`, 실시간 운영 경보는 `Amazon CloudWatch`다.

## 장 마무리

- 운영 상태는 `CloudWatch`, API 감사는 `CloudTrail`, 리소스 구성 준수는 `AWS Config`다.
- 세 서비스는 대체 관계보다 상호 보완 관계로 보는 것이 시험 풀이에 유리하다.
