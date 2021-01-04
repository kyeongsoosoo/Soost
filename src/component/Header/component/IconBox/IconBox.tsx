import React from 'react';
import { AiFillHome, AiOutlineCompass, AiOutlineHeart } from 'react-icons/ai';
import { BiPaperPlane } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { useLocation, useRouteMatch } from 'react-router';
import useClicked from '../../../../hook/useOpen';

import S from './IconBox.styled';
import IWB from './IconWithBubble/IWB';
import SetBox from './IconWithBubble/SetBox/SetBox';

function IconBox() {
  const test = useRouteMatch('/test/hi');
  const a = useLocation();
  //   정규표현식 공부하고 아이콘 바꾸는거

  const {
    isClicked: isLikeClicked,
    handleClick: handleLikeClick,
  } = useClicked();
  const { isClicked: isSetClicked, handleClick: handleSetClick } = useClicked();

  return (
    <S.IconBoxWrapper>
      <S.IconBoxIcon>
        <S.IconBoxIconLink to="/">
          <AiFillHome style={{ width: '25px', height: '25px' }} />
        </S.IconBoxIconLink>
      </S.IconBoxIcon>
      <S.IconBoxIcon>
        <S.IconBoxIconLink to="/direct">
          <BiPaperPlane style={{ width: '25px', height: '25px' }} />
        </S.IconBoxIconLink>
      </S.IconBoxIcon>
      <S.IconBoxIcon>
        <S.IconBoxIconLink to="/explore">
          <AiOutlineCompass style={{ width: '25px', height: '25px' }} />
        </S.IconBoxIconLink>
      </S.IconBoxIcon>
      <S.IconBoxIcon onClick={handleLikeClick}>
        <AiOutlineHeart style={{ width: '25px', height: '25px' }} />
        <IWB isClicked={isLikeClicked}>Hi</IWB>
      </S.IconBoxIcon>
      <S.IconBoxIcon onClick={handleSetClick}>
        <IWB isClicked={isSetClicked}>
          <SetBox />
        </IWB>
        <CgProfile style={{ width: '25px', height: '25px' }} />
      </S.IconBoxIcon>
    </S.IconBoxWrapper>
  );
}

export default IconBox;
