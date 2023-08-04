import Form from "react-bootstrap/Form";

function GlassForm({ setCocktailInfo }) {
  const handleGlassChange = (e) => {
    setCocktailInfo((prev) => ({ ...prev, glass: e.target.value }));
  };

  return (
    <>
      <Form.Label className="label">잔 모양</Form.Label>
      <div className="glass_radio_container d-flex">
        {["콜린스", "마니티", "온더락", "샴페인", "숏잔"].map((item, index) => (
          <div key={index} className="mb-3">
            <Form.Check
              className="me-3"
              type="radio"
              name="glass"
              label={item}
              value={item}
              onChange={handleGlassChange}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default GlassForm;
