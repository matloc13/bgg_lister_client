import React from 'react';

const Input = (props) => {

  const { type, value, name, handleChange, } = props

  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  )
}

export default Input;
