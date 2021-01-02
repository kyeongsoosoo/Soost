import React from 'react';
import S from './SignInLinkBox.styled';

function SignInLink() {
  return (
    <S.SignInLinkBoxWrapper>
      계정이 있으신가요?
      <S.SignInLink to="/">로그인</S.SignInLink>
    </S.SignInLinkBoxWrapper>
  );
}

export default SignInLink;
