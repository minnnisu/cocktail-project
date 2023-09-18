import { usePostGetApi } from "../../../hooks/usePostApi";
import PostContainer from "../PostContainer/PostContainer";

function AllPost() {
  const { isLoading, isSuccess, isError, data } = usePostGetApi(null, {
    summary: true,
  });

  return <>{data && <PostContainer posts={data} />}</>;
}

export default AllPost;
