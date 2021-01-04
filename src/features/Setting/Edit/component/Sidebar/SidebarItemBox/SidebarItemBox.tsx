import React, { useState } from 'react';
import SidebarItem from './SidebarItem/SidebarItem';
import S from './SidebarItemBox.styled';

function SidebarItemBox() {
  const [selectedN, setSelected] = useState('0');

  const handleChange = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const { id } = event.currentTarget;
    setSelected(id);
  };

  return (
    <S.SidebarItemBoxWrapper>
      <SidebarItem id="0" onClick={handleChange} selectedN={selectedN}>
        프로필 편집
      </SidebarItem>
      <SidebarItem id="1" onClick={handleChange} selectedN={selectedN}>
        비밀번호 변경
      </SidebarItem>
    </S.SidebarItemBoxWrapper>
  );
}

export default SidebarItemBox;
