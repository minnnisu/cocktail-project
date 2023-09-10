import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import style from "./Header.module.css";
import { useState } from "react";

function Header({ setSelectedMenu }) {
  const [isLogined, setIsLogined] = useState(false);

  return (
    <div className={style.header_container}>
      <Logo />
      <Menu
        isLogined={isLogined}
        setIsLogined={setIsLogined}
        setSelectedMenu={setSelectedMenu}
      />
    </div>
  );
}

export default Header;
