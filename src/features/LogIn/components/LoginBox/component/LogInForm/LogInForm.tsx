/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import firebase from 'firebase';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../../../../redux/Auth/actions';
import S from './LogInForm.styled';

type Inputs = {
  email: string;
  password: string;
};

function LogInForm() {
  const dispatch = useDispatch();
  const [loginError, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { isValid },
    errors,
  } = useForm<Inputs>({ mode: 'onChange' });

  const handleLogin = async (loginData: Inputs) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(loginData.email, loginData.password);
      console.log(user);
      dispatch(loginSuccess(user));
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(''), 5000);
    }
  };
  const handleFacebookLogin = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    console.log(event);
    const provider = new firebase.auth.FacebookAuthProvider();

    try {
      const user = await firebase.auth().signInWithPopup(provider);
      dispatch(loginSuccess(user));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.LogInFormWrapper onSubmit={handleSubmit(handleLogin)}>
      <S.LogInFormInput
        name="email"
        placeholder="전화번호, 사용자이름 또는 이메일"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <S.LogInFormInput
        name="password"
        placeholder="비밀번호"
        ref={register({ required: true, minLength: 6 })}
      />
      {isValid ? (
        <S.LogInActiveButton>로그인</S.LogInActiveButton>
      ) : (
        <S.LogInUnActiveButton>로그인</S.LogInUnActiveButton>
      )}
      <S.LogInSeperationBox>
        <S.LogInSeperationLine />
        <S.LogInSeperationText> 또는 </S.LogInSeperationText>
        <S.LogInSeperationLine />
      </S.LogInSeperationBox>
      <S.LogInFacebookButton onClick={handleFacebookLogin}>
        Facebook으로 로그인
      </S.LogInFacebookButton>
      {loginError && <S.LogInErrorBox>{loginError}</S.LogInErrorBox>}
      {console.log(loginError)}
    </S.LogInFormWrapper>
  );
}

export default LogInForm;
