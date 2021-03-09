import styled, { css } from 'styled-components';

const Modal = ({ popModal, setPopModal, alertMode, setAlertMode }) => {
  const isMobile = window.innerWidth <= 480;
  const closeModal = () => {
    setPopModal(false)
    setAlertMode(false)
  }

  return (
      <StCont popModal={popModal}>
        <div className="rel-cont">
          <img src="/assets/icons/close-white.svg" alt="close-icon" onClick={closeModal}/>
        </div>

        <div className="text modal">
          {
            alertMode ? 
            <div>이름 / 이메일 / 메시지{isMobile && <br/>} 필수 입력 사항입니다</div>
            :
            <div>메시지 전송이{isMobile && <br/>} 완료되었습니다</div>
          }
          <img src="/assets/icons/check.svg" alt="check-icon"/>
        </div>
        
        <div className="rel-cont" style={{visibility: 'hidden'}}>
          <img src="/assets/icons/close-white.svg" alt="close-icon"/>
        </div>
      </StCont>
  );
};

export default Modal;

const StCont = styled.div`
  position: absolute;
  @media screen and (max-width: 480px) {
    position: fixed;
  }
  background: ${({theme}) => theme.colors.blue};
  transition: all 100ms ease;

  
  ${
    props => props.popModal ? 
    css`
      overflow: hidden;
      width: ${({theme}) => theme.calcVW(1100)};
      height: ${({theme}) => theme.calcVW(400)};
      @media screen and (max-width: 480px) {
        width: 100%;
        height: 100%; 
      }
    `
    :
    css`
      width: 0;
      height: 0;
      * {
        display: none;
      }
    `
  }

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .rel-cont {
    position: relative;
    width: 100%;
    img {
      position: absolute;
      @media screen and (min-width: 481px) {
        cursor: pointer;
        width: ${({theme}) => theme.calcVW(25)};
        top: ${({theme}) => theme.calcVW(48)};
        right: ${({theme}) => theme.calcVW(48)};
      }
      @media screen and (max-width: 480px) {
        width: min(5.208333vw, 25px);
        top: 40px;
        right: 40px;
      }
    }
  }

  .text {
    display: flex;
    align-items: center;
    img {
      width: ${({theme}) => theme.calcVW(40)};
      margin: ${({theme}) => theme.calcVW(4)} 0 0 ${({theme}) => theme.calcVW(14)};
    }

    @media screen and (max-width: 480px) {
      flex-direction: column;
      .img {
        width: min(8.3333vw, 40px);
        margin-left: 0px;
        margin-top: 24px;
      }
    }
  }
`;