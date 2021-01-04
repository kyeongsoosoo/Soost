import React from 'react';
import useClicked from '../../../../../../../hook/useOpen';
import S from './SidebarItem.styled';

interface ISidebarItem {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  id: string;
  selectedN: string;
}

function SidebarItem(props: ISidebarItem) {
  return (
    <S.SidebarItemWrapper
      id={props.id}
      onClick={props.onClick}
      isClicked={props.selectedN === props.id}
    >
      {console.log(props.id, props.selectedN)}
      {props.children}
    </S.SidebarItemWrapper>
  );
}

export default SidebarItem;
