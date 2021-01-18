import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 500;
  background-color: #ffffff;
  padding: 0px 20px;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dbdbdb;
`;

const HeaderInput = styled.input`
  width: 215px;
  height: 25px;
  border: 1px solid #dbdbdb;
  @media only screen and (max-width: 580px) {
    display: none;
  }
`;

const Space = styled.div`
  width: 100%;
  height: 50px;
`;

export default {
  HeaderWrapper,
  HeaderInput,
  Space,
};
