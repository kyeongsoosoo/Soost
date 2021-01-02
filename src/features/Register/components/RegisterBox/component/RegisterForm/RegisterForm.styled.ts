import styled from 'styled-components';

import PositiveButtonStyled from '../../../../../../component/PositiveButton/PositiveButton.styled';

const RegisterFormWrapper = styled.form`
  width: 270px;
  height: 130px;
`;

const RegisterFormInput = styled.input`
  width: 270px;
  height: 35px;
  margin-bottom: 5px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
`;

const RegisterActiveButton = styled(PositiveButtonStyled.PositiveButtonWrapper)`
  width: 270px;
  height: 30px;
  margin: 10px 0px;
  background-color: #0095f6;
`;

const RegisterUnActiveButton = styled(
  PositiveButtonStyled.PositiveButtonWrapper,
)`
  width: 270px;
  height: 30px;
  margin: 10px 0px;
  background-color: #c0dffd;
`;

const RegisterFacebookButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  height: 35px;
  width: 270px;
  margin: 20px 0px;
  background-color: #0095f6;

  font-size: 14px;
  font-weight: 800;
  border-radius: 10px;
`;

const RegisterErrorBox = styled.div`
  width: 270px;
  font-size: 14px;
  color: #ed4956;
  text-align: center;
`;

const RegisterSeperationBox = styled.div`
  display: flex;
  align-items: center;
  width: 270px;
  height: 55px;
`;

const RegisterSeperationLine = styled.div`
  width: 105px;
  height: 1px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const RegisterSeperationText = styled.div`
  width: 60px;
  font-size: 14px;
  color: #8e8e8e;
  text-align: center;
`;

const RegisterIntroductionBox = styled.div`
  width: 270px;
  color: #8e8e8e;
  font-size: 17px;
  font-weight: 800;
  text-align: center;
`;

export default {
  RegisterFormWrapper,
  RegisterFormInput,
  RegisterActiveButton,
  RegisterUnActiveButton,
  RegisterFacebookButton,
  RegisterSeperationBox,
  RegisterSeperationLine,
  RegisterSeperationText,
  RegisterErrorBox,
  RegisterIntroductionBox,
};
