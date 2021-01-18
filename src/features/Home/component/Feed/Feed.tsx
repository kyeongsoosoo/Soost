import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import fb from '../../../../../firebase';
import Slider from '../../../../component/Slider/Slider';
import { IFeed } from '../../../../lib/type';
import { RootState } from '../../../../redux';
import S from './Feed.styled';
import FeedHeader from './FeedHeader/FeedHeader';
import FeedText from './FeedText/FeedText';

interface Feed {
  feed: IFeed;
}

function Feed({ feed }: Feed) {
  return (
    <S.FeedWrapper>
      {feed && (
        <>
          <FeedHeader nickname={feed.writerNick} photoURL={feed.writerPhote} />
          <S.FeedSlider>
            <Slider images={feed.image} />
          </S.FeedSlider>
          <FeedText text={feed.text} writerNick={feed.writerNick} />
        </>
      )}
    </S.FeedWrapper>
  );
}

export default Feed;
