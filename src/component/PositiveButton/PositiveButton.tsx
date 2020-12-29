import React from 'react';
import S from './PositiveButton.styled';

interface PositiveButtonProp {
  children: React.ReactNode;
}

function PositiveButton(props: PositiveButtonProp) {
  return <S.PositiveButtonWrapper>{props.children}</S.PositiveButtonWrapper>;
}

export default PositiveButton;
