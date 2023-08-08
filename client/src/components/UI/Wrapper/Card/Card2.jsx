import style from "./Card2.module.css";

function Card2({ children }) {
  return <div className={style.card_container}>{children}</div>;
}

export default Card2;
