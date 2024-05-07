import styles from "./NavBar.module.scss";
import Link from "next/link";
import tgIcon from "@/public/tgIcon.png";
import xIcon from "@/public/xIcon.png";
import whiteEllipse from "@/public/whiteEllipse.png";
import Image from "next/image";

const NavBarBook = () => {
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
      </ul>
    </nav>
  );
};

export default NavBarBook;
