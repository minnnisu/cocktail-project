import { useNavigate } from "react-router-dom";
import { useCocktailGetApi } from "../../../hooks/useCocktailApi";
import Button from "../../UI/Button/Button";
import style from "./AlcoholAppendFormControl.module.css";

function AlcoholAppendFormSubmit({ submitData, submitImageData }) {
  const checkSubmitDataVaild = () => {
    if (submitData.name === "" || submitData.name === undefined) {
      return alert("칵테일 이름을 입력해주세요.");
    }

    if (submitData.ingredients.length === 0) {
      return alert("재료를 추가해주세요.");
    }

    if (submitData.tastes.length === 0) {
      return alert("맛을 추가해주세요.");
    }

    if (submitData.garnishs.length === 0) {
      return alert("가니쉬를 추가해주세요.");
    }

    if (submitData.glass === "") {
      return alert("잔을 선택해주세요.");
    }

    if (submitData.recipe === "") {
      return alert("조주 기법을 작성해주세요.");
    }

    if (submitImageData === null) {
      return alert("이미지를 선택해주세요");
    }

    return true;
  };

  const mutation = useCocktailGetApi();
  const navigate = useNavigate();

  const handleAlcoholViewerMove = () => {
    navigate("/alcohol/viewer");
  };

  const handleCocktailSubmit = () => {
    if (checkSubmitDataVaild(submitData)) {
      console.log(submitData);

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

export default AlcoholAppendFormSubmit;
