import React from 'react';
import { AiFillHome, AiOutlineCompass, AiOutlineHeart } from 'react-icons/ai';
import { BiPaperPlane } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { useLocation, useRouteMatch } from 'react-router';
import useOpen from '../../../../hook/useOpen';

import S from './IconBox.styled';
import IWB from './IconWithBubble/IWB';
import SetBox from './IconWithBubble/SetBox/SetBox';
import SetItem from './IconWithBubble/SetBox/SetItem/SetItem';

function IconBox() {
  const test = useRouteMatch('/test/hi');
  const a = useLocation();
  //   정규표현식 공부하고 아이콘 바꾸는거

  const { isOpen: isLikeOpen, handleClick: handleLikeClick } = useOpen();
  const { isOpen: isSetOpen, handleClick: handleSetClick } = useOpen();

  const test2 = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('succ');
  };

  return (
    <S.IconBoxWrapper>
      {console.log(test, a)}
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
        <IWB isOpen={isLikeOpen} onClick={test2}>
          Hi
        </IWB>
      </S.IconBoxIcon>
      <S.IconBoxIcon onClick={handleSetClick}>
        <IWB isOpen={isSetOpen} onClick={test2}>
          <SetBox />
        </IWB>
        <CgProfile style={{ width: '25px', height: '25px' }} />
      </S.IconBoxIcon>
    </S.IconBoxWrapper>
  );
}

export default IconBox;
