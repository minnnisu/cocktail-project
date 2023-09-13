import React from "react";
import Title from "../Title/Title";
import Card from "../Wrapper/Card/Card";
import styles from "./Outer.module.css";

function Outer({ title, titleSize = 3, children, gap, widthSize }) {
  return (
    <div className={`${styles.outer_container} ${styles[widthSize]}`}>
      <Card>
        {title && <Title size={titleSize}>{title}</Title>}
        <div className={`${styles.items_container} ${styles[gap]}`}>
          {React.Children.map(children, (child) => (
            <>{child}</>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Outer;
