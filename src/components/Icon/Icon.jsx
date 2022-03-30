/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import * as IconList from './IconList';

const Icon = () => ({
  stroke, size, name, fill, className, ...rest
}) => {
  const SpecifcIcon = IconList[name];

  return (
    <SpecifcIcon
      stroke={stroke}
      fill={fill}
      width={size}
      height={size}
      className={className}
      {...rest}
    />
  );
};

Icon.defaultProps = {
  size: '36',
  stroke: '#454545',
  name: 'Oil',
  fill: '#fff',
};

Icon.propTypes = {
  size: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fill: PropTypes.string,
};

export default Icon;
