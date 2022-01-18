import React from "react";
import PropTypes from "prop-types";

function InputField({ placeholder, handleChange, size, mode, ...props }) {
  return (
    <div>
      <input type='text' className={""} placeholder={placeholder} onChange={handleChange} />
    </div>
  );
}

InputField.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  mode: PropTypes.oneOf(["default", "invalid"]),
};

export default InputField;
