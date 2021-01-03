import React from 'react';
import SpeechBubble from '../../SpeechBubble/SpeechBubble';
import S from './IWB.styled';

interface IWBProp {
  children: React.ReactNode;
  isOpen: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function IWB(props: IWBProp) {
  return (
    <S.IconBoxBubble isOpen={props.isOpen} onClick={props.onClick}>
      <SpeechBubble>{props.children}</SpeechBubble>
    </S.IconBoxBubble>
  );
}

export default IWB;
