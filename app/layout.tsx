import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/header";
import ActiveSectionContextProvider from "@/context-provider/active-section";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context-provider/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Website Try",
  description: "Try 101",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className=" bg-[#fbe2e3] absolute rounded-full h-[31.25rem] w-[31.25rem] top-[-6rem] right-[11rem] -z-10 blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className=" bg-[#dbd7fb] absolute rounded-full h-[31.25rem] w-[50rem] top-[-1rem] left-[35rem] -z-10 blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
