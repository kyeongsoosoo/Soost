import React, { useState } from 'react';
import S from './Slider.styled';

type SliderProp = {
  images: Array<string>;
};

function Slider(props: SliderProp) {
  const [select, setSelect] = useState(0);
  const [isSingle, setSingle] = useState(true);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSelect(parseInt(event.currentTarget.id, 10));
  };

  const renderItem = (item, index) => {
    return <S.SliderItem image={item} key={index} />;
  };

  const renderButton = (item, index) => {
    const isSelect = index === select;
    if (index > 0) setSingle(false);

    return (
      <S.SliderButton
        id={index}
        key={index}
        onClick={handleClick}
        isSelect={isSelect}
        isSingle={isSingle}
      />
    );
  };
  return (
    <S.SliderWrapper>
      <S.SliderItemWrapper index={select}>
        {props.images.map(renderItem)}
      </S.SliderItemWrapper>
      <S.SliderButtonWrapper>
        {props.images.map(renderButton)}
      </S.SliderButtonWrapper>
    </S.SliderWrapper>
  );
}
export default Slider;
