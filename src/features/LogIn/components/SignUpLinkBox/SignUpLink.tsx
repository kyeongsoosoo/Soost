import React from 'react';
import S from './SignUpLinkBox.styled';

function SignUpLink() {
  return (
    <S.SignUpLinkBoxWrapper>
      계정이 없으신가요?
      <S.SignUpLink to="#">가입하기</S.SignUpLink>
    </S.SignUpLinkBoxWrapper>
  );
}

export default SignUpLink;
