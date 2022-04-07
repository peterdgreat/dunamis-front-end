/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  CustomInput, DisplayIcon, InputFieldContainer, InputLabel,
} from './InputField.style';
import FormError from '../FormError/FormError';

const InputField = ({
  isError, errorMessage, label, ...rest
}) => (
  <>
    <InputLabel htmlFor={rest.name}>{label}</InputLabel>
    <InputFieldContainer>
      {
          rest.prefixIcon && (<DisplayIcon name="Search" size="18" />)
        }

      <CustomInput {...rest} isError={isError} />
      {
          isError && (<FormError message={errorMessage} />)
        }
    </InputFieldContainer>

  </>
);

InputField.propTypes = {
  /**
   * To hide and show the error message
   */
  isError: PropTypes.bool,

  /**
   * Display error message when it is enabled
   */
  errorMessage: PropTypes.string,
  /**
   * Input label
   */
  label: PropTypes.string,
};

InputField.defaultProps = {
  isError: false,
  errorMessage: 'Error Message',
  label: 'Input Label',
};

export default InputField;
