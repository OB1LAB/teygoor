"use client";
import "./page.scss";
import { useEffect, useLayoutEffect, useState } from "react";
import prevIcon from "@/public/prevIcon.png";
import yellowLine from "@/public/yellowLine.png";
import redLine from "@/public/redLine.png";
import blueLine from "@/public/blueLine.png";
import Image from "next/image";
import { NavBarBook } from "@/modules/NavBar";

const maxPage = 5;

function coefficientHeight() {
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
  return size[1] / 1000;
}

export default function Book() {
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState([]);
  const coefHeight = coefficientHeight();
  useEffect(() => {
    setPages([`/book/preview.png`]);
    for (let i = 1; i <= maxPage; i++) {
      setPages((prevState) => [...prevState, `/book/${i}.png`]);
    }
  }, []);
  const incrementPage = () => {
    if (page < maxPage) {
      setPage(page + 1);
    }
  };
  const decrementPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  return (
    <div className="bookPage">
      <NavBarBook />
      <div className="bookElement">
        <button className="nextButton" onClick={decrementPage}>
          <Image src={prevIcon} alt="back" />
        </button>
        <div className="book">
          <div className="lines">
            <Image
              height={748 * coefHeight}
              src={yellowLine}
              alt="yellowLine"
            />
            <Image height={720 * coefHeight} src={redLine} alt="redLine" />
            <Image height={703 * coefHeight} src={blueLine} alt="blueLine" />
          </div>
          <div className="bookImage">
            {pages.map((pageBook, pageIndex) => (
              <Image
                style={{
                  display: `${pageIndex === page ? "block" : "none"}`,
                }}
                src={pageBook}
                width={550}
                height={570}
                alt={pageBook}
                key={pageIndex}
              />
            ))}
          </div>
        </div>
        <button className="backButton" onClick={incrementPage}>
          <Image src={prevIcon} alt="next" />
        </button>
      </div>
    </div>
  );
}
