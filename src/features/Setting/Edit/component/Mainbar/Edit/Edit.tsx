import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fb from '../../../../../../../firebase';
import { IUser } from '../../../../../../lib/type';
import { RootState } from '../../../../../../redux';
import { profileInputSuccess } from '../../../../../../redux/Auth/actions';
import EditorImage from './component/ProfileImage/EditorImage';

import ProfileInput from './component/ProfileInput/ProfileInput';
import S from './Edit.styled';

function Edit() {
  const profile = useSelector((state: RootState) => state.auth.currentUser);

  const dispatch = useDispatch();

  const [name, setName] = useState(profile?.displayName || '');
  const [nickName, setNickName] = useState(profile?.nickname || '');
  const [website, setWebsite] = useState(profile?.website || '');
  const [intro, setIntro] = useState(profile?.introduction || '');
  const [email, setEmail] = useState(profile?.email || '');
  const [phoneN, setPhoneN] = useState(profile?.phoneNumber || '');
  const [gender, setGender] = useState(profile?.gender || '');

  const [isSubmitValid, setValid] = useState(false);

  const checkSubmitValid = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') event.preventDefault();
    setValid(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!profile) return;
    event.preventDefault();
    const newProfile: IUser = {
      displayName: name,
      nickname: nickName,
      website,
      introduction: intro,
      email,
      phoneNumber: phoneN,
      gender,
      uid: profile?.uid,
      photoURL: profile?.photoURL,
    };
    await fb
      .firestore()
      .collection('user')
      .doc(`${profile?.uid}`)
      .update(newProfile);
    dispatch(profileInputSuccess(newProfile));
    setValid(false);
  };

  return (
    <>
      {!profile ? (
        <div>Loading</div>
      ) : (
        <S.EditWrapper>
          <EditorImage />
          <S.EditInputWrapper
            onSubmit={handleSubmit}
            onKeyDown={checkSubmitValid}
          >
            <ProfileInput name="이름" handleChange={setName} value={name} />
            <ProfileInput
              name="사용자 이름"
              handleChange={setNickName}
              value={nickName}
            />
            <ProfileInput
              name="웹사이트"
              handleChange={setWebsite}
              value={website}
            />
            <ProfileInput name="소개" handleChange={setIntro} value={intro} />
            <ProfileInput name="이메일" handleChange={setEmail} value={email} />
            <ProfileInput
              name="전화번호"
              handleChange={setPhoneN}
              value={phoneN}
            />
            <ProfileInput name="성별" handleChange={setGender} value={gender} />
            {isSubmitValid ? (
              <S.EditSubmitButton>제출</S.EditSubmitButton>
            ) : (
              <S.EditSubmitUnactiveButton type="button">
                제출
              </S.EditSubmitUnactiveButton>
            )}
          </S.EditInputWrapper>
        </S.EditWrapper>
      )}
    </>
  );
}

export default Edit;
