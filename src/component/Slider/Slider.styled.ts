import styled from 'styled-components';

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;

  overflow: hidden;
`;

type ItemWrapperProp = {
  index: number;
};

const SliderItemWrapper = styled.div<ItemWrapperProp>`
  width: 100%;
  height: 100%;
  display: flex;
  transform: translateX(${({ index }) => `-${index}00%`});
  transition: all 1s linear;
`;

type ItemProp = {
  image: string;
};

const SliderItem = styled.div<ItemProp>`
  background-image: url(${({ image }) => `${image}`});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
`;

const SliderButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20%;
  height: 20%;
  z-index: 3;
`;

type SliderButtonProp = {
  isSelect: boolean;
  isSingle: boolean;
};

const SliderButton = styled.div<SliderButtonProp>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ isSelect }) => (isSelect ? `#0095F6` : `#A8A8A8`)};
  display: ${({ isSingle }) => isSingle && 'none'};
`;

export default {
  SliderItem,
  SliderItemWrapper,
  SliderWrapper,
  SliderButtonWrapper,
  SliderButton,
};
