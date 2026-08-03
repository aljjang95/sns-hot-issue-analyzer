import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SNS 핫이슈 분석기",
  description: "SNS 핫이슈 리서치 + 영상 분석 정리 앱",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, background: "#f9fafb", color: "#111" }}>
        {children}
      </body>
    </html>
  );
}
