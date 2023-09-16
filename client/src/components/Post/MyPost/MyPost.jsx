import { url } from "../../../apis/config/domain";
import { useAuthHandler } from "../../../hooks/useAuthHandler";
import { usePostGetApi } from "../../../hooks/usePostApi";
import Outer from "../../UI/Outer/Outer";
import PostList from "../PostList/PostList";

function MyPost() {
  const { user } = useAuthHandler();
  const { isLoading, isSuccess, isError, data } = usePostGetApi(null, {
    author: user,
    summary: true,
  });
  console.log(data);

  return <>{data && <PostList posts={data} />}</>;
}

export default MyPost;
