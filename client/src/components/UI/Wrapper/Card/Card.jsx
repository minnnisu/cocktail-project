import styles from "./Card.module.css";

function Card({ children }) {
  return <div className={styles.card_container}>{children}</div>;
}

export default Card;
