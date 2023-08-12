import AlcoholTypeSelectLayout from "../../../layouts/StoredAlcoholViewerLayout/AlcoholTypeSelectLayout/AlcoholTypeSelectLayout";
import Button from "../../UI/Button/Button";
import style from "./AlcoholTypeSelect.module.css";

function AlcoholTypeSelect() {
  return (
    <AlcoholTypeSelectLayout>
      <Button>기주</Button>
      <Button>술 종류</Button>
      <Button>칵테일</Button>
    </AlcoholTypeSelectLayout>
  );
}

export default AlcoholTypeSelect;
