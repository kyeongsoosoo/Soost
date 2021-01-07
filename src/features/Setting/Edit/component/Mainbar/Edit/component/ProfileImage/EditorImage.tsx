import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fb from '../../../../../../../../../firebase';
import ProfileImage from '../../../../../../../../component/ProfileImage/ProfileImage';
import { RootState } from '../../../../../../../../redux';
import { profileSuccess } from '../../../../../../../../redux/Auth/actions';
import S from './ProfileImage.styled';

function EditorImage() {
  const profile = useSelector((state: RootState) => state.auth.currentUser);
  const profileImage = useSelector(
    (state: RootState) => state.auth.currentUser?.photoURL,
  );
  const profileNickName = useSelector(
    (state: RootState) => state.auth.currentUser?.nickname,
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
    console.log(URL.createObjectURL(file));
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
              <ProfileImage
                width="45px"
                height="45px"
                imageURL={profileImage}
              />
            </S.ProfileImageImageWrapper>
          )}
          <S.ProfileImageTextWrapper>
            <S.ProfileImageNickname>
              {profileNickName || 'hi'}
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

export default EditorImage;
