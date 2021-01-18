import { ImSpinner8 } from 'react-icons/im';
import styled from 'styled-components';

const Spinner = styled(ImSpinner8)`
  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default { Spinner };
