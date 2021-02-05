import styled, { css } from "styled-components";
import ProgramList from "./program/ProgramList";

const Detail = ({ menu }) => {
  return (
    <StDetailWrap isMsg={menu.includes("MESSAGE")}>
      {menu.includes("2020") && (
        <div className="text detail">
          입시 일정으로 미처 프로그램을 신청하지 못한
          <br />
          고3·수험생들을 위해 준비 되었습니다.
          <br />
          <br />
          100% 온라인으로 진행되는 상상만개는성격유형검사를 통해 학생 개개인의
          예술적 취향을 발견하고,
          <br />
          각 유형에 맞는 문화예술교육 프로그램을 추천받아 동시대 예술가 16명과
          함께 프로그램에 참여하게 됩니다.
          <br />
          <br />
          <div className="colored">
            We are Golden EXPRESS
            <br />
            반짝반짝 열아홉, 나의 취향이 닿는 세계로
            <br />
          </div>
        </div>
      )}

      {menu.includes("PROGRAM") && <ProgramList />}
    </StDetailWrap>
  );
};
export default Detail;

const StDetailWrap = styled.section`
  ${(props) =>
    !props.isMsg &&
    css`
      background: white;
    `}
  padding-top: 3rem;
  padding-bottom: 3rem;
`;
