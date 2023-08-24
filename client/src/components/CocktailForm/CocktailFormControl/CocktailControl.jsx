import { useNavigate } from "react-router-dom";
import { useCocktailGetApi } from "../../../hooks/useCocktailApi";
import Button from "../../UI/Button/Button";
import style from "./CocktailControl.module.css";

function CocktailControl({ submitData, submitImageData }) {
  // alcohols,
  // nonAlcohols,

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
            alcohol.unit !== "Fill up"
          ) {
            valid = false;
            return alert(
              `술 ${alcohol.name}의 단위는 ml, dash, Fill up만 가능합니다.`
            );
          }
        }
        newAlcohol.unit = alcohol.unit;

        if (alcohol.unit !== "Fill up") {
          if (alcohol.volume === "") {
            valid = false;
            return alert(`기타재료 ${alcohol.name}의 용량을 입력해주세요.`);
          }

          if (!Number(alcohol.volume)) {
            valid = false;
            return alert(
              `기타재료 ${alcohol.name}의 도수가 숫자인지 다시 한번 체크해주세요.`
            );
          }
        } else {
          if (alcohol.volume !== "") {
            alert(
              `단위가 Fill up이면 기타재료 ${alcohol.name}의 용량은 없어야 합니다.`
            );
          }
        }

        newAlcohol.volume = alcohol.volume;

        return newAlcohol;
      });
    } else {
      return alert("칵테일에 술을 추가해주세요.");
    }

    if (submitData.nonAlcohols.length > 0) {
      submitData.nonAlcohols.map((nonAlcohol) => {
        if (nonAlcohol.name === "") {
          valid = false;
          return alert("기타재료 이름을 입력해주세요.");
        }

        if (nonAlcohol.unit === "") {
          valid = false;
          return alert(`기타재료 ${nonAlcohol.name}의 단위을 입력해주세요.`);
        } else {
          if (
            nonAlcohol.unit !== "ml" &&
            nonAlcohol.unit !== "dash" &&
            nonAlcohol.unit !== "Fill up"
          ) {
            valid = false;
            return alert(
              `기타재료 ${nonAlcohol.name}의 단위는 ml, dash, Fill up만 가능합니다.`
            );
          }
        }

        if (nonAlcohol.unit !== "Fill up") {
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
        } else {
          if (nonAlcohol.volume !== "") {
            alert(
              `단위가 Fill up이면 기타재료 ${nonAlcohol.name}의 용량은 없어야 합니다.`
            );
          }
        }
      });
    }

    return valid;
  };

  const mutation = useCocktailGetApi();
  const navigate = useNavigate();

  const handleAlcoholViewerMove = () => {
    navigate("/alcohol/viewer");
  };

  const handleCocktailSubmit = () => {
    if (checkSubmitDataVaild(submitData)) {
      console.log(submitData);
      console.log(submitImageData);

      const formData = new FormData();
      formData.append("image", submitImageData);
      formData.append("data", JSON.stringify(submitData));

      mutation.mutate(formData);
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