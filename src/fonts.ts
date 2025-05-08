// src/fonts.ts
import { Geist, Geist_Mono, Fira_Code } from "next/font/google";

export const geist = Geist({ subsets: ["latin"] });
export const geistMono = Geist_Mono({ subsets: ["latin"] });
export const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});
