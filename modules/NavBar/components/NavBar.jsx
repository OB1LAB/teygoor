"use client";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import tgIcon from "@/public/tgIcon.png";
import xIcon from "@/public/xIcon.png";
import radioInactive from "@/public/radioInactive.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [audio, setAudio] = useState(null);
  const [isRadioActive, setIsRadioActive] = useState(false);
  useEffect(() => {
    setAudio(new Audio("audio.mp3"));
    isRadioActive ? audio.play() : audio.pause();
  }, [isRadioActive]);
  return (
    <nav className={styles.navBar}>
      <ul>
        <li className={styles.socials}>
          <Link href="/">
            <Image src={tgIcon} alt="tg" />
          </Link>
          <Link href="/">
            <Image src={xIcon} alt="x" />
          </Link>
        </li>
        <li>
          <div className={styles.radio}>
            <button
              onClick={() => setIsRadioActive((prevState) => !prevState)}
              style={{ mixBlendMode: isRadioActive ? "darken" : "" }}
            >
              <Image src={radioInactive} alt="radioInactive" />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
