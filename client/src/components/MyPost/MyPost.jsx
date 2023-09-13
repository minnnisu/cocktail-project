import { url } from "../../apis/config/domain";
import { usePostGetApi } from "../../hooks/usePostApi";
import Outer from "../UI/Outer/Outer";

function MyPost() {
  const { isLoading, isSuccess, isError, data } = usePostGetApi();

  return <></>;
}

export default MyPost;
