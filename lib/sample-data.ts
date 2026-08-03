export type Platform = "x" | "youtube" | "tiktok";

export interface Trend {
  id: string;
  title: string;
  platform: Platform;
  engagement?: string;
  description: string;
  summary?: string;
  category?: string;
  tags: string[];
  score?: number;
}

export interface VideoAnalysis {
  id: string;
  title: string;
  platform: Platform;
  url: string;
  summary: string;
  keyPoints: string[];
  tone?: string;
  relatedTrend?: string;
  duration?: string;
}

export const sampleTrends: Trend[] = [
  {
    id: "1",
    title: "#누구보다_빠른_8월_최애_선점",
    platform: "x",
    engagement: "728",
    description: "팬덤들이 8월 최애 캐릭터/아이돌을 먼저 선점하는 챌린지.",
    category: "팬덤 / 챌린지",
    tags: ["최애", "팬덤", "챌린지"],
    score: 728,
  },
  {
    id: "2",
    title: "#취사병의해피엔딩_최우수작품상",
    platform: "x",
    engagement: "396",
    description: "관련 작품이 최우수작품상을 수상하며 화제.",
    category: "작품 / 수상",
    tags: ["수상", "작품"],
    score: 396,
  },
  {
    id: "3",
    title: "2026 Is The New 2016",
    platform: "youtube",
    engagement: "높은 조회수",
    description: "노스탤지어 트렌드. 10년 전 감성이 다시 유행.",
    category: "트렌드 / 문화",
    tags: ["노스탤지어", "2016"],
    score: 850,
  },
  {
    id: "4",
    title: "숏폼 & 셋로그 트렌드",
    platform: "tiktok",
    engagement: "바이럴",
    description: "2-4초 초단편 브이로그가 주요 영상 트렌드로 부상.",
    category: "영상 트렌드",
    tags: ["숏폼", "셋로그"],
    score: 920,
  },
];

export const sampleVideos: VideoAnalysis[] = [
  {
    id: "v1",
    title: "8월 최애 선점 챌린지 모음",
    platform: "x",
    url: "https://x.com/explore",
    summary: "팬들이 최애 캐릭터/아이돌을 이미지와 함께 올리는 챌린지. 밝고 즐거운 분위기.",
    keyPoints: ["애니/BL/K-pop 중심", "이미지 + 짧은 클립", "상호 응원 활발"],
    tone: "밝음 / 놀이",
    relatedTrend: "#누구보다_빠른_8월_최애_선점",
  },
  {
    id: "v2",
    title: "K-pop 아이돌 음악방송 퍼포먼스",
    platform: "youtube",
    url: "https://youtube.com",
    summary: "최근 음악방송 무대 영상들이 높은 조회수를 기록.",
    keyPoints: ["고퀄리티 안무", "직캠과 공식 영상", "팬덤 해시태그 연동"],
    tone: "열정 / 에너지",
    relatedTrend: "K-pop 팬덤 활동",
  },
  {
    id: "v3",
    title: "셋로그 스타일 초단편 브이로그",
    platform: "tiktok",
    url: "https://tiktok.com",
    summary: "2~4초 길이의 날것 브이로그가 새로운 숏폼 트렌드.",
    keyPoints: ["초단편 (2-4초)", "날것 감성", "일상 공유 중심"],
    tone: "진정성 / 캐주얼",
    relatedTrend: "숏폼 & 셋로그",
  },
];
