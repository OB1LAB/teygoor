"use client";
import "./page.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import prevIcon from "@/public/prevIcon.png";
import yellowLine from "@/public/yellowLine.png";
import redLine from "@/public/redLine.png";
import blueLine from "@/public/blueLine.png";
import arrowIcon from "@/public/arrow.svg";
import Image from "next/image";
import { NavBarBook } from "@/modules/NavBar";
import { useRouter } from "next/navigation";

const maxPage = 6;
const mobileWidth = 660;

function getSize() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [size, setSize] = useState([0, 0]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function Book() {
  const router = useRouter();
  const bookRef = useRef();
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState([]);
  const [width, height] = getSize();
  useEffect(() => {
    setPages([`/book/preview.png`]);
    for (let i = 1; i <= maxPage; i++) {
      setPages((prevState) => [...prevState, `/book/${i}.png`]);
    }
  }, []);
  const incrementPage = () => {
    if (page < maxPage) {
      bookRef.current.children[page].style.transform =
        `rotateY(90deg) skewY(-25deg)`;
      setTimeout(() => {
        setPage(page + 1);
      }, 900);
    }
  };
  const decrementPage = () => {
    if (page > 0) {
      setPage(page - 1);
      bookRef.current.children[page - 1].style.transform = `rotateY(0deg)`;
    } else {
      router.push("/");
    }
  };
  const getCoef = (elementSize) => {
    if (width < 500) {
      return (900 / 1920) * elementSize;
    }
    if (width < 1100) {
      return (1100 / 1920) * elementSize;
    }
    if (width + height === 0) {
      return 0.5 * elementSize;
    }
    return Math.min(width / 1920, height / 1000) * elementSize;
  };
  return (
    <div className="bookPage">
      <NavBarBook />
      <div
        className={width < mobileWidth ? `bookElement mobile` : `bookElement`}
      >
        {!(width < mobileWidth) && (
          <button
            className="nextButton"
            onClick={decrementPage}
            style={{
              transform: `scale(${getCoef(1)})`,
            }}
          >
            <div className="arrow" />
            <Image src={arrowIcon} alt="arrow" />
          </button>
        )}
        <div className="book">
          <div className="lines">
            <Image height={getCoef(748)} src={yellowLine} alt="yellowLine" />
            <Image height={getCoef(720)} src={redLine} alt="redLine" />
            <Image height={getCoef(703)} src={blueLine} alt="blueLine" />
          </div>
          <div
            className="bookImage"
            ref={bookRef}
            style={{
              width: `${getCoef(606)}px`,
              height: `${getCoef(620)}px`,
              top: `${(getCoef(748) - getCoef(590)) / 2}px`,
              left:
                width < mobileWidth
                  ? `${(width - getCoef(606)) / 2}px`
                  : `${(getCoef(250.5) + getCoef(278) + getCoef(250.5) + 60 - getCoef(606)) / 2}px`,
            }}
          >
            {pages.map((pageBook, pageIndex) => (
              <Image
                style={{ zIndex: maxPage - pageIndex }}
                src={pageBook}
                width={getCoef(606)}
                height={getCoef(620)}
                alt={pageBook}
                key={pageIndex}
              />
            ))}
          </div>
        </div>
        {width < mobileWidth ? (
          <div className="mobileButtons">
            <button
              className="nextButton"
              onClick={decrementPage}
              style={{
                transform: `scale(${getCoef(1)})`,
              }}
            >
              <div className="arrow" />
              <Image src={arrowIcon} alt="arrow" />
            </button>
            <button
              className="backButton"
              onClick={incrementPage}
              style={{
                transform: `scale(${getCoef(1)})`,
              }}
            >
              <div className="arrow" />
              <Image src={arrowIcon} alt="arrow" />
            </button>
          </div>
        ) : (
          <button
            className="backButton"
            onClick={incrementPage}
            style={{
              transform: `scale(${getCoef(1)})`,
            }}
          >
            <div className="arrow" />
            <Image src={arrowIcon} alt="arrow" />
          </button>
        )}
      </div>
    </div>
  );
}
