import styled from 'styled-components';
import * as St from '../../styles/styledComp';

const Detail = () => {
  return (
    <StDetailWrap>
      <div className="text detail">리스트 클릭 시 드롭다운으로 노출됩니다.</div>
      <div className="text detail">모션은 레퍼런스 사이트 참고 부탁드립니다.</div>
      <div className="text detail">www.reedartdepartment.com</div>
    </StDetailWrap>
  )
}
export default Detail;

const StDetailWrap = styled(St.Section)`
  border: 0px;
  padding-top: 1.594em;
  padding-bottom: 1.594em;

  .text {
    font-size: 1.094em;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    text-align: left;
    color: #111111;
  }
`;