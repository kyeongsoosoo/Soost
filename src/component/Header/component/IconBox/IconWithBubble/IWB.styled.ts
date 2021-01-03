import styled from 'styled-components';

interface IconBoxBubbleProp {
  isOpen: boolean;
}

const IconBoxBubble = styled.div<IconBoxBubbleProp>`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  top: 40px;
  right: -26px;
`;

export default {
  IconBoxBubble,
};
