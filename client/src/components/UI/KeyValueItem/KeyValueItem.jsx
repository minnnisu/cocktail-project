import styles from "./KeyValueItem.module.css";

function KeyValueItem({ name, value }) {
  return (
    <div className={styles.item_container}>
      <div className={styles.key}>{name}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}

export default KeyValueItem;
