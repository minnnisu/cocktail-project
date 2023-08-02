import axios from "axios";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

function BaseSpiritTypeList({
  baseSpiritTypes,
  setBaseSpiritTypes,
  setBaseSpiritInfo,
}) {
  useEffect(() => {
    const fetchBaseSpiritTypes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/base-spirit-type"
        );
        setBaseSpiritTypes({ status: "success", value: response.data });
      } catch (error) {
        setBaseSpiritTypes((prev) => ({ ...prev, status: "fail" }));
      }
    };
    fetchBaseSpiritTypes();
  }, [baseSpiritTypes]);

  const changeBaseSpiritType = (e) => {
    setBaseSpiritInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div>
        {baseSpiritTypes.state === "fail" ? (
          <div>오류로 인해 데이터를 불러오는데 실패하였습니다.</div>
        ) : (
          <>
            {baseSpiritTypes.value.map((baseSpiritType, index) => (
              <div key={index} className="mb-3">
                <Form.Check
                  className="me-3"
                  type="radio"
                  name="base_spirit_type"
                  label={baseSpiritType.name.ko}
                  value={baseSpiritType.name.en}
                  onChange={changeBaseSpiritType}
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
