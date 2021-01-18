import React from 'react';
import S from './PositiveButton.styled';

interface PositiveButtonProp {
  children: React.ReactNode;
  width: string;
  height: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function PositiveButton(props: PositiveButtonProp) {
  return (
    <S.PositiveButtonWrapper
      onClick={props.onClick}
      style={{ width: `${props.width}`, height: `${props.height}` }}
    >
      {props.children}
    </S.PositiveButtonWrapper>
  );
}

export default PositiveButton;
