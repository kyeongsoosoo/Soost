import React from 'react';
import S from './ProfileInput.styled';

interface IProfileInputProp {
  handleChange: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  name: string;
  value: string;
}

function ProfileInput(props: IProfileInputProp) {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleChange(event.currentTarget.value);
  };

  const userName = props.name;

  return (
    <S.ProfileInputWrapper>
      <S.ProfileInputTitle>{userName}</S.ProfileInputTitle>
      <S.ProfileInputInput value={props.value} onChange={handleInput} />
    </S.ProfileInputWrapper>
  );
}

export default ProfileInput;
