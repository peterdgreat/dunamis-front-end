/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Divider from './Divider';
import Heading from './Heading';
import { useDeviceMode } from '../../utils/DeviceMode';
import './Header.css';

export default function Header({ title, color, ...rest }) {
  const { desktop } = useDeviceMode();
  const height = desktop ? '1px' : '0.625px';
  const widthOne = desktop ? '276px' : '172.5px';
  const widthTwo = desktop ? '195px' : '121.88px';
  const widthThree = desktop ? '118px' : '73.75px';
  const marginTop = desktop ? '8px' : '5px';

  return (
    <div className="header" {...rest}>
      <Heading color={color}>{title}</Heading>
      <Divider primary={false} width={widthOne} height={height} />
      <Divider
        primary={false}
        width={widthTwo}
        height={height}
        marginTop={marginTop}
      />
      <Divider
        primary={false}
        width={widthThree}
        height={height}
        marginTop={marginTop}
      />
    </div>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};
Header.defaultProps = {
  title: 'Add Title',
};
