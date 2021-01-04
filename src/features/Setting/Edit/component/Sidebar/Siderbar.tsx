import React from 'react';
import S from './Sidebar.styled';
import SidebarItemBox from './SidebarItemBox/SidebarItemBox';

function Siderbar() {
  return (
    <S.SidebarWrapper>
      <SidebarItemBox />
    </S.SidebarWrapper>
  );
}

export default Siderbar;
