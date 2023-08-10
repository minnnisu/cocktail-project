import React from "react";
import style from "./AlcoholAppendColumnLayout.module.css";

function CocktailAppendColumnLayout({ children }) {
  return (
    <div className={style.column}>
      {React.Children.map(children, (child) => (
        <div className={style.column_item}>{child}</div>
      ))}
    </div>
  );
}

export default CocktailAppendColumnLayout;
