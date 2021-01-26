import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Screen = ({ SW, vidUrl, popState, pageState }) => {
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    if(!popState && pageState){
      setTimeout(() => {
        setDelay(true);
      }, 1200)
    }
    else {
      setDelay(false);
    }
  }, [popState, pageState])

  return (
    <StScreenCont>
    {
      SW > 768 ?
      <ReactPlayer
        url={vidUrl}
        // playing={false}
        playing={delay}
        controls={true}
        width={SW / 1.5}
        height={(SW * 9) / (16 * 1.5)}
      />
      :
      <ReactPlayer
        url={vidUrl}
        // playing={false}
        playing={delay}
        controls={true}
        width={SW - 10}
        height={(SW - 10) * 9 / 16}
      />
    }
    </StScreenCont>
  )
}
export default Screen;

const StScreenCont = styled.div`
  width: ${({ theme }) => `${theme.SW}px`};
  height: ${({ theme }) => `${theme.SH}px`};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;