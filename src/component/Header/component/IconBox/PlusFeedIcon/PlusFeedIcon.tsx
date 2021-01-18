import React, { useRef, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Modal from '../../../../Modal/Modal';
import PlusFeedBox from './PlusFeedBox/PlusFeedBox';

function PlusFeedIcon() {
  const [isOpen, setOpen] = useState(false);

  const handlePlusClick = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    setOpen(true);
  };

  return (
    <>
      <AiOutlinePlusCircle
        onClick={handlePlusClick}
        style={{ width: '25px', height: '25px' }}
      />

      <Modal visible={isOpen}>
        <PlusFeedBox setOpen={setOpen} />
      </Modal>
    </>
  );
}

export default PlusFeedIcon;
