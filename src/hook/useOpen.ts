import { useState } from 'react';

const useOpen = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen((open) => !open);
  };
  return { isOpen, handleClick };
};

export default useOpen;
