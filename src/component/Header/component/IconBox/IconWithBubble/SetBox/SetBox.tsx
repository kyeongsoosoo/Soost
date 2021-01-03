import React from 'react';
import { CgBookmark, CgProfile } from 'react-icons/cg';
import { IoIosSettings } from 'react-icons/io';
import { BsArrowRepeat } from 'react-icons/bs';
import S from './SetBox.styled';
import SetItem from './SetItem/SetItem';
import LogoutItem from './LogoutItem/LogoutItem';

function SetBox() {
  return (
    <S.SetBoxWrapper>
      <SetItem link="/user/profile" text="프로필">
        <CgProfile />
      </SetItem>
      <SetItem link="user/bookmark" text="저장됨">
        <CgBookmark />
      </SetItem>
      <SetItem link="user/settings" text="설정">
        <IoIosSettings />
      </SetItem>
      <SetItem link="user/accountChange" text="계정 전환">
        <BsArrowRepeat />
      </SetItem>
      <LogoutItem />
    </S.SetBoxWrapper>
  );
}

export default SetBox;
