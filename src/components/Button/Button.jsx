/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from './Button.style';

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary, size, format, label, disabled, onClick, ...props
}) => (
  <PrimaryButton
    primary={primary}
    format={format}
    size={size}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {label}

  </PrimaryButton>
);

// 9965223463

Button.propTypes = {
  /**
   * Primary Color application
   */
  primary: PropTypes.bool,

  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Type of the Button
   */
  format: PropTypes.oneOf(['text', 'contained', 'outlined']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  primary: true,
  size: 'medium',
  format: 'contained',
  onClick: undefined,
};

export default Button;
