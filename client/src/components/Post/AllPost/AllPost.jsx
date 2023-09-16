import { usePostGetApi } from "../../../hooks/usePostApi";
import PostList from "../PostList/PostList";

function AllPost() {
  const { isLoading, isSuccess, isError, data } = usePostGetApi(null, {
    summary: true,
  });

  return <>{data && <PostList posts={data} />}</>;
}

export default AllPost;
