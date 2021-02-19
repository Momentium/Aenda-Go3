import styled from "styled-components";
import { introData } from "../../../../data/data";

const Intro = () => {
  const _txt = window.innerWidth > 480 ? introData.txt : introData.txt_mobile;
  return (
    <StCont className="text intro">
      {_txt}
      <div className="text intro colored">{introData.highlight}</div>
    </StCont>
  );
};
export default Intro;

const StCont = styled.div`
  width: 100%;
  padding: 5vw 0;
`;
