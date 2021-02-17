import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import Modal from './Modal';

const Message = () => {
  const [isFocus, setIsFocus] = useState("");
  const hdlFocus = (e) => {
    const _target = e.currentTarget;
    setIsFocus(_target.className.split(" ")[2])
  }

  const [popModal, setPopModal] = useState(false);

  const sendMsg = () => { 
    const _target = document.getElementsByName('input')
    console.log(_target[0].value)
    console.log(_target[1].value)
    console.log(_target[2].value)
    setPopModal(true)
  }

  return (
    <StCont isFocus={isFocus}>
      <StTopCont className="cont">
        <div className="text msg name" onFocus={hdlFocus}>
          <div>이&nbsp;름</div>
          <StInput type="text" name={"input"}/>
        </div>
        <div className="text msg email" onFocus={hdlFocus}>
          <div>이메일</div>
          <StInput type="text" name={"input"}/>
        </div>
      </StTopCont>
      <StMidCont className="cont">
        <div className="text msg guide" onFocus={hdlFocus}>
          <div>메시지를 입력해 주세요.</div>
          <StInput type="text" name={"input"}/>
        </div>
      </StMidCont>
      <StBotCont className="cont">
        <StBtn onClick={sendMsg}>메시지 보내기</StBtn>
      </StBotCont>
      
      <Modal popModal={popModal} setPopModal={setPopModal}/>

    </StCont>
  );
};

export default Message;

const StCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 3.9vw;

  .cont, .msg {
    width:  100%;
  }

  .name {
    ${ props => props.isFocus==='name' && trans }
  }
  .email {
    ${ props => props.isFocus==='email' && trans }
  }
  .guide {
    ${ props => props.isFocus==='guide' && trans }
  }
`;

const trans = css `
  &, div {
    transition: all 0.1s ease;
  }
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
  div {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: bold;
  }
`

const StInput = styled.input`
  display: inline-block;
  width: 100%;
  line-height: 36px;

  font-size: 12.5px;

  box-sizing: border-box;

  padding: 0 15px;
  border: 0;
  background: rgba(0,0,0,0);
  
  outline: none;  
  &::placeholder{
    color:#D8D8D8;
  }  
`;

const StTopCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  & > div {
    display: flex;
    align-items: baseline;

    border-bottom: 1px solid #555555;
  } 
  & > div:first-child{
    margin-right: 48px;
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
  display: flex;
  justify-content: center;
`;

const StBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  /* margin: 30px 0; */
  margin: 3.5vw 0;
  width: min(260vw, 250px);
  height: min(4.2vw, 40px);

  background: ${({theme}) => theme.colors.red};
  color: ${({theme}) => theme.colors.blue};
  font-weight: bold;
`;