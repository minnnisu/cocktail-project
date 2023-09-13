import styles from "./Menu.module.css";
import LoginedMenu from "./LoginedMenu/LoginedMenu";
import NonLoginedMenu from "./NonLoginedMenu/NonLoginedMenu";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useContext } from "react";

function Menu() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  return (
    <ul className={styles.menu_container}>
      <li className={styles.recipe} onClick={() => navigate("/recipe")}>
        레시피
      </li>
      <li className={styles.random} onClick={() => navigate("/random")}>
        랜덤
      </li>
      <li className={styles.random} onClick={() => navigate("/post")}>
        게시판
      </li>
      {auth.user ? <LoginedMenu /> : <NonLoginedMenu />}
    </ul>
  );
}
export default Menu;
