function PostImageModifyItem({ src, index, onClickDeleteButton }) {
  return (
    <>
      <img width={100} src={src} alt={`게시물 이미지`} />
      <button
        onClick={() => {
          onClickDeleteButton(index);
        }}
      >
        삭제
      </button>
    </>
  );
}

export default PostImageModifyItem;
