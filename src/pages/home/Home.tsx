import React, { useState,useEffect } from "react";
import css from "./home.css"

function Home(){
 
    return (
      <div>
        <h2 className={css["welcome__title"]}>Buscá un producto</h2>
      </div>
    );
  }


export { Home };