import React from "react";
import Title from "../../components/UI/Title/Title";
import Card from "../../components/UI/Wrapper/Card/Card";
import Margin16 from "../../components/UI/Wrapper/Margin/Margin16/Margin16";
function Outer({ title, children }) {
  return (
    <Card>
      <Title size={3}>{title}</Title>
      {React.Children.map(children, (child) => (
        <Margin16 positions={["Top"]}>{child}</Margin16>
      ))}
    </Card>
  );
}

export default Outer;
