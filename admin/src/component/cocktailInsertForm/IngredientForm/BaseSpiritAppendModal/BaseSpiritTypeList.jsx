import axios from "axios";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
const domain = require("../../../../config/domain");

function BaseSpiritTypeList({
  baseSpiritTypes,
  setBaseSpiritTypes,
  setBaseSpiritInfo,
}) {
  useEffect(() => {
    const fetchBaseSpiritTypes = async () => {
      try {
        const response = await axios.get(`${domain.url}/base-spirit-type`);
        setBaseSpiritTypes({ status: "success", value: response.data });
      } catch (error) {
        setBaseSpiritTypes((prev) => ({ ...prev, status: "fail" }));
      }
    };
    fetchBaseSpiritTypes();
  }, [baseSpiritTypes.value.length]);

  const handleBaseSpiritTypeChange = (e) => {
    setBaseSpiritInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div>
        {baseSpiritTypes.state === "fail" ? (
          <div>오류로 인해 데이터를 불러오는데 실패하였습니다.</div>
        ) : (
          <>
            <Form.Label className="label">기주 선택</Form.Label>
            {baseSpiritTypes.value.map((baseSpiritType, index) => (
              <div key={index} className="mb-3">
                <Form.Check
                  className="me-3"
                  type="radio"
                  name="base_spirit_type"
                  label={baseSpiritType.name}
                  value={baseSpiritType.name}
                  onChange={handleBaseSpiritTypeChange}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default BaseSpiritTypeList;
