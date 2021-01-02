import styled from 'styled-components';

const LogInPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LogInWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 580px;

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 750px) {
    display: grid;
    grid-template-columns: 360px 360px;
    grid-gap: 30px;
  }
`;

const LogInWrapperRightBox = styled.div``;

export default {
  LogInPage,
  LogInWrapper,
  LogInWrapperRightBox,
};
