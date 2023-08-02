import Form from "react-bootstrap/Form";
import BaseSpiritTypeList from "./BaseSpiritTypeList";
import BaseSpiritTypeAppend from "./BaseSpiritTypeAppend";
import { useState } from "react";

function BaseSpiritTypeSelect({ setBaseSpiritInfo }) {
  return (
    <Form.Group className="base_spirit_container mb-3">
      <Form.Label className="label">기주 선택</Form.Label>
      <BaseSpiritTypeAppend />
      <BaseSpiritTypeList setBaseSpiritInfo={setBaseSpiritInfo} />
    </Form.Group>
  );
}

export default BaseSpiritTypeSelect;
