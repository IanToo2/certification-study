# AWS SAA-C03 한국어 스터디북

`AWS Solutions Architect Associate(SAA-C03)` 합격을 목표로 한 한국어 실전형 학습서다. 서비스 정의 암기보다 `어떤 요구사항에서 어떤 서비스를 선택해야 하는가`에 집중해, 실제 시험의 아키텍처 의사결정 문제를 빠르게 푸는 감각을 만드는 데 목적이 있다.

<div class="home-dashboard">
  <section class="hero-panel">
    <p class="hero-kicker">AWS SAA-C03 Certification</p>
    <p class="hero-summary">
      이 사이트는 문서를 순서대로 읽는 곳이 아니라, 시험에서 자주 나오는 요구사항을 빠르게
      분류하고 정답 서비스를 고르는 감각을 훈련하는 곳이다.
    </p>
    <div class="hero-actions">
      <a class="cta-card cta-primary" href="01_identity_security.md">
        <strong>처음부터 학습</strong>
        <span>1장부터 9장까지 개념, 선택 기준, 아키텍처 패턴을 순서대로 학습</span>
      </a>
      <a class="cta-card" href="10_service_comparisons.md">
        <strong>비교표로 빠르게 복습</strong>
        <span>헷갈리는 서비스 차이를 먼저 보고 오답 제거력을 높이기</span>
      </a>
      <a class="cta-card cta-emphasis" href="exam-questions/practice_exam_1.md">
        <strong>지금 바로 모의고사</strong>
        <span>Practice Exam 1부터 실전 모드로 진입하고 해설로 약점 확인</span>
      </a>
    </div>
    <div class="hero-tools">
      <button class="search-trigger" type="button" data-open-search="true">검색창 열기</button>
      <a class="secondary-link" href="12_final_cheatsheet.md">시험 직전 치트시트</a>
      <a class="secondary-link" href="exam-questions/exam_strategy.md">시험 전략 보기</a>
      <span class="search-shortcut-hint">검색 단축키: <code>/</code> 또는 <code>S</code></span>
    </div>
  </section>

  <section class="dashboard-section">
    <h2>이 책으로 얻는 것</h2>
    <div class="feature-grid">
      <article class="feature-card">
        <h3>선택 기준 중심 학습</h3>
        <p>서비스별 핵심 개념보다 `선택 기준`을 먼저 정리한다.</p>
      </article>
      <article class="feature-card">
        <h3>시험형 사고 훈련</h3>
        <p>고가용성, 비용 최적화, 보안, 운영 단순성 요구를 문제 문장에서 읽는 법을 익힌다.</p>
      </article>
      <article class="feature-card">
        <h3>비교와 함정 정리</h3>
        <p>`Amazon S3 vs Amazon EBS vs Amazon EFS`, `Application Load Balancer vs Network Load Balancer`처럼 헷갈리는 선택지를 빠르게 구분한다.</p>
      </article>
      <article class="feature-card">
        <h3>시험 직전 복습 구조</h3>
        <p>비교표, 치트시트, 시험 전략, 모의고사로 바로 넘어갈 수 있게 구성했다.</p>
      </article>
    </div>
  </section>

  <section class="dashboard-section">
    <h2>서비스 바로 찾기</h2>
    <div class="quick-jump-grid">
      <a class="jump-card" href="keyword_index.md">키워드 인덱스 전체 보기</a>
      <a class="jump-card" href="10_service_comparisons.md#cmp-storage">Amazon S3 / Amazon EBS / Amazon EFS</a>
      <a class="jump-card" href="10_service_comparisons.md#cmp-load-balancer">Application Load Balancer / Network Load Balancer</a>
      <a class="jump-card" href="10_service_comparisons.md#cmp-messaging">Amazon SQS / Amazon SNS / Amazon EventBridge</a>
      <a class="jump-card" href="10_service_comparisons.md#cmp-rds-ddb">Amazon RDS / Amazon DynamoDB</a>
      <a class="jump-card" href="10_service_comparisons.md#cmp-observability">Amazon CloudWatch / AWS CloudTrail / AWS Config</a>
    </div>
  </section>

  <section class="dashboard-section">
    <h2>추천 학습 루트</h2>
    <div class="path-grid">
      <article class="path-card">
        <p class="path-label">기초 학습</p>
        <h3>처음 준비하는 학습자</h3>
        <p>서비스별 핵심 개념과 선택 기준을 처음부터 쌓는 루트다.</p>
        <ul>
          <li><a href="01_identity_security.md">1장. Identity &amp; Security</a></li>
          <li><a href="02_compute.md">2장. Compute</a></li>
          <li><a href="03_storage.md">3장. Storage</a></li>
          <li><a href="09_architecture_patterns.md">9장. Architecture Patterns</a></li>
        </ul>
      </article>
      <article class="path-card">
        <p class="path-label">오답 제거 훈련</p>
        <h3>헷갈리는 서비스만 빠르게 정리</h3>
        <p>비교표와 패턴 위주로 읽고 시험형 판단력을 끌어올리는 루트다.</p>
        <ul>
          <li><a href="10_service_comparisons.md">10장. Service Comparisons</a></li>
          <li><a href="11_exam_patterns.md">11장. Exam Patterns</a></li>
          <li><a href="12_final_cheatsheet.md">12장. Final Cheatsheet</a></li>
        </ul>
      </article>
      <article class="path-card path-card-exam">
        <p class="path-label">시험 모드</p>
        <h3>시험 직전 빠른 복습</h3>
        <p>치트시트로 복습하고 바로 모의고사로 넘어가는 실전형 루트다.</p>
        <ul>
          <li><a href="12_final_cheatsheet.md">시험 직전 치트시트</a></li>
          <li><a href="exam-questions/exam_strategy.md">Exam Strategy</a></li>
          <li><a href="exam-questions/practice_exam_1.md">Practice Exam 1</a></li>
        </ul>
      </article>
    </div>
  </section>

  <section class="dashboard-section">
    <h2>시험 직전 바로 가기</h2>
    <div class="shortcut-grid">
      <a class="shortcut-card" href="12_final_cheatsheet.md">
        <strong>치트시트</strong>
        <span>서비스 한 줄 요약, 아키텍처 단축 공식, 함정 포인트</span>
      </a>
      <a class="shortcut-card" href="11_exam_patterns.md">
        <strong>Exam Patterns</strong>
        <span>문제 키워드 해석, 출제 패턴, 오답 제거 기준</span>
      </a>
      <a class="shortcut-card" href="exam-questions/exam_strategy.md">
        <strong>Exam Strategy</strong>
        <span>시험 키워드, 선택 전략, 마지막 암기 포인트</span>
      </a>
      <a class="shortcut-card shortcut-card-strong" href="exam-questions/practice_exam_1.md">
        <strong>Practice Exam</strong>
        <span>실전형 40문항 세트로 바로 들어가기</span>
      </a>
    </div>
  </section>

  <section class="dashboard-section">
    <h2>자주 찾는 주제</h2>
    <div class="topic-grid">
      <a class="topic-link" href="03_storage.md">정적 웹사이트 호스팅과 글로벌 캐시</a>
      <a class="topic-link" href="09_architecture_patterns.md">서버리스 아키텍처와 이벤트 기반 처리</a>
      <a class="topic-link" href="10_service_comparisons.md">Amazon S3 vs Amazon EBS vs Amazon EFS</a>
      <a class="topic-link" href="10_service_comparisons.md">Application Load Balancer vs Network Load Balancer</a>
      <a class="topic-link" href="10_service_comparisons.md">Amazon RDS vs Amazon DynamoDB</a>
      <a class="topic-link" href="10_service_comparisons.md">Amazon SQS vs Amazon SNS vs Amazon EventBridge</a>
      <a class="topic-link" href="09_architecture_patterns.md">고가용성 웹 아키텍처 패턴</a>
      <a class="topic-link" href="exam-questions/practice_exam_1.md">모의고사 전체 보기</a>
    </div>
  </section>

  <section class="dashboard-section">
    <h2>빠른 검색 키워드</h2>
    <div class="search-chip-list">
      <button class="search-chip" type="button" data-search-term="정적 웹사이트">정적 웹사이트</button>
      <button class="search-chip" type="button" data-search-term="비동기 메시지 처리">비동기 메시지 처리</button>
      <button class="search-chip" type="button" data-search-term="팬아웃">팬아웃</button>
      <button class="search-chip" type="button" data-search-term="이벤트 라우팅">이벤트 라우팅</button>
      <button class="search-chip" type="button" data-search-term="공유 파일 시스템">공유 파일 시스템</button>
      <button class="search-chip" type="button" data-search-term="블록 스토리지">블록 스토리지</button>
      <button class="search-chip" type="button" data-search-term="초저지연 NoSQL">초저지연 NoSQL</button>
      <button class="search-chip" type="button" data-search-term="고정 IP 로드 밸런서">고정 IP 로드 밸런서</button>
      <button class="search-chip" type="button" data-search-term="경로 기반 라우팅">경로 기반 라우팅</button>
      <button class="search-chip" type="button" data-search-term="서버리스 컨테이너">서버리스 컨테이너</button>
      <button class="search-chip" type="button" data-search-term="장기 보관">장기 보관</button>
      <button class="search-chip" type="button" data-search-term="VPC Endpoint">VPC Endpoint</button>
      <button class="search-chip" type="button" data-search-term="Amazon Cognito">Amazon Cognito</button>
    </div>
    <p class="search-hint">
      검색은 문제 문장 그대로보다 <code>요구사항 핵심어 + 서비스명</code> 조합으로 찾는 것이 빠르다.
    </p>
  </section>

  <section class="dashboard-section compact-section">
    <h2>온라인 학습과 PDF 변환</h2>
    <ul>
      <li>공개 주소는 <code>https://iantoo2.github.io/certification-study/</code>다.</li>
      <li>Markdown 구조는 <code>mdBook</code> 기준으로 정리되어 있다.</li>
      <li>주요 패턴은 Mermaid 다이어그램으로 포함되어 있다.</li>
      <li>책 본문 뒤에는 시험 전략 문서와 5개 Practice Exam이 이어진다.</li>
    </ul>
  </section>
</div>
