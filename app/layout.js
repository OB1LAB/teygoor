import { Inter } from "next/font/google";
import "./globals.scss";

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
        <link rel="shortcut icon" href="favicon.png" />
      </head>
      <body className={inter.className}>
        {/*<header>{<NavBar />}</header>*/}
        <main className="main">{children}</main>
        <div className="paper" />
      </body>
    </html>
  );
}
