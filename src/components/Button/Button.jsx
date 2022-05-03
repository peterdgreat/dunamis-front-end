import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon, PrimaryButton } from './Button.style';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, size, format, label, startIcon, endIcon, icon, disabled, onClick, ...props }) => {
  return (
    <PrimaryButton
      primary={primary}
      format={format}
      size={size} 
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {
        startIcon && <ButtonIcon start={true} name={startIcon} primary={primary} format={format} size={"16"}/>
      }
      {label}
      {
        endIcon && <ButtonIcon end={true} name={endIcon} primary={primary} format={format} size={"16"}/>
      }
      
    </PrimaryButton>
  );
};

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
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  primary: true,
  size: 'medium',
  format: 'contained',
  onClick: undefined,
};