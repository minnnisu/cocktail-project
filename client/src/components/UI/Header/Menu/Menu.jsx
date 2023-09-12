import styles from "./Menu.module.css";
import LoginedMenu from "./LoginedMenu/LoginedMenu";
import NonLoginedMenu from "./NonLoginedMenu/NonLoginedMenu";

function Menu({ isLogined, setIsLogined, setSelectedMenu }) {
  function handleMenuChange(index) {
    setSelectedMenu(index);
  }

  return (
    <ul className={styles.menu_container}>
      <li className={styles.recipe} onClick={() => handleMenuChange(1)}>
        레시피
      </li>
      <li className={styles.random} onClick={() => handleMenuChange(2)}>
        랜덤
      </li>
      {isLogined ? (
        <LoginedMenu
          handleMenuChange={handleMenuChange}
          setIsLogined={setIsLogined}
        />
      ) : (
        <NonLoginedMenu handleMenuChange={handleMenuChange} />
      )}
    </ul>
  );
}
export default Menu;
