import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Player = ({ SW, vidUrl, popState, pageState }) => {
  return (
    <StScreenCont>
    {
      SW > 480 ?
      <ReactPlayer
        url={vidUrl}
        playing={!popState && pageState}
        controls={true}
        width={SW / 1.5}
        height={(SW * 9) / (16 * 1.5)}
      />
      :
      <ReactPlayer
        url={vidUrl}
        playing={!popState && pageState}
        controls={true}
        width={SW}
        height={SW * 9 / 16}
      />
    }
    </StScreenCont>
  )
}
export default Player;

const StScreenCont = styled.div`
  ${({theme}) => theme.flex('center', 'center')}
  flex-shrink: 0;

  width: ${({ theme }) => theme.SW}px;
  height: ${({ theme }) => theme.SH}px;

  @media screen and (max-width: 480px){
    & > * {
      transform: translateY(-5vw);
    }
  }
`;