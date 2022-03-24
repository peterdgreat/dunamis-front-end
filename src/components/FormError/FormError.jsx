/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
// import { colors } from '../../styles/colors';
import { FormFieldError, FormFieldErrorIcon, FormFieldErrorMessage } from './FormError.style';

const FormError = ({ message }) => (
  <FormFieldError>
    <FormFieldErrorIcon
      name="Error"
      size="18"
      fill="red"
      stroke="none"
    />
    <FormFieldErrorMessage>{message}</FormFieldErrorMessage>
  </FormFieldError>
);

FormError.propTypes = {
  /**
   * Display error message when it is enabled
   */
  message: PropTypes.string.isRequired,
};

FormError.defaultProps = {
  message: 'Error Message',
};

export default FormError;
