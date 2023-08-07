import style from "./Title.module.css";

// 1.32px/ 2. 28px/ 3. 24px/ 4. 16px/ 5. 12px

function Title({ size, children }) {
  let fsize = 32;
  switch (size) {
    case 1:
      fsize = 32;
      break;
    case 2:
      fsize = 28;
      break;
    case 3:
      fsize = 24;
      break;
    case 4:
      fsize = 16;
      break;
    case 5:
      fsize = 12;
      break;

    default:
      break;
  }

  return (
    <div className={style.title} style={{ fontSize: `${fsize}px` }}>
      {children}
    </div>
  );
}

export default Title;
