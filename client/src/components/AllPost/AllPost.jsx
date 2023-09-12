import { usePostGetApi } from "../../hooks/usePostApi";

function AllPost() {
  const { isLoading, isSuccess, isError, data } = usePostGetApi();

  return <></>;
}

export default AllPost;
