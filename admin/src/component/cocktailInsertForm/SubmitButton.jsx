import axios from "axios";
import Button from "react-bootstrap/Button";

function SubmitButton({ cocktailInfo, setCocktailInfo }) {
  const submitCocktailInfo = async () => {
    if (cocktailInfo.name.ko === "") {
      alert("칵테일 한글이름을 입력하세요.");
      return;
    }

    if (cocktailInfo.name.en === "") {
      alert("칵테일 영어이름을 입력하세요.");
      return;
    }

    if (cocktailInfo.ingredients.length === 0) {
      alert("재료를 하나 이상 추가하세요.");
      return;
    }

    if (cocktailInfo.tastes.length === 0) {
      alert("맛을 추가하세요.");
      return;
    }

    if (cocktailInfo.garnish.ko === "") {
      alert("가니쉬 한글이름을 입력하세요.");
      return;
    }

    if (cocktailInfo.garnish.en === "") {
      alert("가니쉬 영어이름을 입력하세요.");
      return;
    }

    if (cocktailInfo.glass === "") {
      alert("잔을 선택해주세요.");
      return;
    }

    if (cocktailInfo.cocktailMake === "") {
      alert("제조 방법을 추가해주세요.");
      return;
    }

    if (cocktailInfo.image_url === "") {
      alert("이미지를 추가해주세요.");
      return;
    }

    const result = await axios.post(
      "http://localhost:8080/cocktail",
      cocktailInfo
    );
    if (result.status === 201) {
      alert("등록이 성공적으로 완료되었습니다.");
      setCocktailInfo({
        name: { en: "", ko: "" },
        ingredients: [],
        tastes: [],
        garnish: { en: "", ko: "" },
        glass: "",
        cocktailMake: "",
        image_url: "",
      });
    } else {
      alert("등록에 실패하였습니다.");
    }
  };

  return (
    <Button variant="primary" type="button" onClick={submitCocktailInfo}>
      Submit
    </Button>
  );
}

export default SubmitButton;
