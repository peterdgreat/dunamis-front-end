import React from "react";
import PropTypes from "prop-types";
import Divider from "./Divider";
import Heading from "./Heading";
import { useDeviceMode } from "../../utils/DeviceMode";
import "./Header.css";

export default function Header({ title, ...rest }) {
  const { desktop } = useDeviceMode();
  let height = desktop ? "1px" : "0.625px";
  let width_1 = desktop ? "276px" : "172.5px";
  let width_2 = desktop ? "195px" : "121.88px";
  let width_3 = desktop ? "118px" : "73.75px";
  let margin_top = desktop ? "8px" : "5px";

  return (
    <div className="header" {...rest}>
      <Heading>{title}</Heading>
      <Divider primary={true} width={width_1} height={height} />
      <Divider
        primary={true}
        width={width_2}
        height={height}
        margin_top={margin_top}
      />
      <Divider
        primary={true}
        width={width_3}
        height={height}
        margin_top={margin_top}
      />
    </div>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
Header.defaultProps = {
  title: "Add Title",
};
