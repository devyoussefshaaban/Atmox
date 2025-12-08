import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  variable: "--font-dmSans",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-bricolage",
});

export const metadata = {
  title: "App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="p-10">
      <header className="flex justify-between align-center">
        <div>
          <Image width={200} height={200} src="/images/logo.svg" alt="Logo" className="mx-auto" />
        </div>
      </header>
      <body className={`${dmSans.variable} ${bricolage.variable} bg-neutral-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
