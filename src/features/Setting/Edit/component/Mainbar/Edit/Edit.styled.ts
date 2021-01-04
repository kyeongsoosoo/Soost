import styled from 'styled-components';
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
  width: 480px;
`;

const EditSubmitButton = styled(PositiveButtonWrapper)`
  margin-top: 40px;

  width: 40px;
  height: 30px;
`;

export default { EditWrapper, EditInputWrapper, EditSubmitButton };
