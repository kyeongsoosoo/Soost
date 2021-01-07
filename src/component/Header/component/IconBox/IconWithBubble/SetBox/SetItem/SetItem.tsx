import React from 'react';
import S from './SetItem.styled';

interface SetItemProp {
  children: React.ReactNode;
  text: string;
  link: string;
}

function SetItem(props: SetItemProp) {
  return (
    <S.SetItemLink to={`${props.link}`}>
      <S.SetItemWrapper>
        <S.SetItemIcon>{props.children}</S.SetItemIcon>
        <S.SetItemText>{props.text}</S.SetItemText>
      </S.SetItemWrapper>
    </S.SetItemLink>
  );
}

export default SetItem;
