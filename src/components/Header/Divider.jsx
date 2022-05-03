import React from "react";

import PropTypes from "prop-types";
import { colors } from "../../styles/colors";

export default function Divider({
  primary,
  width,
  height,
  margin_top,
  opacity,
  transform,
}) {
  const color = primary ? colors.primary : colors.secondary;

  return (
    <div
      style={{
        height: height,
        backgroundColor: color,
        width: width,
        marginTop: margin_top,
        opacity: opacity,
        transform: transform,
        transition: "all .5s ease-in-out",
      }}
    ></div>
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
  width: "276px",
  height: "1px",
  marginTop: "0px",
};
