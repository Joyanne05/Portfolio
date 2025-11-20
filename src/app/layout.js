import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"], weight: ["400", "700"]
});

export const metadata = {
  title: "Joyanne's Portfolio",
  description: "HI! I'm Joyanne, a Computer Science student at QUT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
