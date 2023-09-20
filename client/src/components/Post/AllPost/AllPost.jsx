import { usePostGetApi } from "../../../hooks/usePostApi";
import PostContainer from "../PostContainer/PostContainer";
import PostHeader from "../PostHeader/PostHeader";

function AllPost() {
  const { isLoading, isSuccess, isError, data } = usePostGetApi(null, {
    summary: true,
  });

  return (
    <>
      <PostHeader />
      {data && <PostContainer posts={data} />}
    </>
  );
}

export default AllPost;
