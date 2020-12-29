import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignUpLinkBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 60px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
`;

const SignUpLink = styled(Link)`
  color: #94c9fb;
`;

export default { SignUpLinkBoxWrapper, SignUpLink };
