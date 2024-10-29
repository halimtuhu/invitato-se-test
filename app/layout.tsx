import "./globals.css";
import { Poppins, Newsreader, Old_Standard_TT } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: "--font-newsreader",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const oldStandardTT = Old_Standard_TT({
  subsets: ["latin"],
  variable: "--font-old-standard",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${newsreader.variable} ${oldStandardTT.variable} font-poppins`}
      >
        {children}
      </body>
    </html>
  );
}
