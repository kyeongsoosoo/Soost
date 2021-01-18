import React from 'react';
import S from './FeedHeader.styled';

interface IFeedHeader {
  nickname: string;
  photoURL: string;
}

function FeedHeader(props: IFeedHeader) {
  return (
    <S.FeedHeaderWrapper>
      <S.FeedHeaderLeftBox>
        <S.FeedHeaderIcon img={props.photoURL} />
        <S.FeedHeaderText>{props.nickname}</S.FeedHeaderText>
      </S.FeedHeaderLeftBox>
    </S.FeedHeaderWrapper>
  );
}

export default FeedHeader;
