import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import fb from '../../../../../../../firebase';
import { RootState } from '../../../../../../redux';
import PositiveButton from '../../../../../PositiveButton/PositiveButton';
import Slider from '../../../../../Slider/Slider';
import S from './PlusFeedBox.styled';
import Spinner from '../../../../../Spinner/Spinner';

interface IPlusFeed {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function PlusFeedBox(props: IPlusFeed) {
  const inputOpenImageRef = useRef<HTMLInputElement>(null);

  const user = useSelector((state: RootState) => state.auth.currentUser);

  const [imgFile, setFile] = useState<Array<string>>([]);
  const [testFile, setTestFile] = useState<Array<File>>([]);
  const [isLoading, setLoading] = useState(false);

  const [text, setText] = useState('');

  const handleCloseClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    props.setOpen((bool) => !bool);
  };

  const handleInputClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    inputOpenImageRef.current?.click();
  };

  const handleTest = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files === null) return;
    const file = event.currentTarget.files[0];
    setTestFile(testFile.concat(file));
    const fileURL = URL.createObjectURL(file);

    setFile((state) => state.concat(fileURL));
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const changeText = event.currentTarget.value;
    setText(changeText);
  };

  const handleSubmit = async () => {
    if (imgFile.length > 0 && user != null) {
      setLoading(true);
      const attachmentRef = fb.storage().ref();
      const urlArray: string[] = [];
      await Promise.all(
        testFile.map(async (item) => {
          const response = await attachmentRef
            .child(`${user.uid}/${uuidv4()}`)
            .put(item);

          const attachmentUrl: string = await response.ref.getDownloadURL();
          urlArray.push(attachmentUrl);
        }),
      );

      await fb
        .firestore()
        .collection(`allFeed`)
        .doc(`${user.uid}`)
        .collection(`feed`)
        .doc(`${uuidv4()}`)
        .set({
          image: urlArray,
          text,
          writerNick: user.nickname,
          writerPhote: user.photoURL,
        });
      setFile([]);
      setTestFile([]);
      setText('');
      setLoading(false);
      props.setOpen(false);
    }
  };

  return (
    <S.PlusFeedWrapper>
      <S.PlusFeedCloseButton onClick={handleCloseClick}>
        X
      </S.PlusFeedCloseButton>

      <S.PlusFeedCloseButton onClick={handleInputClick}>
        Add
      </S.PlusFeedCloseButton>
      <S.PlusFeedSlider>
        <Slider images={imgFile} />
      </S.PlusFeedSlider>
      <S.PlusFeedInput
        placeholder="내용을 입력하세요"
        value={text}
        onChange={handleChangeInput}
      />
      <PositiveButton width="40px" height="20px" onClick={handleSubmit}>
        {isLoading ? <Spinner /> : '등록'}
      </PositiveButton>

      <input
        style={{ display: 'none' }}
        type="file"
        ref={inputOpenImageRef}
        onChange={handleTest}
        accept="image/jpeg, image/png"
      />
    </S.PlusFeedWrapper>
  );
}

export default PlusFeedBox;
