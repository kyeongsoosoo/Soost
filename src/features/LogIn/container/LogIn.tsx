import React from 'react';
import LogInBox from '../components/LoginBox/LogInBox';
import LogInImage from '../components/LogInImage/LogInImage';

import SignUpLink from '../components/SignUpLinkBox/SignUpLink';
import S from './LogIn.styled';

function LogIn() {
  return (
    <S.LogInPage>
      <S.LogInWrapper>
        <LogInImage />
        <S.LogInWrapperRightBox>
          <LogInBox />
          <SignUpLink />
        </S.LogInWrapperRightBox>
      </S.LogInWrapper>
    </S.LogInPage>
  );
}

export default LogIn;
