import React from 'react';
import SpeechBubble from '../../SpeechBubble/SpeechBubble';
import S from './IWB.styled';

interface IWBProp {
  children: React.ReactNode;
  isClicked: boolean;
}

function IWB(props: IWBProp) {
  return (
    <S.IconBoxBubble isClicked={props.isClicked}>
      <SpeechBubble>{props.children}</SpeechBubble>
    </S.IconBoxBubble>
  );
}

export default IWB;
