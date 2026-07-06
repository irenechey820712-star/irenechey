import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/config/linktree";
import { withBase } from "@/lib/basePath";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: profile.title,
  description: profile.introDescription,
  openGraph: {
    title: profile.title,
    description: profile.introDescription,
    images: [withBase("/assets/dorms-community.png")]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
