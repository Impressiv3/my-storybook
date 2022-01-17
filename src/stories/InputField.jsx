import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css';


export const InputField = ({label, labelText, placeholder, backgroundColor, color, onChange, ...props}) => {
    return (
    <>
    <label htmlFor={label}>{labelText}</label>
    <input type="text"
    id={label}
    name={label}
    placeholder={placeholder}
    value={""} 
    style={{ backgroundColor, color }}
    onChange={onChange}
    >       
    </input>
    </>)
}

InputField.propTypes = {
    label: PropTypes.string,
    labelText: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    onChange: PropTypes.func,
};
  
InputField.defaultProps = {
    label: "",
    labelText: "",
    id: "",
    name: "",
    placeholder: "",
    value: "",
    backgroundColor: "white",
    color: "black",
    onChange: undefined,  
};