import styled from 'styled-components';

interface IconBoxBubbleProp {
  isClicked: boolean;
}

const IconBoxBubble = styled.div<IconBoxBubbleProp>`
  position: absolute;
  display: ${({ isClicked }) => (isClicked ? 'block' : 'none')};
  top: 40px;
  right: -26px;
`;

export default {
  IconBoxBubble,
};
