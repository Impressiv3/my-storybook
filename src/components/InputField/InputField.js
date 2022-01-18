import React from "react";
import PropTypes from "prop-types";
import "./inputField.css";

function InputField({
  label,
  placeholder,
  handleChange,
  size,
  mode,
  backgroundColor,
  color,
  borderRadius,
  width,
  ...props
}) {
  const isMode =
    mode === "default" ? "storybook-inputField--default" : "storybook-inputField--invalid";
  return (
    <div className="form-container">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        name={label}
        type='text'
        className={["storybook-inputField", `storybook-inputField--${size}`, isMode].join(" ")}
        style={{ backgroundColor, borderRadius, color, width }}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  mode: PropTypes.oneOf(["default", "invalid"]),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.number,
  width: PropTypes.number,
};

export default InputField;
