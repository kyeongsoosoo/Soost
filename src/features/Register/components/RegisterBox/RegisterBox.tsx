import React from 'react';
import Title from '../../../../component/Title/Title';
import RegisterForm from './component/RegisterForm/RegisterForm';
import SignInLink from './component/SignInLinkBox/SignInLink';

import S from './RegisterBox.styled';

function RegisterBox() {
  return (
    <>
      <S.RegisterBoxWrapper>
        <Title />
        <RegisterForm />
      </S.RegisterBoxWrapper>
    </>
  );
}

export default RegisterBox;
