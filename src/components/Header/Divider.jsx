/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';

import PropTypes from 'prop-types';
import { colors } from '../../styles/colors';

export default function Divider({
  primary,
  width,
  height,
  marginTop,
  opacity,
  transform,
}) {
  const color = primary ? colors.primary : colors.dark;

  return (
    <div
      style={{
        height,
        backgroundColor: color,
        width,
        marginTop,
        opacity,
        transform,
        transition: 'all .5s ease-in-out',
      }}
    />
  );
}
Divider.propTypes = {
  primary: PropTypes.bool.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  marginTop: PropTypes.string.isRequired,
};

Divider.defaultProps = {
  primary: true,
  width: '276px',
  height: '1px',
  marginTop: '0px',
};
