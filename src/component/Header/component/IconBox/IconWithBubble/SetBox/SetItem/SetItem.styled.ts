import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SetItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  hegiht: 35px;
  &:hover {
    background-color: #fafafa;
  }
`;

const SetItemLink = styled(Link)``;

const SetItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 35px;
`;

const SetItemText = styled.div`
  display: flex;
  align-items: center;

  width: 85%;
  height: 35px;
`;

export default {
  SetItemWrapper,
  SetItemIcon,
  SetItemText,
  SetItemLink,
};
