import styled from 'styled-components';
import PositiveButton from '../../../../../../component/PositiveButton/PositiveButton';
import PositiveButtonStyled from '../../../../../../component/PositiveButton/PositiveButton.styled';

const LogInFormWrapper = styled.form`
  width: 270px;
  height: 130px;
`;

const LogInFormInput = styled.input`
  width: 270px;
  height: 35px;
  margin-bottom: 5px;
`;

const LogInActiveButton = styled(PositiveButtonStyled.PositiveButtonWrapper)`
  width: 270px;
  height: 30px;
  margin: 10px 0px;
  background-color: #0095f6;
`;

const LogInUnActiveButton = styled(PositiveButtonStyled.PositiveButtonWrapper)`
  width: 270px;
  height: 30px;
  margin: 10px 0px;
  background-color: #c0dffd;
`;

const LogInFacebookButton = styled.div`
  cursor: pointer;
  color: #385185;
  text-align: center;
  font-size: 14px;
  font-weight: 800;
`;

const LogInErrorBox = styled.div`
  width: 270px;
  font-size: 14px;
  color: #ed4956;
  text-align: center;
`;

const LogInSeperationBox = styled.div`
  display: flex;
  align-items: center;
  width: 270px;
  height: 55px;
`;

const LogInSeperationLine = styled.div`
  width: 105px;
  height: 1px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const LogInSeperationText = styled.div`
  width: 60px;
  font-size: 14px;
  color: #8e8e8e;
  text-align: center;
`;

export default {
  LogInFormWrapper,
  LogInFacebookButton,
  LogInFormInput,
  LogInActiveButton,
  LogInUnActiveButton,
  LogInErrorBox,
  LogInSeperationBox,
  LogInSeperationLine,
  LogInSeperationText,
};
