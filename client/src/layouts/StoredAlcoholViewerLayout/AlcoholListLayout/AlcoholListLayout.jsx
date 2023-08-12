import React from "react";
import style from "./AlcoholListLayout.module.css";

function AlcoholListLayout({ children }) {
  return (
    <div className={style.alcohol_list_layout}>
      {React.Children.map(children, (child) => (
        <div className={style.items}>{child}</div>
      ))}
    </div>
  );
}

export default AlcoholListLayout;
