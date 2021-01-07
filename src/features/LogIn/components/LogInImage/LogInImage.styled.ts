import styled from 'styled-components';

const LogInImage = styled.img.attrs({})`
  width: 50px;
  height: 50px;
  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export default {
  LogInImage,
};
