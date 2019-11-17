import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

const propTypes = {
  isHard: PropTypes.bool.isRequired,
  isWon: PropTypes.bool.isRequired,
  isStarted: PropTypes.bool.isRequired
};
const defaultProps = {
  isHard: true,
  isWon: false,
  isStarted: false
};
function MenuBar(props) {
  const { isHard, isWon, isStarted } = props;
  const easyModeClassName = ClassNames("btn", {
    selected: !isHard
  });
  const hardModeClassName = ClassNames("btn", {
    selected: isHard
  });
  const messageText = isStarted ? (isWon ? "Correct!" : "try again!") : "";
  const startText = isWon ? "Play Again?" : "New Colors";
  return (
    <div className="menu-bar__wrapper">
      <div className="menu-bar">
        <button className="btn">{startText}</button>
        <span className="message">{messageText}</span>
        <button className={easyModeClassName}>Easy</button>
        <button className={hardModeClassName}>Hard</button>
      </div>
    </div>
  );
}

MenuBar.propTypes = propTypes;
MenuBar.defaultProps = defaultProps;

export default MenuBar;
