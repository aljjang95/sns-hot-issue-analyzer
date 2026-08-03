"use client";

import { useState } from "react";
import { sampleTrends, sampleVideos } from "../lib/sample-data";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredTrends =
    activeTab === "all"
      ? sampleTrends
      : sampleTrends.filter((t) => t.platform === activeTab);

  const filteredVideos =
    activeTab === "all"
      ? sampleVideos
      : sampleVideos.filter((v) => v.platform === activeTab);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24, background: "#f9fafb", minHeight: "100vh", color: "#111", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>SNS 핫이슈 분석기</h1>
      <p style={{ color: "#4b5563", marginBottom: 4 }}>X · YouTube · TikTok 핫이슈 리서치 + 영상 분석</p>
      <p style={{ color: "#9ca3af", fontSize: 13, marginBottom: 24 }}>2026.08 기준 샘플 데이터</p>

      <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
        {["all", "x", "youtube", "tiktok"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "8px 16px",
              borderRadius: 999,
              border: activeTab === tab ? "none" : "1px solid #e5e7eb",
              background: activeTab === tab ? "#000" : "#fff",
              color: activeTab === tab ? "#fff" : "#374151",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {tab === "all" ? "전체" : tab === "x" ? "X" : tab === "youtube" ? "YouTube" : "TikTok"}
          </button>
        ))}
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>🔥 현재 핫이슈</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 48 }}>
        {filteredTrends.map((trend) => (
          <div key={trend.id} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 12, padding: "4px 8px", borderRadius: 999, background: "#000", color: "#fff" }}>
                {trend.platform === "x" ? "X" : trend.platform === "youtube" ? "YouTube" : "TikTok"}
              </span>
              {trend.score && <span style={{ fontSize: 12, color: "#9ca3af" }}>점수 {trend.score}</span>}
            </div>
            <h3 style={{ fontWeight: 600, marginBottom: 8 }}>{trend.title}</h3>
            <p style={{ fontSize: 14, color: "#4b5563", marginBottom: 8 }}>{trend.description}</p>
            {trend.category && <p style={{ fontSize: 12, color: "#6b7280" }}>{trend.category}</p>}
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>🎬 영상 분석 요약</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
        {filteredVideos.map((video) => (
          <div key={video.id} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 12, padding: "4px 8px", borderRadius: 999, background: "#000", color: "#fff" }}>
                {video.platform === "x" ? "X" : video.platform === "youtube" ? "YouTube" : "TikTok"}
              </span>
              {video.tone && <span style={{ fontSize: 12, color: "#6b7280" }}>{video.tone}</span>}
            </div>
            <h3 style={{ fontWeight: 600, marginBottom: 4 }}>{video.title}</h3>
            {video.relatedTrend && <p style={{ fontSize: 12, color: "#9ca3af", marginBottom: 12 }}>관련: {video.relatedTrend}</p>}
            <ul style={{ marginBottom: 12, paddingLeft: 16 }}>
              {(video.keyPoints || []).map((point, i) => (
                <li key={i} style={{ fontSize: 14, color: "#374151", marginBottom: 4 }}>{point}</li>
              ))}
            </ul>
            <div style={{ background: "#f3f4f6", borderRadius: 8, padding: 12 }}>
              <p style={{ fontSize: 12, color: "#6b7280", marginBottom: 4 }}>요약</p>
              <p style={{ fontSize: 14 }}>{video.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid #e5e7eb", textAlign: "center", fontSize: 13, color: "#6b7280" }}>
        MVP 버전 · GitHub: aljjang95/sns-hot-issue-analyzer
      </footer>
    </div>
  );
}
