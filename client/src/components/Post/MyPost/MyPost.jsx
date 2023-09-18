import { useAuthHandler } from "../../../hooks/useAuthHandler";
import { usePostGetApi } from "../../../hooks/usePostApi";
import PostList from "../PostList/PostList";

function MyPost() {
  const { user } = useAuthHandler();
  const { isLoading, isError, data } = usePostGetApi(null, {
    author: user,
    summary: true,
  });
  console.log(data);

  return (
    <>
      {isLoading && <div>데이터를 불러오는 중 입니다.</div>}
      {isError && <div>데이터를 불러오는 과정에서 에러가 발생하였습니다.</div>}
      {data && data.length < 1 && <div>게시물이 없습니다.</div>}
      {data && data.length > 0 && <PostList posts={data} />}
    </>
  );
}

export default MyPost;
