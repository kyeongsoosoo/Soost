import firebase from 'firebase';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import fb from '../../../../../../../firebase';
import S from './RegisterForm.styled';

interface RegisterInputs {
  email: string;
  password: string;
  name: string;
  nickname: string;
}

function RegisterForm() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { isValid },
    errors,
  } = useForm<RegisterInputs>({ mode: 'onChange' });

  const handleRegister = async (registerData: RegisterInputs) => {
    try {
      const createdUser = await fb
        .auth()
        .createUserWithEmailAndPassword(
          registerData.email,
          registerData.password,
        );
      history.push('/');
      console.log(createdUser);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFacebookLogin = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    console.log(event);
    const provider = new firebase.auth.FacebookAuthProvider();

    try {
      const user = await firebase.auth().signInWithPopup(provider);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.RegisterFormWrapper onSubmit={handleSubmit(handleRegister)}>
      <S.RegisterIntroductionBox>
        친구들과 사진과 동영상을 보려면 가입하세요.
      </S.RegisterIntroductionBox>
      <S.RegisterFacebookButton onClick={handleFacebookLogin}>
        Facebook으로 로그인
      </S.RegisterFacebookButton>
      <S.RegisterSeperationBox>
        <S.RegisterSeperationLine />
        <S.RegisterSeperationText> 또는 </S.RegisterSeperationText>
        <S.RegisterSeperationLine />
      </S.RegisterSeperationBox>
      <S.RegisterFormInput
        name="email"
        placeholder="전화번호, 사용자이름 또는 이메일"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />

      <S.RegisterFormInput
        name="name"
        placeholder="성명"
        ref={register({ required: true })}
      />
      <S.RegisterFormInput
        name="nickname"
        placeholder="사용자 이름"
        ref={register({ required: true })}
      />
      <S.RegisterFormInput
        name="password"
        placeholder="비밀번호"
        ref={register({ required: true, minLength: 6 })}
      />
      {isValid ? (
        <S.RegisterActiveButton>가입</S.RegisterActiveButton>
      ) : (
        <S.RegisterUnActiveButton>가입</S.RegisterUnActiveButton>
      )}
    </S.RegisterFormWrapper>
  );
}

export default RegisterForm;
