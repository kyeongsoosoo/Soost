import React from 'react';
import S from './NormalButton.styled';

interface NormalButtonProp {
  children: React.ReactNode;
}

function NormalButton(props: NormalButtonProp) {
  return <S.NormalButtonWrapper>{props.children}</S.NormalButtonWrapper>;
}

export default NormalButton;
