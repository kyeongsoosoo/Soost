import styled, { css } from 'styled-components';

interface SidebarItemWrapperProp {
  isClicked: boolean;
}

const SidebarItemWrapper = styled.div<SidebarItemWrapperProp>`
  display: flex;
  align-items: center;
  padding-left: 30px;
  width: 100%;
  height: 50px;
  font-size: 20px;
  &:hover {
    background-color: #fafafa;
  }
  ${({ isClicked }) =>
    isClicked &&
    css`
      font-weight: 600;
      border-left: 3px solid #262626;
    `}
`;

export default { SidebarItemWrapper };
