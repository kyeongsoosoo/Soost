import styled from 'styled-components';

interface IFeedHeaderIcon {
  img: string;
}

const FeedHeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 5px 20px;
`;

const FeedHeaderLeftBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const FeedHeaderIcon = styled.div<IFeedHeaderIcon>`
  background-image: url(${({ img }) => `${img}`});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 20px;
`;

const FeedHeaderText = styled.div`
  height: 35px;
  font-size: 18px;
  font-weight: 800;
`;

export default {
  FeedHeaderLeftBox,
  FeedHeaderIcon,
  FeedHeaderWrapper,
  FeedHeaderText,
};
