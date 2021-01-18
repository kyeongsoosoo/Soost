import React from 'react';
import Modal from '../../../component/Modal/Modal';
import Mainbar from './component/Mainbar/Mainbar';
import Siderbar from './component/Sidebar/Siderbar';
import S from './Setting.styled';

function Setting() {
  return (
    <S.SettingPage>
      <S.SettingWrapper>
        <Siderbar />
        <Mainbar />
      </S.SettingWrapper>
    </S.SettingPage>
  );
}

export default Setting;
