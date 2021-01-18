import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import fb from '../../../../firebase';
import Header from '../../../component/Header/Header';
import useIntersection from '../../../hook/useIntersection';
import { IFeed } from '../../../lib/type';
import { RootState } from '../../../redux';
import Feed from '../component/Feed/Feed';
import S from './Home.styled';

type LastPage = firebase.default.firestore.QueryDocumentSnapshot<firebase.default.firestore.DocumentData>;
type DBAdress = firebase.default.firestore.Query<firebase.default.firestore.DocumentData>;

function Home() {
  const user = useSelector((state: RootState) => state.auth.currentUser);

  const [loading, setLoading] = useState(true);
  const [feedArray, setFeed] = useState<Array<IFeed>>([]);
  const [lastPage, setLast] = useState<LastPage>();
  const [dbAdress, setDB] = useState<DBAdress>();

  const rootRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const first = fb
      .firestore()
      .collection('allFeed')
      .doc(`${user?.uid}`)
      .collection('feed')
      .orderBy('text')
      .limit(4);

    first.get().then(function (documentSnapshots) {
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      setLast(lastVisible);
      documentSnapshots.docs.forEach((myData) =>
        setFeed((array) => array.concat(myData.data() as IFeed)),
      );
      setLoading(false);
    });

    setDB((db) => first);

    // .onSnapshot(function (snapshot) {
    //   snapshot.docChanges().forEach(function (change) {
    //     if (change.type === 'added') {
    //       console.log('on way');
    //       const myData = change.doc.data();
    //       setFeed((array) => array.concat(myData as IFeed));
    //     }
    //   });
    // });
  }, [user?.uid]);

  const renderFeed = useCallback((item: IFeed, index) => {
    return index === 3 ? (
      <>
        <div ref={targetRef} />
        <Feed feed={item} key={uuidv4()} />
      </>
    ) : (
      <Feed feed={item} key={uuidv4()} />
    );
  }, []);

  return (
    <>
      <S.HomeWrapper>
        <S.HomeScrollWrapper ref={rootRef}>
          {feedArray.map(renderFeed)}
        </S.HomeScrollWrapper>
      </S.HomeWrapper>
      {console.log(feedArray)}
    </>
  );
}

export default Home;
