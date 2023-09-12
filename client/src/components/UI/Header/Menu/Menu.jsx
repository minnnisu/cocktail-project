import styles from "./Menu.module.css";
import LoginedMenu from "./LoginedMenu/LoginedMenu";
import NonLoginedMenu from "./NonLoginedMenu/NonLoginedMenu";
import { useNavigate } from "react-router-dom";

function Menu({ user, SetUser }) {
  const navigate = useNavigate();

  return (
    <ul className={styles.menu_container}>
      <li className={styles.recipe} onClick={() => navigate("/recipe")}>
        레시피
      </li>
      <li className={styles.random} onClick={() => navigate("/random")}>
        랜덤
      </li>
      {user ? (
        <LoginedMenu user={user} serUser={SetUser} />
      ) : (
        <NonLoginedMenu />
      )}
    </ul>
  );
}
export default Menu;
