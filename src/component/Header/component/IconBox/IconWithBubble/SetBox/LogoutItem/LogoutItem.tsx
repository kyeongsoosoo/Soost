import firebase from 'firebase';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../../../../../../../redux/Auth/actions';
import S from './LogoutItem.styled';

function LogoutItem() {
  const dispatch = useDispatch();

  const handleLogout = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    await firebase.auth().signOut();
    dispatch(logoutSuccess());
  };

  return (
    <S.LogoutItemWrapper onClick={handleLogout}>로그아웃</S.LogoutItemWrapper>
  );
}

export default LogoutItem;
