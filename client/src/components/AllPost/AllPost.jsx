import { url } from "../../apis/config/domain";
import { usePostAllGetApi } from "../../hooks/usePostApi";
import Outer from "../UI/Outer/Outer";

function AllPost() {
  const { isLoading, isSuccess, isError, data } = usePostAllGetApi();

  return (
    <>
      {data &&
        data.map((post, index) => {
          return (
            <Outer key={index} title={post.title}>
              <div>작성자 {post.author.nickname}</div>
              <div>작성일 {post.created_at}</div>
              <div>{post.content}</div>
              <div>하트 {post.hearts.length}</div>
              <div>
                {post.images &&
                  post.images.length > 0 &&
                  post.images.map((imageName, index) => {
                    return (
                      <img
                        width={100}
                        key={index}
                        src={`${url}/static/image/post/${imageName}`}
                        alt={`게시물 이미지 ${index}`}
                      />
                    );
                  })}
              </div>
            </Outer>
          );
        })}
    </>
  );
}

export default AllPost;
