import axios from "axios";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

function BaseSpiritTypeList({
  isUpdateBaseSpiritType,
  setIsUpdateBaseSpiritType,
  setBaseSpiritInfo,
}) {
  const [baseSpiritTypes, setBaseSpiritTypes] = useState({
    state: "loading",
    value: [],
  }); // state - loading, sucesss, fail

  useEffect(() => {
    const fetchBaseSpiritTypes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/base-spirit-type"
        );
        setBaseSpiritTypes({ status: "success", value: response.data });
        setIsUpdateBaseSpiritType(false);
      } catch (error) {
        setBaseSpiritTypes((prev) => ({ ...prev, status: "fail" }));
      }
    };
    fetchBaseSpiritTypes();
  }, [isUpdateBaseSpiritType]);

  const changeBaseSpiritType = (e) => {
    setBaseSpiritInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
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
  );
}

export default BaseSpiritTypeList;
