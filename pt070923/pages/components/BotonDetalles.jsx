import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';


const BotonDetalles = ({elementoActual}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("no puedo repetirme más de dos veces")
    }, []) 

    
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
      Detalles
      </Button>
      <Modal title={elementoActual?.name.first} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <img src={elementoActual?.picture.large}></img>
        <p>{elementoActual?.login.username}</p>
        <p>{elementoActual?.login.password}</p>
      </Modal>
    </>
  );
};
export default BotonDetalles;