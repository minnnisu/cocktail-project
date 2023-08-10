import { useEffect, useState } from "react";
import style from "./BaseSpiritViewer.module.css";
import axios from "axios";
const domain = require("../../../apis/config/domain");

function BaseSpiritTypeViewer() {
  const [baseSpiritType, setBaseSpiritType] = useState({
    value: [],
    state: "loading",
  });

  useEffect(() => {
    const fetchBaseSpiritType = async () => {
      try {
        const response = await axios.get(`${domain.url}/base-spirit`);
        setBaseSpiritType({ state: "success", value: response.data });
      } catch (error) {
        setBaseSpiritType({ value: [], state: "fail" });
      }
    };
    fetchBaseSpiritType();
  }, []);

  console.log(baseSpiritType);

  return (
    <div>
      <div className={style.heading}>술 리스트</div>
      {baseSpiritType.state === "loading" && <div>로딩 중...</div>}
      {baseSpiritType.state === "fail" && <div>불러오기 실패</div>}
      {baseSpiritType.state === "success" &&
        baseSpiritType.value.map((item, index) => (
          <div key={index} className={style.base_spirit_type_container}>
            <div className={style.container}>
              <div className={style.title}>이름</div>
              <div>{item.name}</div>
            </div>
            <div className={style.container}>
              <div className={style.title}>기주</div>
              <div>{item.base_spirit_type}</div>
            </div>
            <div className={style.container}>
              <div className={style.title}>도수</div>
              <div>{item.alcohol}</div>
            </div>
            <div className={style.container}>
              <div className={style.title}>칵테일</div>
              <div>
                {item.cocktails.map((cocktailsItem, index) => (
                  <span key={index}>{`${cocktailsItem}, `}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BaseSpiritTypeViewer;
