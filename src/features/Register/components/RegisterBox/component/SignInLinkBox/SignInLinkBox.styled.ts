import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignInLinkBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 60px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
`;

const SignInLink = styled(Link)`
  color: #94c9fb;
`;

export default { SignInLinkBoxWrapper, SignInLink };
