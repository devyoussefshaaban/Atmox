import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

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
        <header className="px-4 py-2 md:px-20 md:py-4 flex justify-between items-center sticky top-0 z-50 bg-neutral-900 py-2">
          <div className="flex gap-2 items-center">
            <Image width={220} height={220} src="/images/logo.png" alt="Logo" className="mx-auto" />
          </div>
        </header>

        <main className="px-4 py-6 md:px-20 md:py-10 flex-1">
          {children}
        </main>

        <footer className="flex justify-center items-center  z-50 bg-neutral-900 py-1">
          <div className="flex gap-2 items-center">
            <p className="text-center text-sm italic">
              Created & Developed by <Link className="font-bricolage" target="_blank" href="https://devyoussefshaaban.vercel.app/">Youssef Shaaban</Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
