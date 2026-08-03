import { VideoAnalysis } from "../lib/sample-data";

export function VideoCard({ video }: { video: VideoAnalysis }) {
  const platformColor: Record<string, string> = {
    X: "bg-black text-white",
    YouTube: "bg-red-600 text-white",
    TikTok: "bg-gray-900 text-white",
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${platformColor[video.platform] || "bg-gray-800 text-white"}`}>
            {video.platform}
          </span>
          {video.tone && <span className="text-xs text-gray-500">{video.tone}</span>}
        </div>
        <h3 className="font-semibold text-gray-900 mb-1">{video.title}</h3>
        {video.relatedTrend && (
          <p className="text-xs text-gray-400 mb-2">관련: {video.relatedTrend}</p>
        )}
        {video.duration && (
          <p className="text-xs text-gray-400 mb-4">길이: {video.duration}</p>
        )}

        <div className="mb-4">
          <p className="text-xs font-medium text-gray-500 mb-2">핵심 포인트</p>
          <ul className="space-y-1">
            {video.keyPoints.map((point, i) => (
              <li key={i} className="text-sm text-gray-700 flex gap-2">
                <span className="text-gray-400">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs font-medium text-gray-500 mb-1">요약</p>
          <p className="text-sm text-gray-800">{video.summary}</p>
        </div>

        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
        >
          원본 보기 →
        </a>
      </div>
    </div>
  );
}
