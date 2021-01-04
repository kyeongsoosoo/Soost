import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fb from '../../../../../../../../../firebase';
import { RootState } from '../../../../../../../../redux';
import { profileSuccess } from '../../../../../../../../redux/Auth/actions';
import S from './ProfileImage.styled';

function ProfileImage() {
  const profile = useSelector((state: RootState) => state.auth.currentUser);
  const profileImage = useSelector(
    (state: RootState) => state.auth.currentUser?.photoURL,
  );

  const dispatch = useDispatch();

  const inputOpenImageRef = useRef<HTMLInputElement>(null);

  const handleOpenImageRef = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (!inputOpenImageRef.current) return;
    inputOpenImageRef.current.click();
  };

  const handleTest = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files === null) return;
    if (!profile) return;
    const file = event.currentTarget.files[0];
    try {
      const uploadTask = await fb
        .storage()
        .ref()
        .child(`user_image/${profile?.uid}`)
        .put(file);
      const downloadURL = await uploadTask.ref.getDownloadURL();
      fb.firestore()
        .collection('user')
        .doc(`${profile.uid}`)
        .update({ photoURL: downloadURL });
      dispatch(profileSuccess(downloadURL));

      console.log(downloadURL);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {profile && (
        <S.ProfileImageWrapper>
          {profileImage && (
            <S.ProfileImageImageWrapper>
              <S.ProfileImageImage imageURL={profileImage} />
            </S.ProfileImageImageWrapper>
          )}
          <S.ProfileImageTextWrapper>
            <S.ProfileImageNickname>
              {profile.nickname || 'hi'}
            </S.ProfileImageNickname>
            <S.ProfileImageChangeButton onClick={handleOpenImageRef}>
              프로필 사진 바꾸기
            </S.ProfileImageChangeButton>
            <input
              style={{ display: 'none' }}
              type="file"
              ref={inputOpenImageRef}
              onChange={handleTest}
              accept="image/jpeg, image/png"
            />
          </S.ProfileImageTextWrapper>
        </S.ProfileImageWrapper>
      )}
    </>
  );
}

export default ProfileImage;
