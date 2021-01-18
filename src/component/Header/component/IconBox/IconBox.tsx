import React from 'react';
import {
  AiFillHome,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlinePlusCircle,
} from 'react-icons/ai';
import { BiPaperPlane } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router';
import useClicked from '../../../../hook/useOpen';
import { RootState } from '../../../../redux';
import Modal from '../../../Modal/Modal';
import Portal from '../../../Portal/Portal';
import ProfileImage from '../../../ProfileImage/ProfileImage';

import S from './IconBox.styled';
import IWB from './IconWithBubble/IWB';
import SetBox from './IconWithBubble/SetBox/SetBox';
import PlusFeedIcon from './PlusFeedIcon/PlusFeedIcon';

function IconBox() {
  const test = useRouteMatch('/test/hi');
  const a = useLocation();
  //   정규표현식 공부하고 아이콘 바꾸는거

  const profileImage = useSelector(
    (state: RootState) => state.auth.currentUser?.photoURL,
  );

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
        <PlusFeedIcon />
      </S.IconBoxIcon>
      <S.IconBoxIcon onClick={handleLikeClick}>
        <AiOutlineHeart style={{ width: '25px', height: '25px' }} />
        <IWB isClicked={isLikeClicked}>Hi</IWB>
      </S.IconBoxIcon>
      <S.IconBoxIcon onClick={handleSetClick}>
        <IWB isClicked={isSetClicked}>
          <SetBox />
        </IWB>
        {profileImage ? (
          <>
            <ProfileImage width="25px" height="25px" imageURL={profileImage} />
          </>
        ) : (
          <CgProfile style={{ width: '25px', height: '25px' }} />
        )}
      </S.IconBoxIcon>
    </S.IconBoxWrapper>
  );
}

export default IconBox;
