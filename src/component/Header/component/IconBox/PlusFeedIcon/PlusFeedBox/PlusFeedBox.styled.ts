import styled from 'styled-components';

const PlusFeedWrapper = styled.div`
  width: 320px;
  height: 640px;
  border-radius: 20px;
`;

const PlusFeedCloseButton = styled.button``;

const PluseFeedImageAdd = styled.div``;

const PlusFeedInput = styled.textarea`
  padding: 20px 20px;

  width: 280px;
  min-width: 280px;
  height: 30%;
`;

const PlusFeedSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlusFeedSlider = styled.div`
  width: 100%;
  height: 50%;
`;

export default {
  PlusFeedCloseButton,
  PlusFeedWrapper,
  PluseFeedImageAdd,
  PlusFeedInput,
  PlusFeedSubmitButton,
  PlusFeedSlider,
};
