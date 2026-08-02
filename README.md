# SNS 핫이슈 분석기

SNS(X, YouTube, TikTok) 핫이슈를 리서치하고, 관련 영상을 분석해서 깔끔하게 정리해주는 웹앱입니다.

## 기능 (MVP)

- **핫이슈 대시보드**: X / YouTube / TikTok 트렌드를 카드 형태로 표시
- **영상 분석 요약**: 핵심 포인트 + 전체 요약 + 감정 분석
- **플랫폼 필터**: 전체 / X / YouTube / TikTok 탭
- **한국어 UI**

현재는 **샘플 데이터**로 동작합니다.

## 시작하기

```bash
git clone https://github.com/aljjang95/sns-hot-issue-analyzer.git
cd sns-hot-issue-analyzer
npm install
npm run dev
```

브라우저에서 http://localhost:3000 열기

## Vercel 배포

1. vercel.com 로그인
2. New Project → 이 레포 선택
3. Deploy

## 기술

Next.js 14 + TypeScript + Tailwind CSS

MIT
