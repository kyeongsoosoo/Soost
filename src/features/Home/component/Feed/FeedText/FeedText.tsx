import React from 'react';
import S from './FeedText.styled';

interface IFeedText {
  text: string;
  writerNick: string;
}

function FeedText(props: IFeedText) {
  return (
    <S.FeedTextWrapper>
      <S.FeedTextTitle>{props.writerNick}</S.FeedTextTitle>
      <S.FeedTextContent>{props.text}</S.FeedTextContent>
    </S.FeedTextWrapper>
  );
}

export default FeedText;
