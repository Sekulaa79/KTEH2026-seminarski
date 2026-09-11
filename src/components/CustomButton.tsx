import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: '#2d6a4f', color: 'white', padding: '10px 25px', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'serif' }}
    >
      {text}
    </button>
  );
};

export default CustomButton;