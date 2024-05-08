import styles from "./NavBar.module.scss";
import Link from "next/link";
import tgIcon from "@/public/tgIcon.png";
import xIcon from "@/public/xIcon.png";
import whiteEllipse from "@/public/whiteEllipse.png";
import Image from "next/image";
import radioInactive from "@/public/radioInactive.png";
import useRadioStore from "@/components/useRadioStore";

const NavBarBook = () => {
  const [isRadioActive, setIsRadioActive] = useRadioStore((store) => [
    store.isRunning,
    store.setIsRunning,
  ]);
  return (
    <nav className={styles.navBarBook}>
      <ul>
        <li className={styles.whiteEllipse}>
          <Image src={whiteEllipse} alt="whiteEllipse" />
          <div>Yip-peeee!</div>
        </li>
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

export default NavBarBook;
