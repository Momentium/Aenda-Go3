import styled from "styled-components";
import { introData } from "../../../../data/data";

const Intro = () => {
  const _txt = window.innerWidth > 480 ? introData.txt : introData.txt_mobile;
  return (
    <StCont>
      <div className="text intro">{_txt}</div>
      <div className="text intro colored">{introData.highlight}</div>
    </StCont>
  );
};
export default Intro;

const StCont = styled.div`
  ${({theme}) => theme.flex('', 'flex-start', 'column')};
  @media screen and (min-width: 481px) {
    padding-top: ${({theme}) => theme.calcVW(97)};
    padding-bottom: ${({theme}) => theme.calcVW(85)};
  }
  @media screen and (max-width: 480px) {
    padding-top: ${({theme}) => theme.calcVW_M(48)};
    padding-bottom: ${({theme}) => theme.calcVW_M(56)};
  }

`;
