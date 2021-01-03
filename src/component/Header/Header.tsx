import React from 'react';
import Title from '../Title/Title';
import IconBox from './component/IconBox/IconBox';
import SpeechBubble from './component/SpeechBubble/SpeechBubble';
import S from './Header.styled';

function Header() {
  return (
    <S.HeaderWrapper>
      <Title />
      <S.HeaderInput />
      <IconBox />
    </S.HeaderWrapper>
  );
}

export default Header;
