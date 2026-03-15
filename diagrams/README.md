# 다이어그램 가이드

이 디렉터리는 스터디북에 포함할 ASCII 다이어그램 또는 Mermaid 다이어그램 초안을 보관하기 위한 공간이다.

## 원칙

- 본문에서는 Mermaid 다이어그램을 우선 사용하고, PDF 렌더링 제약이 있으면 ASCII 다이어그램을 보조로 둔다.
- 다이어그램은 단순한 박스 모음이 아니라 트래픽 흐름, 고가용성 구조, 각 계층의 역할이 드러나야 한다.
- 본문 내 다이어그램과 별도로 필요하면 서비스별 별도 파일을 추가한다.

## 권장 파일명 예시

- `ec2-alb-rds-ha.txt`
- `s3-cloudfront-static-site.txt`
- `eventbridge-sqs-lambda-flow.txt`
- `hybrid-network-transit-gateway.txt`

## 현재 포함된 Mermaid 원본

- `highly-available-web-architecture.mmd`
- `serverless-architecture.mmd`
- `event-driven-architecture.mmd`
- `microservice-architecture.mmd`
- `data-lake-architecture.mmd`
