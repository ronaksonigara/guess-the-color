import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  colorName: PropTypes.string.isRequired
};

const defaultProps = {
  colorName: ""
};

function Header(props) {
  const { colorName } = props;
  return (
    <h1 className="header">
      The Great<br></br>
      <span className="color-code">{colorName}</span>
      <br></br>Color Game
    </h1>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
