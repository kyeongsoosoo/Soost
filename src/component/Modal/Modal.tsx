import React from 'react';
import Portal from '../Portal/Portal';
import S from './Modal.styled';

interface IModalProp {
  children: React.ReactNode;
  visible: boolean;
}

function Modal(props: IModalProp) {
  return (
    <Portal elementId="modal-root">
      <S.ModalOverlay visible={props.visible} />
      <S.ModalWrapper visible={props.visible}>
        <S.ModalInner>{props.children}</S.ModalInner>
      </S.ModalWrapper>
    </Portal>
  );
}

export default Modal;
