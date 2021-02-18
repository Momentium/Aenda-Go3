import styled, { css } from 'styled-components';

const Modal = ({ popModal, setPopModal, alertMode, setAlertMode }) => {

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
            <div>이름 / 이메일 / 메시지 필수 입력 사항입니다</div>
            :
            <div>메시지 전송이 완료되었습니다</div>
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
  background: ${({theme}) => theme.colors.blue};
  transition: all 100ms ease;

  ${
    props => props.popModal ? 
    css`
      width: min(57.3vw, 550px);
      height: min(21vw, 200px);
    `
    :
    css`
      width: 0;
      height: 0;
      visibility: hidden;
      transform: scale(0);
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
      cursor: pointer;
      position: absolute;
      width: min(1.3vw, 12.5px);
      top: 24px;
      right: 24px;
    }
  }

  .text {
    display: flex;
    align-items: flex-end;

    img {
      width: min(1.8vw, 21px);
      margin-left: 8px;
    }
  }
`;