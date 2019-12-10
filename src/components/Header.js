import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  colorName: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
};

const defaultProps = {
  colorName: "",
  backgroundColor: "rgb(70,130,180)"
};

function Header(props) {
  const { colorName, backgroundColor } = props;
  return (
    <h1 style={{ backgroundColor: backgroundColor }} className="header">
      The Great<br></br>
      <span className="color-code">{colorName}</span>
      <br></br>Color Game
    </h1>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
