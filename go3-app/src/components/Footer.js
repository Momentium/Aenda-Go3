import React, { useEffect } from 'react';
import styled from 'styled-components';

const Footer = () => {

  useEffect(() => {
    console.log('Footer mounted');
  }, []);

  return (
    <StFootCont>
      <h4>회사 소개 및 뉴스레터 신청</h4>
    </StFootCont>
  )
}

export default Footer;

const StFootCont = styled.div`
  width: 100%;
  
  box-sizing: border-box;
  border: solid 3px purple;
`;