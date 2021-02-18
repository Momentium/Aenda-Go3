import styled from "styled-components";
import { introData } from "../../../../data/data";

const Intro = () => {
  return (
    <StCont className="text intro">
      {introData.txt}
      <div className="text intro colored">{introData.highlight}</div>
    </StCont>
  );
};
export default Intro;

const StCont = styled.div`
  width: 100%;
  padding: 5vw 0;
`;
