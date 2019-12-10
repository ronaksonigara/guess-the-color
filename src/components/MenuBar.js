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
  const { isHard, isWon, isStarted, handleReset, handleModeClick } = props;
  const easyModeClassName = ClassNames("btn", {
    selected: !isHard
  });
  const hardModeClassName = ClassNames("btn", {
    selected: isHard
  });
  const messageText = isStarted ? (isWon ? "Correct!" : "try again!") : "";
  const startText = isWon ? "Play Again?" : "New Colors";

  const handleMode = event => {
    handleModeClick(event.target.getAttribute("data-mode"));
  };
  return (
    <div className="menu-bar__wrapper">
      <div className="menu-bar">
        <button onClick={handleReset} className="btn">
          {startText}
        </button>
        <span className="message">{messageText}</span>
        <button
          onClick={handleMode}
          data-mode="easy"
          className={easyModeClassName}
        >
          Easy
        </button>
        <button
          onClick={handleMode}
          data-mode="hard"
          className={hardModeClassName}
        >
          Hard
        </button>
      </div>
    </div>
  );
}

MenuBar.propTypes = propTypes;
MenuBar.defaultProps = defaultProps;

export default MenuBar;
