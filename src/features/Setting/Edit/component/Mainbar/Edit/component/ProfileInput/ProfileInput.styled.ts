import styled from 'styled-components';

const ProfileInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;

  & + & {
    margin-top: 40px;
  }
`;

const ProfileInputTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  width: 130px;
  font-size: 16px;
  font-weight: 600;
  color: #262626;
`;

const ProfileInputInput = styled.input`
  width: 350px;
  height: 30px;
  border: 1px solid #dbdbdb;

  &:focus {
    outline: 2px solid #00376b;
  }
`;

export default {
  ProfileInputInput,
  ProfileInputTitle,
  ProfileInputWrapper,
};
