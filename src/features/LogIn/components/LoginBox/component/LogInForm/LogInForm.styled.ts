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

export default {
  LogInFormWrapper,
  LogInFormInput,
  LogInActiveButton,
  LogInUnActiveButton,
};
