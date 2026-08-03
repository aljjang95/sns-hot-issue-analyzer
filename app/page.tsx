"use client";

import { useState } from "react";
import { TrendCard } from "../components/TrendCard";
import { VideoCard } from "../components/VideoCard";
import { sampleTrends, sampleVideos } from "../lib/sample-data";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"all" | "x" | "youtube" | "tiktok">("all");

  const filteredTrends = activeTab === "all" 
    ? sampleTrends 
    : sampleTrends.filter(t => t.platform === activeTab);

  const filteredVideos = activeTab === "all"
    ? sampleVideos
    : sampleVideos.filter(v => v.platform === activeTab);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          SNS 핫이슈 분석기
        </h1>
        <p className="text-gray-600">
          X · YouTube · TikTok 핫이슈 리서치 + 영상 분석 정리
        </p>
        <p className="text-sm text-gray-400 mt-1">
          2026.08 기준 샘플 데이터 (실제 API 연동 시 실시간으로 변경됩니다)
        </p>
      </header>

      <div className="flex gap-2 mb-8 flex-wrap">
        {(["all", "x", "youtube", "tiktok"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab === "all" ? "전체" : tab === "x" ? "X" : tab === "youtube" ? "YouTube" : "TikTok"}
          </button>
        ))}
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">🔥 현재 핫이슈</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTrends.map((trend) => (
            <TrendCard key={trend.id} trend={trend} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-900">🎬 영상 분석 요약</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>MVP 버전 · API 키를 추가하면 실시간 데이터로 전환됩니다</p>
        <p className="mt-1">GitHub: aljjang95/sns-hot-issue-analyzer</p>
      </footer>
    </main>
  );
}
