import { useEffect, useState } from "react";
import style from "./BaseSpiritTypeViewer.module.css";
import axios from "axios";
const domain = require("../../../../config/domain");

function BaseSpiritViewer() {
  const [baseSpirit, setBaseSpirit] = useState({
    value: [],
    state: "loading",
  });

  useEffect(() => {
    const fetchBaseSpirit = async () => {
      try {
        const response = await axios.get(`${domain.url}/base-spirit-type`);
        setBaseSpirit({ state: "success", value: response.data });
      } catch (error) {
        setBaseSpirit({ value: [], state: "fail" });
      }
    };
    fetchBaseSpirit();
  }, []);

  return (
    <div>
      <div className={style.heading}>기주 리스트</div>
      {baseSpirit.state === "loading" && <div>로딩 중..</div>}
      {baseSpirit.state === "fail" && <div>불러오기 실패</div>}
      {baseSpirit.state === "success" &&
        baseSpirit.value.map((item, index) => (
          <div key={index} className={style.base_spirit_type_container}>
            <div className={style.container}>
              <div className={style.title}>이름</div>
              <div>{item.name}</div>
            </div>
            <div className={style.container}>
              <div className={style.title}>술 종류</div>
              <div>
                {item.base_spirits.map((baseSpiritItem, index) => (
                  <span key={index}>{`${baseSpiritItem}, `}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BaseSpiritViewer;
