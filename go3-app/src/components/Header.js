import { useEffect } from 'react';
import styled from 'styled-components';

const Header = () => {

  useEffect(() => {
    console.log('Header mounted');
  }, []);

  return (
    <StHeaderCont>
      <h1>앤다와 함께 하는</h1>
      <h2>고3을 위한 MBTI 문화사업 프로젝트</h2>
    </StHeaderCont>
  )
}

export default Header;

const StHeaderCont = styled.div`
  width: 100%;
  margin: 5px 0 20px 0;
  
  box-sizing: border-box;
  border: solid 3px red;

  
`;

