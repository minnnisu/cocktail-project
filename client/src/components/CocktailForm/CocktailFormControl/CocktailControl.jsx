import { useNavigate } from "react-router-dom";
import {
  useCocktailImagePostApi,
  useCocktailPostApi,
} from "../../../hooks/useCocktailApi";
import Button from "../../UI/Button/Button";
import style from "./CocktailControl.module.css";

function CocktailControl({ submitData, submitImageData }) {
  const checkSubmitDataVaild = () => {
    let valid = true;
    if (submitData.name === "") {
      return alert("칵테일 이름을 입력해주세요.");
    }

    if (submitData.tastes.length === 0) {
      return alert("칵테일 맛을 추가해주세요.");
    }

    if (submitData.garnishes.length === 0) {
      return alert("가니쉬를 추가해주세요.");
    }

    if (submitData.recipe === "") {
      return alert("조주 기법을 작성해주세요.");
    }

    if (submitImageData === null) {
      return alert("이미지를 선택해주세요");
    }

    if (submitData.alcohols.length > 0) {
      submitData.alcohols = submitData.alcohols.map((alcohol) => {
        const newAlcohol = {};
        if (alcohol.name === "") {
          valid = false;
          return alert("술 이름을 입력해주세요.");
        }
        newAlcohol.name = alcohol.name;

        if (alcohol.subAlcoholName !== "") {
          newAlcohol.subAlcoholName = alcohol.subAlcoholName;
        }

        if (alcohol.unit === "") {
          valid = false;
          return alert(`술 ${alcohol.name}의 단위을 입력해주세요.`);
        } else {
          if (
            alcohol.unit !== "ml" &&
            alcohol.unit !== "dash" &&
            alcohol.unit !== "fill up"
          ) {
            valid = false;
            return alert(
              `술 ${alcohol.name}의 단위는 ml, dash, fill up만 가능합니다.`
            );
          }
        }
        newAlcohol.unit = alcohol.unit;

        if (alcohol.unit !== "fill up") {
          if (alcohol.volume === "") {
            valid = false;
            return alert(`술 ${alcohol.name}의 용량을 입력해주세요.`);
          }

          if (!Number(alcohol.volume)) {
            valid = false;
            return alert(
              `술 ${alcohol.name}의 도수가 숫자인지 다시 한번 체크해주세요.`
            );
          }
          newAlcohol.volume = alcohol.volume;
        }

        return newAlcohol;
      });
    } else {
      return alert("칵테일에 술을 추가해주세요.");
    }

    if (submitData.nonAlcohols.length > 0) {
      submitData.nonAlcohols = submitData.nonAlcohols.map((nonAlcohol) => {
        const newNonAlcohol = {};
        if (nonAlcohol.name === "") {
          valid = false;
          return alert("기타재료 이름을 입력해주세요.");
        }
        newNonAlcohol.name = nonAlcohol.name;

        if (nonAlcohol.unit === "") {
          valid = false;
          return alert(`기타재료 ${nonAlcohol.name}의 단위을 입력해주세요.`);
        } else {
          if (
            nonAlcohol.unit !== "ml" &&
            nonAlcohol.unit !== "dash" &&
            nonAlcohol.unit !== "fill up"
          ) {
            valid = false;
            return alert(
              `기타재료 ${nonAlcohol.name}의 단위는 ml, dash, fill up만 가능합니다.`
            );
          }
        }
        newNonAlcohol.unit = nonAlcohol.unit;

        if (nonAlcohol.unit !== "fill up") {
          if (nonAlcohol.volume === "") {
            valid = false;
            return alert(`기타재료 ${nonAlcohol.name}의 용량을 입력해주세요.`);
          }

          if (!Number(nonAlcohol.volume)) {
            valid = false;
            return alert(
              `기타재료 ${nonAlcohol.name}의 도수가 숫자인지 다시 한번 체크해주세요.`
            );
          }
          newNonAlcohol.volume = nonAlcohol.volume;
        }

        return newNonAlcohol;
      });
    }

    return valid;
  };

  const cocktailMutation = useCocktailPostApi();
  const cocktailImageMutation = useCocktailImagePostApi();
  const navigate = useNavigate();

  const handleAlcoholViewerMove = () => {
    navigate("/alcohol/viewer");
  };

  const handleCocktailSubmit = () => {
    if (checkSubmitDataVaild(submitData)) {
      console.log(submitData);
      console.log(submitImageData);

      cocktailMutation.mutate(submitData, {
        onSuccess: (data) => {
          const formData = new FormData();
          formData.append("image", submitImageData);
          formData.append("data", JSON.stringify({ id: data.data._id }));
          cocktailImageMutation.mutate(formData);
        },
      });
    }
  };
  return (
    <div className={style.submit_button_container}>
      <Button onClickButton={handleAlcoholViewerMove}>저장된 정보 확인</Button>
      <Button onClickButton={handleCocktailSubmit}>칵테일 등록하기</Button>
    </div>
  );
}

export default CocktailControl;
