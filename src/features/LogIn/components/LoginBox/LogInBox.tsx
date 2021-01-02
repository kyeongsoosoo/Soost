import React from 'react';
import Title from '../../../../component/Title/Title';
import LogInForm from './component/LogInForm/LogInForm';
import S from './LogInBox.styled';

function LogInBox() {
  return (
    <S.LogInBoxWrapper>
      <Title />
      <LogInForm />
    </S.LogInBoxWrapper>
  );
}

export default LogInBox;
