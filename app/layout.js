import { Inter } from "next/font/google";
import "./globals.scss";
// import NavBar from "@/modules/NavBar/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TEYGOOR",
  description: "Solana memecoin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Lora"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {/*<header>{<NavBar />}</header>*/}
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
