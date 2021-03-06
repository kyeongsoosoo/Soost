import styled, { css } from 'styled-components';
import { PositiveButtonWrapper } from '../../../../../../component/PositiveButton/PositiveButton.styled';

const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const EditInputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 480px;
`;

const EditSubmitButton = styled(PositiveButtonWrapper)`
  margin-top: 40px;

  width: 40px;
  height: 30px;
`;
const EditSubmitUnactiveButton = styled(PositiveButtonWrapper)`
  margin-top: 40px;

  width: 40px;
  height: 30px;
  background-color: #c0dffd;
`;

export default {
  EditWrapper,
  EditInputWrapper,
  EditSubmitButton,
  EditSubmitUnactiveButton,
};
