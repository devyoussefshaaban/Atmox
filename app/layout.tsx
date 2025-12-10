import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/main-layout-components";
import ScrollToTop from "@/components/main-layout-components/scroll-to-top-button";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  variable: "--font-dmSans",
});

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-bricolage",
});

export const metadata = {
  title: "Atmox | Weather Atmosphere",
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" }
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${bricolage.variable} bg-neutral-900 text-white flex flex-col min-h-screen`}>
        <Header />

        <main className="px-4 py-6 md:px-20 md:py-10 flex-1">
          {children}
        </main>

        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
