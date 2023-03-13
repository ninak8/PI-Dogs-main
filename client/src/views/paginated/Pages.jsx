import React from "react";
import style from "./pages.module.css";

const Pages = (props) => {
  return (
    <>
      <div className={style.divPages}>
        <button onClick={props.prevPage} className={style.buttonPrev}>
          🢀
        </button>
        <span className={style.spanPage}> Page: {props.index + 1} </span>
        <button onClick={props.nextPage} className={style.buttonNext}>
          🢂
        </button>
      </div>
    </>
  );
};

export default Pages;
