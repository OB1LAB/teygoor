"use client";
import "react-toastify/dist/ReactToastify.css";
import "./page.scss";
import cat from "@/public/cat.png";
import ellipse from "@/public/ellipse.png";
import catGrass from "@/public/catGrass.png";
import bitEllipse from "@/public/bigEllipse.png";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { NavBar } from "@/modules/NavBar";
const URL = "3WPep4ufaToK1aS5s8BL9inzeUrt4DYaQCiic6ZkkC1U";

export default function Home() {
  const copyUrlSte = () => {
    navigator.clipboard.writeText(URL);
    toast("Copied!", { type: "success" });
  };
  return (
    <div className="page">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        closeButton={true}
        pauseOnHover={false}
        theme="colored"
        hideProgressBar
        className="notify"
      />
      <NavBar />
      <div className="cat">
        <Image src={ellipse} alt="ellipse" />
        <Image src={cat} alt="cat" />
      </div>
      <div className="about">
        <div>THE CAT WHO THOUGHT WAS A...</div>
        <div>TEYGOOR</div>
      </div>
      <div className="url">
        <div onClick={copyUrlSte}>
          <div>{URL}</div>
          <button>COPY</button>
        </div>
        <div>SOLANA MEMECOIN</div>
      </div>
      <div className="rm">
        <Link href="book">READ MORE!</Link>
        <div>
          <Image src={catGrass} alt="catGrass" />
          <Image src={bitEllipse} alt="bigEllipse" />
        </div>
      </div>
    </div>
  );
}
