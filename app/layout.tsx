import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
  title: "App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex justify-between items-center">
        <div>
          <Image width={200} height={200} src="/images/logo.svg" alt="Logo" className="mx-auto" />
        </div>
      </header>
      <html lang="en" className="px-4 py-6 md:px-20 md:py-10">

        <body className={`${dmSans.variable} ${bricolage.variable} bg-neutral-900 text-white`}>
          {children}
        </body>
      </html>
    </>
  );
}
