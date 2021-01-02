import React from 'react';
import SignInLink from '../components/RegisterBox/component/SignInLinkBox/SignInLink';
import RegisterBox from '../components/RegisterBox/RegisterBox';
import S from './Register.styled';

function Register() {
  return (
    <S.RegisterPage>
      <RegisterBox />
      <SignInLink />
    </S.RegisterPage>
  );
}

export default Register;
