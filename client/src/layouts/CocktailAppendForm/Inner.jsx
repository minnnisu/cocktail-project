import React from "react";
import Title from "../../components/UI/Title/Title";
import Card2 from "../../components/UI/Wrapper/Card/Card2";
import style from "./Inner.module.css";

function Inner({ title, children }) {
  return (
    <Card2>
      <Title size={4}>{title}</Title>
      {React.Children.map(children, (child) => (
        <div className={style.items}>{child}</div>
      ))}
    </Card2>
  );
}

export default Inner;
