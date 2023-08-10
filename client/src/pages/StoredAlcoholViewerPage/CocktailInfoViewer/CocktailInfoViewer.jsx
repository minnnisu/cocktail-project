import { useEffect, useState } from "react";
import style from "./CocktailInfoViewer.module.css";
import axios from "axios";
const domain = require("../../../apis/config/domain");

function CocktailInfoViewer() {
  const [cocktail, setCocktail] = useState({ value: [], state: "loading" });

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await axios.get(`${domain.url}/cocktail`);
        setCocktail({ state: "success", value: response.data });
      } catch (error) {
        setCocktail({ value: [], state: "fail" });
      }
    };
    fetchCocktail();
  }, []);

  console.log(cocktail);

  return (
    <div>
      <div className={style.heading}>칵테일 리스트</div>
      {cocktail.state === "loading" && <div>로딩 중...</div>}
      {cocktail.state === "fail" && <div>불러오기 실패</div>}
      {cocktail.state === "success" &&
        cocktail.value.map((item, index) => (
          <div key={index} className={style.cocktail_container}>
            <div className={style.container}>
              <div className={style.title}>이름</div>
              <div>{item.name}</div>
            </div>
            <div className={style.container}>
              <div className={style.title}>맛</div>
              <div>
                {item.tastes.map((tasteItem, index) => (
                  <span key={index}>{`${tasteItem}, `}</span>
                ))}
              </div>
            </div>
            <div className={style.container}>
              <div className={style.title}>재료 및 용량</div>
              <div>
                {item.ingredients.map((ingredientsItem, index) => (
                  <div key={index} className={style.ingredients_container}>
                    <div className={style.base_spirit_name}>
                      {ingredientsItem.base_spirit_name}
                    </div>
                    <div className={style.volume}>{ingredientsItem.volume}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={style.container}>
              <div className={style.title}>가나쉬</div>
              <div>
                {item.garnishs.map((garnishItem, index) => (
                  <span key={index}>{`${garnishItem}, `}</span>
                ))}
              </div>
            </div>
            <div className={style.container}>
              <div className={style.title}>잔모양</div>
              <div>{item.glass}</div>
            </div>
            <div className={style.container}>
              <div className={style.title}>조주기법</div>
              <div>{item.recipe}</div>
            </div>
            <div className={style.container}>
              <div className={style.title}>코멘트</div>
              <div>
                {item.comments.map((commentsItem, index) => (
                  <span key={index}>{`${commentsItem}, `}</span>
                ))}
              </div>
            </div>
            <div className={style.container}>
              <div className={style.title}>칵테일 이미지</div>
              <img
                className={style.cocktail_image}
                src={`${domain.url}/${item.image_path}`}
                alt="칵테일 이미지"
              ></img>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CocktailInfoViewer;
