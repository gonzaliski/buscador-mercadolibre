import React from "react";
import css from "./loader.css";

export default function LoadingSpinner() {
  return (
    <div className={css["spinner-container"]}>
      <div className={css["loading-spinner"]}></div>
    </div>
  );
}
