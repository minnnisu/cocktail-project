import React, { useState } from "react";
import Header from "../../components/UI/Header/Header";
import LoginPage from "../LoginPage/LoginPage";
import SignUpPage from "../Signup/SignUpPage";
import RecipePage from "../RecipePage/RecipePage";
import RandomPage from "../RandomPage/RandomPage";

function Home() {
  const [selectedMenu, setSelectedMenu] = useState(1);

  function selectMenu() {
    if (selectedMenu === 2) {
      return <RandomPage />;
    } else if (selectedMenu === 3) {
      return <div>마이페이지</div>;
    } else if (selectedMenu === 4) {
      return <LoginPage />;
    } else if (selectedMenu === 5) {
      return <SignUpPage />;
    } else {
      return <RecipePage />;
    }
  }

  return (
    <div className="App">
      <Header setSelectedMenu={setSelectedMenu} />
      {selectMenu()}
    </div>
  );
}

export default Home;
