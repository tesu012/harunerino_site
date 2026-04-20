import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mplusrounded1c = M_PLUS_Rounded_1c({
  weight: "400",
  variable: "--font-mplusrounded1c",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "春音リノ公式サイト",
  description: "春音リノの公式サイトです。UTAU音源のダウンロードや、公式設定などを掲載しています。",
  verification: {
    google: 'E_sMe61stgFcV9v_CRJdia6zpxz8H3z7tnWdR_GZuMk',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${mplusrounded1c.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
