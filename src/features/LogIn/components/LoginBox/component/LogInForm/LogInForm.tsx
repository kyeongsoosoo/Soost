import React from 'react';
import { useForm } from 'react-hook-form';
import S from './LogInForm.styled';

type Inputs = {
  email: string;
  password: string;
};

function LogInForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    errors,
  } = useForm<Inputs>({ mode: 'onChange' });
  return (
    <S.LogInFormWrapper>
      <S.LogInFormInput
        name="email"
        placeholder="전화번호, 사용자이름 또는 이메일"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <S.LogInFormInput name="password" placeholder="비밀번호" ref={register({ required: true, minLength: 6 })} />
      {isValid ? (
        <S.LogInActiveButton>로그인</S.LogInActiveButton>
      ) : (
        <S.LogInUnActiveButton>로그인</S.LogInUnActiveButton>
      )}
    </S.LogInFormWrapper>
  );
}

export default LogInForm;
