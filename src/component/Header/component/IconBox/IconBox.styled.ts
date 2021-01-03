import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IconBoxWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  width: 225px;
  height: 30px;
`;

const IconBoxIconLink = styled(Link)`
  width: 25px;
  height: 25px;
`;

const IconBoxIcon = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  & + & {
    margin-left: 25px;
  }
  cursor: pointer;
`;

const IconBoxBubble = styled.div`
  position: absolute;
  top: 0;
  right: -26px;
`;

export default {
  IconBoxWrapper,
  IconBoxIcon,
  IconBoxIconLink,
  IconBoxBubble,
};
