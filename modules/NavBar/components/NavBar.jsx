"use client";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import tgIcon from "@/public/tgIcon.png";
import xIcon from "@/public/xIcon.png";
import radioInactive from "@/public/radioInactive.png";
import Image from "next/image";
import useRadioStore from "@/components/useRadioStore";
import { useEffect } from "react";

const NavBar = () => {
  const [isRadioActive, setIsRadioActive] = useRadioStore((store) => [
    store.isRunning,
    store.setIsRunning,
  ]);
  const firstRunRadio = useRadioStore((store) => store.firstRun);
  useEffect(() => {
    document.addEventListener("click", firstRunRadio, true);
    return () => {
      document.removeEventListener("click", firstRunRadio, true);
    };
  }, []);
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
              onClick={() => setIsRadioActive(!isRadioActive)}
              style={{ mixBlendMode: !isRadioActive ? "darken" : "" }}
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
