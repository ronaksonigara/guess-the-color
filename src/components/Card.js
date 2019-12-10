import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  backgroundColor: PropTypes.string.isRequired
};

const defaultProps = {
  backgroundColor: "rgb(35,35,35)"
};

function Card(props) {
  const { backgroundColor, cardClick } = props;

  const handleCardClick = event => {
    cardClick(backgroundColor);
  };
  return (
    <li
      onClick={handleCardClick}
      style={{ backgroundColor: backgroundColor }}
      className="card"
    ></li>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
