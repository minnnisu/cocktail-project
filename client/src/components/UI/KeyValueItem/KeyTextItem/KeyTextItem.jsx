import styles from "./KeyTextItem.module.css";

function KeyTextItem({ name, text }) {
  // \n을 <br> 태그로 대체하여 개행을 표시합니다.
  const formattedText = text.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <div className={styles.item_container}>
      <div className={styles.key}>{name}</div>
      <div className={styles.text_container}>{formattedText}</div>
    </div>
  );
}

export default KeyTextItem;
