import axios from "axios";
import Button from "react-bootstrap/Button";
const domain = require("../../config/domain");

function SubmitButton({
  selectedImage,
  setSelectedImage,
  cocktailInfo,
  setCocktailInfo,
}) {
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

    if (cocktailInfo.garnish === []) {
      alert("가니쉬 한글이름을 입력하세요.");
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

    if (selectedImage === null) {
      alert("이미지를 선택하세요");
      return;
    }

    const userConfirmation = window.confirm(
      "등록할 데이터는 다음과 같습니다?\n등록하시겠습니까?\n" +
        JSON.stringify(cocktailInfo)
    );
    if (!userConfirmation) {
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("data", JSON.stringify(cocktailInfo));

    try {
      const response = axios.post(`${domain.url}/cocktail`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
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
        setSelectedImage(null);
      }
    } catch (error) {
      alert("등록을 실패하였습니다.");
    }
  };

  return (
    <Button variant="primary" type="button" onClick={submitCocktailInfo}>
      Submit
    </Button>
  );
}

export default SubmitButton;
