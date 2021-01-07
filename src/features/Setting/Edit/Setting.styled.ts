import styled from 'styled-components';

const SettingPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SettingWrapper = styled.div`
  display: flex;

  width: 930px;
  height: 820px;
  @media only screen and (max-width: 930px) {
    width: 100%;
  }
`;

export default { SettingPage, SettingWrapper };
