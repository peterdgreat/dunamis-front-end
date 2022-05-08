/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import PropTypes from 'prop-types';
import * as IconList from './IconList';
import { colors } from '../../styles/colors';

const Icon = ({
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
  stroke: colors.primary,
  name: 'Oil',
  fill: colors.light,
};

Icon.propTypes = {
  size: PropTypes.string,
  stroke: PropTypes.string,
  name: PropTypes.string,
  fill: PropTypes.string,
};

export default Icon;
