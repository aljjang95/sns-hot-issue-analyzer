export interface Trend {
  id: string;
  title: string;
  platform: "X" | "YouTube" | "TikTok";
  score?: number;
  description: string;
  category: string;
  tags: string[];
}

export interface VideoAnalysis {
  id: string;
  title: string;
  platform: "X" | "YouTube" | "TikTok";
  url: string;
  summary: string;
  keyPoints: string[];
  tone: string;
  relatedTrend: string;
}

export const sampleTrends: Trend[] = [
  {
    id: "1",
    title: "#누구보다_빠른_8월_최애_선점",
    platform: "X",
    score: 728,
    description: "팬덤들이 8월 최애 캐릭터/아이돌을 먼저 선점하는 챌린지. 애니, BL, K-pop 캐릭터 중심으로 커뮤니티 놀이 문화가 활발함.",
    category: "팬덤 / 챌린지",
    tags: ["최애", "팬덤", "챌린지", "BL", "K-pop"],
  },
  {
    id: "2",
    title: "#취사병의해피엔딩_최우수작품상",
    platform: "X",
    score: 396,
    description: "관련 작품이 최우수작품상을 수상하며 화제. 팬들과 작품 관계자들의 축하 분위기.",
    category: "작품 / 수상",
    tags: ["수상", "작품", "팬덤"],
  },
  {
    id: "3",
    title: "#앤클로트친소",
    platform: "X",
    score: 387,
    description: "특정 팬 커뮤니티(앤클로) 트친소 활동이 활발.",
    category: "커뮤니티",
    tags: ["트친소", "팬덤"],
  },
  {
    id: "4",
    title: "#HAPPY_LEESEJIN_DAY",
    platform: "X",
    score: 316,
    description: "이세진 관련 팬데이 축하 해시태그. K-pop / 엔터테인먼트 팬 활동.",
    category: "K-pop",
    tags: ["생일", "팬데이", "K-pop"],
  },
  {
    id: "5",
    title: "성격적 결함",
    platform: "X",
    description: "심리 / 인간관계 관련 키워드로 토론과 공감 게시물이 다수 발생.",
    category: "일상 / 심리",
    tags: ["심리", "토론"],
  },
  {
    id: "6",
    title: "원신특별방송",
    platform: "X",
    description: "원신(Genshin Impact) 특별방송 및 신규 지역/캐릭터 관련 기대 및 반응.",
    category: "게임",
    tags: ["원신", "게임", "Genshin"],
  },
  {
    id: "7",
    title: "2026 Is The New 2016",
    platform: "YouTube",
    description: "노스탤지어 트렌드. 10년 전 감성과 K-pop 컴백이 맞물려 SNS 전반에서 회고성 콘텐츠 증가.",
    category: "트렌드 / 문화",
    tags: ["노스탤지어", "2016", "K-pop"],
  },
  {
    id: "8",
    title: "숏폼 & 셋로그 트렌드",
    platform: "TikTok",
    description: "2-4초 초단편 브이로그(셋로그)와 다양한 숏폼 콘텐츠가 2026년 주요 영상 트렌드로 부상.",
    category: "영상 트렌드",
    tags: ["숏폼", "셋로그", "브이로그"],
  },
];

export const sampleVideos: VideoAnalysis[] = [
  {
    id: "v1",
    title: "8월 최애 선점 챌린지 모음",
    platform: "X",
    url: "https://x.com/explore",
    summary: "팬들이 자신의 최애 캐릭터/아이돌을 이미지와 함께 올리는 챌린지 영상/클립이 쏟아지고 있음. 밝고 즐거운 분위기, 커뮤니티 소속감 강화.",
    keyPoints: [
      "애니/BL/K-pop 캐릭터 중심",
      "이미지 + 짧은 클립 형태",
      "상호 응원과 리트윗 활발",
    ],
    tone: "밝음 / 놀이 / 커뮤니티",
    relatedTrend: "#누구보다_빠른_8월_최애_선점",
  },
  {
    id: "v2",
    title: "K-pop 아이돌 음악방송 퍼포먼스",
    platform: "YouTube",
    url: "https://youtube.com",
    summary: "최근 음악방송 무대 영상들이 높은 조회수를 기록. 에너지 넘치는 안무와 팬 직캠이 주를 이룸.",
    keyPoints: [
      "고퀄리티 안무와 무대 연출",
      "직캠과 공식 영상 동시 확산",
      "팬덤 해시태그와 연동",
    ],
    tone: "열정 / 에너지",
    relatedTrend: "K-pop 팬덤 활동",
  },
  {
    id: "v3",
    title: "원신 특별방송 하이라이트",
    platform: "YouTube",
    url: "https://youtube.com",
    summary: "원신 신규 콘텐츠 발표 방송 클립. 신규 지역 관련 정보가 팬들 사이에서 빠르게 공유됨.",
    keyPoints: [
      "신규 지역/캐릭터 티저",
      "커뮤니티 반응 폭발",
      "이론과 기대 콘텐츠 증가",
    ],
    tone: "기대 / 흥분",
    relatedTrend: "원신특별방송",
  },
  {
    id: "v4",
    title: "셋로그 스타일 초단편 브이로그",
    platform: "TikTok",
    url: "https://tiktok.com",
    summary: "2~4초 길이의 날것 브이로그(셋로그)가 새로운 숏폼 트렌드로 자리잡음. 일상 순간을 빠르게 공유하는 형식.",
    keyPoints: [
      "초단편 (2-4초)",
      "날것(raw) 감성",
      "일상 공유 중심",
    ],
    tone: "진정성 / 캐주얼",
    relatedTrend: "숏폼 & 셋로그",
  },
];