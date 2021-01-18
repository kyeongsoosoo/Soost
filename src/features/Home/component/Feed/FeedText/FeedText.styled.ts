import styled from 'styled-components';

const FeedTextWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100px;
  padding: 15px 15px;
`;

const FeedTextTitle = styled.div`
  font-size: 14px;
  font-weight: 800;
  margin-right: 5px;
`;

const FeedTextContent = styled.div`
  font-size: 14px;
`;

export default {
  FeedTextContent,
  FeedTextTitle,
  FeedTextWrapper,
};
