import styles from "./NavBar.module.scss";
import Link from "next/link";
import tgIcon from "@/public/tgIcon.svg";
import xIcon from "@/public/xIcon.svg";
import radioInactive from "@/public/radioInactive.png";
import radioActive from "@/public/radioActive.png";
import Image from "next/image";

const NavBar = () => {
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
            <button>
              <Image src={radioInactive} alt="radioInactive" />
            </button>
            <button>
              <Image src={radioActive} alt="radioActive" />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
