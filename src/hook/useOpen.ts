import { useState } from 'react';

const useClicked = () => {
  const [isClicked, setClicked] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setClicked((clicked) => !clicked);
  };
  return { isClicked, handleClick };
};

export default useClicked;
