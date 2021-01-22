import React, { useEffect } from 'react';
import styled from 'styled-components';

const Description = () => {

  useEffect(() => {
    console.log('Desciption mounted');
  }, []);

  return (
    <StDesCont>
      <h4>저희는</h4>
      <h4>이런 사업을</h4>
      <h4>합니다.</h4>
    </StDesCont>
  )
}

export default Description;

const StDesCont = styled.div`
  width: 100%;
  margin: 0 0 20px 0;
  
  box-sizing: border-box;
  border: solid 3px orange;
`;