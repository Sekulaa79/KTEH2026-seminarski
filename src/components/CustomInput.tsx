import React from 'react';

interface InputProps {
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<InputProps> = ({ placeholder, type = 'text', value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: '10px 15px',
        borderRadius: '15px',
        border: '1px solid #2d6a4f',
        backgroundColor: '#e8efe9',
        outline: 'none',
        fontFamily: 'serif',
        width: '200px'
      }}
    />
  );
};

export default CustomInput;