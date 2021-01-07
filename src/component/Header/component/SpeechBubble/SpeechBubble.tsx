import React from 'react';
import S from './SpeechBubble.styled';

interface SpeechBubbleProp {
  children: React.ReactNode;
}

function SpeechBubble(props: SpeechBubbleProp) {
  return <S.SpeechBubbleWrapper>{props.children}</S.SpeechBubbleWrapper>;
}

export default SpeechBubble;
