import React from 'react';
import S from './Modal.styled';

interface IModalProp {
  children: React.ReactNode;
  visible: boolean;
}

function Modal(props: IModalProp) {
  return (
    <>
      <S.ModalOverlay visible={props.visible} />
      <S.ModalWrapper visible={props.visible}>
        <S.ModalInner>{props.children}</S.ModalInner>
      </S.ModalWrapper>
    </>
  );
}

export default Modal;
