import React from "react";
import Title from "../Title/Title";
import Card from "../Wrapper/Card/Card";
import styles from "./Outer.module.css";

function Outer({ size = 3, title, children, gap }) {
  return (
    <Card>
      {title && <Title size={size}>{title}</Title>}
      {React.Children.map(children, (child) => (
        <div className={`${styles.items} ${styles[gap]}`}>{child}</div>
      ))}
    </Card>
  );
}

export default Outer;
