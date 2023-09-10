import { useNavigate } from "react-router-dom";
import style from "./Menu.module.css";
import LoginedMenu from "./LoginedMenu/LoginedMenu";
import NonLoginedMenu from "./NonLoginedMenu/NonLoginedMenu";

function Menu({ isLoggined, setIsLogined, setSelectedMenu }) {
  const navigate = useNavigate();

  function handleMenuChange(index) {
    setSelectedMenu(index);
  }

  return (
    <ul className={style.menu_container}>
      <li className={style.recipe} onClick={() => handleMenuChange(1)}>
        레시피
      </li>
      <li className={style.random} onClick={() => handleMenuChange(2)}>
        랜덤
      </li>
      {isLoggined ? (
        <LoginedMenu handleMenuChange={handleMenuChange} />
      ) : (
        <NonLoginedMenu handleMenuChange={handleMenuChange} />
      )}
    </ul>
  );
}
export default Menu;
