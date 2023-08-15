import React from "react";
import Title from "../../components/UI/Title/Title";
import Card from "../../components/UI/Wrapper/Card/Card";
import style from "./Outer.module.css";

function Outer({ title, children }) {
  return (
    <Card>
      <Title size={3}>{title}</Title>
      {React.Children.map(children, (child) => (
        <div className={style.items}>{child}</div>
      ))}
    </Card>
  );
}

export default Outer;