import style from "./KeyArrayItem.module.css";

function KeyArrayItem({ name, array }) {
  return (
    <div className={style.item_container}>
      <div className={style.key}>{name}</div>
      <div className={style.array_container}>
        {array.map((item, index) => (
          <div key={index} className={style.array_item}>
            {index < array.length - 1 ? `${item}, ` : `${item}`}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyArrayItem;
