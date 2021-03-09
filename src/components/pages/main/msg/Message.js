import React, { useState } from "react";
import styled, { css } from "styled-components";
import Modal from "./Modal";
import emailjs from 'emailjs-com';

const Message = () => {
  const [isFocus, setIsFocus] = useState("");
  const hdlFocus = (e) => {
    const _target = e.currentTarget;
    setIsFocus(_target.className.split(" ")[2]);
  };
  const hdlBlur = () => {
    setIsFocus("")
  }

  const [popModal, setPopModal] = useState(false);
  const [alertMode, setAlertMode] = useState(false);

  const sendMsg = () => {
    const _target = document.getElementsByName("input");
    console.log(_target[2].value)
    for(let i = 0; i < _target.length; i++) {
      if (_target[i].value === "") {
        setAlertMode(true);
        setPopModal(true);
        return;
      }
    }
    
    const _templateParams = {
      name: _target[0].value,
      email: _target[1].value,
      msg: _target[2].value
    }
    
    emailjs.send('aenda-go3', 'aenda-go3', _templateParams, 'user_IvdJn5ZLH0KLCm2l1qSD5')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      _target.forEach((el) => {
        el.value = "";
      });
    }, (err) => {
      console.log('FAILED...', err);
    });
    
    setPopModal(true);
  };

  return (
    <StCont isFocus={isFocus}>
      <StTopCont className="cont">
        <div className="text msg name" onFocus={hdlFocus} onBlur={hdlBlur}>
          <div>이&nbsp;름</div>
          <StInput type="text" name={"input"} autoComplete="off" />
        </div>
        <div className="text msg email" onFocus={hdlFocus} onBlur={hdlBlur}>
          <div>이메일</div>
          <StInput type="text" name={"input"} autoComplete="off" />
        </div>
      </StTopCont>

      <StMidCont className="cont">
        <div className="text msg guide" onFocus={hdlFocus} onBlur={hdlBlur}>
          <div>메시지를 입력해 주세요.</div>
          {
            window.innerWidth > 480 ?
            <StInput type="text" name={"input"} autoComplete="off" />
            :
            <StTxtArea type="text" name={"input"} autoComplete="off" />
          }
        </div>
      </StMidCont>

      <StBotCont className="cont">
        <StBtn onClick={sendMsg}>메시지 보내기</StBtn>
      </StBotCont>

      <Modal
        popModal={popModal}
        setPopModal={setPopModal}
        alertMode={alertMode}
        setAlertMode={setAlertMode}
      />
    </StCont>
  );
};

export default Message;

const StCont = styled.div`
  position: relative;
  ${({theme}) => theme.flex('', '', 'column')};
  padding-top: 3.9vw;

  @media screen and (max-width: 480px) {
    padding-top: 8.3333vw;
    .guide {
      height: 50vw;
    }
  }

  .cont,
  .msg {
    width: 100%;
  }

  .name {
    ${(props) => props.isFocus === "name" && trans}
  }
  .email {
    ${(props) => props.isFocus === "email" && trans}
  }
  .guide {
    ${(props) => props.isFocus === "guide" && trans}
  }
`;

const trans = css`
  &,
  div {
    transition: all 0.1s linear;
  }
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
  div {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: bold;
  }
`;

const StInput = styled.input`
  display: inline-block;
  width: 100%;
  height: ${({theme}) => theme.calcVW(50)};

  padding: 0 ${({theme}) => theme.calcVW(15)};
  border: 0;
  background: rgba(0, 0, 0, 0);

  outline: none;
  &::placeholder {
    color: #d8d8d8;
  }
`;

const StTxtArea = styled.textarea`
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }
  
  margin-top: 16px;
  /* display: inline-block; */
  width: 100%;
  height: 35vw; 
  overflow: scroll;
  font-size: 12.5px;
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }

  box-sizing: border-box;

  padding: 0 15px;
  border: 0;
  background: rgba(0, 0, 0, 0);

  outline: none;
  &::placeholder {
    color: #d8d8d8;
  }
`;

const StTopCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  & > div {
    display: flex;
    @media screen and (min-width: 481px) {
      align-items: baseline;
    }

    border-bottom: 1px solid #555555;
  }
  & > div:first-child {
    margin-right: 48px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 0;
    .name, .email {
      margin-bottom: 8.3333vw;
    }
  }
`;
const StMidCont = styled.div`
  & > div {
    border-bottom: 1px solid #555555;
  }
  input {
    padding: 0;
  }
`;
const StBotCont = styled.div`
  ${({theme}) => theme.flex('center')};
`;

const StBtn = styled.div`
  ${({theme}) => theme.flex('center', 'center')};
  background: ${({ theme }) => theme.colors.red};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue};

  @media screen and (min-width: 481px) {
    cursor: pointer;
    margin: ${({theme}) => theme.calcVW(62)} 0;
    width: ${({theme}) => theme.calcVW(500)};
    height: ${({theme}) => theme.calcVW(80)};
    font-size: ${({theme}) => theme.calcVW(35)};
  }
  @media screen and (max-width: 480px) {
    margin: 8.3333vw 0;
    width: 100%;
    height: min(10.625vw, 51px);
    font-size: 22px;
  }
`;
