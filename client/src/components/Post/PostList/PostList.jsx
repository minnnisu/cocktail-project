import { url } from "../../../apis/config/domain";
import Outer from "../../UI/Outer/Outer";

function PostList({ posts }) {
  return posts.map((post, index) => {
    return (
      <Outer key={index} title={post.title}>
        <div>작성자 {post.nickname}</div>
        <div>작성일 {post.created_at}</div>
        <div>{post.content}</div>
        <div>하트 {post.heartSize}</div>
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
  });
}

export default PostList;
