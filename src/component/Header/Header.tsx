import React from 'react';
import Title from '../Title/Title';
import IconBox from './component/IconBox/IconBox';

import S from './Header.styled';

function Header() {
  return (
    <>
      <S.HeaderWrapper>
        <Title />
        <S.HeaderInput />
        <IconBox />
      </S.HeaderWrapper>
      <S.Space />
    </>
  );
}

export default Header;
