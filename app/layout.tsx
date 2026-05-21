import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitForm – Check Exercise Form with Your Phone Camera",
  description: "Real-time AI-powered exercise form analysis. Get instant corrections and track your improvement over time."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="81fe0c23-1547-4461-a11f-26ca8cc8a3b9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
