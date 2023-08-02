import Form from "react-bootstrap/Form";
import BaseSpiritTypeList from "./BaseSpiritTypeList";
import BaseSpiritTypeAppend from "./BaseSpiritTypeAppend";
import { useState } from "react";

function BaseSpiritTypeSelect({ setBaseSpiritInfo }) {
  const [baseSpiritTypes, setBaseSpiritTypes] = useState({
    state: "loading",
    value: [],
  }); // state - loading, sucesss, fail

  return (
    <Form.Group className="base_spirit_container mb-3">
      <Form.Label className="label">기주 선택</Form.Label>
      <BaseSpiritTypeAppend
        baseSpiritTypes={baseSpiritTypes}
        setBaseSpiritTypes={setBaseSpiritTypes}
      />
      <BaseSpiritTypeList
        baseSpiritTypes={baseSpiritTypes}
        setBaseSpiritTypes={setBaseSpiritTypes}
        setBaseSpiritInfo={setBaseSpiritInfo}
      />
    </Form.Group>
  );
}

export default BaseSpiritTypeSelect;
