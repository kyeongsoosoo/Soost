import styled from 'styled-components';

const HeaderWrapper = styled.div`
flex
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background-color: #ffffff;
  padding: 0px 20px;
  width: 100%;
  height: 50px;
  border-bottom:  1px solid #dbdbdb;
`;

const HeaderInput = styled.input`
  width: 215px;
  height: 25px;
  border: 1px solid #dbdbdb;
  @media only screen and (max-width: 580px) {
    display: none;
  }
`;

export default {
  HeaderWrapper,
  HeaderInput,
};
