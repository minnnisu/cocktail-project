import style from "./InputName.module.css";

function InputName({ name }) {
  return <div className={style.input_type}>{name}</div>;
}
export default InputName;
