import Button from "../../components/UI/Button/Button";
import Outer from "../../components/UI/Outer/Outer";
import { useUserDataGetApi } from "../../hooks/useUserApi";

function Mypage() {
  const { isLoading, isSuccess, isError, data } = useUserDataGetApi();

  return (
    <div>
      {isLoading && <div>유저정보를 불러오는 중입니다.</div>}
      {isError && <div>유저정보를 불러오는 과정에서 오류가 발생했습니다.</div>}
      {data && (
        <Outer title={"유저정보"}>
          <div>
            <span>아이디 </span>
            <span>{data.id}</span>
          </div>
          <div>
            <span>이름 </span>
            <span>{data.username}</span>
          </div>
          <div>
            <span>닉네임 </span>
            <span>{data.nickname}</span>
          </div>
          <div>
            <span>전화번호 </span>
            <span>{data.telephone}</span>
          </div>
          <div>
            <span>이메일 </span>
            <span>{data.email}</span>
          </div>
          <Button backgroundColor="red">회원탈퇴</Button>
        </Outer>
      )}
    </div>
  );
}

export default Mypage;
