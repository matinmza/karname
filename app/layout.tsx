import "./globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
import { yekan } from "./font";

export const metadata: Metadata = {
  title: "سوال ها",
  description: "پرسیدن سوالات تخصصی خود و جواب از متخصصان",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" lang="fa-IR">
      <body className={yekan.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
