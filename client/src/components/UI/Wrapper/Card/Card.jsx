import style from "./Card.module.css";

function Card({ children }) {
  return <div className={style.card_container}>{children}</div>;
}

export default Card;
