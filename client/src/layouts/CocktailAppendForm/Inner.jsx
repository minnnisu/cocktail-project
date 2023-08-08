import React from "react";
import Title from "../../components/UI/Title/Title";
import Margin16 from "../../components/UI/Wrapper/Margin/Margin16/Margin16";
import Card2 from "../../components/UI/Wrapper/Card/Card2";
function Inner({ title, children }) {
  return (
    <Card2>
      <Title size={4}>{title}</Title>
      {React.Children.map(children, (child) => (
        <Margin16 positions={["Top"]}>{child}</Margin16>
      ))}
    </Card2>
  );
}

export default Inner;
