import { Trend } from "../lib/sample-data";

export function TrendCard({ trend }: { trend: Trend }) {
  const platformColor = {
    x: "bg-black text-white",
    youtube: "bg-red-600 text-white",
    tiktok: "bg-gray-900 text-white",
  }[trend.platform];

  const platformLabel = {
    x: "X",
    youtube: "YouTube",
    tiktok: "TikTok",
  }[trend.platform];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between mb-3">
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${platformColor}`}>
          {platformLabel}
        </span>
        <span className="text-xs text-gray-400">{trend.engagement}</span>
      </div>
      <h3 className="font-semibold text-gray-900 mb-2 leading-snug">{trend.title}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{trend.description}</p>
      <p className="text-sm text-gray-800 bg-gray-50 rounded-lg p-3 mb-3">
        {trend.summary}
      </p>
      <div className="flex flex-wrap gap-1">
        {trend.tags.map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
