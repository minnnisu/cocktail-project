import { useLocation, useNavigate } from "react-router-dom";
import styles from "./PostHeader.module.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

function PostHeader() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return (
    <ul className={styles.header}>
      <li
        className={`${styles.tap} ${
          location.pathname === "/post/upload" ? styles.active : ""
        }`}
        onClick={() => navigate("/post/upload")}
      >
        게시물 등록
      </li>
      <li
        className={`${styles.tap} ${
          location.pathname === `/post/${user}` ? styles.active : ""
        }`}
        onClick={() => navigate(`/post/${user}`)}
      >
        내 게시물
      </li>
      <li
        className={`${styles.tap} ${
          location.pathname === "/post" ? styles.active : ""
        }`}
        onClick={() => navigate("/post")}
      >
        모든 게시물
      </li>
    </ul>
  );
}

export default PostHeader;
