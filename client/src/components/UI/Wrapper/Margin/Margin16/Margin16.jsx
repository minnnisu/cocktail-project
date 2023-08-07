function Margin16({ positions, children }) {
  const postionObject = {};

  positions.map((item) => {
    postionObject[`margin${item}`] = "16px";
  });

  return <div style={postionObject}>{children}</div>;
}

export default Margin16;
