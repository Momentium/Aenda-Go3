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
  user-select: none;
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
      width: min(57.3vw, 550px);
      height: min(21vw, 200px);
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
      @media screen and (min-width: 481px) {
        cursor: pointer;
      }
      position: absolute;
      width: min(1.3vw, 12.5px);
      top: 24px;
      right: 24px;
      @media screen and (max-width: 480px) {
        width: min(5.208333vw, 25px);
        top: 40px;
        right: 40px;
      }
    }
  }

  .text {
    display: flex;
    align-items: flex-end;
    @media screen and (max-width: 480px) {
      flex-direction: column;
      align-items: center;
    }
    img {
      width: min(1.8vw, 21px);
      margin-left: 8px;
      @media screen and (max-width: 480px) {
        width: min(8.3333vw, 40px);
        margin-left: 0px;
        margin-top: 24px;
      }
    }
  }
`;