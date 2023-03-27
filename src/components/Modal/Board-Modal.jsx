import React from 'react';

const Modal = ({ isOpen, onClose, member }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" onClick={onClose}></div>

      <div className="bg-black transform transition-all max-w-[600px] rounded-2xl py-8 px-12">

        <span onClick={onClose} className="absolute top-8 right-8 first-line:text-card-header cursor-pointer">
          &times;
        </span>

        <div className="flex flex-col">
          <h3 className="text-card-header font-bold">{member.name}</h3>
          <p className="text-card-subheader font-bold text-gold mt-2">{member.role}</p>
          <p className="text-card-subheader font-light mt-8">{member.full_description}</p>
        </div>
        <hr className="my-6" />
        <button onClick={onClose} type="button" className="read-more-btn font-normal text-base text-gold py-2">
          See Less
        </button>
      </div>
    </div>

  );
};

export default Modal;
