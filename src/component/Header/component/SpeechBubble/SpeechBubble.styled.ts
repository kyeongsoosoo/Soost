import styled from 'styled-components';

const SpeechBubbleWrapper = styled.div`
  position: relative;
  background: #ffffff;
  border: none;
  width: 230px;
  height: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:after,
  &:before {
    bottom: 100%;
    left: 180px;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #ffffff;
    border-width: 10px;
  }
  &:before {
    border-color: rgba(237, 237, 237, 0);
    border-bottom-color: #ededed;
    border-width: 12px;
    margin-left: -2px;
  }
`;

export default {
  SpeechBubbleWrapper,
};
