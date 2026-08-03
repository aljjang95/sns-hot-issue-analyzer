"use client";

import { useState } from "react";
import { TrendCard } from "../components/TrendCard";
import { VideoCard } from "../components/VideoCard";
import { sampleTrends, sampleVideos } from "../lib/sample-data";

type Tab = "all" | "x" | "youtube" | "tiktok";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const filteredTrends =
    activeTab === "all"
      ? sampleTrends
      : sampleTrends.filter((t) => t.platform === activeTab);

  const filteredVideos =
    activeTab === "all"
      ? sampleVideos
      : sampleVideos.filter((v) => v.platform === activeTab);

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", color: "#0f172a", padding: "32px 16px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        <header style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "8px" }}>
            SNS 핫이슈 분석기
          </h1>
          <p style={{ color: "#64748b" }}>
            X · YouTube · TikTok 핫이슈 리서치 + 영상 분석 정리
          </p>
          <p style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>
            2026.08 기준 샘플 데이터
          </p>
        </header>

        <div style={{ display: "flex", gap: "8px", marginBottom: "32px", flexWrap: "wrap" }}>
          {(["all", "x", "youtube", "tiktok"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "8px 16px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 500,
                border: activeTab === tab ? "none" : "1px solid #e2e8f0",
                background: activeTab === tab ? "#000" : "#fff",
                color: activeTab === tab ? "#fff" : "#334155",
                cursor: "pointer",
              }}
            >
              {tab === "all"
                ? "전체"
                : tab === "x"
                ? "X"
                : tab === "youtube"
                ? "YouTube"
                : "TikTok"}
            </button>
          ))}
        </div>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "16px" }}>
            🔥 현재 핫이슈 ({filteredTrends.length})
          </h2>
          {filteredTrends.length === 0 ? (
            <p style={{ color: "#94a3b8" }}>데이터 없음</p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
              {filteredTrends.map((trend) => (
                <TrendCard key={trend.id} trend={trend} />
              ))}
            </div>
          )}
        </section>

        <section>
          <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "16px" }}>
            🎬 영상 분석 요약 ({filteredVideos.length})
          </h2>
          {filteredVideos.length === 0 ? (
            <p style={{ color: "#94a3b8" }}>데이터 없음</p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          )}
        </section>

        <footer style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #e2e8f0", textAlign: "center", fontSize: "14px", color: "#64748b" }}>
          <p>MVP 버전</p>
          <p style={{ marginTop: "4px" }}>GitHub: aljjang95/sns-hot-issue-analyzer</p>
        </footer>
      </div>
    </div>
  );
}
