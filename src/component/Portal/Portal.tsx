import { useMemo } from 'react';
import { createPortal } from 'react-dom';

function Portal({ children, elementId }) {
  const rootElement = useMemo(() => document.getElementById(elementId), [
    elementId,
  ]);

  // eslint-disable-next-line consistent-return
  return createPortal(children, rootElement as HTMLElement);
}

export default Portal;
