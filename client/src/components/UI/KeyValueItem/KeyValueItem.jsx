import style from "./KeyValueItem.module.css";

function KeyValueItem({ name, value }) {
  return (
    <div className={style.item_container}>
      <div className={style.key}>{name}</div>
      <div className={style.value}>{value}</div>
    </div>
  );
}

export default KeyValueItem;
