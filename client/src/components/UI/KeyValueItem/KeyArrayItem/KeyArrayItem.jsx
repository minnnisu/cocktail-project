import styles from "./KeyArrayItem.module.css";

function KeyArrayItem({ name, array }) {
  return (
    <div className={styles.item_container}>
      <div className={styles.key}>{name}</div>
      <div className={styles.array_container}>
        {array.map((item, index) => (
          <div key={index} className={styles.array_item}>
            {index < array.length - 1 ? `${item}, ` : `${item}`}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyArrayItem;
