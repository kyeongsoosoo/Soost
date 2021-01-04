import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import fb from '../../../../../../../firebase';
import { RootState } from '../../../../../../redux';
import ProfileImage from './component/ProfileImage/ProfileImage';
import ProfileInput from './component/ProfileInput/ProfileInput';
import S from './Edit.styled';

function Edit() {
  const profile = useSelector((state: RootState) => state.auth.currentUser);

  const history = useHistory();

  const [name, setName] = useState(profile?.displayName || '');
  const [nickName, setNickName] = useState(profile?.nickname || '');
  const [website, setWebsite] = useState(profile?.website || '');
  const [intro, setIntro] = useState(profile?.introduction || '');
  const [email, setEmail] = useState(profile?.email || '');
  const [phoneN, setPhoneN] = useState(profile?.phoneNumber || '');
  const [gender, setGender] = useState(profile?.gender || '');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fb.firestore().collection('user').doc(`${profile?.uid}`).update({
      displayName: name,
      nickname: nickName,
      website,
      introduction: intro,
      email,
      phoneNumber: phoneN,
      gender,
    });
    history.push('/account/edit');
  };

  return (
    <>
      {profile && (
        <S.EditWrapper>
          <ProfileImage />
          <S.EditInputWrapper onSubmit={handleSubmit}>
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
            <S.EditSubmitButton>제출</S.EditSubmitButton>
          </S.EditInputWrapper>
        </S.EditWrapper>
      )}
    </>
  );
}

export default Edit;
